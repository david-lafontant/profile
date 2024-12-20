import React from 'react'
import profile from '../assets/images/profile-pic-2.png';

export const About = () => {
    return (

        <div className="container my-5" id="about">
            <div className="row p-4 pb-0 pe-lg-0 pt-lg-5 align-items-center rounded-3 border shadow-lg">
                <div className="col-lg-7 p-3 p-lg-5 pt-lg-3">
                    <h1 className="display-3 fw-bold lh-1 text-body-emphasis">Your success, my passion!</h1>
                    <p className="lead">
                        I am committed to helping you succeed and grow. Whether you&apos;re looking to build a robust backend, create a captivating frontend, or develop a fully integrated web application, I bring expertise and creativity to bring your vision to life.<br />My mission is to deliver solutions that meet your needs and empower your business to thrive in an ever-evolving digital landscape. Please take a moment to explore my projects and see the results of my dedication and technical proficiency.<br />Fifteen years of management experience have given me the communications and team management skills that you will also need to succeed. If you&apos;re inspired by what you see or have an idea you&apos;d like to discuss, I&apos;d be delighted to connect.
                    </p>
                    <div className="d-grid gap-2 d-md-flex justify-content-md-start mb-4 mb-lg-3">
                        <button type="button" className="btn button-5 btn-lg px-4 me-md-2 fw-bold">Resume</button>
                        <button type="button" className="btn btn-outline-warning btn-lg px-4">Contact me</button>
                    </div>
                </div>
                <div className="col-lg-4 offset-lg-1 p-0 overflow-hidden shadow-lg">
                    <img className="rounded-lg-3" src={profile} alt="lafontant picture" width="720" />
                </div>
            </div>
        </div>
    )
}


