import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import MainLayout from './components/layout/MainLayout/MainLayout';
import { StylesProvider } from '@material-ui/core/styles';
import { createMuiTheme } from '@material-ui/core/styles';
import { ThemeProvider } from '@material-ui/styles';

import Login from './components/views/Login/Login';
import Dashboard from './components/views/Dashboard/Dashboard';
import Kitchen from './components/views/Kitchen/Kitchen';

import Tables from './components/views/Tables/Table';
import TablesBookingId from './components/views/Tables/TableBookingId';
import TablesBookingNew from './components/views/Tables/TableBookingNew';
import TablesEventsId from './components/views/Tables/TableEventId';
import TablesEventsNew from './components/views/Tables/TableEventsNew';

import WaiterNewOrder from './components/views/Waiter/WaiterNewOrder';
import WaiterOrderId from './components/views/Waiter/WaiterOrderId';
import Waiter from './components/views/Waiter/Waiter';

const theme = createMuiTheme({
  palette: {
    primary: { main: '#2B4C6F'},
    //secondary: { main: '#11cb5f', },
  },
});

function App() {
  return (
    <div className="App">
      <BrowserRouter basename={'/panel'}>
        <StylesProvider injectFirst>
          <ThemeProvider theme={theme}>
            <MainLayout>
              <Switch>
                <Route exact path={process.env.PUBLIC_URL + '/login'} component={Login} />
                <Route exact path={process.env.PUBLIC_URL + '/'} component={Dashboard} />
                <Route exact path={process.env.PUBLIC_URL + '/kitchen'} component={Kitchen} />

                <Route exact path={process.env.PUBLIC_URL + '/tables'} component={Tables} />
                <Route exact path={process.env.PUBLIC_URL + '/tables/booking/:id'} component={TablesBookingId} />
                <Route exact path={process.env.PUBLIC_URL + '/tables/booking/new'} component={TablesBookingNew} />
                <Route exact path={process.env.PUBLIC_URL + '/tables/events/:id'} component={TablesEventsId} />
                <Route exact path={process.env.PUBLIC_URL + '/tables/events/new'} component={TablesEventsNew} />

                <Route exact path={process.env.PUBLIC_URL + '/waiter'} component={Waiter} />
                <Route exact path={process.env.PUBLIC_URL + '/waiter/order/:id'} component={WaiterOrderId} />
                <Route exact path={process.env.PUBLIC_URL + '/waiter/order/new'} component={WaiterNewOrder} /> 
              </Switch>
            </MainLayout>
          </ThemeProvider>
        </StylesProvider>
      </BrowserRouter>
    </div>
  );
}

export default App;
