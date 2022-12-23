import React, { PureComponent } from "react";
import { connect } from "react-redux";
import "./index.css";
import { requestDog, requestDogGood, requestDogBad } from "./redux/actions";

const fetchDog = (dispatch) => {
  dispatch(requestDog());
  return fetch("https://dog.ceo/api/breeds/image/random")
    .then((res) => res.json())
    .then(
      (data) => dispatch(requestDogGood(data)),
      (err) => dispatch(requestDogBad())
    );
};


class Page extends PureComponent {
  render() {
    return (
    <div className="App">
   <div className="wrapper">
        <div className="layer">
          <h1>{`Нажми на кнопку и получи изображение собакена :)`}</h1>
          <button onClick={() => fetchDog(this.props.dispatch)}>
            показать
          </button>
          {this.props.loading ? (
            <p>Loading...</p>
          ) : this.props.error ? (
            <p>Error</p>
          ) : (
            <p>
              <img src={this.props.url} alt="dogimages"></img>
            </p>
          )}
        </div>
      </div>
    </div>
    );
  };
};

const ConnectedApp = (state) => {
  console.log(state);
  return state;
};

export default connect(ConnectedApp)(Page);
