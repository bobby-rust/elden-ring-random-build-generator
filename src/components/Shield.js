import shields_data from '../data/shields_data.json'
import Item from '../components/Item'

function Shields() {
    // Find shield
    const rand_shield_idx = Math.floor(Math.random() * shields_data.count)
    const shield = shields_data.data[rand_shield_idx]
    // End find shield

    return (
        <div className="shield-container">
            <Item item={shield} />
        </div>
    )
}    
   
export default Shields;