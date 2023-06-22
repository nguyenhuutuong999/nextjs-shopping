import axios from "axios";
export default class BlogApi {
  static request;

  static createInstance() {
    if (!BlogApi.request) {
      BlogApi.request = axios.create({
        baseURL: "http://localhost:5000/api/rest",
        timeout: 1000 * 120,
      });
      BlogApi.request.interceptors.response.use((response) => {
        return response
      }, (error) => {
        return Promise.reject(error)
      });
    }
  }

  static async getPosts() {
    const url = `/getAllPost/10/0`;
    const { data, status } = await this.request.get(url, { params: {limit:"10", offset: "0" }});
    return { data, status }
  }

  static async searchPost(params) {
    const url = "/searchPost";
    const { data, status } = await this.request.post(url, {
      search: params.value,
      limit: params.limit,
      offset: params.offset
    });
    return { data, status }
  }

  static async getCategories() {
    const url = "/post/categories";
    const { data, status } = await this.request.get(url);
    return { data, status }
  }

  static async getPostDetail(id) {
    const url = `/getPostDetail/${id}`;
    const { data, status } = await this.request.get(url);
    return { data, status }
  }
}

BlogApi.createInstance();
