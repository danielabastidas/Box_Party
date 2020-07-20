import React from "react";
import Box from "./components/box/Box";

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      colors: [
        "#00ffb3",
        "#0fac7d",
        "#CD853F",
        "#0d6a4e",
        "#BA55D3",
        "#083c2c",
        "#20B2AA",
        "#FF00FF",
      ],
    };
    this.setState((state) => {
      const previousColors = [...state.colors];
      previousColors.push("#20B2AA", "#BA55D3", "#20B2AA", "#BA55D3");
      return { colors: previousColors };
    });
  }

  render() {
    return (
      <div className="App">
        <header className="App-header">
          <h1 className="title-box">Box party!</h1>
        </header>
        <div className="direction-row">
          {this.state.colors.map((color) => {
            return <Box color={color}></Box>;
          })}
        </div>
      </div>
    );
  }
}

export default App;
