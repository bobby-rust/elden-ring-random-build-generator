import sorceries_data from '../data/ashes_data.json'
import Item from '../components/Item'

function Sorceries() {
    // Find sorceries
    const rand_sorc_idx_1 = Math.floor(Math.random() * sorceries_data.count)
    var rand_sorc_idx_2 = Math.floor(Math.random() * sorceries_data.count)
    
    while (rand_sorc_idx_1 === rand_sorc_idx_2) {
        rand_sorc_idx_2 = Math.floor(Math.random() * sorceries_data.count)
    }
    const sorc_1 = sorceries_data.data[rand_sorc_idx_1]
    const sorc_2 = sorceries_data.data[rand_sorc_idx_2]
    // End find sorceries
    
    return (
        <div className="sorceries-container">
            <h2>Sorceries</h2>
                <Item item={sorc_1} />
                <Item item={sorc_2} />
        </div>
    )
}

export default Sorceries;