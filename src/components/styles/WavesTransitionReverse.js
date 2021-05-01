import * as React from "react"

import './waveReverse.scss'

import background from '/src/images/wave-reverse.png'

const WavesTransitionReverse = () => (
  <section id="wave_section-reverse">
      <div style={{ backgroundImage: `url(${background})` }} className="wave-reverse wave1-reverse"></div>
      <div style={{ backgroundImage: `url(${background})` }} className="wave-reverse wave2-reverse"></div>
      <div style={{ backgroundImage: `url(${background})` }} className="wave-reverse wave3-reverse"></div>
      <div style={{ backgroundImage: `url(${background})` }} className="wave-reverse wave4-reverse"></div>
  </section>
)

export default WavesTransitionReverse