import axios from "axios";

export const api = axios.create({
  baseURL: process.env.NEXT_PUBLIC_BASE_URL,
});

export const ibgeApi = axios.create({
  baseURL: "https://servicodados.ibge.gov.br/api/v1/",
});
