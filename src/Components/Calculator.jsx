import React from "react";
import { operators } from "../constants/operators";

class Calculator extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      displayInput: "",
    };
  }

  handleButtonClick = (key) => {
    let { displayInput } = this.state;
    try {
      switch (key) {
        case "AC":
          this.setState({
            displayInput: "",
          });
          break;
        case "DEL":
          this.setState({
            displayInput: String(
              this.state.displayInput.substring(
                0,
                this.state.displayInput.length - 1
              )
            ),
          });
          break;
        case "=":
          displayInput = displayInput.replace("^", "**");
          this.setState({
            displayInput: String(eval(displayInput)),
          });
          break;
        default:
          if (
            operators.includes(key) &&
            displayInput.length > 0 &&
            operators.includes(displayInput.slice(-1))
          ) {
            this.setState({
              displayInput: displayInput.slice(0, -1) + key,
            });
          } else {
            this.setState({
              displayInput: displayInput + key,
            });
          }

          break;
      }
    } catch (error) {
      this.setState({
        displayInput: "Error",
      });
    }
  };

  render() {
    return (
      <div style={styles.container}>
        <div style={styles.contentContainer}>
          <h1 style={{ textAlign: "center" }}>Calculator</h1>
          <div style={styles.calculator}>
            <div style={styles.display}>
              <input
                style={styles.input}
                type="text"
                value={this.state.displayInput}
                readOnly
              />
            </div>
            {this.state.error && (
              <div style={styles.error}>{this.state.error}</div>
            )}
            <div style={styles.buttonList}>
              {[
                "AC",
                "(",
                ")",
                "/",
                "%",
                "7",
                "8",
                "9",
                "*",
                "4",
                "5",
                "6",
                "-",
                "1",
                "2",
                "3",
                "+",
                "0",
                ".",
                "^",
                "DEL",
                "=",
              ].map((key) => (
                <button
                  key={key}
                  style={styles.button(key)}
                  onClick={() => this.handleButtonClick(key)}
                >
                  {key}
                </button>
              ))}
            </div>
          </div>
        </div>
      </div>
    );
  }
}

const styles = {
  container: {
    display: "flex",
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    height: "100vh",
  },
  contentContainer: {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
  },
  calculator: {
    width: "300px",
    padding: "20px",
    border: "1px solid #ccc",
    borderRadius: "5px",
    boxShadow: "0 0 10px rgba(0, 0, 0, 0.1)",
    backgroundColor: "black",
  },
  display: {
    marginBottom: "10px",
  },
  input: {
    width: "100%",
    padding: "10px",
    fontSize: "18px",
    textAlign: "right",
    border: "1px solid #ddd",
    borderRadius: "3px",
    backgroundColor: "gray",
    color: "white",
    boxSizing: "border-box",
  },
  error: {
    color: "red",
    textAlign: "center",
    marginBottom: "10px",
  },
  buttonList: {
    display: "grid",
    gridTemplateColumns: "repeat(4, 1fr)",
    gap: "5px",
  },
  button: (key) => {
    let backgroundColor = "#5f5f5f";
    let color = "#fff";

    if (["AC", "DEL"].includes(key)) {
      backgroundColor = "352e32";
      color = "#fff";
    } else if (key === "=") {
      backgroundColor = "#232025";
      color = "#fff";
    } else if (["+", "-", "*", "/", "%", "^", "(", ")"].includes(key)) {
      backgroundColor = "#9896aa";
      color = "#fff";
    }

    return {
      padding: "15px",
      fontSize: "18px",
      borderRadius: "5px",
      border: "none",
      backgroundColor,
      color,
      cursor: "pointer",
    };
  },
};

export default Calculator;
