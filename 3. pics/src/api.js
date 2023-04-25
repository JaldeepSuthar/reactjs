import axios from "axios";

const searchImages = async () => {
  const response = await axios.get("https://api.unsplash.com/search/photos", {
    headers: {
      Authorization: "Client-ID 52OfOrBy_2s9wdb4ucsxZkQaf4UoEBsuzzGJ8tnEx_U",
    },
    params: {
      query: "cars",
    },
  });
  console.log(response);
  return response;
};

export default searchImages;
