import React from "react";
import ReactDOM from "react-dom";
import TemperatureBox from "./components/TemperatureBox";

class Converter extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      celsius: 0,
      fahrenheit: 0,
    };

    this.changeTemperature = this.changeTemperature.bind(this);
  }

  changeTemperature(value, scale) {
    switch (scale) {
      case "celsius":
        this.setState({ fahrenheit: value * 1.8 + 32, celsius: value });
        return;
      case "fahrenheit":
        this.setState({ celsius: (value - 32) / 1.8, fahrenheit: value });
        return;
    }
  }

  render() {
    return (
      <main>
        <TemperatureBox
          temperatureName="celsius"
          temperatureValue={this.state.celsius}
          changeTemperature={this.changeTemperature}
        />

        <TemperatureBox
          temperatureName="fahrenheit"
          temperatureValue={this.state.fahrenheit}
          changeTemperature={this.changeTemperature}
        />
      </main>
    );
  }
}

ReactDOM.render(<Converter />, document.getElementById("root"));
