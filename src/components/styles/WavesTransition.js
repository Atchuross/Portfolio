import * as React from "react"

import './wave.scss'

import background from '/src/images/wave.png'

const WavesTransition = () => (
  <section id="wave_section">
      <div style={{ backgroundImage: `url(${background})` }} className="wave wave1"></div>
      <div style={{ backgroundImage: `url(${background})` }} className="wave wave2"></div>
      <div style={{ backgroundImage: `url(${background})` }} className="wave wave3"></div>
      <div style={{ backgroundImage: `url(${background})` }} className="wave wave4"></div>
  </section>
)

export default WavesTransition