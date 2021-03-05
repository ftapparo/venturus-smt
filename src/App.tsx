import React from 'react';
import { Footer } from "./components/Footer";
import { Header } from "./components/Header";
import { BrowserRouter as Router } from "react-router-dom";

import PageRoutes from './routes';

export default function App() {
  return (
    <Router>
      <Header />
      <PageRoutes />
      <Footer />
    </Router>
  );
}

