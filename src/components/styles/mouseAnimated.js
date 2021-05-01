import React from 'react';
import './mouseAnimte.scss'
import './styles.scss'

const MouseScroll = () => {
  return (
    <section id="mouseAnimate">
        <div data-speed="9" class="mouse layer"></div>
        <p data-speed="9" class="layer" id="scroll">Scroll</p>
    </section>
  )
};

export default MouseScroll