// /server/api/projects/[id].js
export default defineEventHandler(async (event) => {
  const config = useRuntimeConfig()
  const { id } = event.context.params

  const response = await $fetch(`${config.APP_API}/items/projects/${id}`, {
    query: {
      fields: '*,category.*,photos.*',
    },
  })

  // 處理圖片 URL
  if (response.data && response.data.photos) {
    response.data.photos = response.data.photos.map((p) => ({
      url: `${config.APP_API}/assets/${p.directus_files_id}`,
    }))
  }

  return response
})
