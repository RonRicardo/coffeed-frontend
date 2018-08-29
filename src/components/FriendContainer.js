import React from "react";
import '../App.css';
import { fetchFriends, fetchPendingFriends, fetchPlans } from '../actions';
import { connect } from "react-redux";
import { Container, Divider, Header, Grid, Button, Segment } from 'semantic-ui-react'
import { FriendList, RecievedFriendRequests } from './FriendList';
import Schedule from './Schedule';
import Nav from './Nav';
import { PlansList } from './PlansList';
import { withRouter } from 'react-router-dom';
import PlansForm from './PlansForm';
import { Route, Switch } from 'react-router'

class FriendContainer extends React.Component {

  componentDidMount() {
    this.props.fetchFriends()
    this.props.fetchPendingFriends()
    this.props.fetchPlans()
  }

  state = {
    currentFriends: true,
  }

  handleClick = () => {
      this.setState(prevState => ({
        currentFriends: !prevState.currentFriends
      }));
  }


  render() {
    return (
    <Container>
    <Header as='h2'  textAlign='center'>
     Coffee'd
    </Header>
    <Nav/>
    <Segment>
     <Grid relaxed >
       <Grid.Row>
         <Grid.Column width={6}>
          <div className="friendList">
            <Switch>
              <Route exact path="/friend_requests" component={RecievedFriendRequests} />
              <Route exact path="/friends" component={FriendList} />
              <Route exact path="/new_plan" component={Schedule} />
            </Switch>
           </div>
          </Grid.Column>
          <Grid.Column width={10}>
            <div className="plansList">
              <PlansList plans={this.props.plans}/>
            </div>
          <Divider />
            <Route exact path="/new_plan" component={PlansForm} />
          </Grid.Column>
       </Grid.Row>
    </Grid>
    </Segment>
    </Container>
    );
  }
}


export default withRouter(connect(null, { fetchFriends, fetchPendingFriends, fetchPlans })(FriendContainer))
