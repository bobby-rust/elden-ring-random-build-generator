import weapons_data from '../data/weapons_data.json'
import Item from '../components/Item'
import Shield from '../components/Shield'

function Weapons() {

    // Find weapon(s)
    const rand_weapon_idx_1 = Math.floor(Math.random() * weapons_data.count)
    const rand_weapon_idx_2 = Math.floor(Math.random() * weapons_data.count)
    const rand_weapon_1 = weapons_data.data[rand_weapon_idx_1]
    const rand_weapon_2 = weapons_data.data[rand_weapon_idx_2]
    // End find weapon(s)

    return (
        <>
        <h2>Primary Items</h2>
        <div className="primary-items-container">
            <div className="weapons-outer">
                <h2>Weapons</h2>
                <div className="weapons-container">
                    <Item item={rand_weapon_1}/>
                    <Item item={rand_weapon_2} />
                </div>
            </div>
            <div className="shield-outer">
                <h2>Shield</h2>
                <Shield />
            </div>
        </div>
        </>
    )
}

export default Weapons;