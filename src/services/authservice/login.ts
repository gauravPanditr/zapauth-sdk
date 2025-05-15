import axios from "axios";

export class LoginService {
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

  async passwordLogin(username: string, email: string, password: string) {
    const response = await axios.post(
      `${this.baseUrl}/user/auth/session/create`,
      { username, email, password },
      { headers: this.headers, withCredentials: true }
    );
    return response.data;
  }

  async initOTP(email: string) {
    const response = await axios.post(
      `${this.baseUrl}/user/auth/otp-on-email?initiate=true`,
      { email },
      { headers: this.headers, withCredentials: true }
    );
    return response.data;
  }

  async completeOTP(email: string, token: string) {
    const response = await axios.post(
      `${this.baseUrl}/user/auth/otp-on-email?otpToken=${token}`,
      { email },
      { headers: this.headers, withCredentials: true }
    );
    return response.data;
  }

  async initMagicURL(email: string, baseLink: string) {
    const response = await axios.post(
      `${this.baseUrl}/user/auth/magic-url?initiate=true`,
      { email, baseLink },
      { headers: this.headers, withCredentials: true }
    );
    return response.data;
  }

  async completeMagicURL(email: string, token: string) {
    const response = await axios.post(
      `${this.baseUrl}/user/auth/magic-url?magicURLToken=${token}`,
      { email },
      { headers: this.headers, withCredentials: true }
    );
    return response.data;
  }
}
