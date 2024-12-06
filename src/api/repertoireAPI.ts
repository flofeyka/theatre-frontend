import { baseAPI } from "./baseAPI";

export const repertoireAPI = {
  async getAllRepertoires() {
    try {
      const { data } = await baseAPI.get("/repertoire");
      return data;
    } catch (e) {
      console.log(e);
    }
  },
};
