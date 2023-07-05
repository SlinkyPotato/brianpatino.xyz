import './App.css';

const BLOG_URL = "https://blog.solidchain.xyz";
const APPS_URL = "https://brianpatino.eth.xyz";
const EMAIL_ADDRESS = "patinobrian@gmail.com";
const LINKEDIN_HANDLE = "brianpatino";
const TWITTER_HANDLE = "SlinkyPotato_";
const GITHUB_HANDLE = "SlinkyPotato";

function App() {
  return (
    <div className="App">
      <NavigationBar />
      <SkillsHeader />
      <Portfolio/>
      <About/>
      <Contact/>
      <Footer />
      <MobileScroll />
    </div>
  );
}

function NavigationBar() {
  return (
    <nav className="navbar navbar-default">
        <div className="container">
          <div className="navbar-header">
            <button type="button" className="navbar-toggle collapsed" data-toggle="collapse" data-target="#navbar" aria-expanded="false" aria-controls="navbar">
              <span className="sr-only">Toggle navigation</span>
              <span className="icon-bar"></span>
              <span className="icon-bar"></span>
              <span className="icon-bar"></span>
            </button>
            <a className="navbar-brand" href=".">Brian Patino</a>
          </div>
          <div id="navbar" className="collapse navbar-collapse">
            <ul className="nav navbar-nav navbar-right">
              <li><a href="#portfolio">Portfolio</a></li>
              <li><a href={BLOG_URL}>Blog</a></li>
              <li><a href={APPS_URL}>Apps</a></li>
              <li><a href="#about">About</a></li>
            </ul>
          </div>
        </div>
      </nav>
  );
}

