import React from 'react';
import Calendar from 'react-calendar';
import { Card, Button, Confirm } from 'semantic-ui-react';
import { connect } from 'react-redux';
import { updateLastSeen } from './actions';
import { RestfulAdapter } from './adapter';


class FriendCard extends React.Component {
  state = {
    showCalendar: false,
    date: new Date(),
    confirmationToggle: false,
    result: ''
  }

 toggleCalendar = () => {
   this.setState((prevState) => {
     return {showCalendar: !prevState.showCalendar};
   });
 }

  handleClickDay = (e) => {
    this.handleConfirmationToggle()
  }

  handleConfirmationToggle = () => this.setState({ confirmationToggle: true })

  handleConfirm = () => {
    this.setState({ result: 'confirmed', confirmationToggle: false })
    RestfulAdapter.editFetch('users/1/friendships', this.props.friendship_id, {last_seen: this.state.date })
    this.toggleCalendar()
  }

  handleCancel = () => {
    this.setState({ result: 'cancelled', confirmationToggle: false })
  }

  calendarOnChange = (date) => this.setState({ date })

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
              {this.state.showCalendar ?
                <Calendar
                   onChange={this.calendarOnChange}
                   value={this.state.date}
                   onClickDay={this.handleClickDay}
                 />
                 :
                  <p><Button onClick={this.toggleCalendar}>Update?</Button>
                  </p>
              }
              <Confirm
               open={this.state.confirmationToggle}
               onCancel={this.handleCancel}
               onConfirm={this.handleConfirm}
               content={`Is ${this.state.date} the last time you saw ${this.props.name}?`}
              />
             </Card.Content>
         </Card>
        </div>
    )
  }
}

const mapStateToProps = (state) => ({
  friend: state.friend
});

export default connect(mapStateToProps, null)(FriendCard);
