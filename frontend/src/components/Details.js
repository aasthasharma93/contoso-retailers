import React, { Component } from "react";
import { connect } from "react-redux";
import { Link } from "react-router-dom";
class Details extends Component {
  render() {
    return (
      <div className="container">
        <div className="cart">
          <h5>Title: {this.props.selectedItem.title}</h5>

          <div className="item-img">
            <img
              src={this.props.selectedItem.img}
              alt={this.props.selectedItem.img}
              className=""
            />
          </div>

          <div className="item-desc">
            <span className="title">{this.props.selectedItem.title}</span>
            <p>{this.props.selectedItem.desc}</p>
            <p>
              <b>Author: {this.props.selectedItem.author}$</b>
            </p>
            <p>
              <b>Quantity: {this.props.selectedItem.quantity}</b>
            </p>
            <p>
              <b>
                Item ID: {this.props.selectedItem.id}, ISBN:{" "}
                {this.props.selectedItem.isbn}
              </b>
            </p>
            <p>
              <b>
                Dimensions: {this.props.selectedItem.width}x
                {this.props.selectedItem.height}
              </b>
            </p>
            <p>
              <b>Synopsis: {this.props.selectedItem.info}</b>
            </p>
            <div className="add-remove">
              <Link to="/">
                <a className="waves-effect waves-light btn">Back to Books</a>
              </Link>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
const mapStateToProps = (state) => {
  return {
    items: state.items,
    selectedItem: state.selectedItem,
  };
};
export default connect(mapStateToProps)(Details);
