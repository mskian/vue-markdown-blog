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
              <br />
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
    if (!params.slug) {
      return error({ statusCode: 404, message: 'No posts found!' })
    }
    const articles = await $content('articles')
      .where({
        tags: { $contains: params.slug },
      })
      .fetch()
    return {
      articles,
    }
  },
  head() {
    return {
      title: 'Post Tag',
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
