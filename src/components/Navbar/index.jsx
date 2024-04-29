import './index.css'

function Navbar() {
  return (
    <div className='navbarContainer'>
      <ul type="none" className='ulContainer'>
        <div className="left-section">
          <li id='main-nav-link'>SocialMediaApp</li>
          <li>Home</li>
          <li>About Us</li>
          <li>Contact Us</li>
        </div>
        <div className="right-section">
          <li>Signup</li>
          <li>Login</li>
        </div>
      </ul>
    </div>
  )
}

export default Navbar







/*
  Types of styling:
  1. Inline
  2. Internal 
  3. External
*/