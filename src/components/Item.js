function Item(props) {
    return (
        <div className={`item-container${props.CSS}`}>
            <h4 className='item-title'>{props.item.name}</h4>
            <a href={`https://eldenring.wiki.fextralife.com/${props.item.name}`} rel="noreferrer" target="_blank">
                <img className='item-img' src={props.item.image} alt={props.item.name + " img"} />
            </a>
            <p className='desc-container'>{props.item.description}</p>
        </div>
    )
}

export default Item
