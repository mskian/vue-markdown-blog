export default async () => {
  const { $content } = require('@nuxt/content')
  const files = await $content('articles').only(['slug']).fetch()

  return files.map((file) =>
    file.slug === '/index' ? '/' : '/posts/' + file.slug
  )
}
