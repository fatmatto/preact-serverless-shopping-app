import { h, Component } from 'preact';
import style from './style';
import { Link } from 'preact-router/match';
import { route } from 'preact-router';

export default class Product extends Component {


  constructor(props) {
    super(props);
    
  }

  viewProduct() {
    var href = "/product/";
    if (this.props.product.slug)
      href += this.props.product.slug;
    else
      href += String(this.props.product.id);

    //history.pushState({ product : this.props.product }, href)
    route(href);
  }
  render() {
    
    var imageStyle = {
      "backgroundImage" : `url(${this.props.product.images[0]}`
    }
   

    return (
       <div class={style.product} onClick={(event) => {this.viewProduct(event)}  }>

        <div class={style.product__title}>{this.props.product.name}</div>
        <div class={style.product__price}>$ {this.props.product.price}</div>
        <div class={style.product__image} style={imageStyle}></div>

       </div>
    );
  }
}
