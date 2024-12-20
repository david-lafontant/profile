import React from 'react'
import PropTypes from 'prop-types'

const Project = props => {
    return (
      <div className="col col-md-4 p-2">

        <div className= "card">
        <img src={props.item.picture} alt={props.title} />
        <div className="card-content">
          <h2>
            {props.item.title}
          </h2>
          <p>
           {props.item.description}
          </p>
          <a href={props.item.github} className="button" target='_blank'>
            Find out more 
            <span className="material-symbols-outlined">
            <i class="bi bi-chevron-double-right"></i>
            </span>
          </a>
        </div>
      </div>
      </div>
    )
}

Project.propTypes = {}

export default Project