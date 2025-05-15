import axios from "axios";

export const account = (baseUrl: string, projectId: string, projectKey: string) => ({
  createAccount: async (username: string, email: string, password: string) => {
    const response = await axios.post(
      `${baseUrl}/user/create`,
      { username, email, password },
      {
        headers: { "project-id": projectId, "project-key": projectKey },
        withCredentials: true,
      }
    );
    return response.data;
  },

  deleteAccount: async () => {
    const response = await axios.delete(`${baseUrl}/user/delete`, {
      headers: { "project-id": projectId, "project-key": projectKey },
      withCredentials: true,
    });
    return response.data;
  },

  updateAccount: async (username: string, email: string) => {
    const response = await axios.put(
      `${baseUrl}/user/update`,
      { username, email },
      {
        headers: { "project-id": projectId, "project-key": projectKey },
        withCredentials: true,
      }
    );
    return response.data;
  },

  getCurrentUser: async () => {
    const response = await axios.get(`${baseUrl}/user/`, {
      headers: { "project-id": projectId, "project-key": projectKey },
      withCredentials: true,
    });
    return response.data;
  },
});
