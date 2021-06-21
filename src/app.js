import React from 'react';
import Header from './header';
import IsLoadingAndError from './IsLoadingAndError';
import Footer from './footer';
import LoginButton from './LoginButton';
import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";

import LogoutButton from './LogoutButton';
import Profile from './Profile';
import BestBooks from './myFavoriteBooks';
import 'bootstrap/dist/css/bootstrap.min.css';


class App extends React.Component {

  render() {
    console.log('app', this.props)
    return(
      <>
        <Router>
          <IsLoadingAndError>
            <Header />
              <Switch>
                <Route exact path="/">
                
                  {/* TODO: if the user is logged in, render the `MyFavoriteBooks` component, if they are not, render the `Login` component */}
                 <BestBooks />
                  </Route>

                  <Route path='/Profile'>
                  </Route>
                {/* TODO: add a route with a path of '/profile' that renders a `Profile` component */}
              </Switch>
              <LoginButton />
             < Profile />
              
             < LogoutButton />
            
            <Footer />
          </IsLoadingAndError>
        </Router>
      </>
    )
  }
}

export default App;
