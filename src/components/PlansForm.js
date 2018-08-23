import React, { Component } from 'react';
import { Form, Button, Container, Dropdown } from 'semantic-ui-react'
import DatePicker from 'react-datepicker';
import { connect } from 'react-redux';
import { renderDropdownFriends } from '../actions';
import moment from 'moment';
import 'react-datepicker/dist/react-datepicker.css';


class PlanForm extends Component {

  state = {
    date: moment(),
    place: '',
    friend_id: ''
  }

  componentDidMount(){
    this.props.renderDropdownFriends()
  }


  handleChange = (newDate) => {
    this.setState({ date: newDate });
  }

  selectFriend = (value) => {
    this.setState({friend: value})
  }

  handleSubmit = () => {
    console.log(this.props)
  }

  render() {
    return (
      <div>
       <Container>
        <Form>
          <Form.Input label='Enter a location' type='Place' />
            <Form.Field>
              <DatePicker
                selected={this.state.date}
                onChange={this.handleChange}
                />
            </Form.Field>
            <Dropdown placeholder='Select Friend'
              fluid selection
              options={this.props.dropdownFriends}
              onChange={this.selectFriend}
               />
              <Form.Field>
            <Button
            onClick={this.handleSubmit}
            type='submit'>Submit</Button>
          </Form.Field>
        </Form>
       </Container>
      </div>
    );
  }

}

const mapStateToProps = (state) => {
  return {
      friends: state.friends.friends,
      plans: state.plans.plans,
      dropdownFriends: state.friends.dropdownFriends
    }
}

export default connect(mapStateToProps, { renderDropdownFriends })(PlanForm);
