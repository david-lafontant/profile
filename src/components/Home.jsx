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
        <div className="container-fluid" id="home">
            <h1>Web developer</h1>

            <ul>
                <li>
                    <button onClick={onButtonClick} className='btn'>RESUME</button>
                </li>
                <li>
                    <a href="https://www.linkedin.com/in/david-lafontant/" target='_blank' className='btn'>LINKEDIN</a>
                </li>
                <li>
                    <a href="https://github.com/david-lafontant" target='_blank' className='btn'>GITHUB</a>
                </li>
            </ul>
        </div>
    )
}
