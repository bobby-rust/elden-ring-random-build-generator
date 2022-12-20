import Item from '../components/Item'
import Shield from '../components/Shield'
import { v4 } from 'uuid'

function Weapons(props) {
    return (
        <>
            <div className={`primary-items-container${props.color}`}>
                <div className='weapons-outer'>
                    <h1 className='section-container-title'>Weapons</h1>
                    <div className='weapons-container'>
                        {props.weapons.map((weapon, idx) => {
                            return (
                                <Item
                                    item={weapon}
                                    color={props.color}
                                    key={v4()}
                                />
                            )
                        })}
                    </div>
                </div>
                <div className='shield-outer'>
                    <h1 className='section-container-title'>Shield</h1>
                    <Shield shields={props.shields} color={props.color} />
                </div>
            </div>
        </>
    )
}

export default Weapons
