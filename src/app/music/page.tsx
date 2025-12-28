'use client'

import { useMusic, playlist } from '@/context/MusicContext'

export default function Music() {
  const { currentSong, isPlaying, playSong } = useMusic()

  const filteredSongs = playlist

  return (
      <div className="music-page">
      <div className="page-header">
        <h1 className="section-title">My Playlist</h1>
        <span className="item-count">{playlist.length} tracks</span>
      </div>

      <p className="section-subtitle">
        My personal soundtrack, you&apos;re welcome.
      </p>

      <div className="compact-playlist">
        {filteredSongs.map((song) => {
          const isActive = currentSong?.id === song.id
          const isCurrentlyPlaying = isActive && isPlaying
          
          return (
            <button
              key={song.id}
              className={`compact-track ${isActive ? 'active' : ''}`}
              onClick={() => playSong(song)}
            >
              <span className="track-play-btn">
                {isCurrentlyPlaying ? '⏸' : '▶'}
              </span>
              <span className="track-title">{song.title}</span>
              <span className="track-artist">{song.artist}</span>
            </button>
          )
        })}
      </div>

      {filteredSongs.length === 0 && (
        <div className="no-results">
          <p>No songs.</p>
        </div>
      )}
    </div>
  )
}
