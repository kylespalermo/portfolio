import React from 'react';
import DOMPurify from 'dompurify';


const Intro = (props) => {
    var cleanIntroLinks = DOMPurify.sanitize(props.introGet.links.html);
    return (
        <section className="intro">
            <h1>About Me</h1>
            <div className="intro-text">
                <p>{props.introGet.introText}</p>
                <p className="intro-links" dangerouslySetInnerHTML={{__html:cleanIntroLinks}}/>
            </div>
            <img src={props.introGet.photo.url} />
        </section>
        );
    }

export default Intro; 