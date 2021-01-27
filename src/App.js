import ErrorBoundary from "./components/ErrorBoundary";
import * as React from "react";
import Counter from "./components/Counter";
import FallbackComponent from "./components/FallbackComponent";

function App() {
  const [reset, setRest] = React.useState(false);
  return (
    <>
      <button onClick={() => setRest(!reset)}>reset</button>
      <ErrorBoundary key={reset} FallbackComponent={FallbackComponent}>
        <Counter />
      </ErrorBoundary>
    </>
  );
}

export default App;
