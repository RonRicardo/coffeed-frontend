import React from 'react';
import { Card, Button, Confirm } from 'semantic-ui-react'
import { RestfulAdapter } from './adapter'

class FriendRequest extends React.Component {

  state = {
    confirmationToggle: false,
    result: ''
  }

  handleConfirmationToggle = () => this.setState({ confirmationToggle: true })

  handleConfirm = () => {
    this.setState({ result: 'confirmed', confirmationToggle: false })
    RestfulAdapter.deleteFetch('users/1/friend_requests', this.props.id)
  }

  handleCancel = () => {
    this.setState({ result: 'cancelled', confirmationToggle: false })
  }

  handleAcceptFriend = () => {
    RestfulAdapter.editFetch('users/1/friend_requests', this.props.id)
  }

  render() {
    return (
    <div>
      <Card>
        <Card.Content>
          <Card.Header>
           <Card.Meta> {/*props.friend.username*/} </Card.Meta>
          </Card.Header>
          <p>{this.props.username} would like to grab coffee sometime!</p>
          <Button basic color='green' onClick={this.handleAcceptFriend}>Accept</Button> <Button basic color='red' onClick={this.handleConfirmationToggle}>Reject</Button>
         <Confirm
          open={this.state.confirmationToggle}
          onCancel={this.handleCancel}
          onConfirm={this.handleConfirm}
          content={`Do you really want to reject ${this.props.username}\'s friend request?`}
         />
        </Card.Content>
     </Card>
    </div>
    )
  }
}

export default FriendRequest
