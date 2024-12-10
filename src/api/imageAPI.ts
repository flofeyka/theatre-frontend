import { baseAPI } from "./baseAPI";

export const imageAPI = {
  async uploadImage(image: File) {
    const formData = new FormData();
    formData.append("image", image);
    const { data } = await baseAPI.post("image/", formData);
    return data;
  },
};
