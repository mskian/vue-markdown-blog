<template>
  <section class="section">
    <div class="container">
      <div class="columns is-centered">
        <div class="column is-half post-content">
          <br />
          <h1 class="has-text-centered">தமிழ் கவிதை Site 🦄</h1>
          <br />
          <p>Random Kavithai Collection - Read in online and Offline Mode 📕</p>
          <hr />
          <p>📝 Collect Kavithai From Social Media profiles and pages</p>
          <p>📦 Push Content via Netlify CMS with Markdown Post Format</p>
          <p>💚 Share My Favourite Tamil Kavithai and Tamil Quotes</p>
          <p>🛍 Build using Nuxt Static Generator + PWA offline Support</p>
          <br />
          <div class="has-text-centered">
            <nuxt-link to="/blog/" class="button is-rounded is-link"
              >📚 Read kavithai</nuxt-link
            >
          </div>
          <hr />
          <p class="has-text-centered">
            <client-only>
              <unicon
                name="vuejs"
                fill="limegreen"
                width="50"
                height="50"
              ></unicon>
              <unicon
                name="cloud-heart"
                fill="red"
                width="50"
                height="50"
              ></unicon>
              <unicon
                name="medium-m"
                fill="orange"
                width="50"
                height="50"
              ></unicon>
            </client-only>
          </p>
          <div v-if="$nuxt.isOffline"><pre>App Status: offline</pre></div>
          <div v-if="$nuxt.isOnline"><pre>App Status: online</pre></div>
          <hr />
        </div>
      </div>
    </div>
  </section>
</template>

<script>
export default {
  name: 'HomePage',
  head() {
    return {
      link: [
        {
          rel: 'canonical',
          href: 'https://kavithai.site/',
        },
      ],
      script: [
        {
          type: 'application/ld+json',
          json: {
            '@context': 'http://schema.org',
            '@type': 'Website',
            publisher: {
              '@type': 'Organization',
              name: 'தமிழ் கவிதை Site 💚',
              url: 'https://kavithai.site/',
              logo: {
                '@type': 'ImageObject',
                url: 'https://kavithai.site/icons/Icon-72x72.png',
                width: 72,
                height: 72,
              },
            },
            url: 'https://kavithai.site/',
            image: {
              '@type': 'ImageObject',
              url: 'https://kavithai.site/kavithai-cover.png',
              width: 1200,
              height: 630,
            },
            mainEntityOfPage: {
              '@type': 'WebPage',
              '@id': 'https://kavithai.site/',
            },
            description:
              'தமிழ் கவிதைகள் Site - Collect kavithai Around Social Media and Social Pages - Read Tamil Kavithai both online and offline.',
          },
        },
      ],
    }
  },
}
</script>
