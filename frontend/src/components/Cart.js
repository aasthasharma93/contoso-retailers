import React, { Component } from "react";
import { connect } from "react-redux";
import { Link } from "react-router-dom";
import {
  getCart,
  removeItem,
  addQuantity,
  subtractQuantity,
} from "./actions/cartActions";

class Cart extends Component {
  constructor(props) {
    super(props);

    this.state = {
      username: "",
    };
  }
  componentDidMount() {
    let username = this.props.username;
    this.setState({ username: username });
    this.props.getCart(username);
  }
  //to remove the item completely
  handleRemove = (id) => {
    this.props.removeItem(id, this.state.username);
  };
  //to add the quantity
  handleAddQuantity = (id) => {
    this.props.addQuantity(id, this.state.username);
  };
  //to substruct from the quantity
  handleSubtractQuantity = (id) => {
    this.props.subtractQuantity(id, this.state.username);
  };
  render() {
    let addedItems = this.props.items.length ? (
      this.props.items.map((item) => {
        let showIncrement = item.book.quantity > 0 ? true : false;
        let showDecrement = item.inCartQuantity > 0 ? true : false;
        return (
          <li className="collection-item avatar" key={item.id}>
            <div className="item-img">
              <img src={item.book.img} alt={item.book.img} className="" />
            </div>

            <div className="item-desc">
              <span className="title">{item.book.title}</span>
              <p>{item.desc}</p>
              <p>
                <b>Stock Quantity: {item.book.quantity}</b>
              </p>
              <p>
                <b>Quantity: {item.inCartQuantity}</b>
              </p>
              <div className="add-remove">
                <div
                  style={{ display: showIncrement ? "inline-block" : "none" }}
                >
                  <Link to="/cart">
                    <i
                      className="material-icons"
                      onClick={() => {
                        this.handleAddQuantity(item.book.id);
                      }}
                    >
                      arrow_drop_up
                    </i>
                  </Link>
                </div>
                <div
                  style={{ display: showDecrement ? "inline-block" : "none" }}
                >
                  <Link to="/cart">
                    <i
                      className="material-icons"
                      onClick={() => {
                        this.handleSubtractQuantity(item.book.id);
                      }}
                    >
                      arrow_drop_down
                    </i>
                  </Link>
                </div>
              </div>
              <button
                className="waves-effect waves-light btn pink remove"
                onClick={() => {
                  this.handleRemove(item.book.id);
                }}
              >
                Remove
              </button>
            </div>
          </li>
        );
      })
    ) : (
      <p>Cart is empty.</p>
    );
    return (
      <div className="container">
        <div className="cart">
          <h5>You have ordered:</h5>
          <ul className="collection">{addedItems}</ul>
        </div>
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    items: state.addedItems,
    username: state.username,
  };
};
const mapDispatchToProps = (dispatch) => {
  return {
    getCart: (username) => {
      dispatch(getCart(username));
    },
    removeItem: (id, username) => {
      dispatch(removeItem(id, username));
    },
    addQuantity: (id, username) => {
      dispatch(addQuantity(id, username));
    },
    subtractQuantity: (id, username) => {
      dispatch(subtractQuantity(id, username));
    },
  };
};
export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Cart);
