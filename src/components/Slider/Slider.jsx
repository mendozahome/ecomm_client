import React, { useState } from 'react'
import EastIcon from '@mui/icons-material/East';
import WestIcon from '@mui/icons-material/West';
import "./Slider.scss";

const Slider = () => {

const [currentSlide, setCurrentSlide] = useState(0)



    const data = [

"https://media.revistagq.com/photos/5ca5f86c6bf5f8a7b70c6f2a/master/w_1600,c_limit/alexander_wang_x_adidas_originals_2901.jpg",
"https://www.ctvnews.ca/content/dam/ctvnews/en/images/2022/1/8/nike-store-cnn-1-5732683-1659022336650.jpg",
"https://www.thefashionlaw.com/wp-content/uploads/2022/03/601071-e1638553712304.jpg-scaled.webp"    ];


const prevSlide = () =>{
setCurrentSlide(currentSlide === 0 ? 2 : (prev) => prev -1)
}

const nextSlide = () =>{
    setCurrentSlide(currentSlide === 2 ? 0 : (prev) => prev + 1)
}


  return (
    <div className='slider'>
        <div className="container" style={{transform: `translateX(-${currentSlide * 100}vw)`}}>
            <img src={data[0]} alt="" />
            <img src={data[1]} alt="" />
            <img src={data[2]} alt="" />
        </div>
<div className="icons">
    <div className="icon" onClick={prevSlide}>
        <WestIcon />
    </div>
    <div className="icon" onClick={nextSlide}>
        <EastIcon />
    </div>
</div>
    </div>
  )
}

export default Slider