import axiosClient from './axios-client'
export const postServices = {
  getAllPost: async () => {
    try {
      const response = await axiosClient.get("/posts")
      return response.data
    } catch (error) {
        console.error(error)
    }
  },
  getPost: async (id: string) => {
    try {
      const response = await axiosClient.get(`/posts/${id}`)
      return response.data
    } catch (error) {
        console.error(error)
    }
  }
}
