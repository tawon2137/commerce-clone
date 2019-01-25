import bus from './event.bus';


export default {
  data() {
    return {
      isViewportScrolled: false
    }
  },
  methods: {
    checkRootPosition() {
      const win = window;
      const scrollY = win.pageYOffset;

      if(scrollY > 0 !== this.isViewportScrolled) {
        this.isViewportScrolled = !this.isViewportScrolled;
      }
    }
  },
  mounted() {
    bus.$on('root-scroll', _ => this.checkRootPosition());
    this.checkRootPosition();
  },
}


