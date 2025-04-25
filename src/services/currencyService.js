import axios from "axios"

const BASE_URL = "https://api.freecurrencyapi.com/v1/latest"
const API_KEY = "fca_live_AIB00IvLVwbAIJ5I3wPKY1rujG67lUsf0ZZesO3N"

export const getCurrency = async (baseCurrency, targetCurrency) => {
    const response = await axios.get(`${BASE_URL}?apikey=${API_KEY}&base_currency=${baseCurrency}`);
    const data = response.data.data;
    return data[targetCurrency];
}