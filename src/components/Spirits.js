import spirits_data from '../data/spirits_data.json'
import Item from '../components/Item'

function Spirits() {
    // Find spirits
    const rand_spirits_idx = Math.floor(Math.random() * spirits_data.count)
    const spirit = spirits_data.data[rand_spirits_idx]
    // End find spirits

    return (
        <div className='spirits-container'>
            {/* <h2>Spirits</h2> */}
            <Item className='secondary-item-bottom' item={spirit} />
        </div>
    )
}

export default Spirits
