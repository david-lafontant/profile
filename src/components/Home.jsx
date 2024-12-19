import React from 'react'

export const Home = () => {
    const onButtonClick = () => {
        const pdfUrl = "lafontant_resume.pdf";
        const link = document.createElement("a");
        link.href = pdfUrl;
        link.download = "lafontant_resume.pdf"; // specify the filename
        document.body.appendChild(link);
        link.click();
        document.body.removeChild(link);
    };

    return (
        <div className="px-4 py-5 my-5 text-center">
            <h1 className="display-3 fw-bold text-body-emphasis">I&apos;m David</h1>
            <div className="col-lg-6 mx-auto">
                <p className="lead mb-4">
                    I&apos;m a full-stack web developer dedicated to bringing your vision to life. I deliver solutions that meet your needs and empower your business to thrive in an ever-evolving digital landscape.<br />Let&apos;s connect to turn your projects into success stories—reach out today, and let&apos;s start the conversation!
                </p>
                <ul className='d-md-flex gap-3 justify-content-center align-items-sm-center'>
                    <li className='list-unstyled'><span className='badge bg-secondary p-2'>API</span></li>
                    <li className='list-unstyled'><span className='badge bg-secondary p-2'>FRONTEND</span></li>
                    <li className='list-unstyled'><span className='badge bg-secondary p-2'>BACKEND</span></li>
                    <li className='list-unstyled'><span className='badge bg-secondary p-2'>RUBY ON RAILS</span></li>
                    <li className='list-unstyled'><span className='badge bg-secondary p-2'>MERN</span></li>
                    <li className='list-unstyled'><span className='badge bg-secondary p-2'>DJANGO</span></li>
                    <li className='list-unstyled'><span className='badge bg-secondary p-2'>PERN</span></li>
                </ul>
                <ul className='d-md-flex gap-3 justify-content-center align-items-sm-center'>
                    <li className='list-unstyled'>
                        <button onClick={onButtonClick} className='btn button-5'><i class="bi bi-file-earmark-person"></i>RESUME</button>
                    </li>
                    <li className='list-unstyled'>
                        <a href="https://www.linkedin.com/in/david-lafontant/" target='_blank' className='btn button-5'><i class="bi bi-linkedin"></i>LINKEDIN</a>
                    </li>
                    <li className='list-unstyled'>
                        <a href="https://github.com/david-lafontant" target='_blank' className='btn button-5'><i class="bi bi-github"></i>GITHUB</a>
                    </li>
                </ul>
            </div>
        </div>
    )
}


