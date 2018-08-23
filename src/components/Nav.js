import React, { Component } from 'react'
import { Menu } from 'semantic-ui-react'
import { Link, withRouter } from 'react-router-dom';


 class Nav extends Component {
  state = { activeItem: 'bio' }

  handleItemClick = (e, { name }) => {this.setState({ activeItem: name })
    // history.push('/friend_requests')
  }

  render() {
    const { activeItem } = this.state

    return (
      <Menu tabular>
        <Menu.Item name='friendRequests' active={activeItem === 'friendRequests'} onClick={this.handleItemClick}>
        <Link to="/friend_requests">Requests</Link>
        </Menu.Item>

        <Menu.Item name='currentFriends' active={activeItem === 'currentFriends'} onClick={this.handleItemClick}>
        <Link to="/friends">Friends</Link>
        </Menu.Item>
      </Menu>
    )
  }
}

// mapStateToProps = (state) => {
// //   activeTab: state.activeTab
// // }
// //
// export default connect(null, { currentView })(PlanForm);
<<<<<<< HEAD
export default Nav
=======
export default withRouter(Nav)
>>>>>>> temp
