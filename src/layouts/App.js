import React from 'react';
import '../styles/App.css';
import { BrowserRouter as Router } from 'react-router-dom';
import Footer from './Footer';
import Page from './Page';
import Navigation from './Navigation';
import Header from './Header';


function App() {
  return (
    <Router basename={process.env.PUBLIC_URL}>
      <div className="app">
        <header>
          {<Header />}
        </header>
        <main>
          <aside>
            <Navigation />
          </aside>
          <section className="page">
            <Page />
          </section>
        </main>
        <footer>
          <Footer />
        </footer>
      </div>
    </Router>
  );
}

export default App;
