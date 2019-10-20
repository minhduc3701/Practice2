import React from "react";

class NotFoundPage extends React.Component {
  render() {
    return (
      <div class="alert alert-warning">
        <button
          type="button"
          class="close"
          data-dismiss="alert"
          aria-hidden="true"
        >
          &times;
        </button>
        <h1>404 - Không tìm thấy page</h1>
      </div>
    );
  }
}

export default NotFoundPage;
