export function ContactUs() {
  return (
    <div className='contact-us'>
      <form>
        <h2 className='section-title'>Contact Us</h2>
        <div className='form-div'>
          <div className='form-inline'>
            <div className='form-col'>
              <label htmlFor='firstName' className='form-label'>
                First name
              </label>
              <input
                type='text'
                id='firstName'
                className='form-input'
                placeholder='First name'
              />
            </div>
            <div className='form-col'>
              <label htmlFor='lastName' className='form-label'>
                Last name
              </label>
              <input
                type='text'
                id='lastName'
                className='form-input'
                placeholder='Last name'
              />
            </div>
          </div>
          <div className='form-col'>
            <label htmlFor='email' className='form-label'>
              Email
            </label>
            <input
              type='email'
              id='email'
              className='form-input'
              placeholder='you@company.com'
            />
          </div>
          <div className='form-col'>
            <label htmlFor='phoneNumber' className='form-label'>
              Phone number
            </label>
            <input
              type='tel'
              id='phoneNumber'
              className='form-input'
              placeholder='555-000-0000'
            />
          </div>
          <div className='form-col'>
            <label htmlFor='message' className='form-label'>
              Message
            </label>
            <textarea
              id='message'
              className='form-input message-input'
              rows={4}
            ></textarea>
          </div>
          <button className='form-btn'>Send Message</button>
        </div>
      </form>
    </div>
  );
}
