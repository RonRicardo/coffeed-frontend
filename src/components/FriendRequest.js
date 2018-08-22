import React from 'react';
import { Card, Button, Confirm, Popup, ButtonGroup } from 'semantic-ui-react'
// import { RestfulAdapter } from '../adapter'
import { acceptFriendReq, rejectFriendReq } from '../actions'
import { connect } from 'react-redux'

const timeoutLength = 2000

class FriendRequest extends React.Component {

  state = {
    confirmationToggle: false,
    result: '',
    popupOpen: false
  }

  handleConfirmationToggle = () => this.setState({ confirmationToggle: true })

  handleModalConfirm = () => {
    this.setState({ result: 'confirmed', confirmationToggle: false })
    this.props.acceptFriendReq(this.props.id)
  }

  handleModalReject = () => {
    this.setState({ result: 'confirmed', confirmationToggle: false })
    this.props.rejectFriendReq(this.props.id)
  }

  handleModalCancel = () => {
    this.setState({ result: 'cancelled', confirmationToggle: false })
  }


  handlePopOpen = () => {
      this.setState({ popupOpen: true })
      this.timeout = setTimeout(() => {
        this.setState({ popupOpen: false })
      }, timeoutLength)
    }

  handlePopClose = () => {
      this.setState({ popupOpen: false })
      clearTimeout(this.timeout)
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
          <ButtonGroup>
            <Popup
                trigger={<Button basic color='green' onClick={this.handleModalConfirm}>Accept</Button> }
                content={`Added ${this.props.name}!`}
                on='click'
                open={this.state.popupOpen}
                onClose={this.handlePopClose}
                onOpen={this.handlePopOpen}
                position='top right'
             />
            <Button basic color='red' onClick={this.handleConfirmationToggle}>Reject</Button>
               <Confirm
                open={this.state.confirmationToggle}
                onCancel={this.handleModalCancel}
                onConfirm={this.handleModalReject}
                // eslint-disable-next-line
                content={`Do you really want to reject ${this.props.username}\'s friend request?`}
               />
          </ButtonGroup>
        </Card.Content>
     </Card>
    </div>
    )
  }
}


const mapStateToProps = (state) => (
   {pendingFriends: state.pendingFriends}
);

export default connect(mapStateToProps, { acceptFriendReq, rejectFriendReq })(FriendRequest);
