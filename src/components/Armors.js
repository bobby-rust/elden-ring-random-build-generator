import Item from '../components/Item'
import { v4 } from 'uuid'

function Armors(props) {

    return (
        <>
    <div className={`armors-outer${props.CSS}`} >
            <h1 className="section-container-title">Armor</h1>
            <div className="armors-inner">
            {props.armor.map((currArmor, idx) => {
                    return (
                        <div className="armors-container" key={v4()}>
                            <Item key={v4()} item={currArmor} CSS={props.CSS}/>
                        </div>
                    )
                })}
                </div>
        </div>
        </>
    )
}

export default Armors;