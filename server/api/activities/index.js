export default defineEventHandler(async (event) => {
  const config = useRuntimeConfig()

  const response = await $fetch(`${config.APP_API}/items/activities`, {
    query: {
      fields: '*,photos.*',
    },
  })

  // 處理圖片 URL
  if (response.data && Array.isArray(response.data)) {
    response.data = response.data.map((project) => ({
      ...project,
      photos: project.photos
        ? project.photos.map((p) => ({
            url: `${config.APP_API}/assets/${p.directus_files_id}`,
          }))
        : [],
    }))
  }

  return response
})
