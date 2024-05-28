import React, { useState } from 'react';
import { getAccessToken, searchTracks } from '../spotify';

function Header({ setResults }) {
  const [searchTerm, setSearchTerm] = useState('');

  const handleSearch = async () => {
    if (searchTerm.trim() === '') return;

    const token = await getAccessToken();
    const results = await searchTracks(searchTerm, token);
    setResults(results);
  };

  const handleKeyPress = (event) => {
    if (event.key === 'Enter') {
      handleSearch();
    }
  };

  return (
    <header className="p-3">
      <div className="container">
        <div className="d-flex flex-wrap align-items-center justify-content-between">
          <img src="image/logo.png" alt="Not Found" className="img-logo" />
          <div className="flex-grow-1 d-flex justify-content-center mx-3">
            <input
              className="input-search"
              maxLength={800}
              autoCorrect="off"
              autoCapitalize="off"
              spellCheck="false"
              placeholder="What do you want to play?"
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              onKeyDown={handleKeyPress}
            />
          </div>
          <div className="auth">
            <a href="https://www.spotify.com/uk/signup" className="btn-sign">Sign up</a>
            <a href="https://accounts.spotify.com/en/login" className="btn-log">Log in</a>
          </div>
        </div>
      </div>
    </header>
  );
}

export default Header;