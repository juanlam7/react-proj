import React, {useState} from 'react'

const Context = React.createContext({})

export function ReleaseContextProvider ({children}) {
  console.log(children)
  const [release, setRelease] = useState([])

  return <Context.Provider value={{release, setRelease}}>
    {children}
  </Context.Provider>
}

export default Context