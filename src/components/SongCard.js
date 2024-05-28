import React from 'react';

function SongCard({ song }) {
  return (
    <div className="song-card">
      <img src={song.album.images[0].url} alt={`${song.name} cover`} />
      <a href={song.external_urls.spotify} target="_blank" rel="noopener noreferrer" className="song-link">
        <h3>{song.name}</h3>
      </a>
      <h3>{song.artists[0].name}</h3>
      {song.preview_url && (
        <audio controls src={song.preview_url}></audio>
      )}
    </div>
  );
}

export default SongCard;