import React, { PureComponent } from "react";
import { connect } from "react-redux";
import "./styles.css";
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

function App() {
  return (
    <div className="App">
      <header className="header">

      </header>
    </div>
  );
}

export default App;
