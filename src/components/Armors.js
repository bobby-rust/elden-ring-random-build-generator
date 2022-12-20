import Item from '../components/Item'
import { v4 } from 'uuid'

function Armors(props) {
    return (
        <>
            <div className={`armors-outer${props.color}`}>
                <h1 className='section-container-title'>Armor</h1>
                <div className='armors-inner'>
                    {props.armor.map((currArmor, idx) => {
                        return (
                            <div className='armors-container' key={v4()}>
                                <Item
                                    key={v4()}
                                    item={currArmor}
                                    color={props.color}
                                />
                            </div>
                        )
                    })}
                </div>
            </div>
        </>
    )
}

export default Armors
