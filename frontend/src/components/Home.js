import React, { Component } from "react";
import { connect } from "react-redux";
import { addToCart, getBooks, addToDetail } from "./actions/cartActions";
import { Link } from "react-router-dom";
class Home extends Component {
  componentDidMount() {
    this.props.getBooks();
  }
  handleClick = (id, username) => {
    this.props.addToCart(id, username);
  };

  handleDetail = (id) => {
    this.props.addToDetail(id);
  };

  render() {
    let isLoggedIn = this.props.loggedIn;
    let username = this.props.username;
    let itemList = this.props.items.map((item) => {
      let doAddToCart =
        item.quantity <= 0 || isLoggedIn === false ? false : true;
      return (
        <div className="card" key={item.id}>
          <div className="card-image">
            <div
              onClick={() => {
                this.handleDetail(item.id);
              }}
            >
              <Link to="/details">
                <img src={item.img} alt={item.title} />
              </Link>
            </div>
            {/* <span className="card-title">{item.title}</span>*/}
            <div style={{ display: doAddToCart ? "block" : "none" }}>
              <span
                to="/"
                className="btn-floating halfway-fab waves-effect waves-light red"
                onClick={() => {
                  this.handleClick(item.id, username);
                }}
              >
                <i className="material-icons">add</i>
              </span>
            </div>
          </div>
          <div className="card-content">
            <p>
              <b>{item.title}</b>
            </p>
            <p>{item.author}</p>
            <p>
              <b>Quantity: {item.quantity}</b>
            </p>
          </div>
        </div>
      );
    });

    return (
      <div className="container">
        <h3 className="center">Our Books</h3>
        <div
          className="center"
          style={{
            display: isLoggedIn === true ? "none" : "inline-block",
            color: "red",
          }}
        >
          {" "}
          <p className="center">
            <b>Please login to add to Cart!</b>
          </p>
        </div>
        <div className="box">{itemList}</div>
      </div>
    );
  }
}
const mapStateToProps = (state) => {
  return {
    items: state.items,
    selectedItem: state.selectedItem,
    loggedIn: state.loggedIn,
    username: state.username,
  };
};
const mapDispatchToProps = (dispatch) => {
  return {
    addToCart: (id, username) => {
      dispatch(addToCart(id, username));
    },
    getBooks: () => {
      dispatch(getBooks());
    },
    addToDetail: (id) => {
      dispatch(addToDetail(id));
    },
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Home);
