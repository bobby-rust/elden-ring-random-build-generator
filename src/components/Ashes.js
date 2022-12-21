import Item from '../components/Item'
import { v4 } from 'uuid'

function Ashes(props) {
    return (
        <div className='ashes-container'>
            <h1 className={`section-container-title${props.size}`}>Ashes</h1>
            {props.ashes.map((ash, idx) => {
                return (
                    <Item
                        item={ash}
                        color={props.color}
                        key={v4()}
                        size={props.size}
                    />
                )
            })}
        </div>
    )
}

export default Ashes
