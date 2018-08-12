//Friend cards:
  //a fixed image (do not worry about this) for a friend icon
  //last seen
    //if someone modifies last seen
    //this triggers a patch request
    //the patch request modifies the last_seen of the particular friendship displayed
  //name

  //when you click last seen it opens a text box where you can modify last seen

import React from 'react';

const FriendCard = (props) => (
  <div>
    <Panel bsStyle="primary">
     <Panel.Heading>
       <Panel.Title componentClass="h3">Friend Name</Panel.Title>
     </Panel.Heading>
     <Panel.Body>
      Name: Friend Name
      Favorite Place: Foo Bar
      Last seen friend (date) - update?
     </Panel.Body>
   </Panel>
  </div>
);

export default FriendCard;
