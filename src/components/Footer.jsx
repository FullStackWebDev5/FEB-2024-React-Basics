import React from 'react'

function Footer() {
  const links = {
    friendRequest: '/request',
    feed: '/feed',
    profile: '/profile'
  }
  return (
    <div>
      Additional Links
      <a href={links.friendRequest}>Friend Connection Requests</a>
      <a href={links.feed}>Feed</a>
      <a href={links.profile}>Profile</a>

      &copy; Social Media App 2023
    </div>
  )
}

export default Footer