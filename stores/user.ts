import { defineStore } from "pinia";
import type { User } from "~/types/User";

export const useUserStore = defineStore("user", () => {
  /** instance of api to have access to all endpoints */
  const { $repositories } = useNuxtApp();

  const token = useCookie("fundall.expense.tracker.auth.token");
  const user = ref<User>();

  /** set reactive states */
  const setUser = (data?: User) => (user.value = data);

  const getUser = async () => {
    try {
      const response = await $repositories.AppRepo.GetUser();
      console.log(response)
      setUser(response);
    } catch (e) {}
  };

  return {
    token,
    user,

    getUser,
  };
});
