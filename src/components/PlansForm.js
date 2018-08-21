import React, { Component } from 'react';
import { Form, Button, Container, Dropdown } from 'semantic-ui-react'
import DatePicker from 'react-datepicker';
import moment from 'moment';
import 'react-datepicker/dist/react-datepicker.css';

const friendOptions = [
  {
    text: 'Jenny Hess',
    value: 'Jenny Hess',
    image: { avatar: true, src: '/images/avatar/small/jenny.jpg' },
  }
]

class PlanForm extends Component {

  state = {
    date: moment(),
    place: '',
    friend: ''
  }

  handleChange = (newDate) => {
    this.setState({ date: newDate });
  }

  selectFriend = (value) => {
    this.setState({friend: value})
  }

  handleSubmit = () => {

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
              options={friendOptions}
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

export default PlanForm;
