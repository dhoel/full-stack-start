import React from 'react';
import { connect } from 'react-redux';
import * as actions from '../actions/cheese';

export class CheeseList extends React.Component {
    constructor(props) {
      super(props);

    }
    componentDidMount () {
      this.props.dispatch(actions.fetchCheeses());
    }

    // const cheeses = this.props.cheese.map((cheese, index) => {
    //     return <li key={index}>{cheese}</li>
    // });

  render() {
    const cheeses = this.props.cheeses.map((cheese, index) => {
        return <li key={index}>{cheese}</li>
    });
    return (
        <ul>
            { cheeses }
        </ul>
    );
  }
}

const mapStateToProps = (state, props) => ({
  cheeses: state.cheeses
});

export default connect(mapStateToProps)(CheeseList);
