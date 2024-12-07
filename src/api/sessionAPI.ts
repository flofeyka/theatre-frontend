import { baseAPI } from "./baseAPI";

export const sessionAPI = {
  async getSessions(repertoire_id: number) {
    try {
      const {data} = await baseAPI.get(`/session/all/${repertoire_id}`)
      return data;
    } catch(e) {
      console.log(e);
    }
  },

  async book(session_id: number, position: {row: number; place: number}[]) {
    try {
      const {data, status} = await baseAPI.post(`/session/book`, {session_id, position});
      if(status !== 200) {
        return {status};
      }
      return {data, status};
    } catch(e: any) {
      console.log(e);
      return {status: e.response.status};
    }
  }
}