'use client'

import { createContext, useContext, useState, ReactNode } from 'react'

export type Song = {
  id: string
  title: string
  artist: string
  youtubeId: string
}

type MusicContextType = {
  currentSong: Song | null
  isPlaying: boolean
  volume: number
  playlist: Song[]
  playSong: (song: Song) => void
  togglePlay: () => void
  nextSong: () => void
  prevSong: () => void
  setVolume: (volume: number) => void
  closePlayer: () => void
}

const MusicContext = createContext<MusicContextType | undefined>(undefined)

export const playlist: Song[] = [
  { id: '1', title: 'Lately', artist: 'RÜFÜS DU SOL', youtubeId: 'b7e554NKIs0' },
  { id: '2', title: 'adore u', artist: 'Fred again.. & Obongjayar', youtubeId: 'peIBCNTY8hA' },
  { id: '3', title: 'Thandaza', artist: 'Keinemusik', youtubeId: 'To_sGyJJoTo' },
  { id: '4', title: 'Desoleil (Brilliant Corners)', artist: 'Loyle Carner', youtubeId: 'X5GdvOL6ox8' },
  { id: '5', title: 'Out Getting Ribs', artist: 'King Krule', youtubeId: 'Lj_ws_BzKUs' },
  { id: '6', title: 'The Moment', artist: 'Tame Impala', youtubeId: '3Qpf9pAkUeI' },
  { id: '7', title: 'Pray', artist: 'Kendrick Lamar', youtubeId: 'mqTinZ2cEH4' },
  { id: '8', title: "03' Adolescence", artist: 'J. Cole', youtubeId: 'uWqnCCGe4lU' },
  { id: '9', title: 'Show Me', artist: 'Joey Bada$$', youtubeId: 'M1X5Qp9vThc' },
  { id: '10', title: 'CHROMA 004 ROLA', artist: 'BICEP', youtubeId: 'JPSKgYRgDbI' },
]

export function MusicProvider({ children }: { children: ReactNode }) {
  const [currentSong, setCurrentSong] = useState<Song | null>(null)
  const [isPlaying, setIsPlaying] = useState(false)
  const [volume, setVolumeState] = useState(80)

  const playSong = (song: Song) => {
    if (currentSong?.id === song.id) {
      setIsPlaying(!isPlaying)
    } else {
      setCurrentSong(song)
      setIsPlaying(true)
    }
  }

  const togglePlay = () => {
    setIsPlaying(!isPlaying)
  }

  const nextSong = () => {
    if (!currentSong) return
    const currentIndex = playlist.findIndex(s => s.id === currentSong.id)
    const nextIndex = (currentIndex + 1) % playlist.length
    setCurrentSong(playlist[nextIndex])
    setIsPlaying(true)
  }

  const prevSong = () => {
    if (!currentSong) return
    const currentIndex = playlist.findIndex(s => s.id === currentSong.id)
    const prevIndex = currentIndex === 0 ? playlist.length - 1 : currentIndex - 1
    setCurrentSong(playlist[prevIndex])
    setIsPlaying(true)
  }

  const setVolume = (vol: number) => {
    setVolumeState(Math.max(0, Math.min(100, vol)))
  }

  const closePlayer = () => {
    setCurrentSong(null)
    setIsPlaying(false)
  }

  return (
    <MusicContext.Provider value={{ 
      currentSong, 
      isPlaying, 
      volume,
      playlist, 
      playSong, 
      togglePlay, 
      nextSong, 
      prevSong,
      setVolume,
      closePlayer 
    }}>
      {children}
    </MusicContext.Provider>
  )
}

export function useMusic() {
  const context = useContext(MusicContext)
  if (context === undefined) {
    throw new Error('useMusic must be used within a MusicProvider')
  }
  return context
}
