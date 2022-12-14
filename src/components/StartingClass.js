import classes_data from '../data/classes_data.json'
import Item from '../components/Item'

function StartingClass() {
    // Find class
    const rand_class_idx = Math.floor(Math.random() * classes_data.count)
    const starting_class = classes_data.data[rand_class_idx]
    // End find class

    return (
        <div className="starting-class-container">
            <Item item={starting_class} />
        </div>
    )
}

export default StartingClass;