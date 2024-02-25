
const Card = (props) => {
    return (
        <div className="card">
            <a className="card-link" href={props.link} target="_blank">
                <img className="card-link-img" src={props.image} alt="none" />
            </a>
            <h1 className="card-name">{props.name}</h1>
            <h3 className="card-sub">Subscribers: {props.subs}</h3>
        </div>
    )
}

export default Card;