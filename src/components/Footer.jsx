export const Footer = () => {
  return (
    <footer className="flex mt-auto pt-4 flex-col text-xs bottom-0 left-0 right-0 text-center opacity-60  text-white/50 justify-center">
      <div>
        {' '}
        Desarrollado por{' '}
        <a
          className="hover:underline"
          target="_blank"
          href={`mailto:SKR`}
        >
          Pevertonto FLOW
        </a>{' '}
        &bull;{' '}
        <a
          className=" hover:underline"
          target="_blank"
          href={`2`}
        >
          IG
        </a>
      </div>
    </footer>
  )
}