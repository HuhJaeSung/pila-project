import axios from "axios";

const GEOCODINGURL = "/api/map-geocode/v2/geocode";
const ID_KEY = "9gnpxruwbr";
const SECRET_KEY = "yggbPQ6t8SDPxxOtHrmG2mJdvCcMe8T1xzl0MfAN";

export async function geocoding(query) {
  const coord = await axios
    .get(`${GEOCODINGURL}`, {
      params: {
        query,
      },
      headers: {
        "X-NCP-APIGW-API-KEY-ID": ID_KEY,
        "X-NCP-APIGW-API-KEY": SECRET_KEY,
      },
    })
    .then((res) => {
      // TODO: check if response is ok
      return res.data;
    })
    .then((data) => {
      if (data.addresses.length > 1) {
        console.log(`${query}에는 여러 주소가 있어요.`);
      } else if (data.addresses.length === 0) {
        console.log(`${query}에 해당되는 좌표가 없어요.`);
        return [-1, -1];
      }
      return [
        data.addresses[0].x,
        data.addresses[0].y,
        data.addresses[0].roadAddress,
      ];
    });

  return coord;
}
