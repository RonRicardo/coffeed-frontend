import React, { Component } from 'react';
import { Form, Button, Container } from 'semantic-ui-react'
import DatePicker from 'react-datepicker';
import moment from 'moment';
import 'react-datepicker/dist/react-datepicker.css';


class PlanForm extends Component {

  state = {
    date: moment(),
    place: ''
  }

  handleChange = (newDate) => {
    this.setState({ date: newDate });
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
              <Form.Field>
            <Button type='submit'>Submit</Button>
          </Form.Field>
        </Form>
       </Container>
      </div>
    );
  }

}

export default PlanForm;
