import React from 'react';
import { List } from 'semantic-ui-react';
import Plan from './Plan';
import { connect } from 'react-redux';

const PlansList1 = (props) => {
  console.log(props)
  return (
   <List>
      {props.plans.map(
        plan => <Plan plan={plan} key={plan.id} />
      )}
   </List>
 )
}

const mapStateToProps = (state) => {
  return {plans: state.plans.plans}
}

export const PlansList = connect( mapStateToProps )(PlansList1)
