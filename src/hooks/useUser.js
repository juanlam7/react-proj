import {useCallback, useContext, useState} from 'react'
import Context from '../context/UserContext'
import {useLocation} from "wouter"

export default function useUser () {
  const {favs, jwt, setFavs, setJWT} = useContext(Context)
  const [state, setState] = useState({ loading: false, error: false })
  const [, navigate] = useLocation()

  const login = useCallback(({username}) => {
    setState({loading: true, error: false })
    
    const usersData = JSON.parse(localStorage.getItem('UsersData'));

    setTimeout(() => {
      if (usersData && usersData.find(((asd) => {
        return asd.username === username
      }))  ) {
        //si lo consigue
        window.sessionStorage.setItem('jwt', 'token')
        setState({loading: false, error: false })
        setJWT('token')
      } else {
  
        console.log('Not found')
        //si no lo consigue
        window.sessionStorage.removeItem('jwt')
        setState({loading: false, error: true })
      }
    }, 2000);

  }, [setJWT])

  const addFav = useCallback(({id}) => {
    console.log(id, jwt)
  }, [jwt, setFavs]) 

  const logout = useCallback(() => {
    window.sessionStorage.removeItem('jwt')
    setJWT(null)
    navigate('/')
  }, [setJWT])

  return {
    addFav,
    favs,
    isLogged: Boolean(jwt),
    isLoginLoading: state.loading,
    hasLoginError: state.error,
    login,
    logout
  }
} 