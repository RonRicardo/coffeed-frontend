import React from 'react';
import Calendar from 'react-calendar';
import { updateLastSeen, deleteFriend } from '../actions';
import { Card, Button, ButtonGroup, Confirm } from 'semantic-ui-react';
import { connect } from 'react-redux';

class FriendCard extends React.Component {
  state = {
    showCalendar: false,
    date: new Date(),
    confirmationToggle: false,
    result: '',
    confirmationText: '',
    popupOpen: false,
    userAction: ''
  }

  deleteOption = () => {
      this.setState({
         userAction: 'delete',
         confirmationText: `Do you really want to remove ${this.props.name}?`})
      this.handleConfirmationToggle()
  }

 toggleCalendar = () => {
   this.setState((prevState) => {
     return {
       userAction: 'update',
       showCalendar: !prevState.showCalendar,
       confirmationText: `Is ${this.state.date} the last time you saw ${this.props.name}?`};
   });
 }

  handleConfirmationToggle = () => this.setState({ confirmationToggle: true })

  handleConfirm = () => {
    this.setState({
      result: 'confirmed',
      confirmationToggle: false
    })
    switch (this.state.userAction){
      case 'update':
          this.props.updateLastSeen(this.props.friendship_id, this.state.date)
          this.toggleCalendar()
        break;
      case 'delete':
          this.props.deleteFriend(this.props.friend_id)
        break;
      default:
        alert('why jesus')
    }
  }

  handleCancel = () => {
    this.setState({ result: 'cancelled', confirmationToggle: false })
  }

  calendarOnChange = (date) => this.setState({ date,
  confirmationText: `Is ${date} the last time you saw ${this.props.name}?` })

  render() {
    return (
      <div>
        <Card>
          <Card.Header>
            {this.props.username}
            </Card.Header>
             <Card.Content>

              <p>Name: {this.props.name}</p>
              <p>Favorite Place: Foo Bar</p>
              <p>Last seen: {this.props.last_seen || "hasn't been seen yet!"}</p>
              { this.state.showCalendar ?
                <Calendar
                   onChange={this.calendarOnChange}
                   value={this.state.date}
                   onClickDay={this.handleConfirmationToggle}
                 />
                 :
                  <ButtonGroup>
                    <Button color='teal' onClick={this.toggleCalendar}>Update?</Button>
                    <Button color='red' onClick={this.deleteOption}>Remove?</Button>
                  </ButtonGroup>
              }
              <Confirm
               open={this.state.confirmationToggle}
               onCancel={this.handleCancel}
               onConfirm={this.handleConfirm}
               content={this.state.confirmationText}
              />
             </Card.Content>
         </Card>
        </div>
    )
  }
}

const mapStateToProps = (state) => ({
  friends: state.friends
});

export default connect(mapStateToProps, { updateLastSeen, deleteFriend })(FriendCard);
