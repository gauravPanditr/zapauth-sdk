import axios from "axios";

export class VerificationService {
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

  async initVerification(baseLink: string) {
    const response = await axios.post(
      `${this.baseUrl}/user/verify?initiate=true`,
      { baseLink },
      { headers: this.headers, withCredentials: true }
    );
    return response.data;
  }

  async completeVerification(token: string) {
    const response = await axios.post(
      `${this.baseUrl}/user/verify?verificationToken=${token}`,
      {},
      { headers: this.headers, withCredentials: true }
    );
    return response.data;
  }
}
