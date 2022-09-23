import React from 'react'
import "./navbar.css"
import background from "./hero.svg"
import phone from "./phone.svg"

const Navbar = () => {
    
  return (
    <div>
        <nav className='bg'>
            <h3>stripe</h3>
            <div className='items'>
            <a href="/" className='item'>Product</a>
            <a href="/" className='item'>Developer</a>
            <a href="/" className='item'>Company</a>
            </div>
           
            <button className='btn'>sign in</button>   
        </nav>
        <div className='flex-container'>
            <div>
            <h1>
                Payment infrastusture <br /> for the internet
            </h1>
            <h2>
            Millions of companies of all sizes—from startups to <br /> Fortune 500s—use Stripe’s software and APIs to accept payments, <br /> send payouts, and manage their businesses online
            </h2>
            <button className='btn-1'>start now</button>
            </div>
            <div className='img-container'>
                <img src={phone} alt="" />
            </div>


        </div>
    </div>
  )
}

export default Navbar