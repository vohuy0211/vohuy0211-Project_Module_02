import axios  from 'axios';

 const axiosClient = axios.create({
    baseURL: 'http://localhost:8080',
    headers: {
        "content-type": "application/json",
    },
})

// Add a request interceptor
axiosClient.interceptors.request.use(
  function (config) {
    // Do something before request is sent
    const accessToken = localStorage.getItem("access_token");
    if (accessToken) {
      config.headers.Authorization = `Bearer ${accessToken}`;
    }
    return config;
  },
  function (error) {
    // Do something with request error

    return Promise.reject(error);
  }
);

// Add a response interceptor
axiosClient.interceptors.response.use(
  function (response) {
    // Any status code that lie within the range of 2xx cause this function to trigger
    // Do something with response data
    return response.data;
  },
  function (error) {
    // Any status codes that falls outside the range of 2xx cause this function to trigger
    console.log("axiosClient - response error", error.response);
    const { config, status, data } = error.response;

    if (config.url === "/register" || config.url === "/login" && status === 400) {
      throw new Error(data);
    }
    // Do something with response error
    return Promise.reject(error);
  }
);

export default axiosClient;