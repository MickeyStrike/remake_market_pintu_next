import { ResponsePriceChange, ResponseSupportedCurrencies, ResponseTags } from "@/interface";
import axios from "axios";

export const getPriceChange = () => axios.get<ResponsePriceChange>('api/price-changes')
export const getSupportedCurrencies = () => axios.get<ResponseSupportedCurrencies>('api/supported-currencies')
export const getListTags = () => axios.get<ResponseTags[]>('api/list-tags')
