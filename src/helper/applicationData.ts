import axios from "axios";

const BASE_URL = "http://localhost:8081/hub";

export async function getAllApplication() {
  return await axios.get(`${BASE_URL}/all`).then((response) => {
    return response.data;
  });
}

export async function getApplication(applicationId: String) {
  return await axios.get(`${BASE_URL}/${applicationId}`).then((response) => {
    return response.data;
  });
}
