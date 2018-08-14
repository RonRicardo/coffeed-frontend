import React from 'react';
import { Panel } from 'react-bootstrap';

const handleClick = () => {
  return (
    console.log('clicked')
  )
}

const FriendRequest = (props) => {
  console.log(props)
  return (
  <div>
    <Panel bsStyle="primary">
     <Panel.Heading>
       <Panel.Title componentClass="h3">{props.friend.username}</Panel.Title>
     </Panel.Heading>
     <Panel.Body className="BootstrapPanel">
      <p>{/* a placeholder after my own heart */}</p>
     </Panel.Body>
   </Panel>
  </div>
  )
};

export default FriendRequest
