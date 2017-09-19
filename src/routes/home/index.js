import { h, Component } from 'preact';
import style from './style';
import Product from '../../components/product'

import client from '../../lib/client';

export default class Home extends Component {

  constructor(props) {
    super(props);

    this.state = {
      products : [
    ]
  }


    
  }

  componentDidMount() {
    
   client.products.list()
   .then( response => {
    this.setState({ products : response.data })
   })
   .catch( error => {
    console.log(error)
   })
  }

	render() {
    const listProducts = this.state.products.map( product => 
      <div class="col-md-3">
        <Product product={product}/>
      </div>
    )
		return (
			<div class={style.home}>
        <div class="row">
				  {listProducts}
        </div>
        <div class="row" style="margin-top:50px;">
          <div class="col-md-4">
            <div class={style.well}>
              <h3>Marketing block.</h3>
              <p>Lorem ipsum dolor sit amet</p>
            </div>
          </div>
          <div class="col-md-4">
            <div class={style.well}>
              <h3>Marketing block.</h3>
              <p>Lorem ipsum dolor sit amet</p>
            </div>
          </div>
          <div class="col-md-4">
            <div class={style.well}>
              <h3>Marketing block.</h3>
              <p>Lorem ipsum dolor sit amet</p>
            </div>
          </div>
        </div>
			</div>
		);
	}
}
