import React from 'react';
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import Login from './components/Login';
import Register from './components/Register';
import HomePage from './components/HomePage';
import TherapeuticPlaylists from './components/TherapeuticPlaylists';
import GuidedMeditationTracks from './components/GuidedMeditationTracks';
import MoodTracking from './components/MoodTracking';
import MusicJournaling from './components/MusicJournaling';
import CommunityPanel from './components/CommunityPanel';
import { useAuth } from './hooks/useAuth';
import './App.css';

const App = () => {
  const { user, logout } = useAuth();

  return (
    <Router>
  <div>
    <Routes>
      {/* If the user is not logged in, redirect to the login page */}
      <Route path="/login" element={user ? <Navigate to="/homepage" /> : <Login />} />
      <Route path="/register" element={user ? <Navigate to="/homepage" /> : <Register />} />
      
      {/* Default route to redirect to login if user is not authenticated */}
      <Route path="/" element={user ? <Navigate to="/homepage" /> : <Navigate to="/login" />} />
      
      {/* Home page route only accessible if the user is authenticated */}
      <Route path="/homepage" element={user ? <HomePage onLogout={logout} /> : <Navigate to="/login" />} />
      
      {/* Protected routes for the modules, only accessible if the user is authenticated */}
      <Route path="/therapeutic-playlists" element={user ? <TherapeuticPlaylists /> : <Navigate to="/login" />} />
      <Route path="/guided-meditation-tracks" element={user ? <GuidedMeditationTracks /> : <Navigate to="/login" />} />
      <Route path="/mood-tracking" element={user ? <MoodTracking /> : <Navigate to="/login" />} />
      <Route path="/music-journaling" element={user ? <MusicJournaling /> : <Navigate to="/login" />} />
      <Route path="/community-panel" element={user ? <CommunityPanel /> : <Navigate to="/login" />} />
    </Routes>
  </div>
</Router>
  );
};

export default App;
