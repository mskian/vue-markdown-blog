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
              <h2 class="has-text-centered is-size-5">Kavithai Collections</h2>
              <br />
              <div v-for="post of posts" :key="post.slug" class="is-size-6">
                <h2>{{ post.title }}</h2>
                <br />
                <nuxt-link
                  :to="`/posts/${post.slug}/`"
                  class="button is-warning is-small is-rounded has-text-weight-semibold"
                >
                  <small>மேலும் படிக்க</small>
                </nuxt-link>
                <hr />
              </div>
              <div id="prev-next">
                <nuxt-link
                  :to="prevLink"
                  class="button is-link is-small has-text-weight-semibold"
                  >Previous</nuxt-link
                >&nbsp;&nbsp;
                <nuxt-link
                  v-if="nextPage"
                  :to="`/page/${pageNo + 1}/`"
                  class="button is-link is-small has-text-weight-semibold"
                  >Next</nuxt-link
                >
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
export default {
  name: 'PageNumber',
  async asyncData({ $content, params, error }) {
    const pageNo = parseInt(params.number)
    if (!pageNo) {
      return error({ statusCode: 404, message: 'No posts found!' })
    }
    const postdata = await $content('articles')
      .only(['author', 'createdAt', 'description', 'path', 'title', 'slug'])
      .sortBy('createdAt', 'desc')
      .limit(3)
      .skip(2 * (pageNo - 1))
      .fetch()

    if (!postdata.length) {
      return error({ statusCode: 404, message: 'No posts found!' })
    }

    const nextPage = postdata.length === 3
    const posts = nextPage ? postdata.slice(0, -1) : postdata
    return { nextPage, posts, pageNo }
  },
  head() {
    return {
      title: 'Random Kavithai - Page ' + this.pageNo,
      meta: [
        {
          hid: 'description',
          name: 'description',
          content:
            'தமிழ் கவிதைகள் Site - Collect kavithai Around Social Media and Social Pages - Read Tamil Kavithai both online and offline.',
        },
        {
          hid: 'og:title',
          name: 'og:title',
          content: 'Random Kavithai - Page ' + this.pageNo,
        },
        {
          hid: 'og:url',
          name: 'og:url',
          content: 'https://kavithai.site' + this.$route.path + '/',
        },
        {
          hid: 'twitter:title',
          name: 'twitter:title',
          content: 'Random Kavithai - Page ' + this.pageNo,
        },
        {
          hid: 'twitter:url',
          name: 'twitter:url',
          content: 'https://kavithai.site' + this.$route.path + '/',
        },
      ],
      link: [
        {
          rel: 'canonical',
          href: 'https://kavithai.site' + this.$route.path + '/',
        },
      ],
    }
  },
  computed: {
    prevLink() {
      if (this.pageNo) {
        return this.pageNo === 2 ? '/blog/' : `/page/${this.pageNo - 1}/`
      } else {
        return '/blog/'
      }
    },
  },
}
</script>
