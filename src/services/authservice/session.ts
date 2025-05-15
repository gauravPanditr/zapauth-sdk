import axios from "axios";

export const session = (baseUrl: string, projectId: string, projectKey: string) => ({
  logout: async () => {
    const response = await axios.delete(`${baseUrl}/user/auth/session/delete`, {
      headers: { "project-id": projectId, "project-key": projectKey },
      withCredentials: true,
    });
    return response.data;
  },

  deleteSessionById: async (sessionId: string) => {
    const response = await axios.delete(
      `${baseUrl}/user/auth/session/delete/${sessionId}`,
      {
        headers: { "project-id": projectId, "project-key": projectKey },
        withCredentials: true,
      }
    );
    return response.data;
  },

  getAllSessions: async () => {
    const response = await axios.get(`${baseUrl}/user/sessions`, {
      headers: { "project-id": projectId, "project-key": projectKey },
      withCredentials: true,
    });
    return response.data;
  },

  deleteAllSessions: async () => {
    const response = await axios.delete(`${baseUrl}/user/sessions/delete`, {
      headers: { "project-id": projectId, "project-key": projectKey },
      withCredentials: true,
    });
    return response.data;
  },
});
