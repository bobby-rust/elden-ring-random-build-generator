import './App.css'
import Item from './components/Item'
import weapons_data from './data/weapons_data.json'
import armors_data from './data/armors_data.json'
import talismans_data from './data/talismans_data.json'
import incantations_data from './data/incantations_data.json'
import ashes_data from './data/ashes_data.json'
import spirits_data from './data/spirits_data.json'
import sorceries_data from './data/sorceries_data.json'
import shields_data from './data/shields_data.json'
import classes_data from './data/classes_data.json'

function App() {
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

    // Find weapon(s)
    const rand_weapon_idx_1 = Math.floor(Math.random() * weapons_data.count)
    const rand_weapon_idx_2 = Math.floor(Math.random() * weapons_data.count)
    const rand_weapon_1 = weapons_data.data[rand_weapon_idx_1]
    const rand_weapon_2 = weapons_data.data[rand_weapon_idx_2]
    // End find weapon

    // Find talismans
    const rand_talisman_idx_1 = Math.floor(Math.random() * talismans_data.count)
    var rand_talisman_idx_2 = Math.floor(Math.random() * talismans_data.count)

    while (rand_talisman_idx_1 === rand_talisman_idx_2) {
        rand_talisman_idx_2 = Math.floor(Math.random() * talismans_data.count)
    }

    const talisman_1 = talismans_data.data[rand_talisman_idx_1]
    const talisman_2 = talismans_data.data[rand_talisman_idx_2]
    // End find talismans

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

    // Find ashes
    const rand_ashes_idx = Math.floor(Math.random() * ashes_data.count)
    const ashes = ashes_data.data[rand_ashes_idx]
    // End find ashes

    // Find spirits
    const rand_spirits_idx = Math.floor(Math.random() * spirits_data.count)
    const spirit = spirits_data.data[rand_spirits_idx]
    // End find spirits

    // Find sorceries
    const rand_sorc_idx_1 = Math.floor(Math.random() * sorceries_data.count)
    var rand_sorc_idx_2 = Math.floor(Math.random() * sorceries_data.count)

    while (rand_incant_idx_1 === rand_incant_idx_2) {
        rand_incant_idx_2 = Math.floor(Math.random() * sorceries_data.count)
    }
    const sorc_1 = sorceries_data.data[rand_sorc_idx_1]
    const sorc_2 = sorceries_data.data[rand_sorc_idx_2]
    // End find sorceries

    // Find shield
    const rand_shield_idx = Math.floor(Math.random() * shields_data.count)
    const shield = shields_data.data[rand_shield_idx]
    // End find shield

    // Find class
    const rand_class_idx = Math.floor(Math.random() * classes_data.count)
    const starting_class = classes_data.data[rand_class_idx]
    // End find class

    // Generate new build
    function generateNewBuild() {}
    // End generate new build
    return (
        <div className='App'>
            <h1>Elden Ring Random Build Generator</h1>
            <div className='button-container'>
                <button className='generate-button' onClick={generateNewBuild}>
                    Generate new build
                </button>
            </div>
            <div className='class-container'>
                <Item
                    name={starting_class.name}
                    img={starting_class.image}
                    desc={starting_class.description}
                />
            </div>
            <div className='weapons-container'>
                <Item
                    name={rand_weapon_1.name}
                    img={rand_weapon_1.image}
                    desc={rand_weapon_1.description}
                />
                <Item
                    name={rand_weapon_2.name}
                    img={rand_weapon_2.image}
                    desc={rand_weapon_2.description}
                />
            </div>
            <div className='armor-pieces-container'>
                {armors_found.map((armor, idx) => {
                    console.log(armor)
                    return (
                        <Item
                            name={armor.name}
                            img={armor.image}
                            desc={armor.description}
                        />
                    )
                })}
            </div>
            <div className='shield-container'>
                <Item
                    name={shield.name}
                    img={shield.image}
                    desc={shield.description}
                />
            </div>
            <div className='secondary-items-container'>
                <div className='sorc-container'>
                    <Item
                        name={sorc_1.name}
                        img={sorc_1.image}
                        desc={sorc_1.description}
                    />
                    <Item
                        name={sorc_2.name}
                        img={sorc_2.image}
                        desc={sorc_2.description}
                    />
                </div>
                <div className='incant-container'>
                    <Item
                        name={incant_1.name}
                        img={incant_1.image}
                        desc={incant_1.description}
                    />
                    <Item
                        name={incant_2.name}
                        img={incant_2.image}
                        desc={incant_2.description}
                    />
                </div>
                <div className='talismans-container'>
                    <Item
                        name={talisman_1.name}
                        img={talisman_1.image}
                        desc={talisman_1.description}
                    />
                    <Item
                        name={talisman_2.name}
                        img={talisman_2.image}
                        desc={talisman_2.description}
                    />
                </div>
                <div className='ashes-spirits-container'>
                    <div className='ashes-container'>
                        <Item
                            name={ashes.name}
                            img={ashes.image}
                            desc={ashes.description}
                        />
                    </div>
                    <div className='spirits-container'>
                        <Item
                            name={spirit.name}
                            img={spirit.image}
                            desc={spirit.description}
                        />
                    </div>
                </div>
            </div>
        </div>
    )
}

export default App
