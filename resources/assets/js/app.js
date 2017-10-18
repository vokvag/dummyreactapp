
/**
 * First we will load all of this project's JavaScript dependencies which
 * includes React and other helpers. It's a great starting point while
 * building robust, powerful web applications using React + Laravel.
 */

require('./bootstrap');

/**
 * Next, we will create a fresh React component instance and attach it to
 * the page. Then, you may begin adding components to this application
 * or customize the JavaScript scaffolding to fit your unique needs.
 */

 import React from "react";
 import ReactDOM from "react-dom";
 import { Router, Route, IndexRoute, hashHistory } from "react-router";
 import { Provider } from "react-redux";
 import Layout from "./components/Layout";
 import Home from "./components/Home";
 import Users from "./components/Users";
 import NewUser from "./components/NewUser";
 import EditUser from "./components/EditUser";
 import Articles from "./components/Articles";
 import store from "./store";
 const app = document.getElementById('app');
 ReactDOM.render(
   <Provider store={store}>
     <Router history = { hashHistory }>
       <Route path = "/" component = { Layout }>
         <IndexRoute component = { Home }></IndexRoute>
         <Route path = "users" component = { Users }></Route>
         <Route path = "users/new" component = { NewUser }></Route>
         <Route path = "users/:id/edit" component = { EditUser }></Route>
         <Route path = "articles" component = { Articles }></Route>
       </Route>
     </Router>
   </Provider>,
     app);
