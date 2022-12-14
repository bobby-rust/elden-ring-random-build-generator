function Item(props) {
    return (
        <div className='item-container'>
            <h2 className='item-title'>{props.name}</h2>
            <img src={props.img} alt='item-img' />
            <p className='desc-container'>{props.desc}</p>
        </div>
    )
}

export default Item
