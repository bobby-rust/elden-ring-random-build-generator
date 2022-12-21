import Item from '../components/Item'
import { v4 } from 'uuid'

function Sorceries(props) {
    return (
        <div className='sorceries-container'>
            <h1 className={`section-container-title${props.size}`}>
                Sorceries
            </h1>
            {props.sorcs.map((sorc, idx) => {
                return (
                    <Item
                        item={sorc}
                        color={props.color}
                        key={v4()}
                        size={props.size}
                    />
                )
            })}
        </div>
    )
}

export default Sorceries
