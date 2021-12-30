export default function Home() {
  return (
    <>
      <div className="flex flex-col h-screen">
        <div className="flex-grow" id="container">
          .com
        </div>
        <div className="tiny text-right pr-2 text-gray-400">
          That's it. That's the site. From{' '}
          <a href="https://www.alanwsmith.com/" className="text-blue-400">
            Alan W. Smith
          </a>{' '}
          for{' '}
          <a href="https://dusty.domains/" className="text-blue-400">
            Dusty Domains 2021
          </a>
        </div>
      </div>
    </>
  )
  // return <div id="container">.com</div>
}
