import { Component, Vue } from 'vue-property-decorator';
import Navbar from '@/components/nav-bar/NavBar.vue'; // @ is an alias to /src

@Component({
  components: {
    Navbar,
  },
})
export default class Workbench extends Vue {}
