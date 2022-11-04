import React from "react";
import { ToastContainer } from "react-toastify";

import ErrorBoundary from "components/ErrorBoundary";

function App() {
  return (
    <ErrorBoundary>
      <ToastContainer autoClose={3000} />
    </ErrorBoundary>
  );
}

export default App;
