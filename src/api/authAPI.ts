import axios from "axios";
import { baseAPI } from "./baseAPI";
import { AuthResponse } from "../types/types";

export const authAPI = {
  async signIn({
    email,
    password,
  }: {
    email: string;
    password: string;
  }): Promise<AuthResponse | { isError: boolean; value: any }> {
    try {
      const { data } = await baseAPI.post("/auth/sign-in", { email, password });
      localStorage.setItem("accessToken", data.accessToken);
      localStorage.setItem("refreshToken", data.refreshToken);
      return data;
    } catch (e) {
      return {
        isError: true,
        value: e,
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
  }): Promise<AuthResponse | { isError: boolean; value: any }> {
    try {
      const { data } = await baseAPI.post("/auth/sign-up", {
        email,
        password,
        fullName,
        birth,
        phoneNumber,
      });
      localStorage.setItem("accessToken", data.accessToken);
      localStorage.setItem("refreshToken", data.refreshToken);
      return data;
    } catch (e) {
      return {
        isError: true,
        value: e,
      };
    }
  },
};
