import React from "react";

class ProductItem extends React.Component {
  render() {
    let { product, index } = this.props;
    let status = product.status ? "Còn Hàng" : "Sold Out";
    let color = product.status ? "warning" : "info";
    return (
      <tr>
        <td>{index + 1}</td>
        <td>{product.id}</td>
        <td>{product.name}</td>
        <td>{product.price}$</td>
        <td>
          <span className={`label label-${color}`}>{status}</span>
        </td>
        <td>
          <button type="button" className="btn btn-success mr-10">
            Sửa
          </button>

          <button type="button" className="btn btn-danger">
            Xóa
          </button>
        </td>
      </tr>
    );
  }
}

export default ProductItem;
