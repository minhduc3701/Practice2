import React from "react";
import { Link } from "react-router-dom";
import { connect } from "react-redux";

import * as Actions from "./../../actions/index";

class ProductActionPage extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      id: "",
      txtName: "",
      txtPrice: "",
      cbstatus: false
    };
  }

  componentDidMount() {
    let { match } = this.props;
    if (match) {
      let id = match.params.id;
      this.props.onGetProduct(id);
    }
  }

  UNSAFE_componentWillReceiveProps(nextprops) {
    if (nextprops && nextprops.itemEditing) {
      let { itemEditing } = nextprops;
      this.setState({
        id: itemEditing.id,
        txtName: itemEditing.name,
        txtPrice: itemEditing.price,
        cbstatus: itemEditing.status
      });
    }
  }

  onChange = e => {
    let target = e.target;
    let name = target.name;
    let value = target.type === "checkbox" ? target.checked : target.value;
    this.setState({
      [name]: value
    });
  };

  onSave = e => {
    e.preventDefault();
    let { id, txtName, txtPrice, cbstatus } = this.state;
    let { history } = this.props;
    let product = {
      id: id,
      name: txtName,
      price: txtPrice,
      status: cbstatus
    };
    if (id) {
      this.props.onUpdateProduct(product);
    } else {
      this.props.onAddProduct(product);
    }
    history.goBack();
  };

  render() {
    let { txtName, txtPrice, cbstatus } = this.state;
    return (
      <div className="container">
        <div className=" col-xs-6 col-sm-6 col-md-6 col-lg-6">
          <form onSubmit={this.onSave}>
            <legend>Thêm Sản Phẩm</legend>

            <div className="form-group">
              <label>Tên Sản Phẩm :</label>
              <input
                type="text"
                className="form-control"
                placeholder="Tên Sản Phẩm"
                name="txtName"
                value={txtName}
                onChange={this.onChange}
              />
            </div>
            <div className="form-group">
              <label>Giá Sản Phẩm :</label>
              <input
                type="text"
                value={txtPrice}
                className="form-control"
                placeholder="Giá Sản Phẩm"
                name="txtPrice"
                onChange={this.onChange}
              />
            </div>
            <div className="form-group">
              <label>Tình Trạng :</label>

              <div className="checkbox">
                <label>
                  <input
                    type="checkbox"
                    name="cbstatus"
                    value={cbstatus}
                    onChange={this.onChange}
                    checked={cbstatus}
                  />
                  Còn Hàng
                </label>
              </div>
            </div>
            <button type="submit" className="btn btn-primary mr-10">
              Lưu Lại
            </button>
            <Link to="/product-list" className="btn btn-danger">
              Hủy
            </Link>
          </form>
        </div>
      </div>
    );
  }
}

const mapStateToProps = state => {
  return {
    itemEditing: state.itemEditing
  };
};

const mapDispatchToProps = (dispatch, props) => {
  return {
    onAddProduct: product => {
      dispatch(Actions.actAddProductsRequest(product));
    },
    onGetProduct: id => {
      dispatch(Actions.actGetProductsRequest(id));
    },
    onUpdateProduct: product => {
      dispatch(Actions.actUpdateProductsRequest(product));
    }
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(ProductActionPage);
