import React from "react";

class ProductActionPage extends React.Component {
  render() {
    return (
      <div className="container">
        <div className=" col-xs-6 col-sm-6 col-md-6 col-lg-6">
          <form>
            <legend>Thêm Sản Phẩm</legend>

            <div className="form-group">
              <label>Tên Sản Phẩm :</label>
              <input
                type="text"
                className="form-control"
                placeholder="Input field"
              />
            </div>
            <div className="form-group">
              <label>Giá Sản Phẩm :</label>
              <input
                type="text"
                className="form-control"
                placeholder="Input field"
              />
            </div>
            <div className="form-group">
              <label>Tình Trạng :</label>

              <div className="checkbox">
                <label>
                  <input type="checkbox" value="" />
                  Còn Hàng
                </label>
              </div>
            </div>
            <button type="submit" className="btn btn-primary mr-10">
              Lưu Lại
            </button>
            <button type="button" className="btn btn-danger">
              Hủy
            </button>
          </form>
        </div>
      </div>
    );
  }
}

export default ProductActionPage;
