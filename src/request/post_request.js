import { entityHead, entityCore } from "@/config/api.config";

export async function _POST(
  endpoint,
  body = {},
  isMultipart = false,
  baseURL = entityHead
) {
  try {
    console.log("Using baseURL:", baseURL); // Optional logging for debugging

    const options = {
      method: "POST",
      headers: {},
    };

    if (isMultipart) {
      options.body = body;
    } else {
      options.headers["Content-Type"] = "application/json";
      options.body = JSON.stringify(body);
    }

    const response = await fetch(`${baseURL}/${endpoint}`, options);

    if (!response.ok) {
      const errorText = await response.text();
      throw new Error(errorText || "POST request failed");
    }

    const resultData = await response.json().catch(() => ({ data: null }));

    return resultData.data;
  } catch (error) {
    console.error("POST Error:", error.message);
    throw error;
  }
}
