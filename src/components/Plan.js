import React from 'react';
import { List } from 'semantic-ui-react';

const Plan = (props) => (
  <List.Item>
      <List.Header>{props.plan.date}</List.Header>
      Going to: {props.plan.place} <br/> 
      With: {props.plan.friend.name}
  </List.Item>
);

export default Plan
