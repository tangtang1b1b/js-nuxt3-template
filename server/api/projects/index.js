export default defineEventHandler(async (event) => {
  const config = useRuntimeConfig()
  const query = getQuery(event) // 獲取請求的 query 參數

  const response = await $fetch(`${config.APP_API}/items/projects`, {
    query: {
      fields: '*,category.*,photos.*',
      ...query, // 將請求的 query 參數傳遞給 API
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
