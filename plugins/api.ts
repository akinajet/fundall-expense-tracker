import { $fetch } from 'ofetch';
import { defineNuxtPlugin } from '#app';
import APIService from '~/infrastructures/apis/ApiService';

/** ApiInstance interface provides us with good typing */
interface IApiInstance {
  APIService: APIService,
}

export default defineNuxtPlugin((nuxtApp) => {
  const config = useRuntimeConfig();
  const token = useCookie('fundall.expense.tracker.auth.token')

  /** create a new instance of $fetcher with custom option */
  const apiFetcher = $fetch.create({
    onRequest({ request, options }) {
      options.headers = {
        'Authorization': `Bearer ${token.value}`,
        'Cache-Control': 'no-cache',
        'Pragma': 'no-cache',
        'Expires': '0',
      }
    }
  });

  /** an object containing all services we need to expose */
  const modules: IApiInstance = {
    APIService: new APIService(apiFetcher),
  };

  return {
    provide: {
      api: modules,
    },
  };
});