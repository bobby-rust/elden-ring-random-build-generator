function StartingClass(props) {
    return (
        <div>
            {/* <h2 className='item-title'>{props.starting_class.name}</h2> */}
            <img className='class-img' src={props.starting_class.image} alt='item-img' />
            <p className='item-desc'>{props.starting_class.description}</p>
        </div>
    )
}

export default StartingClass
