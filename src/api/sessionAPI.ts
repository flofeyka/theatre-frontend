import { baseAPI } from "./baseAPI";

export const sessionAPI = {
  async getSessions(repertoire_id: number) {
    try {
      const { data } = await baseAPI.get(`/session/all/${repertoire_id}`);
      return data;
    } catch (e) {
      console.log(e);
    }
  },

  async getBookingSessions() {
    try {
      const {data, status} = await baseAPI.get(`/session/book/all`);
      return {data, status};
    } catch(e) {
      console.log(e);
    }
  },

  async addSession({repertoireId, time, price}: {repertoireId: number; time: Date; price: number}) {
    try {
      const {data, status} = await baseAPI.post(`/session`, {repertoireId, time, price});
      return {data, status};
    } catch(e) {
      console.log(e);
    }
  },

  async book(
    session_id: number,
    position: { row: number; place: number; type: "hall" | "balcony" }[]
  ) {
    try {
      const { data, status } = await baseAPI.post(`/session/book`, {
        session_id,
        position,
      });
      if (status !== 200) {
        return { status };
      }
      return { data, status };
    } catch (e: any) {
      console.log(e);
      return { status: e.response.status };
    }
  },

  async cancelBook(
    session_id: number,
    position: { row: number; place: number; type: "hall" | "balcony" }[]
  ) {
    try {
      const { data, status } = await baseAPI.delete(`/session/cancel-booking`, {
        data: { session_id, position },
      });
      if (status !== 200) {
        return { status };
      }
      return { data, status };
    } catch (e: any) {
      console.log(e);
      return { status: e.response.status };
    }
  },
};
