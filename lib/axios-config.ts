import axios from "axios";

const baseURL = process.env.NEXT_PUBLIC_API_BASE_URL;
const token = process.env.NEXT_GITHUB_TOKEN;

if (!baseURL) {
  throw new Error("NEXT_PUBLIC_API_BASE_URL no está configurado");
}

export const instanceAxios = axios.create({
  baseURL,
  headers: {
    "Content-Type": "application/json",
    Authorization: `token ${token}`,
  },
});

instanceAxios.interceptors.response.use(
  (response) => {
    return response;
  },
  (error) => {
    if (error.response) {
      console.error("Error response:", error.response);
      if (error.response.status === 401) {
        console.error("No autorizado");
      } else if (error.response.status === 500) {
        console.error("Error interno del servidor");
      }
    } else if (error.request) {
      console.error("No response received:", error.request);
    } else {
      console.error("Error in setting up request:", error.message);
    }
    return Promise.reject(new Error(error));
  }
);

export default instanceAxios;
