<template>
  <section>
    <app-header />
    <main class="" role="main">
      <section id="hero">
        <div class="layout-two-col">
          <div class="text-area">
            <h1 class="title">Trello lets you work more collaboratively and get more done.</h1>
            <p class="desc">Trello’s boards, lists, and cards enable you to organize and prioritize your projects in a
              fun, flexible and rewarding way.</p>
            <p>
              <button class="btn btn--primary btn--large">Sign Up – It’s Free!</button>
            </p>
          </div>
          <img src="https://d2k1ftgv7pobq7.cloudfront.net/meta/p/res/images/308998dcb3ed5ab3d01217a4d24ffa03/hero-a.svg"
            alt="">
        </div>
      </section>
      <section id="collaborate">
        <div class="layout-two-col">
          <div class="text-area">
            <h3 class="title">Work with any team</h3>
            <p class="desc">Whether it’s for work, a side project or even the next family vacation, Trello helps your
              team stay organized.</p>
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
            <p class="desc">Dive into the details by adding comments, attachments, due dates, and more directly to
              Trello cards. Collaborate on projects from beginning to end.</p>
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
      </section>
      <section id="features">
        <div class="container">
          <div class="layout-centered">
            <div class="layout-centered__content">
              <h3 class="title">Trello your way</h3>
              <p class="desc">Use Trello the way your team works best. We’ve got the flexibility & features to fit any
                team’s style.</p>
            </div>
          </div>
          <ul class="layout-three-col">
            <li>
              <img :src="require('assets/img/updated-layouts-collab.png')" width="270">
              <h4 class="title small">
                The Team Playbook
              </h4>
              <p class="small">
                It’s easy to get your team up and running with Trello. We’ve collected all of the boards and tools you
                need to succeed in one handy resource.
              </p>
              <div>
                <button class="btn">Make A Game Plan</button>
              </div>
            </li>
            <li>
              <img :src="require('assets/img/updated-layouts-platform.png')" width="270">
              <h4 class="title small">
                A Productivity Platform
              </h4>
              <p class="small">
                Integrate the apps your team already uses directly into your workflow. Power-Ups turn Trello boards
                into living applications to meet your team's unique business needs.
              </p>
              <div>
                <button class="btn">Make A Game Plan</button>
              </div>
            </li>
            <li>
              <img :src="require('assets/img/updated-layouts-sync.png')" width="270">
              <h4 class="title small">
                Always In Sync
              </h4>
              <p class="small">
                No matter where you are, Trello stays in sync across all of your devices. Collaborate with your team
                anywhere, from sitting on the bus to sitting on the beach.
              </p>
              <div class="app-store">
                <a><img :src="require('assets/img/btn-appstore-black.png')"></a>
                <a><img :src="require('assets/img/btn-playstore-black.png')"></a>
              </div>
            </li>
          </ul>
        </div>
      </section>
      <div id="bottom-gradient">
        <section id="work-smarter" class="">
          <div class="container text-center layout-centered">
            <div class="layout-centered">
              <div class="layout-centered__content">
                <h3 class="title">Work smarter with Trello</h3>
                <p class="desc">Use Trello the way your team works best. We’ve got the flexibility & features to fit
                  any
                  team’s style.</p>
              </div>
            </div>
            <div class="logo-container">
              <img src="https://d2k1ftgv7pobq7.cloudfront.net/meta/p/res/images/42feb2498e08d8fbd357e19d331da908/logo-adobe.svg"
                width="165" height="37">
              <img src="https://d2k1ftgv7pobq7.cloudfront.net/meta/p/res/images/83b3c2b3542d1ce997306dd2c76a898d/logo-kickstarter.svg"
                width="207" height="24">
              <img src="https://d2k1ftgv7pobq7.cloudfront.net/meta/p/res/images/99b35981e7c571708532ba39f0764aeb/logo-national-geographic.svg"
                width="166" height="46">
              <img src="https://d2k1ftgv7pobq7.cloudfront.net/meta/p/res/images/4838c7256b43105d3abe0631ac1bb72c/logo-google.svg"
                width="143" height="46">
              <img src="https://d2k1ftgv7pobq7.cloudfront.net/meta/p/res/images/759e9aaacc706fd1f2d5f81b1a76b768/logo-fender.svg"
                width="153" height="55">
            </div>
            <div class="btn-container">
              <a href="/business-class" class="btn btn--secondary">Find out how →</a>
            </div>
          </div>
        </section>
        <section id="get-started">
           <div class="container">
            <div class="layout-centered">
              <div class="layout-centered__content">
                <h3 class="title">Start Planning Today</h3>
                <p class="desc">Sign up and become one of the millions of people around the world using Trello to get more done.</p>
                <p>
                  <button class="btn btn--primary btn--large">Get Started – It’s Free!</button>
                </p>
              </div>
            </div>
           </div>
        </section>
      </div>

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
        carouselItems: [{
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

  #about-carousel .slide-container__item {}

  .carousel-background {
    width: 100%;
    max-width: 880px !important;
    margin: 0 auto !important;
  }

  .carousel-caption {
    background: rgba(48, 54, 76, 0.8);
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
