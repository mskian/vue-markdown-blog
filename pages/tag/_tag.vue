<template>
  <section class="section">
    <div class="container">
      <div class="columns is-centered">
        <div class="column is-half">
          <br />
          <div class="card">
            <div class="card-content">
              <div class="has-text-centered">
                <client-only>
                  <unicon
                    name="envelope-check"
                    fill="pink"
                    width="50"
                    height="50"
                  ></unicon>
                </client-only>
              </div>
              <h1 class="has-text-centered">
                {{ tag.name }}
              </h1>
              <br />
              <nuxt-content :document="tag" />
              <span
                v-for="article of articles"
                :key="article.slug"
                class="is-size-7"
              >
                <ul>
                  <li>
                    <nuxt-link
                      :to="`/posts/${article.slug}/`"
                      class="has-text-weight-semibold"
                    >
                      {{ article.title }}
                    </nuxt-link>
                  </li>
                </ul>
              </span>
              <hr />
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>
<script>
export default {
  name: 'TagPage',
  async asyncData({ $content, params, error }) {
    if (!params.tag) {
      return error({ statusCode: 404, message: 'No posts found!' })
    }
    try {
      const tags = await $content('tags')
        .where({ slug: { $contains: params.tag } })
        .limit(1)
        .fetch()
      const tag = tags.length > 0 ? tags[0] : {}
      if (!tag.name) {
        return error({ statusCode: 404, message: 'No posts found!' })
      }
      const articles = await $content('articles')
        .where({ tags: { $contains: tag.name } })
        .sortBy('createdAt', 'asc')
        .fetch()
      return {
        articles,
        tag,
      }
    } catch {
      error({ statusCode: 404, message: 'Post not found' })
    }
  },
  head() {
    return {
      title: 'Tagged: ' + this.tag.name,
      meta: [
        {
          hid: 'description',
          name: 'description',
          content: this.tag.description,
        },
        {
          hid: 'og:title',
          name: 'og:title',
          content: 'Tagged: ' + this.tag.name,
        },
        {
          hid: 'og:url',
          name: 'og:url',
          content: 'https://kavithai.site' + this.$route.path,
        },
        {
          hid: 'twitter:title',
          name: 'twitter:title',
          content: 'Tagged: ' + this.tag.name,
        },
        {
          hid: 'twitter:url',
          name: 'twitter:url',
          content: 'https://kavithai.site' + this.$route.path,
        },
      ],
      link: [
        {
          rel: 'canonical',
          href: 'https://kavithai.site' + this.$route.path,
        },
      ],
    }
  },
}
</script>
