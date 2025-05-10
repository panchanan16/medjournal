const { entityHead, entityCore } = require("@/config/api.config");

export async function _GET(endpoint, baseUrl = 'en' ) {
  console.log(`${baseUrl == 'en' ? entityHead : entityCore}/${endpoint}`)
  const request = await fetch(`${baseUrl == 'en' ? entityHead : entityCore}/${endpoint}`);
  const response = await request.json();

  if (response.status) {
    console.log(response.data)
    return response.data;
  }
}



  