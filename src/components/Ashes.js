import ashes_data from '../data/ashes_data.json'
import Item from '../components/Item'

function Ashes() {
    // Find ashes
    const rand_ashes_idx = Math.floor(Math.random() * ashes_data.count)
    const ashes = ashes_data.data[rand_ashes_idx]
    // End find ashes

    return (
        <div className='ashes-container'>
            <h1>Ashes</h1>
            <Item item={ashes} />
        </div>
    )
}

export default Ashes
