import type { AddExpenseRequest } from "~/infrastructures/types/AddExpenseRequest";
import type { AuthenticatedUser } from "~/types/AuthenticateUser";
import type { Expense } from "~/types/Expense";
import type { User } from "~/types/User";
import type { ExpenseTrackerForm } from "~/types/forms/ExpenseTrackerForm";
import type { LoginForm } from "~/types/forms/LoginForm";
import type { NewUserForm } from "~/types/forms/NewUserForm";


class AppRepository {
  private $api = useNuxtApp().$api;

 
  async CreateUser(payload: NewUserForm): Promise<boolean> {
    try {
      const response = await this.$api.APIService.CreateUser(payload);
      if(response.success) {
        return true
      } else {
        return false
      };
    } catch (error) {
      message.error(
        error.response._data
          ? error.response._data.error.message
          : "An error occured",
        5
      );
      return false
    }
  }

  async AuthenticateUser(payload: LoginForm): Promise<AuthenticatedUser> {
    let authUser: AuthenticatedUser = new Object as AuthenticatedUser;
    try {
      const response = await this.$api.APIService.AuthenticateUser(payload);
      authUser = response.success.user;
    } catch (error) {
      message.error(
        error.response._data
          ? error.response._data.error.message
          : "An error occured",
        5
      );
    }
    return authUser;
  }

  async GetUser(): Promise<User> {
    let user: User = new Object as User;
    try {
      const response = await this.$api.APIService.GetUser();
      console.log(response)
      user = response.success.data;
    } catch (error) {
      message.error(
        error.response._data
          ? error.response._data.error.message
          : "An error occured",
        5
      );
    }
    return user;
  }

  async AddExpense(formDt: ExpenseTrackerForm): Promise<boolean> {
    try {
      const payload: AddExpenseRequest[] = []
      const date = new Date(formDt.date)
      
      if(formDt.amount1 > 0) {
        payload.push({
          amount: formDt.amount1.toString(),
          date: date.toLocaleDateString('en-GB')
        })
      } else if(formDt.amount2 > 0) {
        payload.push({
          amount: formDt.amount2.toString(),
          date: date.toLocaleDateString('en-GB')
        })
      } else if(formDt.amount3 > 0) {
        payload.push({
          amount: formDt.amount3.toString(),
          date: date.toLocaleDateString('en-GB')
        })
      }

      payload.forEach(async (item) => {
        await this.$api.APIService.AddExpense(item);
      })
      return true
    } catch (error) {
      message.error(
        error.response._data
          ? error.response._data.error.message
          : "An error occured",
        5
      );
      return false
    }
  }

  async GetExpenses(): Promise<Expense[]> {
    let expenses: Expense[] = [];
    try {
      const response = await this.$api.APIService.GetExpenses();
      expenses = response.success.data;
    } catch (error) {
      message.error(
        error.response._data
          ? error.response._data.error.message
          : "An error occured",
        5
      );
    }
    return expenses;
  }
}
export default AppRepository;
