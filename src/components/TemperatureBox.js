import React from "react";
import ReactDOM from "react-dom";

class TemperatureBox extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <>
        <p>{this.props.temperatureName.toUpperCase()}</p>
        <input
          type="text"
          value={this.props.temperatureValue}
          onChange={(event) => {
            this.props.changeTemperature(
              event.target.value,
              this.props.temperatureName
            );
          }}
        />
      </>
    );
  }
}

export default TemperatureBox;
