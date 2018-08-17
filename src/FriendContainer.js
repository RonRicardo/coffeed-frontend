import React from "react";
import FriendCard from "./FriendCard";
import { fetchFriends, fetchPendingFriends } from './actions';
import { connect } from "react-redux";
import { Container, Divider, Grid, Header, Icon } from 'semantic-ui-react'
import FriendRequestList from './FriendRequestList';
import FriendList from './FriendList';

class FriendContainer extends React.Component {

  componentDidMount() {
    this.props.fetchFriends()
    this.props.fetchPendingFriends()
  }

  render() {
    // console.log(this.props)
    // const fetchedFriends = this.props.friends.map(friend => {
    //   return <FriendCard {...friend} key={friend.id} />;
    // });
    // const fetchedPendingFriends = this.props.pendingFriends.map(friend => {
    //   return <FriendRequest {...friend} key={friend.id} />;
    // });
    return (
    <Container>
      {/* Heads up! We apply there some custom styling, you usually will not need it. */}
      <style>{`
        html, body {
          background-color: #efeae3;
        }

        #friendSideBar {
          justify-content: center;

        }

        #friendBottomBox {
          align-content: center;
        }

        p {
          align-content: center;
          background-color: #c9a674;
          color: #fff;
          display: flex;
          flex-direction: column;
          justify-content: center;
          min-height: 6em;
        }
      }
      `}</style>

      <Header as='h2' icon inverted textAlign='center'>
        Hey hey hey
      </Header>
      <Divider />
        <Container id="friendSideBar">
                <FriendRequestList friends={this.props.pendingFriends} />
        </Container>
        <Container id="friendBottomBox">
                <FriendList friends={this.props.friends} />
        </Container>
    </Container>
    );
  }
}


export default connect((state)=> ({friends: state.friends, pendingFriends: state.pendingFriends}), { fetchFriends, fetchPendingFriends })(FriendContainer)
