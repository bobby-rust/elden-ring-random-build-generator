function Item(props) {
    return (
        <div className='item-container'>
            <h2 className='item-title'>{props.item.name}</h2>
            <img src={props.item.image} alt='item-img' />
            <p className='desc-container'>{props.item.description}</p>
        </div>
    )
}

export default Item
