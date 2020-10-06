import React from 'react';
import * as MaterialUI from '@material-ui/core';

class FavourForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      owedTo: null,
      owedWhat: null,
      tabNumber: null,
    };

    this.handleInputChange = this.handleInputChange.bind(this);
  }

  handleInputChange(event) {
    const target = event.target;
    const value = target.type === 'checkbox' ? target.checked : target.value;
    const name = target.name;

    this.setState({
      [name]: value
    });
  }

  render() {
    return (
      <MaterialUI.Card
        style={{
          display: 'inline-block',
          margin: '0 2px',
          transform: 'scale(0.8)',
          width: "250px",
          padding: "10px 20px 10px 20px"
        }}
        variant="outlined">
        <MaterialUI.CardContent>
          <MaterialUI.Typography style={{ fontSize: 30 }} color="textSecondary" gutterBottom>
            Create Favour
          </MaterialUI.Typography>

          <form>
            <label>
              <strong><h5>To:</h5></strong>
              <input
                name="owedTo"
                type="text"
                value={this.state.owedTo}
                onChange={this.handleInputChange}
                style={{ width: "100%", height: "25px" }} />
            </label>
            <br />
            <label>
              <h5>What:</h5>
              <input
                name="owedWhat"
                type="text"
                value={this.state.owedWhat}
                onChange={this.handleInputChange}
                style={{ width: "100%", height: "25px" }} />
            </label>
          </form>
        </MaterialUI.CardContent>
      </MaterialUI.Card>
    );
  }
}

export default FavourForm
