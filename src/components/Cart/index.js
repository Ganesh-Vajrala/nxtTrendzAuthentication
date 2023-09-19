import {Component} from 'react'
import Header from '../Header'
import './index.css'

export default class Cart extends Component {
  render() {
    return (
      <>
        <Header />
        <div className="product-container">
          <img
            className="product-img"
            src="https://assets.ccbp.in/frontend/react-js/nxt-trendz-cart-img.png"
            alt="cart"
          />
        </div>
      </>
    )
  }
}
