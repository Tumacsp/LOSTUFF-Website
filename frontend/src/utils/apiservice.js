import axiosInstance from "./axios";

export const fetchDashboardData = async () => {
  try {
    const response = await axiosInstance.get("/api/dashboard/stats");
    return response.data;
  } catch (error) {
    if (error.response && error.response.status === 403) {
      window.location.href = '/';
    }
    throw error;
  }
};

export const fetchDashboardUsers = async () => {
  try {
    const response = await axiosInstance.get("/api/users");
    return response.data;
  } catch (error) {
    console.error("Error fetching users:", error);
    if (error.response && error.response.status === 403) {
      window.location.href = '/';
    }
    throw error;
  }
};

export const fetchDashboardPosts = async () => {
  try {
    const response = await axiosInstance.get("/api/posts/all");
    return response.data;
  } catch (error) {
    console.error("Error fetching posts:", error);
    if (error.response && error.response.status === 403) {
      window.location.href = '/';
    }
    throw error;
  }
};

export const banUser = async (userId) => {
  try {
    const response = await axiosInstance.put(`/api/users/${userId}/ban`);
    return response.data;
  } catch (error) {
    console.error("Error banning user:", error);
    if (error.response && error.response.status === 403) {
      window.location.href = '/';
    }
    throw error;
  }
};

export const banPost = async (postId) => {
  try {
    const response = await axiosInstance.put(`/api/posts/${postId}/ban`);
    return response.data;
  } catch (error) {
    console.error("Error banning post:", error);
    if (error.response && error.response.status === 403) {
      window.location.href = '/';
    }
    throw error;
  }
};

export const unbanUser = async (userId) => {
  try {
    const response = await axiosInstance.put(`/api/users/${userId}/unban`);
    return response.data;
  } catch (error) {
    console.error("Error unbanning user:", error);
    if (error.response && error.response.status === 403) {
      window.location.href = '/';
    }
    throw error;
  }
};

export const unbanPost = async (postId) => {
  try {
    const response = await axiosInstance.put(`/api/posts/${postId}/unban`);
    return response.data;
  } catch (error) {
    console.error("Error unbanning post:", error);
    if (error.response && error.response.status === 403) {
      window.location.href = '/';
    }
    throw error;
  }
};
