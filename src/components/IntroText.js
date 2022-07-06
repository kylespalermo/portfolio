import React from 'react';

const Intro = (props) => {
  return (
    <div>
      <p>{props.introTextGet.introText}</p>
      <p dangerouslySetInnerHTML={{__html:props.introTextGet.links}}/>
      <img src={props.introTextGet.photo} />
    </div>
    );
  }

export default Intro; 