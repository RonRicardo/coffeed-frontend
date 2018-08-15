import React from 'react';
import { PageHeader } from 'react-bootstrap'

class Header extends React.Component {

  render() {
    return (
      <PageHeader>
        Coffee'd <small>for people who have friends</small>
        <small style={{textAlign: "right"}}>Username</small>
      </PageHeader>
    );
  }
}

export default Header;
