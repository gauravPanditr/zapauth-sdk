import axios from "axios";

export class PasswordService {
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

  async initReset(baseLink: string) {
    const response = await axios.post(
      `${this.baseUrl}/user/reset-password?initiate=true`,
      { baseLink },
      { headers: this.headers, withCredentials: true }
    );
    return response.data;
  }

  async completeReset(token: string, newPassword: string) {
    const response = await axios.post(
      `${this.baseUrl}/user/reset-password?resetPasswordToken=${token}`,
      { newPassword },
      { headers: this.headers, withCredentials: true }
    );
    return response.data;
  }
}
