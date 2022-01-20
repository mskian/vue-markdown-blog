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
              <div v-if="nextPage" id="next">
                <nuxt-link
                  to="/page/2/"
                  class="button is-link is-small has-text-weight-semibold"
                >
                  Next
                </nuxt-link>
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
  name: 'BlogPage',
  async asyncData({ $content }) {
    const postdata = await $content({ deep: true })
      .only(['author', 'createdAt', 'description', 'path', 'title', 'slug'])
      .sortBy('createdAt', 'desc')
      .limit(3)
      .fetch()

    const nextPage = postdata.length === 3
    const posts = nextPage ? postdata.slice(0, -1) : postdata
    return { nextPage, posts }
  },
  head() {
    return {
      title: 'Blog - Just Random Kavithai',
      meta: [
        {
          hid: 'description',
          name: 'description',
          content:
            'Just a Random Tamil Kavithai Site Collect kavithai Around Social Media and Blogs.',
        },
      ],
    }
  },
}
</script>
