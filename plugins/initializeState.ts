

export default defineNuxtPlugin(async (nuxtApp) => {
  const userStore = useUserStore();

  if(userStore.token) {
    await userStore.getUser()
  }
});
