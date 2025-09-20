import React from 'react'
import BlurText from "../ReactBitsComponents/BlurText";

function TextBlur() {
  return (
    <div className='h-[100vh] w-screen bg-black text-white flex items-center justify-center font-black'>
            <BlurText
  text="Isn't this so cool?!"
  delay={150}
  animateBy="words"
  direction="top"
  className="text-6xl mb-8 font-[FigTree]"
/>
    </div>

  )
}

export default TextBlur