import Item from '../components/Item'
import Shield from '../components/Shield'

function Weapons(props) {

    return (
        <>
            <div className='primary-items-container'>
                <div className='weapons-outer'>
                    <h1 className="weapons-container-title">Weapons</h1>
                    <div className="weapons-underline"></div>
                    <div className='weapons-container'>
                        {props.weapons.map((weapon, idx) => {
                            return (
                                <Item item={weapon} />
                            )
                        })}
                    </div>
                </div>
                <div className='shield-outer'>
                    <h1 className="shields-container-title">Shield</h1>
                    <Shield shields={props.shields} />
                </div>
            </div>
        </>
    )
}

export default Weapons
