import { Outlet } from 'react-router-dom'
import React, { useState, useEffect } from 'react'
import useRefreshToken from './useRefreshToken'
import useAuth from './useAuth'

const PersisLogin = () => {
  const [isLoading, setIsLoading] = useState(true)
  const refresh = useRefreshToken()
  const { auth } = useAuth()

  useEffect(() => {
    const verifyRefreshToken = async () => {
      try {
        await refresh()
      } catch (err) {
        console.error(err)
      } finally {
        setIsLoading(false)
      }
    }
    !auth?.accessToken ? verifyRefreshToken() : setIsLoading(false)
  }, [])
  return (
    <>
    {isLoading
      ? <p>Loading...</p>
      : <Outlet />
    }</>
  )
}

export default PersisLogin
