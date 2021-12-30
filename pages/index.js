export default function Home() {
  return (
    <>
      <div className="flex flex-col h-screen">
        <div className="flex-grow" id="container">
          .com
        </div>
        <div className="tiny text-right pr-2 text-gray-400">
          That&apos;s it. That&apos;s the site. From{' '}
          <a href="https://twitter.com/TheIdOfAlan" className="text-blue-500">
            Alan W. Smith
          </a>{' '}
          (who also does{' '}
          <a
            href="https://www.alanwsmith.com/the-pod-of-alan"
            className="text-blue-500"
          >
            a podcast
          </a>
          ) for{' '}
          <a href="https://dusty.domains/" className="text-blue-500">
            Dusty Domains 2021
          </a>
        </div>
      </div>
    </>
  )
  // return <div id="container">.com</div>
}
