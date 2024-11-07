import { fetchInterceptor } from "../interceptor/interceptor";

class DrinkService {
  constructor() {
    this.baseUrl = import.meta.env.VITE_ALLDRINKS;
    this.searchUrl = import.meta.env.VITE_SEARCHBYNAME;
    this.descriptionUrl = import.meta.env.VITE_DESCRIPTIONCOCKTAIL;
  }

  async getDrinks(param = "") {
    const url = param ? `${this.searchUrl}${param}` : this.baseUrl;
    console.log(
      "AAAA URL:",
      param ? `${this.searchUrl}${param}` : this.baseUrl
    );

    try {
      console.log("Final URL:", url);
      const response = await fetchInterceptor(url);
      if (!response.ok) {
        throw new Error(`Error: ${response.status} ${response.statusText}`);
      }
      return response.json();
    } catch (error) {
      console.error("API Error:", error);
      throw error;
    }
  }

  async getDescription(param = "") {
    try {
      const response = await fetchInterceptor(this.descriptionUrl + param);
      if (!response.ok) {
        throw new Error(`Error: ${response.status} ${response.statusText}`);
      }
      return response.json();
    } catch (error) {
      console.error("API Error:", error);
      throw error;
    }
  }
}
export default new DrinkService();
