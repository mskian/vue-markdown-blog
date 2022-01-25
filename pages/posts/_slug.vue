<template>
  <section class="section">
    <div class="container">
      <div class="columns is-centered">
        <div class="column is-half">
          <div class="post-content">
            <h1>{{ article.title }}</h1>
            <hr />
            <nuxt-content :document="article" />
            <br />
            <b
              ><p v-for="tag in article.tags" :key="tag" class="is-size-6">
                Tagged:
                <nuxt-link :to="'/tag/' + tag + '/'">{{ tag }}</nuxt-link>
              </p></b
            >
            <hr />
            <a href="" class="button is-info" @click.prevent="$router.back()"
              >Back</a
            >
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
export default {
  async asyncData({ $content, params, error }) {
    try {
      const article = await $content('articles', params.slug).fetch()
      if (!params.slug) {
        return error({ statusCode: 404, message: 'No posts found!' })
      }
      return { article }
    } catch (err) {
      error({
        statusCode: 404,
        message: 'Page could not be found',
      })
    }
  },
  head() {
    return {
      title: this.article.title,
      meta: [
        {
          hid: 'description',
          name: 'description',
          content: this.article.description,
        },
        { hid: 'og:type', property: 'og:type', content: 'article' },
        {
          hid: 'og:site_name',
          property: 'og:site_name',
          content: this.article.title,
        },
        {
          hid: 'og:title',
          property: 'og:title',
          content: this.article.title,
        },
        {
          hid: 'og:description',
          property: 'og:description',
          content: this.article.description,
        },
        {
          hid: 'og:image',
          property: 'og:image',
          content: 'https://pwa.tamilwords.net/kavithai-cover.png',
        },
        {
          hid: 'og:url',
          property: 'og:url',
          content: 'https://pwa.tamilwords.net' + this.$route.path,
        },
        {
          hid: 'twitter:title',
          name: 'twitter:title',
          content: this.article.title,
        },
        {
          hid: 'twitter:description',
          name: 'twitter:description',
          content: this.article.description,
        },
        {
          hid: 'twitter:image',
          name: 'twitter:image',
          content: 'https://pwa.tamilwords.net/kavithai-cover.png',
        },
        {
          hid: 'twitter:url',
          name: 'twitter:url',
          content: 'https://pwa.tamilwords.net' + this.$route.path,
        },
      ],
    }
  },
}
</script>
