import React from "react";
import { connect } from "react-redux";

import ProductList from "./../components/ProductList/ProductList";
import ProductItem from "./../components/ProductItem/ProductItem";
import * as Actions from "./../actions/index";

class ProductsContainers extends React.Component {
  componentDidMount() {
    this.props.onFetchProducts();
  }

  showProducts = products => {
    let result = null;
    if (products.length > 0) {
      result = products.map((product, index) => {
        return (
          <ProductItem
            key={index}
            index={index}
            product={product}
          ></ProductItem>
        );
      });
    }
    return result;
  };

  render() {
    let { products } = this.props;
    return <ProductList>{this.showProducts(products)}</ProductList>;
  }
}

const mapStateToProps = state => {
  return {
    products: state.products
  };
};

const mapDispatchToProps = (dispatch, props) => {
  return {
    onFetchProducts: () => {
      dispatch(Actions.actFetchProductsRequest());
    }
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(ProductsContainers);
