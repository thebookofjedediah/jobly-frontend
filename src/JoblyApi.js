import axios from "axios";
import { LOCAL_TOKEN } from "./App"

const BASE_URL = process.env.REACT_APP_BASE_URL || "http://localhost:3001";

/** API Class.
 *
 * Static class tying together methods used to get/send to to the API.
 * There shouldn't be any frontend-specific stuff here, and there shouldn't
 * be any API-aware stuff elsewhere in the frontend.
 *
 */

class JoblyApi {
  // the token for interactive with the API will be stored here.
  static token;

  static async request(endpoint, data = {}, method = "get") {
    console.debug("API Call:", endpoint, data, method);

    const url = `${BASE_URL}/${endpoint}`;
    const headers = { Authorization: `Bearer ${JoblyApi.token}` };
    const params = (method === "get")
        ? data
        : {};

    try {
      return (await axios({ url, method, data, params, headers })).data;
    } catch (err) {
      console.error("API Error:", err.response);
      let message = err.response.data.error.message;
      throw Array.isArray(message) ? message : [message];
    }
  }

  // Individual API routes

  /** Get details on a company by handle. */

  static async getCompany(handle) {
    let res = await this.request(`companies/${handle}`);
    return res.company;
  }

  static async getCompanies(search) {
    let res = await this.request("companies", { search });
    return res.companies;
  }

  static async getJobs(search) {
    let res = await this.request("jobs", { search });
    return res.jobs;
  }

  static async register(data) {
    let res = await this.request(`users`, data, "post");
    return res.token;
  }

  static async getCurrentUser(username){
    let res = await this.request(`users/${username}`);
    return res.user;
  }
  
}

// JoblyApi.token = localStorage.getItem(LOCAL_TOKEN)

// for now, put token ("testuser" / "password" on class)
JoblyApi.token = "";

export default JoblyApi;
