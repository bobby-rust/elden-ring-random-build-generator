function Item(props) {
    return (
        <div className='item-container'>
            <h4 className='item-title'>{props.item.name}</h4>
            <img className='item-img' src={props.item.image} alt='item-img' />
            <p className='desc-container'>{props.item.description}</p>
        </div>
    )
}

export default Item
