import Item from '../components/Item'
import { v4 } from 'uuid'

function Spirits(props) {
    return (
        <div className='spirits-container'>
            {/* <h2>Spirits</h2> */}
            {props.spirits.map((spirit, idx) => {
                return (
                    <Item
                        item={spirit}
                        color={props.color}
                        key={v4()}
                        size={props.size}
                    />
                )
            })}
        </div>
    )
}

export default Spirits
