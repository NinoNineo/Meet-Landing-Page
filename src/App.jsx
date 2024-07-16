import { useState } from 'react'
import left_image from './assets/desktop/image-hero-left.png'
import right_image from './assets/desktop/image-hero-right.png'
import meet from './assets/logo.svg';
import videocall from './assets/desktop/image-woman-in-videocall.jpg'
import videochat from './assets/desktop/image-women-videochatting.jpg'
import meeting from './assets/desktop/image-men-in-meeting.jpg'
import texting from './assets/desktop/image-man-texting.jpg'
import phoneVersion from './assets/tablet/image-hero.png'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <div className="project">
        <header>
            <a href="index.html" className="meet">
              <img src={meet} alt="meet" />
            </a>
        </header>
        <main>
          <div className="head flex">
            <div className="img left">
              <img src={left_image} alt="image-hero-left" />
            </div>
            <div className="phoneVersion-img">
              <img src={phoneVersion} alt="phoneVersion" />
            </div>
            <div className="main-content">
              <h1>Group Chat<br/>for Everyone</h1>
              <p className="body-text p">Meet makes it easy to connect with others face-to-face virtually and collaborate across any device.</p>
              <div className="buttons flex">
                <button className="blueBtn btn">Download <span>v1.3</span></button>
                <button className="purpBtn btn">What is it?</button>
              </div>
            </div>
            <div className="img right">
              <img src={right_image} alt="image-hero-right" />
            </div>
          </div>
          <div className="lineDiv flex">
            <div className="line"></div>
            <div className="number body-text">01</div>
          </div>
          <div className="bigBox">
            <div className="boxes flex">
              <div className="box">
                <img src={videocall} alt="image woman in videovcall" />
              </div>
              <div className="box">
                <img src={videochat} alt="image woman in videochatting" />
              </div>
              <div className="box">
                <img src={meeting} alt="image men in meeting" />
              </div>
              <div className="box">
                <img src={texting} alt="image man texting" />
              </div>
            </div>
            <div className="text">
              <h5 className='blueText'>Built for modern use</h5>
              <h2>Smarter meetings, all<br /> in one place</h2>
              <p className='body-text'>Send messages, share files, show your screen, and record your meetings — all in one workspace. Control who can join with invite-only team access, data encryption, and data export.</p>
            </div>
          </div>
        </main>
        <footer>
          <div className="lineDiv flex lineAbsolute">
            <div className="line"></div>
            <div className="number body-text">02</div>
          </div>
          <div className="footer flex">
            <h2>Experience more together</h2>
            <p>Stay connected with reliable HD meetings and unlimited one-on-one and group video sessions.</p>
            <button className="btn purpBtn flex">Download<span>v1.3</span></button>
          </div>
        </footer>
      </div>
    </>
  )
}

export default App
