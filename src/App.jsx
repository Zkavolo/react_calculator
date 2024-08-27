// import { useState } from 'react'
// import reactLogo from './assets/react.svg'
// import viteLogo from '/vite.svg'
import "./App.css";

import Calculator from "./Components/Calculator";

function App() {
  return (
    <div style={styles.rootContainer}>
      <Calculator />
    </div>
  );
}

const styles = {
  rootContainer: {
    display: "flex",
    flex: 1,
    flexDirection: "row",
    height: "100vh",
  },
};

export default App;
