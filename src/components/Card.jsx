
const Card = (props) => {
    return (
        <div className="card">
            <div className="banner"></div>
            <a className="card-link" href={props.link} target="_blank">
                <img className="card-link-img" src={props.image} alt="none" />
            </a>
            <h1 className="card-name">{props.name}</h1>
            <h3 className={"card-sub" + (props.subs.includes("M") ? " has-M" : "")}>Subscribers: {props.subs}</h3>
            <a href={props.link} target="_blank">
                <button type="button" className="card-button">View Channel</button>
            </a>

        </div>
    )
}

export default Card;