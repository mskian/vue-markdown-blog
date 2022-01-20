<template>
  <section class="section">
    <div class="container">
      <div class="columns is-centered">
        <div class="column is-half post-content">
          <br />
          <h1 class="has-text-centered">Just Kavithai 🦄</h1>
          <br />
          <pre>
Random Kavithai Collection - Read in online and Offline Mode 📕</pre
          >
          <hr />
          <p>📝 Collect Kavithai From Social Media profiles and pages</p>
          <p>
            📦 Push Content via Markdown Post Format -
            <nuxt-link to="/blog/">Read kavithai</nuxt-link>
          </p>
          <p>
            💚 it's for Personal Use - Collecting Tamil Kavithai and Tamil
            Quotes
          </p>
          <p>🛍 Build using Nuxt Static Generator + PWA offline Support</p>
          <br />
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
          <hr />
        </div>
      </div>
    </div>
  </section>
</template>

<script>
export default {
  name: 'HomePage',
}
</script>
