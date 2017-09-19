import { h, Component } from 'preact';
import style from './style'

export default class Footer extends Component {
  render() {
    return (
     <footer>
       <h3 class={style.footer__title}>Store.</h3>
       <div class="text-muted small text-center">
         <div>123 Evergreen Terrace</div>
         <div>Springfield, CA</div>
       </div>
     </footer>
    );
  }
}
