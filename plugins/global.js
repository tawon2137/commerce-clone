/**
 * global Css import
 *
 */

import 'assets/css/index.css';
import 'vuetify/dist/vuetify.min.css' // Ensure you are using css-loader

import Vue from 'vue';
import Vuetify from 'vuetify'

Vue.use(Vuetify);

import AppLogo from '~/components/AppLogo.vue'

import slideContainer from '~/plugins/carousel/vue/container.vue';
import slideItem from '~/plugins/carousel/vue/item.vue';





Vue.component('app-logo', AppLogo);
Vue.component('slide-container', slideContainer);
Vue.component('slide-item', slideItem);
