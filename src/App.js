import React, { Component } from "react";
import configureStore from "./store";
import { Provider } from "react-redux";
import { BrowserRouter } from "react-router-dom";
import Layout from "./layouts/Layout";
import Root from "./routes/Root";

const store = configureStore();
export default class App extends Component {
  render() {
    return (
      <Provider store={store}>
        <BrowserRouter>
          <Layout>
            <Root />
          </Layout>
        </BrowserRouter>
      </Provider>
    );
  }
}
