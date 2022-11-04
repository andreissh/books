import React from "react";
import { BrowserRouter } from "react-router-dom";
import { ToastContainer } from "react-toastify";

import ErrorBoundary from "components/ErrorBoundary";
import Footer from "components/Footer";
import Header from "components/Header";
import Layout from "components/Layout";
import Routes from "./routes";

function App() {
  return (
    <BrowserRouter>
      <ErrorBoundary>
        <Layout header={<Header />} footer={<Footer />}>
          <Routes />
          <ToastContainer autoClose={3000} />
        </Layout>
      </ErrorBoundary>
    </BrowserRouter>
  );
}

export default App;
