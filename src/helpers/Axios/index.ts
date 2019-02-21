import axios from 'axios';

class AxiosHelper {
  /**
   * @param {string} url The URL of API laction
   * @param {object | Array<object>} params The params of HTTP body
   * @param {boolean} isPolling Use polling (recursive) to send the request 
   */
  public get(url: string, params: object | object[], isRecursive: boolean = false) {
    isRecursive = !!isRecursive;

    if (params instanceof Array) {
      let paramses = params;
      let resJsons: any[] = []
      if (isRecursive) {
        let nextPromise = (i: number ): any => {
          if (i >= paramses.length) {
            return Promise.resolve(resJsons);
          }
          let _params = paramses[i];
          // _reqInit.cache = 'no-cache';
          // _reqInit.mode = 'cors';
          // _reqInit.credentials = 'include';

          return axios.get(url, _params).then( (resJson) => {
            resJsons.push(resJson);
            return nextPromise(i + 1);
          });
        };
        return nextPromise(0);
      }

      return Promise.all(paramses.map((_params) => {
        return axios.get(url, _params);
      }));
    }

    return axios.get(url, params);
  }

  public get2(url: string, params: object | object[], isRecursive: boolean = false) {
    isRecursive = !!isRecursive;

    if (params instanceof Array) {
      let paramses = params;
      let resJsons: any[] = []
      if (isRecursive) {
        let nextPromise = (i: number ): any => {
          if (i >= paramses.length) {
            return Promise.resolve(resJsons);
          }
          let _params = paramses[i];
          // _reqInit.cache = 'no-cache';
          // _reqInit.mode = 'cors';
          // _reqInit.credentials = 'include';

          return axios.get(url, _params).then( (resJson) => {
            resJsons.push(resJson);
            return nextPromise(i + 1);
          });
        };
        return nextPromise(0);
      }

      return Promise.all(paramses.map((_params) => {
        return axios.get(url, _params);
      }));
    }

    return axios.get(url, params);
  }

  /**
   * @param {string} url The URL of API laction
   * @param {object | Array<object>} params The params of HTTP body
   * @param {boolean} isPolling Use polling (recursive) to send the request
   */
  public post(url: string, params: object | object[], isPolling: boolean = false) {
    return;
}

  /**
   * @param {string} url The URL of API laction
   * @param {object | Array<object>} params The params of HTTP body
   * @param {boolean} isPolling Use polling (recursive) to send the request
   */
  public put(url: string, params: object | object[], isPolling: boolean = false) {
    return;
}

  /**
   * @param {string} url The URL of API laction
   * @param {object | Array<object>} params The params of HTTP body
   * @param {boolean} isPolling Use polling (recursive) to send the request
   */
  public delete(url: string, params: object | object[], isPolling: boolean = false) {
      return;
  }
}
export default AxiosHelper;
