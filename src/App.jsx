import './App.css';

const HOME_URL = "https://brianpatino.xyz";
const BLOG_URL = "https://blog.venfo.xyz";
const APPS_URL = "https://brianpatino.xyz/apps";

function App() {
  return (
    <div className="App">
      <nav class="navbar navbar-default">
        <div class="container">
          <div class="navbar-header">
            <button type="button" class="navbar-toggle collapsed" data-toggle="collapse" data-target="#navbar" aria-expanded="false" aria-controls="navbar">
              <span class="sr-only">Toggle navigation</span>
              <span class="icon-bar"></span>
              <span class="icon-bar"></span>
              <span class="icon-bar"></span>
            </button>
            <a class="navbar-brand" href="#">Brian Patino</a>
          </div>
          <div id="navbar" class="collapse navbar-collapse">
            <ul class="nav navbar-nav navbar-right">
              <li><a href={HOME_URL}>Home</a></li>
              <li><a href={BLOG_URL}>Blog</a></li>
              <li><a href={APPS_URL}>Apps</a></li>
              <li><a href=".">About</a></li>
            </ul>
          </div>
        </div>
      </nav>
    </div>
  );
}

export default App;
