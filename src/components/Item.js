

function Item(props) {
    return (
        <div className="item-container">
            <h2 className="item-title">{props.name}</h2>
            <img src={props.img} alt="item-img" />
        </div>
    )
}

export default Item;