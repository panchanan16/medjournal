'use server'
import { revalidatePath } from 'next/cache'

export async function updateSitemap() {
  console.log("Site map generated")
  revalidatePath('/sitemap')
}