import { useRef, useState } from 'react'

export function CounterBoard({
  title = 'No Title',
  onChangePoints,
  points,
  showMusicButton = false,
  showMusicButtonPlaceholder = false, // nuevo prop
}) {
  const playlist = useRef([
    new Audio('/song.mp3'),
    new Audio('/song2.mp3'),
    new Audio('/song3.mp3'),
    new Audio('/song4.mp3'),
    new Audio('/song5.mp3'),
    new Audio('/song6.mp3'),
    new Audio('/song7.mp3'),
    new Audio('/song8.mp3'),
    new Audio('/song9.mp3'),
    new Audio('/song10.mp3'),
  ]).current

  const [currentTrack, setCurrentTrack] = useState(0)

  const handleAddPoint = () => onChangePoints(points + 1)
  const handleRemovePoint = () => onChangePoints(points - 1)

  const handlePlaylistClick = () => {
    playlist[currentTrack].pause()
    playlist[currentTrack].currentTime = 0

    const nextTrack = (currentTrack + 1) % playlist.length
    setCurrentTrack(nextTrack)

    playlist[nextTrack].play()
  }

  const drawPoints = () => {
    const length = points % 5 === 0 ? Math.floor(points / 5) : Math.floor(points / 5) + 1
    const cantGroups = Array.from({ length }, (_, index) => index + 1)
    return (
      <div>
        {cantGroups.map((group) => (
          <div key={`group-${group}`} className="group">
            {drawImg(group)}
          </div>
        ))}
      </div>
    )
  }

  const drawImg = (group) => {
    const partialCount = points - (group - 1) * 5
    const currentLength = partialCount > 5 ? 5 : partialCount
    return Array.from({ length: currentLength }, (_, i) => (
      <img
        key={`img-${group}-${i + 1}`}
        className={`point${i + 1}`}
        alt={`img-${group}-${i + 1}`}
        src="./img/point.png"
      />
    ))
  }

  return (
    <section className="flex flex-col gap-2 h-full">
      <span className="m-auto w-fit bg-gray-100 text-gray-800 text-base font-medium px-2.5 py-0.5 rounded-full dark:bg-gray-700 dark:text-gray-300 text-center">
        {title} ({points})
      </span>
      <div className="flex flex-col bg-gray-500 min-h-[490px] rounded-lg flex-grow">
        <div className="flex-col flex justify-center items-center h-full">
          {drawPoints()}
        </div>
      </div>
      <div className="inline-flex rounded-md shadow-sm" role="group">
        <button
          type="button"
          onClick={handleAddPoint}
          className="my-2 px-4 py-1 text-sm font-medium text-gray-900 bg-white border border-gray-200 rounded-l-lg hover:bg-gray-100 hover:text-blue-700 focus:z-10 focus:ring-2 focus:ring-blue-700 focus:text-blue-700 dark:bg-gray-700 dark:border-gray-600 dark:text-white dark:hover:text-white dark:hover:bg-gray-600 dark:focus:ring-blue-500 dark:focus:text-white"
        >
          Agregar
        </button>
        <button
          type="button"
          onClick={handleRemovePoint}
          className="my-2 px-4 py-1 text-sm font-medium text-gray-900 bg-white border border-gray-200 rounded-r-md hover:bg-gray-100 hover:text-blue-700 focus:z-10 focus:ring-2 focus:ring-blue-700 focus:text-blue-700 dark:bg-gray-700 dark:border-gray-600 dark:text-white dark:hover:text-white dark:hover:bg-gray-600 dark:focus:ring-blue-500 dark:focus:text-white"
        >
          Sacar
        </button>
        {showMusicButton && (
          <button
            type="button"
            onClick={handlePlaylistClick}
            className="my-2 ml-2 px-4 py-1 text-sm font-medium text-white bg-blue-600 border border-blue-700 rounded-md hover:bg-blue-700 focus:ring-2 focus:ring-blue-500"
          >
            Música
          </button>
        )}
        {/* Botón placeholder transparente */}
        {showMusicButtonPlaceholder && !showMusicButton && (
          <button
            type="button"
            className="my-2 ml-2 px-4 py-1 text-sm font-medium bg-transparent border border-transparent rounded-md cursor-default"
            disabled
          >
            &nbsp;{/* Mantiene espacio */}
          </button>
        )}
      </div>
    </section>
  )
}

export default CounterBoard
