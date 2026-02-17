// NavContext.jsx
import React, { useState, createContext } from 'react'

export const NavbarContext = createContext()

const NavContext = ({ children }) => {
  const [navOpen, setnavOpen] = useState(false)

  return (
    <NavbarContext.Provider value={[navOpen, setnavOpen]}>
      {children}
    </NavbarContext.Provider>
  )
}

export default NavContext
