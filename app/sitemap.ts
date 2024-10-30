// import type { MetadataRoute } from 'next'
 
export default  async function sitemap() {
  return [
    {
      url: 'http://apeirocraft.tech/',
      lastModified: new Date(),
      changeFrequency: 'daily',
      priority: 1,
    },
  ]
}