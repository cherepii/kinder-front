import { useEffect, useState } from 'react'

export const useIsMob = () => {
  const [isMob, setIsMob] = useState(false)

  useEffect(() => {
    setIsMob(window.matchMedia('(max-width: 540px)').matches)
  }, [])

  return isMob
}
