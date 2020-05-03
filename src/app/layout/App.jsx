import React, { Component, Fragment } from "react";
import EventDashboard from "../../features/event/EventDashboard/EventDashboard";
import NavBar from "../../features/nav/NavBar/NavBar";
import { Container } from "semantic-ui-react";
import { Route } from "react-router-dom";
import HomePage from "../../features/home/HomePage";
import EventDetailedPage from "../../features/event/EventDetailed/EventDetailedPage";
import PeopleDashboard from "../../features/user/PeopleDashboard/PeopleDashboard";
import SettingsDashboard from "../../features/user/Settings/SettingsDashboard";
import UserDetailedPage from "../../features/user/UserDetailed/UserDetailedPage";
import EventForm from "../../features/event/EventForm/EventForm";
import TestComponent from "../../features/testarea/TestComponent";

class App extends Component {
  render() {
    return (
      <Fragment>
        <Route exact path='/' component={HomePage}></Route>
        <Route
          path='/(.+)'
          render={() => (
            <Fragment>
              <NavBar></NavBar>
              <Container className='main'>
                <Route exact path='/' component={HomePage}></Route>
                <Route path='/events' component={EventDashboard}></Route>
                <Route path='/events/:id' component={EventDetailedPage}></Route>
                <Route path='/people' component={PeopleDashboard}></Route>
                <Route path='/profile/:id' component={UserDetailedPage}></Route>
                <Route path='/settings' component={SettingsDashboard}></Route>
                <Route path='/createEvent' component={EventForm}></Route>
                <Route path='/test' component={TestComponent} />
              </Container>
            </Fragment>
          )}
        />
      </Fragment>
    );
  }
}

export default App;
