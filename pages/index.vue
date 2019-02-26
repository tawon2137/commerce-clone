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
          <img :src="require('assets/img/updated-layouts-board.png')" width="766" alt="">
        </div>
      </section>
      <section id="teams">
        <div class="layout-two-col">
          <img :src="require('assets/img/updated-layouts-mobile.png')" width="618" alt="">
          <div class="text-area">
            <h3 class="title">Information at a glance</h3>
            <p class="desc">Dive into the details by adding comments, attachments, due dates, and more directly to Trello cards. Collaborate on projects from beginning to end.</p>
          </div>
        </div>
      </section>
      <section id="demo">
        <h3 class="title">See how it works</h3>
        <p class="desc">Go from idea to action in seconds with Trello’s intuitively simple boards, lists, and cards.</p>
        <!-- slide area -->
        <slide-container id="about-carousel" class="layout-one-col">
          <slide-item class="" v-for="(carousel, index) in carouselItems" :key="index">
            <img class="carousel-background" :src="carousel.image" />
            <div class="carousel-caption">
              {{carousel.text}}
            </div>
          </slide-item>
        </slide-container>
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
       <v-alert
      :value="true"
      type="success"
    >
      This is a success alert.
    </v-alert>
    </main>
  </section>
</template>

<script>
import AppHeader from '~/components/AppHeader.vue'

export default {
  components: {
    AppHeader
  },
  data() {
    return {
      carouselItems: [
        {
         image: require('assets/img/slide-1.png'),
         text: ' Create a board for any project, give it a name, and invite your team. '
        },
        {
         image: require('assets/img/slide-2.png'),
         text: ' Create cards for tasks to complete or information you want to organize. '
        },
        {
         image: require('assets/img/slide-3.png'),
         text: ' Create cards for tasks to complete or information you want to organize. '
        },
        {
         image: require('assets/img/slide-4.png'),
         text: ' Click on a card to add details, due dates, checklists, comments, and more. '
        },
        {
         image: require('assets/img/slide-5.png'),
         text: ' Move them across lists to show progress. Go from "To Do" to "Done" in no time! '
        }
      ]
    }
  }
}
</script>

<style>
#about-carousel {
  margin: 0 auto;
}

#about-carousel .slide-container__item{

}
.carousel-background {
  width: 100%;
  max-width: 880px !important;
  margin: 0 auto !important;
}

.carousel-caption {
  background: rgba(48,54,76,0.8);
  position: absolute;
  width: 100%;
  padding: 40px 40px 65px;
  font-size: 18px;
  left: 0;
  bottom: 0;
  text-align: center;
  font-weight: bold;
  max-width: 880px;
  left: 50%;
  color: white;
  transform: translateX(-50%);
  border-bottom-left-radius: 12px;
  border-bottom-right-radius: 12px;
}

.links {
  padding-top: 15px;
}
</style>

