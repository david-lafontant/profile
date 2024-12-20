import React, { useState } from 'react'
import { v4 as uuidv4 } from "uuid"
import PropTypes from 'prop-types'

const Project = props => {
  const [modalOpen, setmodalOpen] = useState(false);

  function handleModal() {
    setmodalOpen(prev => !prev);
  }
  return (
    <div className="col col-md-4 p-2">

      <div className="projectCard">
        <img src={props.item.picture} alt={props.title} />
        <div className="card-content">
          <button href={props.item.github} className="btn btn-primary" type="button" onClick={handleModal}>
            Find out more
            <span className="material-symbols-outlined">
              <i className="bi bi-chevron-double-right"></i>
            </span>
          </button>
          <h2>
            {props.item.title}
          </h2>
          <p onClick={handleModal}>
            {props.item.description}
          </p>

        </div>
      </div>
      <div className={modalOpen ? "modalShow" : "d-none"} id={uuidv4()} onClick={handleModal}>
        <div className="card mb-3" style={{ maxWidth: "740px" }}>
          <div className="row g-0" onClick={handleModal}>
            <div className="col-md-4" onClick={handleModal}>
              <img src={props.item.picture} className="img-fluid rounded-start" alt={props.item.title} />
            </div>
            <div className="col-md-8 glass ">
              <div className="card-body">
                <h5 className="card-title display-3 fw-bold">{props.item.title}</h5>
                <p className="card-text">{props.item.description}</p>
                <p className="card-text">
                  {props.item.stack.map(elem => <small key={uuidv4()} className="badge bg-secondary p-2 m-2">{elem}</small>)}
                </p>
                <div className="d-grid gap-2 d-md-flex justify-content-md-start mb-4 mb-lg-3">
                  <a href={props.item.github} className="btn button-5 btn-lg px-4 me-md-2 fw-bold">Live demo</a>
                  <a href={props.item.live} className="btn btn-outline-warning btn-lg px-4">Source code</a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

Project.propTypes = {}

export default Project