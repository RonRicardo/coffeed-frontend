import React from 'react';
import { List } from 'semantic-ui-react';
import Plan from './Plan'

export default class PlansList extends React.Component {

  render() {
    console.log(this.props)
    return (
      <List>
      {this.props.plans.map(
        plan => <Plan plan={plan} key={plan.id} />
      )}
      </List>
    );
  }

}
