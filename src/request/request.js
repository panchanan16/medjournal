import toast from "react-hot-toast";

const { entityHead, entityCore } = require("@/config/api.config");

export async function _GET(endpoint, baseUrl = 'en') {
  console.log(`${baseUrl == 'en' ? entityHead : entityCore}/${endpoint}`)
  const request = await fetch(`${baseUrl == 'en' ? entityHead : entityCore}/${endpoint}`);
  const response = await request.json();

  if (response.status) {
    return response.data;
  }
}


export async function _DELETE(endpoint, baseUrl = 'en') {
  console.log(`${baseUrl == 'en' ? entityHead : entityCore}/${endpoint}`)
  const request = await fetch(`${baseUrl == 'en' ? entityHead : entityCore}/${endpoint}`, {
    method: 'DELETE',
    headers: {
      'Content-Type': 'application/json'
    }
  });
  const response = await request.json();

  if (response.status) {
    toast.success(response.message)
    return true
  } else {
     toast.error(response.message || "Something went wrong while deleting!")
     return false
  }
}



