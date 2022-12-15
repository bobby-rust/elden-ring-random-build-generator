import incantations_data from '../data/incantations_data.json'
import Item from '../components/Item'

function Incantations() {
    // Find incantations
    const rand_incant_idx_1 = Math.floor(
        Math.random() * incantations_data.count
    )
    var rand_incant_idx_2 = Math.floor(Math.random() * incantations_data.count)

    while (rand_incant_idx_1 === rand_incant_idx_2) {
        rand_incant_idx_2 = Math.floor(Math.random() * incantations_data.count)
    }
    const incant_1 = incantations_data.data[rand_incant_idx_1]
    const incant_2 = incantations_data.data[rand_incant_idx_2]
    // End find incantations

    return (
        <>
            <div className='incantations-container'>
                <h1>Incantations</h1>
                <Item item={incant_1} />
                <Item id='secondary-item-bottom' item={incant_2} />
            </div>
        </>
    )
}

export default Incantations
