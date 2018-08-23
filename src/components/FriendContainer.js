import React from "react";
import '../App.css';
import { fetchFriends, fetchPendingFriends, fetchPlans } from '../actions';
import { connect } from "react-redux";
import { Container, Divider, Header, Grid, Button } from 'semantic-ui-react'
import { FriendList, RecievedFriendRequests } from './FriendList';
import Nav from './Nav';
import { PlansList } from './PlansList';
import PlansForm from './PlansForm';

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
     Girl I guess
    </Header>
    <Nav/>
   <Grid relaxed >
     <Grid.Row>
       <Grid.Column width={6}>
        <div className="friendList">
        <br/>
         {this.state.currentFriends ?
          <RecievedFriendRequests />
         :
          <FriendList />
        }
         </div>
        </Grid.Column>
        <Grid.Column width={10}>
          <div className="plansList">
            <PlansList plans={this.props.plans}/>
          </div>
        <Divider />
           <PlansForm friends={this.props.friends} />
        </Grid.Column>
     </Grid.Row>
   </Grid>
    </Container>
    );
  }
}


export default connect(null, { fetchFriends, fetchPendingFriends, fetchPlans })(FriendContainer)
