<template>
  <section class="section">
    <div class="container">
      <div class="columns is-centered">
        <div class="column is-half post-content">
          <h1 class="has-text-centered">தமிழ் கவிதை Site 🦄</h1>
          <hr />
          <div class="columns is-mobile">
            <div class="column">
              <nuxt-link to="/tag/life/">
                <nuxt-img
                  preload
                  format="webp"
                  src="images/life.png"
                  alt="Tamil Life Quotes"
                  height="120"
                  width="120"
                />
              </nuxt-link>
              <p>
                <small><b>Tamil Life Quotes</b></small>
              </p>
            </div>
            <div class="column">
              <nuxt-link to="/tag/motivation/">
                <nuxt-img
                  preload
                  format="webp"
                  src="images/motivation.png"
                  alt="Tamil Motivational Quotes"
                  height="120"
                  width="120"
                />
              </nuxt-link>
              <p>
                <small><b>Tamil Motivation</b></small>
              </p>
            </div>
            <div class="column">
              <nuxt-link to="/tag/kadhal/">
                <nuxt-img
                  preload
                  format="webp"
                  src="images/love.png"
                  alt="Tamil Love Quotes"
                  height="120"
                  width="120"
                />
              </nuxt-link>
              <p>
                <small><b>Kadhal Kavithai</b></small>
              </p>
            </div>
          </div>
          <hr />
          <p>📝 கலெக்ட் கவிதை From Social Media profiles and pages</p>
          <p>📦 Push Content via Netlify CMS with Markdown Post Format</p>
          <p>
            💚 Share My Favourite
            <nuxt-link to="/blog/">தமிழ் கவிதை</nuxt-link> and Tamil Quotes
          </p>
          <p>🛍 Build using Nuxt Static Generator + PWA offline Support</p>
          <br />
          <div class="has-text-centered">
            <nuxt-link to="/blog/" class="button is-rounded read-random"
              >📚 கவிதைகள்</nuxt-link
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
          <p class="has-text-centered">
            <small
              ><b>
                Random Kavithai Collections - Read in online and Offline Mode 📕
              </b></small
            >
          </p>
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
