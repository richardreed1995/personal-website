'use client'

import { useEffect, useRef, useCallback, useState } from 'react'
import { useMusic } from '@/context/MusicContext'

declare global {
  interface Window {
    YT: {
      Player: new (
        elementId: string,
        config: {
          height: string
          width: string
          videoId: string
          playerVars: Record<string, number>
          events: {
            onReady: (event: { target: YTPlayer }) => void
            onStateChange: (event: { data: number; target: YTPlayer }) => void
          }
        }
      ) => YTPlayer
    }
    onYouTubeIframeAPIReady: () => void
  }
}

interface YTPlayer {
  playVideo: () => void
  pauseVideo: () => void
  setVolume: (volume: number) => void
  loadVideoById: (videoId: string) => void
  destroy: () => void
  getPlayerState: () => number
  getCurrentTime: () => number
  getDuration: () => number
  seekTo: (seconds: number, allowSeekAhead: boolean) => void
}

export default function MusicPlayer() {
  const { currentSong, isPlaying, volume, togglePlay, nextSong, prevSong, setVolume, closePlayer } = useMusic()
  const playerRef = useRef<YTPlayer | null>(null)
  const isPlayerReady = useRef(false)
  const [currentTime, setCurrentTime] = useState(0)
  const [duration, setDuration] = useState(0)
  const intervalRef = useRef<NodeJS.Timeout | null>(null)

  // Load YouTube API
  useEffect(() => {
    if (!window.YT) {
      const tag = document.createElement('script')
      tag.src = 'https://www.youtube.com/iframe_api'
      const firstScriptTag = document.getElementsByTagName('script')[0]
      firstScriptTag.parentNode?.insertBefore(tag, firstScriptTag)
    }
  }, [])

  const handleNext = useCallback(() => {
    nextSong()
  }, [nextSong])

  // Update progress bar
  useEffect(() => {
    if (isPlaying && isPlayerReady.current) {
      intervalRef.current = setInterval(() => {
        if (playerRef.current && isPlayerReady.current) {
          try {
            const time = playerRef.current.getCurrentTime()
            const dur = playerRef.current.getDuration()
            if (!isNaN(time) && !isNaN(dur) && dur > 0) {
              setCurrentTime(time)
              setDuration(dur)
            }
          } catch (e) {
            // Player not ready, ignore
          }
        }
      }, 500)
    } else {
      if (intervalRef.current) {
        clearInterval(intervalRef.current)
        intervalRef.current = null
      }
    }

    return () => {
      if (intervalRef.current) {
        clearInterval(intervalRef.current)
      }
    }
  }, [isPlaying])

  // Initialize player once
  useEffect(() => {
    if (!currentSong) {
      if (playerRef.current) {
        playerRef.current.destroy()
        playerRef.current = null
        isPlayerReady.current = false
      }
      return
    }

    const initPlayer = () => {
      // Destroy existing player if any
      if (playerRef.current) {
        playerRef.current.destroy()
        playerRef.current = null
        isPlayerReady.current = false
      }

      // Create new player
      playerRef.current = new window.YT.Player('yt-player', {
        height: '1',
        width: '1',
        videoId: currentSong.youtubeId,
        playerVars: {
          autoplay: 1,
          controls: 0,
          disablekb: 1,
          fs: 0,
          modestbranding: 1,
        },
        events: {
          onReady: (event: { target: YTPlayer }) => {
            isPlayerReady.current = true
            event.target.setVolume(volume)
            event.target.playVideo()
            const dur = event.target.getDuration()
            if (!isNaN(dur) && dur > 0) {
              setDuration(dur)
            }
          },
          onStateChange: (event: { data: number; target: YTPlayer }) => {
            // 1 = playing, 2 = paused
            if (event.data === 1) {
              const dur = event.target.getDuration()
              if (!isNaN(dur) && dur > 0) {
                setDuration(dur)
              }
            }
            // 0 = ended, auto-play next
            if (event.data === 0) {
              handleNext()
            }
          },
        },
      })
    }

    if (window.YT && window.YT.Player) {
      initPlayer()
    } else {
      window.onYouTubeIframeAPIReady = initPlayer
    }
  }, [currentSong?.youtubeId])

  // Handle song changes (load new video without recreating player)
  useEffect(() => {
    if (currentSong && playerRef.current && isPlayerReady.current) {
      playerRef.current.loadVideoById(currentSong.youtubeId)
      setCurrentTime(0)
      setDuration(0)
    }
  }, [currentSong?.id])

  // Handle play/pause
  useEffect(() => {
    if (!playerRef.current || !isPlayerReady.current) return

    try {
      if (isPlaying) {
        playerRef.current.playVideo()
      } else {
        playerRef.current.pauseVideo()
      }
    } catch (e) {
      // Player not ready yet, ignore
    }
  }, [isPlaying])

  // Handle volume changes
  useEffect(() => {
    if (playerRef.current && isPlayerReady.current) {
      try {
        playerRef.current.setVolume(volume)
      } catch (e) {
        // Player not ready yet, ignore
      }
    }
  }, [volume])

  if (!currentSong) return null

  const getVolumeIcon = () => {
    if (volume === 0) {
      return (
        <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <polygon points="11 5 6 9 2 9 2 15 6 15 11 19 11 5"></polygon>
          <line x1="23" y1="9" x2="17" y2="15"></line>
          <line x1="17" y1="9" x2="23" y2="15"></line>
        </svg>
      )
    } else if (volume < 50) {
      return (
        <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <polygon points="11 5 6 9 2 9 2 15 6 15 11 19 11 5"></polygon>
          <path d="M15.54 8.46a5 5 0 0 1 0 7.07"></path>
        </svg>
      )
    } else {
      return (
        <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <polygon points="11 5 6 9 2 9 2 15 6 15 11 19 11 5"></polygon>
          <path d="M15.54 8.46a5 5 0 0 1 0 7.07"></path>
          <path d="M19.07 4.93a10 10 0 0 1 0 14.14"></path>
        </svg>
      )
    }
  }

  const formatTime = (seconds: number) => {
    const mins = Math.floor(seconds / 60)
    const secs = Math.floor(seconds % 60)
    return `${mins}:${secs.toString().padStart(2, '0')}`
  }

  const handleSeek = (e: React.ChangeEvent<HTMLInputElement>) => {
    const time = Number(e.target.value)
    if (playerRef.current && isPlayerReady.current && duration > 0) {
      playerRef.current.seekTo(time, true)
      setCurrentTime(time)
    }
  }

  return (
    <div className="music-player">
      <div className="player-main">
        <div className="player-content">
          <button className="player-close" onClick={closePlayer} aria-label="Close">
            ×
          </button>

          <div className="player-info">
            <span className="player-title">{currentSong.title}</span>
            <span className="player-artist">{currentSong.artist}</span>
          </div>

          <div className="player-controls">
            <button className="player-btn" onClick={prevSong} aria-label="Previous">
              ⏮
            </button>
            <button className="player-btn play" onClick={togglePlay} aria-label={isPlaying ? 'Pause' : 'Play'}>
              {isPlaying ? '⏸' : '▶'}
            </button>
            <button className="player-btn" onClick={nextSong} aria-label="Next">
              ⏭
            </button>
          </div>

          <div className="player-volume">
            <span className="volume-icon">{getVolumeIcon()}</span>
            <input
              type="range"
              min="0"
              max="100"
              value={volume}
              onChange={(e) => {
                const newVolume = Number(e.target.value)
                setVolume(newVolume)
                if (playerRef.current && isPlayerReady.current) {
                  playerRef.current.setVolume(newVolume)
                }
              }}
              className="volume-slider"
              aria-label="Volume"
            />
          </div>
        </div>

        <div className="player-progress">
          <span className="time-display">{formatTime(currentTime)}</span>
          <input
            type="range"
            min="0"
            max={duration || 100}
            value={currentTime}
            onChange={handleSeek}
            className="progress-slider"
            aria-label="Seek"
            disabled={duration === 0}
          />
          <span className="time-display">{formatTime(duration)}</span>
        </div>
      </div>

      <div className="player-iframe-container">
        <div id="yt-player" />
      </div>
    </div>
  )
}
