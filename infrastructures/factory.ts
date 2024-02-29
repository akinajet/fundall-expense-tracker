import type { $Fetch } from 'ofetch';

/*
  desc:The FetchFactory acts as a wrapper around an HTTP client. It encapsulates the functionality for making API requests asynchronously 
  through the call function, utilizing the provided HTTP client.
  created by: AJ
  created: 08, September

*/
class FetchFactory {
  private $fetch: $Fetch;

  constructor(fetcher: $Fetch) {
    this.$fetch = fetcher;
  }

  /**
   * The HTTP client is utilized to control the process of making GET API requests.
   * @param url the endpoint url
   * @param extras fetch options
   * @returns 
   */
  async get<T>(
    url: string,
    extras = {}
  ): Promise<T> {
    return await this.$fetch<T>(
      url, 
      { 
        method: "GET",  
        ...extras 
      }
    )
  }

  /**
   * The HTTP client is utilized to control the process of making POST API requests.
   * @param url the endpoint url
   * @param data the body data
   * @param extras fetch options
   * @returns 
   */
  async post<T>(
    url: string,
    data?: object,
    extras?: object
  ): Promise<T> {
    return await this.$fetch<T>(
      url, 
      { 
        method: 'POST', 
        body: data, 
        ...extras 
      }
    )
  }

  /**
   * The HTTP client is utilized to control the process of making PUT API requests.
   * @param url the endpoint url
   * @param data the body data
   * @param extras fetch options
   * @returns 
   */
  async put<T>(
    url: string,
    data?: object,
    extras?: object
  ): Promise<T> {
    return await this.$fetch<T>(
      url, 
      { 
        method: 'PUT', 
        body: data, 
        ...extras 
      }
    )
  }

  /**
   * The HTTP client is utilized to control the process of making DELETE API requests.
   * @param url the endpoint url
   * @param extras fetch options
   * @returns 
  */
  async delete<T>(
    url: string,
    extras = {}
  ): Promise<T> {
    return await this.$fetch<T>(
      url, 
      { 
        method: "DELETE", 
        body: {}, 
        ...extras 
      }
    )
  }
}

export default FetchFactory;