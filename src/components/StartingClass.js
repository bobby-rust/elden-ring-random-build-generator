function StartingClass(props) {
        
    return (
        <div className='starting-class-container'>
            <h2 className='item-title'>{props.starting_class.name}</h2>
            <img
                className='starting-class-img'
                src={props.starting_class.image}
                alt='item-img'
            />
            <p className='desc-container'>{props.starting_class.description}</p>
        </div>
    )
}

export default StartingClass
