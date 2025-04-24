const { entityHead } = require("@/config/api.config");

export async function _GET(endpoint) {
  const request = await fetch(`${entityHead}/${endpoint}`);
  const response = await request.json();
  if (response.status) {
    return response.data;
  }
}
