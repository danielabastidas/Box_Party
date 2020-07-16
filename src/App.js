import React from "react";
import Box from "./components/box/Box";

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = { colors: ["azul", "blanco", "verde", "fuccia"] };
  }

  render() {
    return (
      <div className="App">
        <header className="App-header">
          <h1 className="title-box">Box party!</h1>
        </header>
        <div className="direction-row">
          {this.state.colors.map((color) => {
            return <Box></Box>;
          })}
        </div>
      </div>
    );
  }
}

export default App;
