import React from 'react'
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome"

function Highlight({icon, title, para}) {
  return (
    <div className="highlight">
        <div className="highlight-img">
            {icon}
        </div>
        <h3 className="highlight-subtitile">{title}</h3>
        <p className="highlight-para">
            {para}
        </p>
    </div>
  )
}

export default Highlight