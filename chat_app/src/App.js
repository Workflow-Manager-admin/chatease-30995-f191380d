import React from 'react';
import './App.css';
import NavBar from './NavBar';

// PUBLIC_INTERFACE
function App() {
  return (
    <div className="app">
      <NavBar />

      <main style={{paddingTop: 72, minHeight: '100vh'}}>
        <div id="home" className="container">
          <div className="hero">
            <div className="subtitle" style={{marginBottom: 8, fontSize: '1.11rem', letterSpacing:0}}>
              Welcome to <b>TalkBuddy</b>, your smart AI assistant!
            </div>
            <h1 className="title" style={{fontFamily: "'Poppins', 'Raleway', sans-serif", letterSpacing:'-1.2px'}}>TalkBuddy</h1>
            <div className="description" style={{marginBottom:14, marginTop:6}}>
              Start chatting with your AI buddy or explore the app. Toggle between dark and light themes for your comfort!
            </div>
            <a href="#chat" className="btn btn-large" style={{marginTop:4}}>
              Chat Now
            </a>
          </div>
        </div>
        <div id="chat" className="container" style={{paddingBottom: 58, paddingTop: 44, minHeight: '55vh'}}>
          <div style={{textAlign: 'center', padding: '30px 0 15px'}}>
            <h2 className="title" style={{fontSize:'2.3rem', letterSpacing:'-1.1px'}}>Chat Area</h2>
            <div className="description">Your chat interface will appear here.</div>
          </div>
        </div>
        <div id="about" className="container" style={{paddingBottom: 64, paddingTop: 22}}>
          <div style={{textAlign: 'center', maxWidth: 660, margin: '0 auto'}}>
            <h2 className="title" style={{fontSize:'2.1rem'}}>About TalkBuddy</h2>
            <div className="description" style={{marginBottom:22}}>
              <b>TalkBuddy</b> is a stylish, AI-powered chat app designed for privacy, comfort, and fun conversations. Try switching between themes with the toggle at the top right!
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}

export default App;