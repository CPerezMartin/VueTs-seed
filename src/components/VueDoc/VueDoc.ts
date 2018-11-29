import { Component, Prop, Vue } from 'vue-property-decorator';

@Component
export default class VueDoc extends Vue {
  @Prop() private msg!: string;
}
