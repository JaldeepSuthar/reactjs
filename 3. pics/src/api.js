import axios from "axios";

const searchImages = async (term) => {
  const response = await axios.get("https://api.unsplash.com/search/photos", {
    headers: {
      Authorization: "Client-ID 52OfOrBy_2s9wdb4ucsxZkQaf4UoEBsuzzGJ8tnEx_U",
    },
    params: {
      query: term,
    },
  });
  return response.data.results;
};

export default searchImages;
