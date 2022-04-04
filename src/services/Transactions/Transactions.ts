import axios from "axios";

export const transactions = axios.create({
  baseURL: 'https://warren-transactions-api.herokuapp.com/api/',
});