import React, { useRef, useState } from 'react';
import emailjs from '@emailjs/browser';
import './Contact.css'

export default function ContactForm() {
  const form = useRef(null);
  const [errorMessages, setErrorMessages] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    let x = document.getElementsByClassName('submit-button');
    x[0].style.visibility = 'hidden';

    // Access form fields via the ref
    const formElements = form.current.elements;
    const name = formElements['from_name'].value;
    const email = formElements['user_email'].value;
    const message = formElements['message'].value;
    let errors = '';
    
    // Validate fields
    if (name === '') {
      errors += 'Name field is required.\n';
    }

    if (email === '') {
      errors += 'Email field is required.\n';
    } else {
      const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
      if (!emailPattern.test(email)) {
        errors += 'Invalid email address.\n';
      }
    }

    if (message === '') {
      errors += 'Message field is required.\n';
    }

    // Update state with errors or send email
    if (errors !== '') {
      setErrorMessages(errors);
      
    } else {
      setErrorMessages('');
      handleEmailSend();
    }
    if( x[0].style.visibility == 'hidden'){
      x[0].style.visibility = 'visible';
    }

  };

  const handleEmailSend = () => {
    
    
    emailjs
      .sendForm('service_4vpf8w8', 'template_u5b2vsh', form.current, {
        publicKey: '-Erhh8geuqvfGRazQ',
      })
      .then(
        () => {
          let x = document.getElementsByClassName('icon');
          if (x.length > 0) {
            x[0].style.display = 'flex';
          } else {
            console.error("No elements found with class name 'icon'");
          }

          console.log('SUCCESS!');
        },
        (error) => {
          console.log('FAILED...', error.text);
          let z=document.getElementsByClassName('submit-button');
         if (z[0].style.visibility == 'hidden') {
        z[0].style.visibility = 'visible';
    
      }
        }
        
      );
      
      const formElements = form.current.elements;
      formElements['from_name'].value="";
      formElements['user_email'].value="";
      formElements['message'].value="";
  };
  const displayNone=()=>{
    let x=document.getElementsByClassName('icon');
    x[0].style.display='none'
  }
  return (
    <div className='mobile'>
       <div className='icon'><span className='close' onClick={displayNone} >X</span><h1>Email sent successfully</h1><svg xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 -960 960 960" width="24px" fill="#FFFFFF"><path d="m424-296 282-282-56-56-226 226-114-114-56 56 170 170Zm56 216q-83 0-156-31.5T197-197q-54-54-85.5-127T80-480q0-83 31.5-156T197-763q54-54 127-85.5T480-880q83 0 156 31.5T763-763q54 54 85.5 127T880-480q0 83-31.5 156T763-197q-54 54-127 85.5T480-80Zm0-80q134 0 227-93t93-227q0-134-93-227t-227-93q-134 0-227 93t-93 227q0 134 93 227t227 93Zm0-320Z" /></svg>
          
        </div>
      <form id="myForm" className="contact-form" onSubmit={handleSubmit} ref={form}>
        <h1>Email me now to start a conversation.</h1>
        <input
          type="text"
          placeholder="Name"
          name="from_name"
          className="input-field"
        />
        <input
          type="email"
          placeholder="Email Address"
          name="user_email"
          className="input-field"
        />
        <textarea
          rows="6"
          placeholder="Message"
          name="message"
          className="textarea-field"
        />
         {errorMessages && <div className="error-messages" style={{color:"red"}}>{errorMessages}</div>}
        <button type="submit" className="submit-button">
          Send
        </button>
      </form>
     
    </div>
  );
}
