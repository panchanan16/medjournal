// export const BASE_URL = `https://app.farmclin.es`
// export const BASE_URL = `https://app.theinternationalmedicine.com`

export const BASE_URL = process.env.NEXT_PUBLIC_META_BASE_URL

export const entityHead = `${BASE_URL}/api/v1/entity`
export const entityCore = `${BASE_URL}/api/v1/core`

