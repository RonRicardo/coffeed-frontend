//Friend cards:
  //a fixed image (do not worry about this) for a friend icon
  //last seen
    //if someone modifies last seen
    //this triggers a patch request
    //the patch request modifies the last_seen of the particular friendship displayed
  //name

  //when you click last seen it opens a text box where you can modify last seen

import React from 'react';
import { Panel } from 'react-bootstrap';

const handleClick = () => {
  return (
    console.log('clicked')
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
      <p><button onClick={handleClick}>update?</button></p>
     </Panel.Body>
   </Panel>
  </div>
  )
};

export default FriendCard
