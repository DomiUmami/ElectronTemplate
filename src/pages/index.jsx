import React, { useState } from 'react';
import { createRoot } from 'react-dom/client';
import '../styles/Layout.css';



const App = () => {
  

  return (
    <div className="grid-container">
     <header className="header">header</header>
     <aside className="sidebar">left side</aside>
     <main className="main">
        <gleft className="gleft">verity</gleft>
        <gmid className="gmid">verity</gmid>
        <gright className="gright">verity</gright>

        <sleft className="sleft">verity</sleft>
        <smid className="smid">verity</smid>
        <sright className="sright">verity</sright>

        <kleft className="kleft">verity</kleft>
        <kmid className="kmid">verity</kmid>
        <kright className="kright">verity</kright>

      
        

       
     </main>
     <aside className="rightside">right side</aside>
     <footer className="footer">footer</footer>
    </div>
  );
};

const root = createRoot(document.getElementById('root'));
root.render(<App />);