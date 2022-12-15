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
            <div className='primary-items-container'>
                <div className='weapons-outer'>
                    <h1>Weapons</h1>
                    <div className='weapons-container'>
                        <Item item={rand_weapon_1} />
                        <Item item={rand_weapon_2} />
                    </div>
                </div>
                <div className='shield-outer'>
                    <h1>Shield</h1>
                    <Shield />
                </div>
            </div>
        </>
    )
}

export default Weapons
