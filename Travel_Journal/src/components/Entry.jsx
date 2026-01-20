import markerImg from "../images/marker.png";

export default function Entry(props){
    return (
        <article className="journal-entry">
            <div className="main-image-container">
                <img className="main-image" src={props.entry.img.src} alt={props.entry.img.alt} />
            </div>
            <div className="info-container">
                <div className="location-info">
                    <img className="marker" src={markerImg} alt="location icon" />
                    <span className="country">{props.entry.country}</span>
                    <a href={props.entry.googleMapsLink}>View on Google Maps</a>
                </div>
                <h2 className="entry-title">{props.entry.title}</h2>
                <p className="entry-text">{props.entry.dates}</p>
                <p>{props.entry.text}</p>
            </div>
        </article>

    )
}