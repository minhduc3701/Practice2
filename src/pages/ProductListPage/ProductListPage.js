import React from "react";

import ProductList from "./../../components/ProductList/ProductList";

class ProductListPage extends React.Component {
  render() {
    return (
      <div className="container">
        <div className="row">
          <div className="col-xs-12 col-sm-12 col-md-12 col-lg-12">
            <button type="button" className="btn btn-info mb-10">
              Thêm Sản Phẩm
            </button>
            <ProductList></ProductList>
          </div>
        </div>
      </div>
    );
  }
}

export default ProductListPage;