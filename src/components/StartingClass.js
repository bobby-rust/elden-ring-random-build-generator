import classes_data from '../data/classes_data.json'

function StartingClass() {
    // Find class
    const rand_class_idx = Math.floor(Math.random() * classes_data.count)
    const starting_class = classes_data.data[rand_class_idx]
    // End find class

    return (
        <div className='starting-class-container'>
            <h2 className='item-title'>{starting_class.name}</h2>
            <img
                className='starting-class-img'
                src={starting_class.image}
                alt='item-img'
            />
            <p className='desc-container'>{starting_class.description}</p>
        </div>
    )
}

export default StartingClass
