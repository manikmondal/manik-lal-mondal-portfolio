import React from "react";
import Review from '../img/testimonials-bg.jpg';



const Contact = () => {
  return (
    <div style={{
      background: `url(${Review})`
    }} className='bg-primary px-10 py-14 '>
      <div className='text-center pb-14 text-white'>
        <h1 className='text-5xl'>Stay connected with us</h1>
      </div>
      <div className="login-container">
        <input
          type='text'
          placeholder='Your Name'
          className='input w-full max-w-md'
        />
        <input
          type='text'
          placeholder='Email Address'
          className='input w-full max-w-md'
        />
        <input
          type='text'
          placeholder='Subject'
          className='input w-full max-w-md'
        />
        <textarea
          className='textarea w-full max-w-md'
          placeholder='Your message'
          rows={6}
        ></textarea>
        <button>Submit</button>
      </div>
    </div>
  );
};

export default Contact;