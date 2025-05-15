import axios from "axios";

export class AccountService {
  constructor(
    private baseUrl: string,
    private projectId: string,
    private projectKey: string
  ) {}

  private get headers() {
    return {
      "project-id": this.projectId,
      "project-key": this.projectKey,
    };
  }

  async createAccount(username: string, email: string, password: string) {
    const response = await axios.post(
      `${this.baseUrl}/user/create`,
      { username, email, password },
      { headers: this.headers, withCredentials: true }
    );
    return response.data;
  }

  async deleteAccount() {
    const response = await axios.delete(`${this.baseUrl}/user/delete`, {
      headers: this.headers,
      withCredentials: true,
    });
    return response.data;
  }

  async updateAccount(username: string, email: string) {
    const response = await axios.put(
      `${this.baseUrl}/user/update`,
      { username, email },
      { headers: this.headers, withCredentials: true }
    );
    return response.data;
  }

  async getCurrentUser() {
    const response = await axios.get(`${this.baseUrl}/user/`, {
      headers: this.headers,
      withCredentials: true,
    });
    return response.data;
  }
}
