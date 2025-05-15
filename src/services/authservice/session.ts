import axios from "axios";

export class SessionService {
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

  async refreshAccessToken() {
    const response = await axios.post(
      `${this.baseUrl}/user/access-token/refresh`,
      {},
      { headers: this.headers, withCredentials: true }
    );
    return response.data;
  }

  async logout() {
    const response = await axios.delete(
      `${this.baseUrl}/user/auth/session/delete`,
      { headers: this.headers, withCredentials: true }
    );
    return response.data;
  }

  async deleteSessionById(sessionId: string) {
    const response = await axios.delete(
      `${this.baseUrl}/user/auth/session/delete/${sessionId}`,
      { headers: this.headers, withCredentials: true }
    );
    return response.data;
  }

  async getAllSessions() {
    const response = await axios.get(`${this.baseUrl}/user/sessions`, {
      headers: this.headers,
      withCredentials: true,
    });
    return response.data;
  }

  async deleteAllSessions() {
    const response = await axios.delete(
      `${this.baseUrl}/user/sessions/delete`,
      { headers: this.headers, withCredentials: true }
    );
    return response.data;
  }
}
