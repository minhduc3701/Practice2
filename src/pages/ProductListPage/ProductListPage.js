import React from "react";
import { Link } from "react-router-dom";

import ProductsContainers from "./../../containers/ProductsContainers";

class ProductListPage extends React.Component {
  render() {
    return (
      <div className="container">
        <div className="row">
          <div className="col-xs-12 col-sm-12 col-md-12 col-lg-12">
            <Link to="/product/add" className="btn btn-info mb-10">
              Thêm Sản Phẩm
            </Link>
            <ProductsContainers></ProductsContainers>
          </div>
        </div>
      </div>
    );
  }
}

export default ProductListPage;
