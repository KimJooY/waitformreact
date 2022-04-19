import './css/home.css';
import React from 'react';
import { BrowserRouter, Route,  } from "react-router-dom";
import LogIn from './pages/LogIn';
import Write from './pages/Write';
import Home from './pages/Home';
import SignUp from './pages/SignUp';
import Boards from './pages/Boards';
import MLResult from './pages/MLResult';
import AuthRoute from './control/AuthRoute';
import SelectedBoard from './pages/SelectedBoard';

const App = () => {
  return (
      <>
      <BrowserRouter>
            <Route path={process.env.PUBLIC_URL+"/"} component = {Home}  exact></Route>
            <Route path={process.env.PUBLIC_URL+"/login"} component = {LogIn}></Route>
            <AuthRoute path={process.env.PUBLIC_URL+"/write"} component = {Write}></AuthRoute>
            <AuthRoute path={process.env.PUBLIC_URL+"/boards"} exact component = {Boards}></AuthRoute>
            <AuthRoute path={process.env.PUBLIC_URL+"/boards/:boardId"} exact component = {SelectedBoard}></AuthRoute>
            <Route path={process.env.PUBLIC_URL+"/signup"} component = {SignUp}></Route>
            <Route path={process.env.PUBLIC_URL+"/result"} component = {MLResult}></Route>
      </BrowserRouter>
      </>
   );
}

export default App;
