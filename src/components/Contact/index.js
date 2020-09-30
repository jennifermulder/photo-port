//to use hook
import React, { useState } from 'react';

function ContactForm() {
  //hook
  // clear input field on the component loading
  const [formState, setFormState] = useState({ name: '', email: '', message: '' });
  const { name, email, message } = formState;

  function handleChange(e) {
    //... spread operator to retain the other key-value pairs in the object (otherwise would only contain name:value)
    //uses setFormState function to update formState value for the name property
    //.name refers to name attribute not name key
    //use [] to create dynamic property names
    setFormState({ ...formState, [e.target.name]: e.target.value })
  }
  // console.log(formState);

  function handleSubmit(e) {
    e.preventDefault();
    console.log(formState);
  }
  
  // JSX
  //htmlFor = for 
  //defaultValue={formState.name} --- assign initial state values to the input fields in the DOM
  //default value pulling from formState
  //on Change (ex. keystroke in field), fire handleChange function
  return (
    <section>
      <h1>Contact me</h1>
      <form id="contact-form" onSubmit={handleSubmit}>
        <div>
          <label htmlFor="name">Name:</label>
          <input type="text" name="name" defaultValue={name} onChange={handleChange} />
        </div>
        <div>
          <label htmlFor="email">Email address:</label>
          <input type="email" name="email" defaultValue={email} onChange={handleChange} />
        </div>
        <div>
          <label htmlFor="message">Message:</label>
          <textarea name="message" rows="5" defaultValue={message} onChange={handleChange} />
        </div>
        <button type="submit">Submit</button>
      </form>
    </section>
  )
}

export default ContactForm;