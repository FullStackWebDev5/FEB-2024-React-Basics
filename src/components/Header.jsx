import React from 'react'

function Header() {
  return (
    <>
      <h1>Welcome to SocialMediaApp</h1>
      <p>Explore new friends, send connection and discuss topics :)</p>
    </>
  )
}

export default Header

/*
  ## Display data:
    {} - To use variable/constant values, to display output of some JavaScript expression

  ## Conditional Rendering:
    {true && <h1>Hello</h1>} -> <h1>Hello</h1>
    {false && <h1>Hello</h1>} -> [EMPTY]

  ## Fragment: <></>
*/