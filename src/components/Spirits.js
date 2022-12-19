import Item from '../components/Item'
import { v4 } from 'uuid'

function Spirits(props) {

    return (
        <div className='spirits-container'>
            {/* <h2>Spirits</h2> */}
            {props.spirits.map((spirit, idx) => {
                return (
                    <Item item={spirit} CSS={props.CSS} key={v4()}/>
                )
            })}
        </div>
    )
}

export default Spirits
