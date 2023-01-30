import { useEffect } from 'react'
import { useNavigate } from 'react-router-dom'

export const RedirectToWelcome1: React.FC = () => {
  const nav = useNavigate()
  useEffect(() => {
    nav('/welcome/1')
  }, [])
  // 需要在useEffect中调用
  return null
}
