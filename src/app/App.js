import React from 'react';
import { createMemoryHistory /* , createBrowserHistory */ } from 'history';

import Link from '@material-ui/core/Link';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import { Switch, Route, BrowserRouter } from 'react-router-dom';

import PopupPage from '../popup/popup';
import test from '../popup/test';

import './App.css';

function App() {
  const history = createMemoryHistory();
  let url = window.location.href;
  console.log('URL==================', url);

  return (
    <BrowserRouter history={history}>
      <Switch>
        <Route path='/popup.html' component={PopupPage} />
        <Route path='/test' component={test} />
      </Switch>
    </BrowserRouter>
  );

  if (url.includes('popup.html')) {
    return <PopupPage />;
  } else {
    /*
    else if (url.includes('options.html')) {
        return (
            <OptionPage />
        );
    }
    */
    // it's for test, construct an index page with links
    return (
      <List>
        <ListItem>
          <Link href='options.html'>Options Page</Link>
        </ListItem>
        <ListItem>
          <Link href='popup.html'>Popup Page</Link>
        </ListItem>
      </List>
    );
  }
}

export default App;
