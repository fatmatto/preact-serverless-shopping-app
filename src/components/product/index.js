import { h, Component } from 'preact';
import style from './style';

export default class Product extends Component {
  render() {
    
    var imageStyle = {
      "backgroundImage" : `url(${this.props.product.images[0]}`
    }
    return (

     <div class={style.product}>

      <div class={style.product__title}>{this.props.product.name}</div>
      <div class={style.product__price}>$ {this.props.product.price}</div>
      <div class={style.product__image} style={imageStyle}></div>

     </div>
    );
  }
}
