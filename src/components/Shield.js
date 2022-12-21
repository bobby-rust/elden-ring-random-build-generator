import Item from '../components/Item'
import { v4 } from 'uuid'

function Shields(props) {
    return (
        <div className='shield-container'>
            {props.shields.map((shield, idx) => {
                return (
                    <Item
                        item={shield}
                        color={props.color}
                        key={v4()}
                        size={props.size}
                    />
                )
            })}
        </div>
    )
}

export default Shields
