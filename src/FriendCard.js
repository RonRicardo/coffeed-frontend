import React from 'react';
import { RIEToggle, RIEInput, RIETextArea, RIENumber, RIETags, RIESelect } from 'riek'
import _ from 'lodash'
import { Panel, Button } from 'react-bootstrap';

const handleClick = () => {
  return (
    console.log('clicked')
  )
}

const testingInput = () => {
  return (
    <RIEInput
      value={this.state.text}
      change={this.httpTaskCallback}
      propName='title'
      validate={_.isString}
    />
  )
}

const FriendCard = (props) => {
  return (
  <div>
    <Panel bsStyle="primary">
     <Panel.Heading>
       <Panel.Title componentClass="h3">{props.username}</Panel.Title>
     </Panel.Heading>
     <Panel.Body className="BootstrapPanel">
      <p>Name: {props.name}</p>
      <p>Favorite Place: Foo Bar</p>
      <p>Last seen: {props.last_seen || "hasn't been seen yet!"}</p>
      {testingInput}
      <p><Button bsStyle="primary" onClick={handleClick}>Update?</Button></p>
     </Panel.Body>
   </Panel>
  </div>
  )
};

export default FriendCard
