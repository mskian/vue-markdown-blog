<template>
  <div>
    <header class="navbar is-fixed-top is-transparent is-spaced">
      <div class="container">
        <div class="navbar-brand is-family-secondary">
          <nuxt-link to="/" class="navbar-item">
            <h1 class="is-size-4">Just Kavithai</h1>
          </nuxt-link>
          <!-- @click handler goes here, make sure to scroll a bit to see it. -->
          <a
            :aria-expanded="isActive"
            :class="{ 'is-active': isActive }"
            role="button"
            class="navbar-burger"
            aria-label="menu"
            data-target="collapse"
            @click="isActive = !isActive"
          >
            <span aria-hidden="true" />
            <span aria-hidden="true" />
            <span aria-hidden="true" />
          </a>
        </div>
        <div
          id="collapse"
          :class="{ 'is-active': isActive }"
          class="navbar-menu is-paddingless"
        >
          <nav class="navbar-end">
            <nuxt-link to="/" class="navbar-item">Home</nuxt-link>
            <nuxt-link to="/blog/" class="navbar-item">Blog</nuxt-link>
          </nav>
        </div>
      </div>
    </header>
    <br />
    <br />
    <Nuxt />
  </div>
</template>

<script>
export default {
  name: 'HomeDefault',
  data() {
    return {
      // control variables
      isActive: false,
      showNavbar: true,
    }
  },
  head() {
    return {
      script: [
        { src: 'https://identity.netlify.com/v1/netlify-identity-widget.js' },
      ],
    }
  },
  mounted() {
    /* eslint-disable no-console */
    console.log(
      '%cJust ❤︎ Kavithai!',
      'background-color:white;padding:8px 16px;border-radius:8px;font-size:32px;color:red;'
    )
  },
}
</script>

