import './index.scss'
function NotFound() {
  const routePath = "NotFound"
  return (
    <>
      <div className="not-found-container">
        <div className="text-center">

          <div className="ghost-icon">
            <i className="fa-solid fa-ghost"></i>
          </div>

          <h1 className="display-1">You Are Offline</h1>
          <h2 className="mb-3">Please Check The Internet Connection</h2>
        </div>
      </div>
    </>
  )
}

export default NotFound