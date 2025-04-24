const { entityHead } = require("@/config/api.config");

export async function _POST(endpoint, body = {}) {
  try {
    const response = await fetch(`${entityHead}/${endpoint}`, {
      method: "POST",
      headers: {
        "Content-type": "application/json",
      },
      body: JSON.stringify(body),
    });

    console.log("response", response);
    if (!response.ok) {
      throw new Error(response.message || "POST request failed");
    }

    const resultData = await response.json();

    return resultData.data;
  } catch (error) {
    console.error("POST Error:", error.message);
    throw error;
  }
}
