import React from 'react'
import "./Categories.scss"
import { Link } from 'react-router-dom'


const Categories = () => {
  return (
    <div className='categories'>
    <div className='col'>
       <div className="row">
        <img src="https://i8.amplience.net/i/jpl/jd_132894_a?qlt=92&w=750&h=957&v=1&fmt=auto" />
        <button>
            <Link className="link" to="/products/1">Woman Clothes</Link>
        </button>
    </div> 
       <div className="row">
       <img src="https://i8.amplience.net/i/jpl/jd_628270_a?qlt=92&w=750&h=957&v=1&fmt=auto" />
        <button>
            <Link className="link" to="/products/2">Men Clothes</Link>
        </button>
        </div> 
    </div>    
    <div className='col'>
    <div className="row">
    <img src="https://i8.amplience.net/i/jpl/jd_368931_a?qlt=92&w=750&h=957&v=1&fmt=auto" />
        <button>
            <Link className="link" to="/products/3">Children</Link>
        </button>
    </div> 
    </div>    
    <div className='col col-l'>
    <div className="row">
    <div className='col'> 
    <div className="row">
    <img src="https://cdn.britannica.com/68/172968-050-DB4BF52C/Tom-Ford-mix-textures-patterns-collection-Pop-art-February-2013.jpg" />
        <button>
            <Link className="link" to="/about">About</Link>
        </button>
        </div>  
    </div>    
    
    <div className='col'>
    <div className="row">
    <img src="https://images.everydayhealth.com/images/healthy-living/fitness/choosing-the-right-workout-clothes-01-722x406.jpg?w=1110" />
        <button>
            <Link className="link" to="/contact">Contact</Link>
        </button>
        </div> 
    </div>
    </div>       
    <div className="row">
    <img src="https://bestlifeonline.com/wp-content/uploads/sites/3/2018/10/woman-layering-clothes.jpg?quality=82&strip=1&resize=640%2C360" />
        <button>
            <Link className="link" to="/stores">Stores</Link>
        </button>
        </div>  
</div>
</div> 
  )
}

export default Categories