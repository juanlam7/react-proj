import {useContext, useEffect, useState} from 'react'
import ReleaseContext from '../context/ReleaseContext'
import fakePublic from '../db.json'

export function useRelease ({ keyword } = { keyword: null }) {
  const [loading, setLoading] = useState(false)

  const {release, setRelease} = useContext(ReleaseContext)

  // recuperamos la keyword del localStorage
  const keywordToUse = keyword || localStorage.getItem('lastKeyword') || 'random'

  useEffect(function () {
    setLoading(true)

    setTimeout(() => {
        setRelease(fakePublic.data)
        setLoading(false)
        // guardamos la keyword en el localStorage
        localStorage.setItem('fakePublic', fakePublic.data)

    }, 1000);
    

  }, [keyword, keywordToUse, setRelease])

  return {loading, release}
}