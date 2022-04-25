<template>
  <div>
    <div class="navbar is-fixed-top is-transparent">
      <div class="container">
        <div class="navbar-brand is-family-secondary">
          <nuxt-link to="/" class="navbar-item">
            <nuxt-img
              preload
              format="webp"
              src="icons/Icon-72x72.png"
              alt="Kavithai Site"
            />
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
    </div>
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
  background-color: #172a3a;
  border-radius: 8px;
}
::-webkit-scrollbar-thumb:hover {
  background-color: #74b3ce;
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
  background-color: #09bc8a;
  margin-bottom: 30px;
  font-weight: 700;
}
.navbar a {
  text-transform: uppercase;
  font-weight: bold;
  color: #5f5f56;
  padding-left: 10px;
  padding-right: 10px;
}
.navbar-burger > span {
  height: 5px;
  background-color: #e5e90f;
}
a.navbar-item {
  font-weight: 700;
  font-size: 14px;
}
.navbar-menu {
  padding-right: 1em;
}
.read-random {
  display: flex;
  flex-grow: 0.3;
  font-family: 'Fira Code', monospace;
  font-weight: 800;
  font-size: 16px;
  background: #172a3a;
  color: #f8f8f8;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.3);
  border-radius: 32px;
  padding: 10px;
  -moz-osx-font-smoothing: grayscale;
  -webkit-font-smoothing: antialiased !important;
  -moz-font-smoothing: antialiased !important;
  text-rendering: optimizelegibility !important;
}
.read-random:hover {
  color: white;
  text-decoration: none;
}
.dark-mode .read-random {
  display: flex;
  flex-grow: 0.3;
  font-family: 'Fira Code', monospace;
  font-weight: 800;
  font-size: 16px;
  background: #eb90e6;
  color: #3d3636;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.3);
  border-radius: 32px;
  padding: 10px;
  -moz-osx-font-smoothing: grayscale;
  -webkit-font-smoothing: antialiased !important;
  -moz-font-smoothing: antialiased !important;
  text-rendering: optimizelegibility !important;
}
.dark-mode .read-random:hover {
  color: rgb(18, 34, 36);
  text-decoration: none;
}
.dark-mode body {
  background-color: #091a28;
  color: #ebf4f1;
}
.dark-mode hr {
  border: 1px solid #028dff;
}
.dark-mode p {
  color: #ebf4f1;
}
.dark-mode a {
  color: #7044e7;
}
.dark-mode a:hover {
  color: #625fff;
}
.dark-mode .navbar a {
  text-transform: uppercase;
  font-weight: bold;
  color: #5f5f56;
  padding-left: 10px;
  padding-right: 10px;
}
.dark-mode h1,
h2,
h3,
h4,
h5,
h6 {
  color: #f1e7d0;
}
.dark-mode .card {
  background-color: #f1e7d0;
}
.sepia-mode body {
  background-color: #f1e7d0;
  color: #433422;
}
.sepia-mode .card {
  background-color: #f1e7d0;
}
.sepia-mode h1,
h2,
h3,
h4,
h5,
h6 {
  color: #2e2d29;
}
.input-box,
textarea,
.sign-button {
  width: 45rem !important;
  min-height: 3rem;
}
button {
  max-width: 100%;
}
.sign-button {
  font-weight: 500;
  font-size: 14px;
  text-transform: uppercase;
  padding: 12px;
  -moz-osx-font-smoothing: grayscale;
  -webkit-font-smoothing: antialiased !important;
  -moz-font-smoothing: antialiased !important;
  text-rendering: optimizelegibility !important;
}
.input {
  display: flex;
  flex-grow: 0.3;
  font-weight: 500;
  font-size: 14px;
  border-radius: 32px;
  padding: 23px;
  -moz-osx-font-smoothing: grayscale;
  -webkit-font-smoothing: antialiased !important;
  -moz-font-smoothing: antialiased !important;
  text-rendering: optimizelegibility !important;
}
.notification-more {
  background-color: #f1354e;
  color: rgb(204, 185, 185);
}
.read-more {
  display: flex;
  flex-grow: 0.3;
  font-weight: 600;
  font-size: 20px;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.3);
  border-radius: 30px;
  padding: 35px;
  text-align: center;
  justify-content: center;
  -moz-osx-font-smoothing: grayscale;
  -webkit-font-smoothing: antialiased !important;
  -moz-font-smoothing: antialiased !important;
  text-rendering: optimizelegibility !important;
}
</style>
