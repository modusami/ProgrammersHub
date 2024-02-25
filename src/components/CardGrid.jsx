import YOUTUBE_DATA from "../data/data";

const CardGrid = () => {
    // dynamically create cards with props
    return (
        <div id="card-grid">
            {YOUTUBE_DATA.map((value, i) => {
                return (
                    <div key={i} className="card-container">
                        <Card name={value.name}
                            subs={value.subscribers}
                            link={value.link}
                            image={value.img} />
                    </div>
                )
            })}
        </div>
    )
}

export default CardGrid;