import { fetchInterceptor } from "../interceptor/interceptor";

class DrinkService {
    constructor() {
      this.baseUrl = import.meta.env.VITE_ALLDRINKS;
      this.searchUrl = import.meta.env.VITE_SEARCHBYNAME;
      this.descriptionUrl = import.meta.env.VITE_DESCRIPTIONCOCKTAIL;
      this.randomUrl = import.meta.env.VITE_RANDOMDRINK;
    }
  
    async getDrinks(param = '') {
      const url = param ? `${this.searchUrl}${param}` : this.baseUrl;
      console.log("AAAA URL:", param ? `${this.searchUrl}${param}` : this.baseUrl);

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

    async getDescription (param = '') {
      try {
        const response = await fetchInterceptor(descriptionUrl+param);
        if (!response.ok) {
          throw new Error(`Error: ${response.status} ${response.statusText}`);
        }
        return response.json(); 
      } catch (error) {
        console.error("API Error:", error);
        throw error; 
      }
    }
    
    async getRandomDrink (){
      try {
        const response = await fetchInterceptor(this.randomUrl);
        if (!response.ok) {
          throw new Error(`Error: ${response.status} ${response.statusText}`);
        }
        console.log(response);
        return response.json(); 
      } catch (error) {
        console.error("API Error:", error);
        throw error; 
      }
    }

}  export default new DrinkService();