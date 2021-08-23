import React from "react"
import Publications from '../../components/Publications'
import {useRelease} from '../../hooks/useRelease'

export default function Feed() {
    const {release} = useRelease()

  return (
    <>
        <div className="App-wrapper">
            <div className="App-main">
                <div className="App-results">
                    <h3 className="App-title">DTech Inc</h3>
                    <Publications release={release} />
                </div>
                
            </div>
        </div>
    </>
  )
}