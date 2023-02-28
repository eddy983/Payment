import { useState } from 'react'

export const useToggleNav = () => {
  const [isOpen, setIsOpen] = useState(false)

  const handleToggleNav = () => {
    setIsOpen((prevIsOpen) => !prevIsOpen)
  }

  return {
    isOpen,
    handleToggleNav,
  }
}
