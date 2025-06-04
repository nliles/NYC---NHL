// src/services/contentful.js
import client from '../lib/contentful'

export async function getBlogPosts() {
  try {
    const response = await client.getEntries({
      content_type: 'nycNhl'
    })
    console.log('here', response)
    return response.items
  } catch (error) {
    console.error('Error fetching blog posts:', error)
    return []
  }
}