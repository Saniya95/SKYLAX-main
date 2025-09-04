import { showToast } from '@/utils/toastConfig';
import axios from 'axios';
import { store } from '@/redux/store';

const axiosInstance = axios.create({
  baseURL: process.env.NEXT_PUBLIC_API_URL,
  // Do not set default Content-Type here!
});

// Add a request interceptor
axiosInstance.interceptors.request.use(config => {
  if (typeof window !== 'undefined') {
    // First try to get token from Redux store
    const token = localStorage.getItem('token');
    // const state = store.getState();
    // const token = state.auth?.jwtToken || localStorage.getItem('token');
    if (token) {
      config.headers['Authorization'] = `Bearer ${token}`;
    }
    // Only set Content-Type to application/json if data is not FormData
    if (
      config.data &&
      typeof window.FormData !== 'undefined' &&
      config.data instanceof window.FormData
    ) {
      // Let axios set the correct Content-Type for FormData
      delete config.headers['Content-Type'];
    } else {
      config.headers['Content-Type'] = 'application/json';
    }
  }
  return config;
}, error => {
  return Promise.reject(error);
});

/**
 * Makes a GET request to the specified URL.
 * @param {string} url - The URL to send the GET request to.
 * @returns {Promise<any>} - The data returned from the API.
 */
const Get = async (url) => {
  try {
    const data = await axiosInstance.get(url);
    if (data?.data) {
      showToast.success(data?.data?.message);
      return data?.data;
    }
  } catch (error) {
    showToast.error(error?.response?.data?.detail);
  }
};

/**
 * Makes a POST request to the specified URL with the provided data.
 * @param {string} url - The URL to send the POST request to.
 * @param {object} meta - The data to be sent in the request body.
 * @param {object} [config] - Optional axios config (e.g., headers)
 * @returns {Promise<any>} - The data returned from the API.
 */
const Post = async (url, meta, config = {}) => {
  try {
    const data = await axiosInstance.post(url, meta, config);
    if (data?.data) {
      showToast.success(data?.data?.message);
      return data?.data;
    }
  } catch (error) {
    showToast.error(error?.response?.data?.detail);
  }
};

/**
 * Makes a PUT request to the specified URL with the provided data.
 * @param {string} url - The URL to send the PUT request to.
 * @param {object} meta - The data to be updated in the request body.
 * @returns {Promise<any>} - The data returned from the API.
 */
const Put = async (url, meta) => {
  try {
    const data = await axiosInstance.put(url, meta);
    if (data?.data) {
      showToast.success(data?.data?.message);
      return data?.data;
    }
  } catch (error) {
    showToast.error(error?.response?.data?.detail);
  }
};

/**
 * Makes a DELETE request to the specified URL.
 * @param {string} url - The URL to send the DELETE request to.
 * @param {object} meta - Optional data to be sent with the request.
 * @returns {Promise<any>} - The data returned from the API.
 */
const Delete = async (url, meta) => {
  try {
    const data = await axiosInstance.delete(url, meta);
    if (data?.data) {
      showToast.success(data?.data?.message);
      return data?.data;
    }
  } catch (error) {
    showToast.error(error?.response?.data?.detail);
  }
};

/**
 * Custom hook to use API methods.
 * @returns {Object} - An object containing the API methods: Get, Post, Put, Delete.
 */
export const useApi = () => {
  return { Get, Post, Put, Delete };
};
