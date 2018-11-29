import { Component, Vue } from 'vue-property-decorator';
import VueDoc from '@/components/VueDoc/VueDoc.vue'; // @ is an alias to /src

@Component({
  components: {
    VueDoc,
  },
})
export default class Documentation extends Vue {}
