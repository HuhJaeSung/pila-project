import axios from "axios";

const ID_KEY = "nr8slxOixm4sIhEgP5oZ";
const SECRET_KEY = "Gl9QYsCM7t";

export async function naverSearch(query) {
  const items = await axios
    .get("/api/v1/search/local.json", {
      params: {
        query: query,
        display: 5,
      },
      headers: {
        "X-Naver-Client-Id": ID_KEY,
        "X-Naver-Client-Secret": SECRET_KEY,
      },
    })
    .then((res) => {
      // TODO: check if response is ok
      console.log(res);
      return res.data;
    })
    .then((data) => {
      console.log(data);
      return [data.mapx, data.mapx];
    });

  return items;
}
