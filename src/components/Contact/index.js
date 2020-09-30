//to use hook
import React, { useState } from 'react';
import { validateEmail } from '../../utils/helpers';

function ContactForm() {
  //hook
  // clear input field on the component loading
  const [formState, setFormState] = useState({ name: '', email: '', message: '' });
  const { name, email, message } = formState;
  //initial state is an empty string
  const [errorMessage, setErrorMessage] = useState('');

  function handleChange(e) {
    //target email <input> element
    if (e.target.name === 'email') {
      //store return value in "isValid"
      const isValid = validateEmail(e.target.value);
      console.log(isValid);
      // isValid conditional statement
      if (!isValid) {
        setErrorMessage('Your email is invalid.');
      } else {
        setErrorMessage('');
      }
    } else {
      //check "message" and name "form" values
      if (!e.target.value.length) {
        setErrorMessage(`${e.target.name} is required.`);
      } else {
        setErrorMessage('');
      }
    }
    //only update if valid
    if (!errorMessage) {
      //... spread operator to retain the other key-value pairs in the object (otherwise would only contain name:value)
      //uses setFormState function to update formState value for the name property
      //.name refers to name attribute not name key
      //use [] to create dynamic property names
      setFormState({ ...formState, [e.target.name]: e.target.value });
    }
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
  // && if true, will render second part
  return (
    <section>
      <h1 data-testid="h1tag">Contact me</h1>
      <form id="contact-form" onSubmit={handleSubmit}>
        <div>
          <label htmlFor="name">Name:</label>
          <input type="text" name="name" defaultValue={name} onBlur={handleChange} />
        </div>
        <div>
          <label htmlFor="email">Email address:</label>
          <input type="email" name="email" defaultValue={email} onBlur={handleChange} />
        </div>
        <div>
          <label htmlFor="message">Message:</label>
          <textarea name="message" rows="5" defaultValue={message} onBlur={handleChange} />
        </div>
        {errorMessage && (
          <div>
            <p className="error-text">{errorMessage}</p>
          </div>
        )}
        <button type="submit" data-testid="button">Submit</button>
      </form>
    </section>
  )
}

export default ContactForm;