function SkillsHeader(){
  return (
    <header>
      <div className="container">
        <div className="row">
          <div className="col-sm-6 col-md-6 col-lg-4">
            <img className="img-responsive img-thumbnail" data-wow-duration="2s" src="img/profile.jpg" alt="profile" />
          </div>
          <div className="col-sm-6 col-md-6 col-lg-8">
            <div className="intro-text">
              <span className="name">Brian Patino</span>
              <hr className="star-light" />
              <div className="skills">
                <div className="col-sm-12">
                  User Experience
                </div>
                <div className="col-sm-12">
                  Network and Server
                </div>
                <div className="col-sm-12">
                  Data Modeling
                </div>
                <div className="col-sm-12">
                  Business Logic
                </div>
                <div className="col-sm-12">
                  Business Needs
                </div>
                <div className="col-sm-12">
                  System Administration
                </div>
                <div className="col-sm-12">
                  Model View Controller
                </div>
                <div className="col-sm-12">
                  Programmer
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
}

function Portfolio() {
    return (
      <section className="portfolio">
        <div className="container">
          <div className="row">
            <div className="col-lg-12 text-center wow fadeInDown" data-wow-duration="3s">
              <h2 id="portfolio">Portfolio</h2>
              <hr className="star-primary" />
            </div>
          </div>
          <div className="row wow fadeInDown" data-wow-duration="3s">
            <div className="col-md-2 col-lg-2 col-md-offset-1 col-lg-offset-1">
              <h4>Experience</h4>
            </div>
            <div className="col-md-4 col-lg-4 col-md-offset-2 col-lg-offset-2">
              <strong>Java API Developer</strong>
              <br />
              <span>Synchrony</span>
            </div>
            <div className="col-md-3 col-lg-3">
              <span>July 2018 - Present</span>
            </div>
          </div>
          <br />
          <div className="row wow fadeInDown" data-wow-duration="3s">
            <div className="col-md-4 col-lg-4 col-md-offset-5 col-lg-offset-5">
              <strong>Web Developer</strong>
              <br />
              <span>University of Connecticut</span>
            </div>
            <div className="col-md-3 col-lg-3">
              <span>September 2015 - May 2018</span>
            </div>
          </div>
          <br />
          <div className="row wow fadeInDown" data-wow-duration="3s">
            <div className="col-md-4 col-lg-4 col-md-offset-5 col-lg-offset-5">
              <strong>Java Developer Summer Intern</strong>
              <br />
              <span>Starwood Hotels &amp; Resorts Worldwide, Inc.</span>
            </div>
            <div className="col-md-3 col-lg-3">
              <span>June 2015 - August 2015</span>
            </div>
          </div>
          <br />
          <div className="row wow fadeInDown" data-wow-duration="3s">
            <div className="col-md-4 col-lg-4 col-md-offset-5 col-lg-offset-5">
              <strong>Web &amp; Mobile Developer</strong>
              <br />
              <span>WPRV Praise Radio Vision Networks</span>
            </div>
            <div className="col-md-3 col-lg-3">
              <span>July 2014 - January 2015</span>
            </div>
          </div>
          <br />
          <div className="row wow fadeInDown" data-wow-duration="3s">
            <div className="col-md-4 col-lg-4 col-md-offset-5 col-lg-offset-5">
              <strong>Database Administrator</strong>
              <br />
              <span>Norwalk Community College</span>
            </div>
            <div className="col-md-3 col-lg-3">
              <span>September 2013 - July 2014</span>
            </div>
          </div>
          <hr />
          <div className="row wow fadeInDown" data-wow-duration="3s">
            <div className="col-md-2 col-lg-2 col-md-offset-1 col-lg-offset-1">
              <h4>Education</h4>
            </div>
            <div className="col-md-4 col-lg-4 col-md-offset-2 col-lg-offset-2">
              <strong>Bachelor of Science in Computer Science</strong>
              <br />
              <span>University of Connecticut</span>
            </div>
            <div className="col-md-3 col-lg-3">
              <span>September 2014 - May 2018</span>
            </div>
          </div>
          <br />
          <div className="row wow fadeInDown" data-wow-duration="3s">
            <div className="col-md-4 col-lg-4 col-md-offset-5 col-lg-offset-5">
              <strong>Associate of Science in Computer Science</strong>
              <br />
              <span>Norwalk Community College</span>
            </div>
            <div className="col-md-3 col-lg-3">
              <span>September 2012 - May 2014</span>
            </div>
          </div>
          <br />
          <div className="row wow fadeInDown" data-wow-duration="3s">
            <div className="col-md-4 col-lg-4 col-md-offset-5 col-lg-offset-5">
              <strong>Independent Study</strong>
              <br />
              <span>edX</span>
            </div>
          </div>
          <hr />
          <div className="row wow fadeInDown" data-wow-duration="3s">
            <div className="col-md-2 col-lg-2 col-md-offset-1 col-lg-offset-1">
              <h4>Awards &amp; Certifications</h4>
            </div>
            <div className="col-md-4 col-lg-4 col-md-offset-2 col-lg-offset-2">
              <strong>Men of Promise Award</strong>
              <br />
              <span>Norwalk Community College</span>
            </div>
            <div className="col-md-3 col-lg-3">
              <span>April 2014</span>
            </div>
          </div>
          <br />
          <div className="row wow fadeInDown" data-wow-duration="3s">
            <div className="col-md-4 col-lg-4 col-md-offset-5 col-lg-offset-5">
              <strong>CompTIA A+ Cerfiticate</strong>
              <br />
              <span>CompTIA</span>
            </div>
            <div className="col-md-3 col-lg-3">
              <span>June 2013</span>
            </div>
          </div>
          <br />
          <div className="row wow fadeInDown" data-wow-duration="3s">
            <div className="col-md-4 col-lg-4 col-md-offset-5 col-lg-offset-5">
              <strong>CPR/AED Certificate</strong>
              <br />
              <span>American Red Cross</span>
            </div>
            <div className="col-md-3 col-lg-3">
              <span>February 2014</span>
            </div>
          </div>
        </div>
      </section>
    );
}

function About() {
  return (
    <section className="success about">
      <div className="container">
        <div className="row">
          <div className="col-lg-12 text-center wow fadeInDown" data-wow-duration="2s">
            <h2 id="about">About</h2>
            <hr className="star-light" />
          </div>
        </div>
        <div className="row">
          <div className="col-md-4 col-lg-4 col-md-offset-2 col-lg-offset-2">
            <img className="img-responsive img-rounded wow fadeInLeft" src="img/cool-code.gif" alt="cool emmet code" />
          </div>
          <div className="col-md-4 col-lg-4">
            <p className="wow fadeInRight" data-wow-duration="2s">
              I write a lot of Java, PHP, SQL, JavaScript, Python and HTML code.
            </p>
            <p className="wow fadeInRight" data-wow-duration="2s">
              I love learning about new technologies and best practices.
            </p>
            <p className="wow fadeInRight" data-wow-duration="2s">
              This cool piece of code is written with <a href="http://emmet.io/" target="_blank" rel="noreferrer">Emmet</a>.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}

function Contact() {
  return (
    <section className="contact">
      <div className="container">
        <div className="row">
          <div className="col-lg-12 text-center">
            <h2 className="wow fadeInDown" id="contact">Contact Me</h2>
            <hr className="star-primary" />
          </div>
        </div>
        <div className="row">
          <div className="col-sm-12 col-md-12 col-lg-12 contacts">
            <ul className="list-inline">
              <li>
                <a href={"https://github.com/" + GITHUB_HANDLE} target="_blank" rel="noreferrer" className="btn-social btn-outline">
                  <i className="fa fa-fw fa-brands fa-github-square fa-4x wow rollIn" data-wow-duration="2s"></i>
                </a>
              </li>
              <li>
                <a href={"https://twitter.com/" + TWITTER_HANDLE} target="_blank" rel="noreferrer" className="btn-social btn-outline">
                  <i className="fa fa-fw fa-brands fa-twitter fa-4x wow rollIn" data-wow-duration="2s"></i>
                </a>
              </li>
              <li>
                <a href={"https://www.linkedin.com/in/" + LINKEDIN_HANDLE} target="_blank" rel="noreferrer" className="btn-social btn-outline">
                  <i className="fa fa-fw fa-brands fa-linkedin fa-4x wow rollIn" data-wow-duration="2s"></i>
                </a>
              </li>
              <li>
                <a href={"mailto:" + EMAIL_ADDRESS} target="_blank" rel="noreferrer" className="btn-social btn-outline">
                  <i className="fa fa-fw fa-envelope fa-4x wow rollIn" data-wow-duration="2s"></i>
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}

function Footer() {
  return (
    <footer className="text-center">
      <div className="footer-above">
        <div className="container">
          <div className="row">
            <div className="footer-col col-md-4">
              <h3>Location</h3>
              <p>Stamford, CT 06902</p>
            </div>
            <div className="footer-col col-md-4 pull-right">
              <h3>Technology</h3>
              <p>Check out the technologies used to create this page at <a
                  href="https://github.com/SlinkyPotato/brianpatino.xyz" target="_blank" rel="noreferrer">Github</a>.</p>
            </div>
          </div>
        </div>
      </div>
      <div className="footer-below">
        <div className="container">
          <div className="row">
            <div className="col-lg-12">
              For the Community
            </div>
          </div>
        </div>
      </div>
  </footer>
  );
}

function MobileScroll() {
  return (
    <div className="scroll-top page-scroll visible-xs visible-sm">
      <a className="btn btn-primary" href=".">
        <i className="fa fa-chevron-up"></i>
      </a>
    </div>
  );
}

export default App;
