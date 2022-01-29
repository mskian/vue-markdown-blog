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
          <br />
          <br />
          <div class="has-text-centered">
            <p class="has-text-centered">
              <small
                ><b>Reading Mode: {{ $colorMode.value }}</b></small
              >
            </p>
            <div class="select is-rounded is-link is-small">
              <select v-model="$colorMode.preference">
                <option value="system">System</option>
                <option value="light">Light</option>
                <option value="dark">Dark</option>
                <option value="sepia">Sepia</option>
              </select>
            </div>
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
          content: 'https://kavithai.site/kavithai-cover.png',
        },
        {
          hid: 'og:url',
          property: 'og:url',
          content: 'https://kavithai.site' + this.$route.path,
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
          content: 'https://kavithai.site/kavithai-cover.png',
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
      script: [
        {
          type: 'application/ld+json',
          json: {
            '@context': 'https://schema.org',
            '@type': 'Article',
            publisher: {
              '@type': 'Organization',
              name: 'Tamil Kavithai Site',
              url: 'https://kavithai.site' + this.$route.path,
              logo: {
                '@type': 'ImageObject',
                url: 'https://kavithai.site/icons/Icon-72x72.png',
                width: 72,
                height: 72,
              },
            },
            author: {
              '@type': 'Person',
              name: 'Editorial Staff',
              image: {
                '@type': 'ImageObject',
                url: 'https://www.gravatar.com/avatar/a3425a2c334972ab5dde3c218307cbdd?s=250&d=mm&r=x',
                width: 250,
                height: 250,
              },
              sameAs: [
                'https://www.facebook.com/tamilsmsblog',
                'https://twitter.com/tamilsmsblog',
              ],
            },
            headline: this.article.title,
            url: 'https://kavithai.site' + this.$route.path,
            datePublished: this.article.createdAt,
            dateModified: this.article.updatedAt,
            image: {
              '@type': 'ImageObject',
              url: 'https://kavithai.site/kavithai-cover.png',
              width: 1200,
              height: 630,
            },
            keywords: this.article.tags,
            mainEntityOfPage: {
              '@type': 'WebPage',
              '@id': 'https://kavithai.site' + this.$route.path,
            },
            description: this.article.description,
          },
        },
      ],
    }
  },
}
</script>
