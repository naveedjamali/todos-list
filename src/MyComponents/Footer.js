import React from 'react'

export const Footer = () => {
  let footerStyle = { position: "absolute", top: "100vh", width: '100%', border:'2px solid red' }
  return (

    <footer className='bg-dark text-light' style={footerStyle}>
      <p className="text-center py-3"> Copyrights &copy; TODOS LIST</p></footer>
  )
}
