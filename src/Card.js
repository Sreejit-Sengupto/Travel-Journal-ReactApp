import "./Card.css"

export default function Card(props) {
    console.log(props)
    return (
        <div>
            <div className="container">
                {/* <div className="image--container"><img src={props.item.imageUrl} alt="location" className="location--image"/></div> */}
                <img src={props.item.imageUrl} alt="location" className="location--image" />

                <div className="description--container">
                    <div className="title">
                        <div>
                        <span className="location">{props.item.location}</span>
                        <a href={props.item.googleMapsUrl} className="google--link" >View on Google Maps</a>
                        </div>

                        <h1 className="title">{props.item.title}</h1>
                    </div>

                    <div className="date">
                        <p>{props.item.startDate} - {props.item.endDate}</p>
                        <p className="description--text">{props.item.description}</p>
                    </div>
                </div>
            </div>
            <hr></hr>
        </div>
    )
}