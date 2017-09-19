import { h, Component } from 'preact';
import style from './style';
import client from '../../lib/client';
export default class Product extends Component {
	state = {
		product : {

			images : []
		},
		category : {}
	};

	constructor(props) {
		super(props);
	}

	// gets called when this route is navigated to
	componentDidMount() {
		// Fetch product data
		client.products.list({ slug : this.props.matches.slug, expand : 'category' })
    .then( response => {
    	this.setState({ 
    		product : response.data[0],
    		category : response._embedded.categories[0]
    	})
    })
    .catch( error => {
    	console.log(error)
    })

	}


	addToCart() {

	}
	



	// Note: `slug` comes from the URL, courtesy of our router
	render({ slug }) {
		return (
			<div class={style.profile}>
				<h1>{this.state.product.name}</h1>
				<div class="small text-muted">{this.state.category.name}</div>
				<p>{this.state.product.description}</p>
				<div class="row">
					<div class="col-md-4">
						<img src={this.state.product.images[0]} class="img-responsive"/>
					</div>
					<div class="col-md-8">
						<div class={style.price}>{this.state.product.display_price}</div>
						<hr />
						<div>
							<button class="btn btn-primary">Add to cart</button>
						</div>
					</div>
				</div>
			</div>
		);
	}
}
