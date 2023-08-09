export function Navbar() {
  return (
    <div className='navbar'>
      <h1>Cross Country Campground</h1>
      <ul className='menu'>
        <li>
          <a href='#'>Home</a>
        </li>
        <li>
          <a href='#'>About Us</a>
        </li>
        <li>
          <a href='#'>Activities</a>
        </li>
        <li>
          <a href='#'>Services</a>
        </li>
        <li>
          <a href='#'>Contact Us</a>
        </li>
      </ul>
      <div className='hamburger-icon'>
        <div className='bar'></div>
        <div className='bar'></div>
        <div className='bar'></div>
        <ul className='mobile-menu'>
          <li>
            <a href='#'>Home</a>
          </li>
          <li>
            <a href='#'>About Us</a>
          </li>
          <li>
            <a href='#'>Activities</a>
          </li>
          <li>
            <a href='#'>Services</a>
          </li>
          <li>
            <a href='#'>Contact Us</a>
          </li>
        </ul>
      </div>
    </div>
  );
}
