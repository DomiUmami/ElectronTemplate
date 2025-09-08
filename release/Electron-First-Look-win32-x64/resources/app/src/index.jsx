import React, { useState } from 'react';
import { createRoot } from 'react-dom/client';
import './Layout.css';


const App = () => {
  

  return (
    <div className="grid-container">
     <header className="header">header</header>
     <aside className="sidebar">left side</aside>
     <main className="main">main</main>
     <aside className="rightside">right side</aside>
     <footer className="footer">footer</footer>
    </div>
  );
};

const root = createRoot(document.getElementById('root'));
root.render(<App />);