import markerImg from "../images/marker.png";

export default function Entry(props){
    return (
        <article className="journal-entry">
            <div className="main-image-container">
                <img className="main-image" src={props.img} alt={props.alt} />
            </div>
            <div className="info-container">
                <div className="location-info">
                    <img className="marker" src={markerImg} alt="location icon" />
                    <span className="country">{props.country}</span>
                    <a href={props.googleMapsLink}>View on Google Maps</a>
                </div>
                <h2 className="entry-title">{props.title}</h2>
                <p className="entry-text">{props.dates}</p>
                <p>{props.text}</p>
            </div>
        </article>

    )
}