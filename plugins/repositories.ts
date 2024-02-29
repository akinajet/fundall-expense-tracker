import AppRepository from "~/repository/AppRepository";

export default defineNuxtPlugin((nuxtApp) => {
  const modules: any = {
    AppRepo: new AppRepository()
  } 
  return {
    provide: {
      repositories: modules,
    },
  };
})