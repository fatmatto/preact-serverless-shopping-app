import { h, Component } from 'preact';
import { Link } from 'preact-router/match';
import style from './style';

export default class Header extends Component {
	render() {
		return (

			<header>
				<div class={style.heading}>
				<h1>Store.</h1>
				<p>This is the home of your store</p>
				</div>
			<nav class="navbar navbar-expand-md navbar navbar-light">
      
      <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarsExampleDefault" aria-controls="navbarsExampleDefault" aria-expanded="false" aria-label="Toggle navigation">
        <span class="navbar-toggler-icon"></span>
      </button>

      <div class="collapse navbar-collapse" id="navbarsExampleDefault">
        <ul class="navbar-nav mr-auto">
          <li class="nav-item active">
            <a class="nav-link" href="/">Home <span class="sr-only">(current)</span></a>
          </li>
          <li class="nav-item">
            <a class="nav-link" href="#">Tshirts</a>
          </li>
          <li class="nav-item">
            <a class="nav-link" href="#">Jeans</a>
          </li>
          <li class="nav-item">
            <a class="nav-link" href="#">Sneakers</a>
          </li>
          <li class="nav-item">
            <a class="nav-link" href="#">Accessories</a>
          </li>
        </ul>

        <ul class="navbar-nav ml-auto">
          <li class="nav-item">
            <a class="nav-link" href="#">New arrivals</a>
          </li>
          <li class="nav-item">
            <a class="nav-link" href="#">Brands</a>
          </li>
          <li class="nav-item special-item">
            <a class="nav-link" href="#"><span>Cart (1)</span> <i class="fa fa-shopping-cart"></i></a>
          </li>
        </ul>
        
      </div>
    </nav>
    </header>
		);
	}
}
