import React from "react";

export default function Journal({journal}){
    return (
        <div className="journal bottomborder">
            <img src={journal.imageUrl}/>
            <div className="journal--info">
                <p className="j-location">
                    <i className="fa-solid fa-location-dot"></i>
                    <span>{journal.location}</span>
                    <a href={journal.googleMapsUrl} target="_blank">View on Google Maps</a>
                </p>
                <h1>{journal.title}</h1>
                <h5>{journal.startDate} - {journal.endDate}</h5>
                <p className="summary">{journal.description}</p>
            </div>
        </div>
    )
}