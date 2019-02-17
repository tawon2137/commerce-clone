<template>
  <section>
    <app-header />
    <main class="container">
      <section>
        <h3>Trello lets you work more collaboratively and get more done.</h3>
        <p>Trello’s boards, lists, and cards enable you to organize and prioritize your projects in a fun, flexible and rewarding way.</p>
        <button>Sign Up – It’s Free!</button>
        <img src="https://d2k1ftgv7pobq7.cloudfront.net/meta/p/res/images/308998dcb3ed5ab3d01217a4d24ffa03/hero-a.svg" alt="">
      </section>
      <section>
        <h3>Work with any team</h3>
        <p>Whether it’s for work, a side project or even the next family vacation, Trello helps your team stay organized.</p>
        <button>Start doing →</button>
        <img src="https://d2k1ftgv7pobq7.cloudfront.net/meta/p/res/images/308998dcb3ed5ab3d01217a4d24ffa03/hero-a.svg" alt="">
      </section>
      <section>
        <h3>Information at a glance</h3>
        <p>Dive into the details by adding comments, attachments, due dates, and more directly to Trello cards. Collaborate on projects from beginning to end.</p>
        <img src="https://d2k1ftgv7pobq7.cloudfront.net/meta/p/res/images/308998dcb3ed5ab3d01217a4d24ffa03/hero-a.svg" alt="">
      </section>
      <section>
        <h3>See how it works</h3>
        <p>Go from idea to action in seconds with Trello’s intuitively simple boards, lists, and cards.</p>
        <!-- slide area -->
        <img src="https://d2k1ftgv7pobq7.cloudfront.net/meta/p/res/images/308998dcb3ed5ab3d01217a4d24ffa03/hero-a.svg" alt="">
      </section>
      <section>
        <h3>Trello your way</h3>
        <p>Use Trello the way your team works best. We’ve got the flexibility & features to fit any team’s style.</p>
        <!-- slide area -->
        <img src="https://d2k1ftgv7pobq7.cloudfront.net/meta/p/res/images/308998dcb3ed5ab3d01217a4d24ffa03/hero-a.svg" alt="">
      </section>
      <section>
        <h3>Start Planning Today</h3>
        <p>Sign up and become one of the millions of people around the world using Trello to get more done.</p>
        <!-- slide area -->
        <button>Get Started – It’s Free!</button>
      </section>
    </main>
  </section>
</template>

<script>
import AppHeader from '~/components/AppHeader.vue'

export default {
  components: {
    AppHeader
  }
}
</script>

<style>
main.container {
  margin-top: 80px;
}
/* .container {
  max-height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  text-align: center;
} */

.title {
  font-family: "Quicksand", "Source Sans Pro", -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, "Helvetica Neue", Arial, sans-serif; /* 1 */
  display: block;
  font-weight: 300;
  font-size: 100px;
  color: #35495e;
  letter-spacing: 1px;
}

.subtitle {
  font-weight: 300;
  font-size: 42px;
  color: #526488;
  word-spacing: 5px;
  padding-bottom: 15px;
}

.links {
  padding-top: 15px;
}
</style>

