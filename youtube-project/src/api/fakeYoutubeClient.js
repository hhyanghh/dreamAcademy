import axios from "axios";

export default class FakeYoutubeClient {
  async search({ params }) {
    return params.relateToVideoId
      ? axios.get("/videos/related.json")
      : axios.get("/videos/search.json");
  }

  async videos() {
    return axios.get("videos/popular.json");
  }

  async channels() {
    return axios.get("videos/channel.json");
  }
}
