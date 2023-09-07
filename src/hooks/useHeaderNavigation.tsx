import { useState } from 'react'

const useHeaderNavigation = () => {
  const [isVisible, setIsVisible] = useState(false)
  const [scrollY, setScrollY] = useState(0)

  function toggleVisible() {
    setIsVisible((state) => (state ? false : true))
  }

  return {
    isVisible,
    toggleVisible,
    scrollY,
    setScrollY
  }
}

export default useHeaderNavigation
