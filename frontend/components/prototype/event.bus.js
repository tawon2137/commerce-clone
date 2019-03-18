/** global Event Bus */

import Vue from 'vue'
const bus = new Vue();
const isClientSide = process.browser;


if(isClientSide) {
  window.onscroll = e => {
    bus.$emit('root-scroll', e);
  };
}



export default bus;
