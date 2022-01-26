<template>
  <section class="section">
    <div class="container">
      <div class="columns is-centered">
        <div class="column is-half">
          <h1 class="is-size-2">Page not found</h1>
          <br />
          <NuxtLink to="/">Home page</NuxtLink>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
export default {
  name: 'BasicPage',
  head() {
    return {
      title: '404 - Not Found',
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
          content: '404 - Not Found',
        },
        {
          hid: 'og:url',
          name: 'og:url',
          content: 'https://kavithai.site' + this.$route.path,
        },
        {
          hid: 'twitter:title',
          name: 'twitter:title',
          content: '404 - Not Found',
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