<style>
::-webkit-scrollbar {
  width: 8px;
  height: 8px;
}
::-webkit-scrollbar-thumb {
  background-color: rgba(106, 9, 231, 0.302);
  border-radius: 8px;
}
::-webkit-scrollbar-thumb:hover {
  background-color: rgba(247, 18, 189, 0.5);
}
html,
body {
  height: 100%;
}
body {
  font-family: 'Baloo Thambi 2', cursive;
  font-size: 16px;
  font-weight: 500;
  background-color: #ffffff;
  color: rgba(0, 0, 0, 0.6);
  font-weight: 400;
  line-height: 1.618;
  -webkit-font-smoothing: antialiased;
  -moz-font-smoothing: grayscale;
  overflow-x: hidden;
  word-wrap: break-word;
}
.post-content {
  letter-spacing: 0.03em;
  word-wrap: break-word;
  font-family: 'Baloo Thambi 2', cursive;
  font-size: 16px;
  color: #221f1f;
  -moz-osx-font-smoothing: grayscale;
  -webkit-font-smoothing: antialiased !important;
  -moz-font-smoothing: antialiased !important;
  text-rendering: optimizelegibility !important;
}
.post-content,
h1 {
  font-size: 23px;
}
h1,
h2,
h3,
h4,
h5,
h6 {
  font-family: 'Baloo Thambi 2', cursive;
  font-weight: bold;
  line-height: 1.5;
  margin: 0;
  text-transform: capitalize;
}
hr {
  border: 1px solid #2b0c0c;
}
.content h1 {
  font-size: 28px;
  font-weight: bold;
}
.content h2 {
  font-size: 23px;
  font-weight: bold;
}
.content h3 {
  font-size: 22px;
}
.content h4 {
  font-size: 20px;
}
a {
  color: rgb(73, 53, 253);
}
a:hover {
  color: #0f00df;
}
p {
  letter-spacing: 0.03em;
  word-wrap: break-word;
  font-size: 18px;
  color: #221f1f;
  -moz-osx-font-smoothing: grayscale;
  -webkit-font-smoothing: antialiased !important;
  -moz-font-smoothing: antialiased !important;
  text-rendering: optimizelegibility !important;
}
p a {
  color: #333;
  text-decoration: none;
  background: -webkit-linear-gradient(transparent 90%, #85cf9b 10%);
  background: -moz-linear-gradient(transparent 90%, #85cf9b 10%);
  background: linear-gradient(transparent 90%, #85cf9b 10%);
  -webkit-box-shadow: inset 0 0 0 0 #85cf9b;
  box-shadow: inset 0 0 0 0 #85cf9b;
  -webkit-transition: box-shadow ease 1s;
  -moz-transition: box-shadow ease 1s;
  transition: box-shadow ease 1s;
}
p a:hover {
  color: #fff;
  -webkit-box-shadow: inset 0 -100px 0 0 #85cf9b;
  box-shadow: inset 0 -100px 0 0 #85cf9b;
}
figure {
  margin: 0;
}
img {
  max-width: 100%;
}
pre,
code {
  overflow: auto;
  font-size: 14px;
  border-radius: 3px;
  border: 1px solid #60c17d;
}
pre > code,
code > code {
  border: none;
}
pre {
  padding: 1em;
}
code {
  padding: 0.1em;
}
blockquote {
  border-left: 2px solid #60c17d;
  padding-left: 1em;
  font-family: 'Baloo Thambi 2', cursive;
  font-size: 18px;
  font-style: italic;
}
.headline,
.post-headline {
  font-size: 4em;
  margin-bottom: 0.5em;
}
@media screen and (max-width: 600px) {
  .headline,
  .post-headline {
    font-size: 2em;
  }
}
.article-list {
  margin: 1em 0;
}
.pagination {
  margin: 2em 0;
  text-align: center;
}
.pagination a:hover {
  background-color: transparent;
  color: #333;
}
.pagination a,
.pagination span {
  padding: 7px 18px;
  border: 1px solid #eee;
  margin-left: -4px;
  margin-right: -4px;
  background-color: transparent;
  display: inline-block;
}
.video {
  width: 100%;
  height: 360px;
}
@media screen and (max-width: 1000px) {
  .video {
    height: 300px;
  }
}
@media screen and (max-width: 600px) {
  .video {
    height: 180px;
  }
}
#markdown-toc::before {
  content: 'Contents';
  font-weight: bold;
}
#markdown-toc ul {
  list-style: decimal;
}
#markdown-toc {
  border: 1px solid #60c17d;
  padding: 1.5em;
  list-style: decimal;
  display: inline-block;
}
.theme {
  cursor: pointer;
}
footer {
  position: relative;
  top: 2em;
}
.links a {
  margin-right: 1em;
}
.copy {
  color: rgb(32, 21, 21);
}
.divider {
  margin: 1em 0;
}
.meta {
  font-size: 14px;
  color: #4516f0de;
  text-transform: uppercase;
  font-weight: bold;
  -moz-osx-font-smoothing: grayscale;
  -webkit-font-smoothing: antialiased !important;
  -moz-font-smoothing: antialiased !important;
  text-rendering: optimizelegibility !important;
}
table {
  border-collapse: collapse;
  margin: 0;
  padding: 0;
  width: 100%;
  table-layout: fixed;
}
table tr {
  background-color: #f8f8f8;
  padding: 0.35em;
}
table th,
table td {
  padding: 0.625em;
  text-align: center;
}
table th {
  font-size: 0.85em;
  letter-spacing: 0.1em;
  text-transform: uppercase;
}
.navbar {
  background-color: #ffd900;
  margin-bottom: 30px;
  font-weight: 700;
}
.navbar a {
  text-transform: uppercase;
  font-weight: bold;
  color: #5a5a5a;
  padding-left: 10px;
  padding-right: 10px;
}
.navbar-burger > span {
  height: 5px;
  background-color: #6a67ce;
}
a.navbar-item {
  font-weight: 700;
  font-size: 14px;
}

.navbar-menu {
  padding-right: 1em;
}
</style>
