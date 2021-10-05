import React from "react";
import ReactDOM from "react-dom";

const aSimpleElement = <h1>Hello all!</h1>;

function StatelessComponent() {
  return <h1>Hello all from stateless!</h1>;
}

class StatefulComponent extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      name: "World",
      date: new Date(),
    };
  }

  handleChange(event) {
    const name = event.target.value;
    this.setState({ name: name });
  }

  tick() {
    this.setState({ date: new Date() });
  }

  componentDidMount() {
    console.log("Mounted!");
    setInterval(() => {
      console.log("tick");
      this.tick();
    }, 1000);
  }

  render() {
    return (
      <>
        <h1>Hello {this.state.name}!</h1>
        <h1>It's {this.state.date.toLocaleTimeString()}</h1>
        <input
          type="text"
          onChange={(event) => {
            console.log(event);
            this.handleChange(event);
          }}
        />
      </>
    );
  }
}

const app = (
  <>
    {aSimpleElement}
    <hr />
    <StatelessComponent />
    <hr />
    <StatefulComponent />
  </>
);

ReactDOM.render(app, document.getElementById("root"));
