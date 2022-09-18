import axiosClient from "./axiosClient";

const listOrderApi = {
  getAllListOrders: async () => {
    const res = await axiosClient({
      method: "GET",
      url: "/listOrders",
    });
    return res;
  },
  createListOrder: async (data) => {
    const res = await axiosClient({
      method: "POST",
      url: "listOrders",
      data: data,
    });
    return res;
  },
};
export default listOrderApi;
