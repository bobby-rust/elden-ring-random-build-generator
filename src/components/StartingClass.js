function StartingClass(props) {
    return (
        <div className={`starting-class-container${props.size}`}>
            {/* <h2 className='item-title'>{props.starting_class.name}</h2> */}
            <img
                className={`starting-class-img${props.size}`}
                src={props.starting_class.image}
                alt='item-img'
            />
            <p className={`class-desc-container${props.size}`}>
                {props.starting_class.description}
            </p>
        </div>
    )
}

export default StartingClass
