import Item from '../components/Item'
import { v4 } from 'uuid'

function Armors(props) {
    return (
        <>
            <div className={`armors-outer${props.color}${props.size}`}>
                <h1 className={`section-container-title${props.size}`}>
                    Armor
                </h1>
                <div className='armors-inner'>
                    {props.armor.map((currArmor, idx) => {
                        return (
                            <div
                                className={`armors-container${props.size}`}
                                key={v4()}
                            >
                                <Item
                                    key={v4()}
                                    item={currArmor}
                                    color={props.color}
                                    size={props.size}
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
