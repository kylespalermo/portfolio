import React, {useState} from 'react';

const Intro = (props) => {
    const [contactText, updateContactText] = useState("Contact");

    return (
        <section className="intro">
            <h1>About Me</h1>
            <div className="intro-text">
                <p>{props.introGet.introText}</p>
                <ul className="intro-links">
                    <li>< a href="https://www.linkedin.com/in/kylepalermo/">LinkedIn</a></li>
                    <li><a href="https://github.com/kylespalermo">GitHub</a></li>
                    <li><a href={props.introGet.resume.url}>Resume</a></li>
                    <li onClick={() => updateContactText("kyle@kylepalermo.com")}>{contactText}</li>
                </ul>
            </div>
            <img src={props.introGet.photo.url} alt="My partner and I at Brooklyn Botanical Garden" />
        </section>
        );
    }

export default Intro; 