import axios from "axios";
import { ZAP_API_BASE_URL } from "../constant";

export class AuthService {
  private projectId: string;
  private projectKey: string;
  private baseUrl: string;

  constructor(projectId: string, projectKey: string) {
    this.projectId = projectId;
    this.projectKey = projectKey;
    this.baseUrl = ZAP_API_BASE_URL;
  }

  private get headers() {
    return {
      "project-id": this.projectId,
      "project-key": this.projectKey,
    };
  }

  // 🔹 SIGNUP
  async signup(username: string, email: string, password: string) {
    const response = await axios.post(
      `${this.baseUrl}/auth/signup`,
      { username, email, password },
      { headers: this.headers, withCredentials: true }
    );
    return response.data;
  }

  // 🔹 LOGIN
  async login(email: string, password: string) {
    const response = await axios.post(
      `${this.baseUrl}/auth/login`,
      { email, password },
      { headers: this.headers, withCredentials: true }
    );
    return response.data;
  }
 
  //Refresh Token
   async refreshAccessToken() {
    const response = await axios.post(
      `${this.baseUrl}/auth/refresh`,
      
      { headers: this.headers, withCredentials: true }
    );
    return response.data;
  }


  //🔹 GET CURRENT USER
  async getCurrentUser() {
    const response = await axios.get(
      `${this.baseUrl}/auth/me`,
      { headers: this.headers, withCredentials: true }
    );
    return response.data;
  }
}
