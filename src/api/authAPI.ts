import { AuthResponse } from "../types/types";
import { baseAPI } from "./baseAPI";

export const authAPI = {
  async signIn({
    email,
    password,
  }: {
    email: string;
    password: string;
  }): Promise<AuthResponse | { isError: boolean; value: any, status: number }> {
    try {
      const { data, status } = await baseAPI.post("/auth/sign-in", { email, password });
      localStorage.setItem("accessToken", data.accessToken);
      localStorage.setItem("refreshToken", data.refreshToken);
      return {data, status};
    } catch (e: any) {
      return {
        isError: true,
        value: e,
        status: e.response.status
      };
    }
  },

  async signUp({
    email,
    password,
    fullName,
    birth,
    phoneNumber,
  }: {
    email: string;
    password: string;
    fullName: string;
    birth: Date;
    phoneNumber: string;
  }): Promise<AuthResponse | { isError: boolean; value: any, status: number }> {
    try {
      const { data, status } = await baseAPI.post("/auth/sign-up", {
        email,
        password,
        fullName,
        birth,
        phoneNumber,
      });
      localStorage.setItem("accessToken", data.accessToken);
      localStorage.setItem("refreshToken", data.refreshToken);
      return {data, status};
    } catch (e: any) {
      return {
        isError: true,
        value: e,
        status: e.response.status
      };
    }
  },
};
