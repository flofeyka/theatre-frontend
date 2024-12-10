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

  async addRepertoire({ title, description, category, image }: {title: string; description: string; category: string; image: string}) {
    try {
      const { data } = await baseAPI.post("/repertoire", {
        title,
        description,
        category: Number(category.replace("+", "")),
        image,
      });

      return data;
    } catch (e) {
      console.log(e);
    }
  },
};
