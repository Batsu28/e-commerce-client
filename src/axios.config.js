import axios from "axios";

export default function AxiosConfig({ children }) {
  axios.interceptors.request.use(
    function (request) {
      console.log("intercepting request: ", request);
      const url = request.url;
      switch (url) {
        case "http://locahost:3002/user": {
          console.log("user request");
          break;
        }
      }
      return request;
    },
    function (error) {
      // Do something with request error
      return Promise.reject(error);
    }
  );

  // Add a response interceptor
  axios.interceptors.response.use(
    function (response) {
      // Any status code that lie within the range of 2xx cause this function to trigger
      // Do something with response data
      console.log("intercepting response:", response);
      return response;
    },
    function (error) {
      // Any status codes that falls outside the range of 2xx cause this function to trigger
      // Do something with response error
      return Promise.reject(error);
    }
  );

  return <>{children}</>;
}
