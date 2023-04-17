import axios from "axios";

export async function webService(val: string) {
  const result = await axios({
    baseURL: "https://api.myenergi.com",
    url: "/v1/banana-boat",
    method: "POST",
    data: {
      val,
    },
  });

  return result.data;
}
