import { entityHead, entityCore } from "@/config/api.config";
import toast from "react-hot-toast";

export async function _POST(
  endpoint,
  body = {},
  type,
  isMultipart = false,
  baseURL = 'en'

) {
  try {
    const options = {
      method: type,
      headers: {},
    };

    if (isMultipart) {
      options.body = body;
    } else {
      options.headers["Content-Type"] = "application/json";
      options.body = JSON.stringify(body);
    }

    const response = await fetch(`${baseURL == 'en' ? entityHead : entityCore}/${endpoint}`, options);
    const res = await response.json()

    if (res.status) {
      toast.success(res.message)
      return res.data
    }
    
    toast.error(res.message)
    throw new Error(res.message || "POST request failed");
  } catch (error) {
    console.log("POST Error:", error);
    throw error;
  }
}
