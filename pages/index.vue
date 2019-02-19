<template>
  <section>
    <app-header />
    <main class="container">
      <section id="hero">
        <div class="layout-two-col">
          <div class="text-area">
            <h1 class="title">Trello lets you work more collaboratively and get more done.</h1>
            <p class="desc">Trello’s boards, lists, and cards enable you to organize and prioritize your projects in a fun, flexible and rewarding way.</p>
            <p>
              <button class="btn btn--primary btn--large">Sign Up – It’s Free!</button>
            </p>
          </div>
          <img src="https://d2k1ftgv7pobq7.cloudfront.net/meta/p/res/images/308998dcb3ed5ab3d01217a4d24ffa03/hero-a.svg" alt="">  
        </div>
      </section>
      <section id="collaborate">
        <div class="layout-two-col">
          <div class="text-area">
            <h3 class="title">Work with any team</h3>
            <p class="desc">Whether it’s for work, a side project or even the next family vacation, Trello helps your team stay organized.</p>
            <p>
              <button class="btn btn--secondary">Start doing →</button>
            </p>
          </div>
          <img src="https://d2k1ftgv7pobq7.cloudfront.net/meta/p/res/images/308998dcb3ed5ab3d01217a4d24ffa03/hero-a.svg" alt="">
        </div>
      
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


.links {
  padding-top: 15px;
}
</style>

