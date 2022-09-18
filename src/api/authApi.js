import axiosClient from "./axiosClient";

const authApi = {
  verify: async (accessToken) => {
    const res = await axiosClient({
      method: "GET",
      url: "auth/verify",
      headers: { Authorization: `Bearer ${accessToken}` },
    });
    return res;
  },
  login: async (email, password) => {
    const res = await axiosClient({
      method: "POST",
      url: "auth/login",
      data: { email, password },
    });
    return res;
  },
};
export default authApi;
