import React, { useState, useEffect } from "react";

const Job = (props) => {

  const {
    company,
    contract,
    featured,
    id,
    languages,
    level,
    location,
    position,
    postedAt,
    role,
    tools,
  } = props.data;

  let keywords = [ role, level, ...languages, ...tools ]


  return (
    <div className="job-container">
      <div className="logo">
        <img src="./logo.png" />
      </div>

      <div className="part1">
        <div className="company">
          <div className="cname"> {company} </div>
          {props.data.new && <span className="new"> new! </span>}
          {props.data.featured && <span className="featured"> featured </span>}
        </div>

        <div className="position"> {position} </div>

        <div className="details">
          <span> {postedAt} </span>
          <span> {contract} </span>
          <span> {location} </span>
        </div>
      </div>

      <div className="part2">
        {
          keywords.map((key, id) => <button onClick={()=> props.setKeywords(key)} key={id}> {key} </button>)
        }
      </div>
    </div>
  );
};

export default Job;
