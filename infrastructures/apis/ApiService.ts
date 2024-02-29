import FetchFactory from "../factory";
import type { AddExpenseRequest } from "../types/AddExpenseRequest";
import type { AddExpenseResponse } from "../types/AddExpenseResponse";
import type { AuthenticateUserRequest } from "../types/AuthenticateUserRequest";
import type { AuthenticateUserResponse } from "../types/AuthenticateUserResponse";
import type { GetExpensesResponse } from "../types/GetExpensesResponse";
import type { GetUserResponse } from "../types/GetUserResponse";
import type { NewUserRequest } from "../types/NewUserRequest";
import type { NewUserResponse } from "../types/NewUserResponse";

class APIService extends FetchFactory {
  private config = useRuntimeConfig();

  /**
   * @description create a new user
   * @by AJ
   * @param payload: new user request payload
  */
  async CreateUser(
    payload: NewUserRequest
  ): Promise<NewUserResponse> {
    return await this.post<NewUserResponse>(
      `${this.config.public.API_BASE_URL}register`,
      payload
    );
  }

  /**
   * @description Authenticate and get token for a user
   * @by AJ
   * @param payload: log in user payload
  */
  async AuthenticateUser(
    payload: AuthenticateUserRequest
  ): Promise<AuthenticateUserResponse> {
    return await this.post<AuthenticateUserResponse>(
      `${this.config.public.API_BASE_URL}login`,
      payload
    );
  }

  /**
   * @description get User details
   * @by AJ
   * @param none
  */
  async GetUser(
  ): Promise<GetUserResponse> {
    return await this.get<GetUserResponse>(
      `${this.config.public.API_BASE_URL}base/profile`
    );
  }

   /**
   * @description save an expense
   * @by AJ
   * @param payload: expnse payload
  */
  async AddExpense(
    payload: AddExpenseRequest
  ): Promise<AddExpenseResponse> {
    return await this.post<AddExpenseResponse>(
      `${this.config.public.API_BASE_URL}base/expense`,
      payload
    );
  }

  /**
   * @description get all expense
   * @by AJ
   * @param payload: expnse payload
  */
  async GetExpenses(

  ): Promise<GetExpensesResponse> {
    return await this.get<GetExpensesResponse>(
      `${this.config.public.API_BASE_URL}base/expenses`
    );
  }
}
export default APIService