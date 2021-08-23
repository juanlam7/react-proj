import React from "react"
import { Link, Route, Switch } from "wouter"

export default function Home() {
  return (
    <>
        <h2>Digital Tech Inc.</h2>
        <div className="back_img">
          <div className="bar">
            <Link to="/register">
              <div>
                <a className="btn">Get started</a>
              </div>
            </Link>
          </div>
        </div>
    </>
  )
}