import app from 'apprun';
declare var global;
export default (props, children) => global.ssr ? <html>
  <head>
    <meta charset="utf-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1, shrink-to-fit=no" />
    <title>AppRun</title>
    <link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/4.0.0/css/bootstrap.min.css"
      integrity="sha384-Gn5384xqQ1aoWXA+058RXPxPg6fy4IWvTNh0E263XmFcJlSAwiGgFAW/dAiS6JXm" crossorigin="anonymous" />
  </head>
  <body>
    <div className="container">
      <nav className="navbar navbar-expand-lg navbar-light bg-light">
        <a className="navbar-brand" href="/">Project Name</a>
        <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent"
          aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav mr-auto">
            <li className="nav-item active">
              <a className="nav-link" href="#" onclick="app.run('/', event, '/')">Home</a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#" onclick="app.run('/', event, '/about')">About</a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#" onclick="app.run('/', event, '/contact')">Contact</a>
            </li>
            <li>
              <a className="nav-link">{new Date().toLocaleTimeString()}</a>
            </li>
          </ul>
        </div>
      </nav>
      <div className="container" id="my-app">
        {children || ''}
      </div>
    </div>
    <script src="https://code.jquery.com/jquery-3.2.1.min.js"></script>
    <script src="https://maxcdn.bootstrapcdn.com/bootstrap/4.0.0/js/bootstrap.min.js" integrity="sha384-JZR6Spejh4U02d8jOt6vLEHfe/JQGiRRSQQxSfFWpi1MquVdAyjUar5+76PVCmYl" crossorigin="anonymous"></script>
    <script src="https://unpkg.com/apprun@latest/dist/apprun.js"></script>
    <script src="app.js"></script>
  </body>
</html> : <div>{children || ''}</div>
