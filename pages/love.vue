<template>
  <section class="section">
    <div class="container post-content">
      <div class="columns is-centered">
        <div class="column is-half">
          <div class="notification is-warning has-text-weight-bold">
            <h3 class="has-text-centered">காதலர் தினம் க்ரீட்டிங்ஸ் ❤</h3>
            <br />
            <p
              v-if="wishername === 'Your Name'"
              class="has-text-centered has-text-dark"
            >
              💚 Your Name 💚
            </p>
            <p v-else class="has-text-centered has-text-dark">
              {{ '💚 ' + wishername + ' 💚' }}
            </p>
            <br />
            <div v-if="wishername === 'Your Name'">
              <img
                src="https://img.sanweb.info/love/love?name=Your%20Name"
                loading="lazy"
              />
            </div>
            <div v-else>
              <img :src="wishimage" loading="lazy" />
            </div>
            <hr />
            <div class="buttons is-centered">
              <a
                class="button is-link is-rounded text-center"
                :href="wishimage"
                rel="nofollow noopener noreferrer"
                target="_blank"
                >📥 Download image</a
              >
              <br />
              <br />
              <p
                class="notification is-danger is-light has-text-centered has-text-dark"
              >
                <small
                  >Copy Greeting URL and Share to your Lovable Partner</small
                ><br />
                <button
                  v-clipboard:copy="copyurl"
                  v-clipboard:success="onCopy"
                  v-clipboard:error="onError"
                  class="button is-danger is-rounded text-center"
                  type="button"
                >
                  📝 Copy Url
                </button>
              </p>
            </div>
            <hr />
            <h3 class="has-text-centered">create யுவர் Wish 💚</h3>
            <br />
            <form method="get">
              <div class="control">
                <input
                  id="name"
                  name="name"
                  type="text"
                  class="input has-text-centered"
                  placeholder="Enter Your Name"
                  maxlength="35"
                  autocomplete="off"
                  required
                />
              </div>
              <br />
              <div class="control">
                <button
                  type="submit"
                  class="button is-link read-random sign-button"
                >
                  Create wish
                </button>
              </div>
            </form>
            <br />
          </div>
          <br />
          <div class="has-text-centered">
            <p class="has-text-centered">
              <small
                ><b>Theme Mode: {{ $colorMode.value }}</b></small
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
          <hr />
        </div>
      </div>
    </div>
  </section>
</template>

<script>
import slugify from 'slugify'

export default {
  name: 'WishPage',
  data() {
    return {
      wishername: '',
      wishimage: '',
      copyurl: '',
    }
  },
  head() {
    return {
      title: '❤ ' + this.wishername + ' காதலர் தினம் க்ரீட்டிங்ஸ்',
      meta: [
        {
          hid: 'description',
          name: 'description',
          content:
            '❤ ' +
            this.wishername +
            ' காதலர் தினம் க்ரீட்டிங்ஸ் - தமிழ் கவிதைகள் Site.',
        },
        {
          hid: 'og:title',
          name: 'og:title',
          content: '❤ ' + this.wishername + ' காதலர் தினம் க்ரீட்டிங்ஸ்',
        },
        {
          hid: 'og:description',
          property: 'og:description',
          content:
            '❤ ' +
            this.wishername +
            ' காதலர் தினம் க்ரீட்டிங்ஸ் - தமிழ் கவிதைகள் Site.',
        },
        {
          hid: 'og:url',
          name: 'og:url',
          content: 'https://kavithai.site/love/?name=' + this.$route.query.name,
        },
        {
          hid: 'twitter:title',
          name: 'twitter:title',
          content: '❤ ' + this.wishername + ' காதலர் தினம் க்ரீட்டிங்ஸ்',
        },
        {
          hid: 'twitter:description',
          name: 'twitter:description',
          content:
            '❤ ' +
            this.wishername +
            ' காதலர் தினம் க்ரீட்டிங்ஸ் - தமிழ் கவிதைகள் Site.',
        },
        {
          hid: 'twitter:url',
          name: 'twitter:url',
          content: 'https://kavithai.site/love/?name=' + this.$route.query.name,
        },
      ],
      link: [
        {
          rel: 'canonical',
          href: 'https://kavithai.site/love/?name=' + this.$route.query.name,
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
              name: '❤ ' + this.wishername + ' காதலர் தினம் க்ரீட்டிங்ஸ்',
              url: 'https://kavithai.site/love/?name=' + this.$route.query.name,
              logo: {
                '@type': 'ImageObject',
                url: 'https://kavithai.site/icons/Icon-72x72.png',
                width: 72,
                height: 72,
              },
            },
            url: 'https://kavithai.site/love/?name=' + this.$route.query.name,
            image: {
              '@type': 'ImageObject',
              url: 'https://kavithai.site/kavithai-cover.png',
              width: 1200,
              height: 630,
            },
            mainEntityOfPage: {
              '@type': 'WebPage',
              '@id':
                'https://kavithai.site/love/?name=' + this.$route.query.name,
            },
            description:
              '❤ ' +
              this.wishername +
              ' காதலர் தினம் க்ரீட்டிங்ஸ் - தமிழ் கவிதைகள் Site.',
          },
        },
      ],
    }
  },
  mounted() {
    this.getResult()
  },
  created() {
    const getUser = this.$route.query.name
    if (getUser === null || getUser === undefined) {
      this.$router.push({
        force: true,
        path: '/love/',
        query: { name: 'Your-Name' },
      })
    } else {
      const users = slugify(getUser, {
        replacement: '-',
        remove: /[*+~.()'"!:@]/g,
        lower: false,
        strict: false,
      })
      this.$router.push({
        path: '/love/',
        query: { name: users },
      })
    }
  },
  methods: {
    getResult() {
      if (
        this.$route.query.name === 'Your-Name' ||
        this.$route.query.name === undefined
      ) {
        this.wishername = 'Your Name'
        this.wishimage = 'https://img.sanweb.info/love/love?name=Your%20Name'
        this.copyurl = 'https://kavithai.site/love/?name=Your-Name'
      } else {
        this.wishername = this.$route.query.name.replace(/[-]/g, ' ')
        this.wishimage =
          'https://img.sanweb.info/love/love?name=' +
          encodeURIComponent(this.wishername)
        this.copyurl =
          'https://kavithai.site/love/?name=' +
          slugify(this.$route.query.name, {
            replacement: '-',
            remove: /[*+~.()'"!:@]/g,
            lower: false,
            strict: false,
          })
        this.$toast.error(this.wishername, {
          position: 'bottom-right',
          theme: 'bubble',
          duration: 900,
        })
      }
    },
    onCopy(e) {
      this.$toast.success('URL Copied', {
        duration: 500,
      })
    },
    onError(e) {
      this.$toast.error('Error', {
        duration: 500,
      })
    },
  },
}
</script>
