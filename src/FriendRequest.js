import React from 'react';
import { Panel, Button } from 'react-bootstrap';

const handleClick = (e) => {
  return (
    console.log(this.props)
  )
}

const FriendRequest = (props) => {
  console.log(props)
  return (
  <div>
    <Panel bsStyle="primary">
     <Panel.Heading>
       <Panel.Title componentClass="h3">{/*props.friend.username*/}</Panel.Title>
     </Panel.Heading>
     <Panel.Body className="BootstrapPanel">
      <p>{props.username} would like to grab coffee sometime!</p>

      <Button bsStyle="primary">Accept</Button> <Button bsStyle="primary">Reject</Button>
     </Panel.Body>
   </Panel>
  </div>
  )
};

export default FriendRequest
