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
      <Menu >
        <Link to="/friend_requests">
        <Menu.Item name='friendRequests' active={activeItem === 'friendRequests'} onClick={this.handleItemClick}>
        Requests
        </Menu.Item>
        </Link>

        <Link to="/friends">
        <Menu.Item name='currentFriends' active={activeItem === 'currentFriends'} onClick={this.handleItemClick}>
        Friends
        </Menu.Item>
        </Link>

        <Link to="/new_plan">
        <Menu.Item name='newPlan' active={activeItem === 'newPlan'} onClick={this.handleItemClick}>
        Add New Plan
        </Menu.Item>
        </Link>
        
      </Menu>
    )
  }
}

// mapStateToProps = (state) => {
// //   activeTab: state.activeTab
// // }
// //
// export default connect(null, { currentView })(PlanForm);
export default withRouter(Nav)
