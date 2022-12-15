import armors_data from '../data/armors_data.json'
import Item from '../components/Item'

function Armors() {
    // Find armor
    var foundArmor = false
    const armors_found = []
    const categories_found = []

    while (!foundArmor) {
        const rand_armors_idx = Math.floor(Math.random() * armors_data.count)
        const randArmorPiece = armors_data.data[rand_armors_idx]
        const category = randArmorPiece.category

        // it just has to be four unique armor types. Easy way to tell if found a full set.
        if (!categories_found.includes(category)) {
            categories_found.push(category)
            armors_found.push(randArmorPiece)
        }

        if (categories_found.length === 4) {
            foundArmor = true
        }
    }
    // End find armor

    return (
        <>
            <h1>Armor</h1>
            <div className='armors-outer'>
                {armors_found.map((armor, idx) => {
                    console.log(armor)
                    return (
                        <div className='armors-container'>
                            <Item item={armor} />
                        </div>
                    )
                })}
            </div>
        </>
    )
}

export default Armors
