
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
 import {Router, Route, IndexRoute, browserHistory} from "react-router";
 import Layout from "./components/Layout";
 import Home from "./components/Home";
 import Users from "./components/Users";
 import Articles from "./components/Articles";
 const app = document.getElementById('app');
 ReactDOM.render(
     <Router history={browserHistory}>
         <Route path="/" component={Layout}>
             <IndexRoute component={Home}></IndexRoute>
             <Route path="users" component={Users}></Route>
             <Route path="articles" component={Articles}></Route>
         </Route>
     </Router>,
 app);
