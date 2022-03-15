import axios from "axios";

export const baseUrl = "https://bayut.p.rapidapi.com";

export const fetchApi = async (url) => {
  const { data } = await axios.get(url, {
    headers: {
      "x-rapidapi-host": "bayut.p.rapidapi.com",
      "x-rapidapi-key": "a553ff9f72msh0145537756e9fe2p1bd2fejsnb83ca6031d6d",
    },
  });

  return data;
};
