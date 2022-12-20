import Item from '../components/Item'
import { v4 } from 'uuid'

function Sorceries(props) {
    return (
        <div className='sorceries-container'>
            <h1 className='section-container-title'>Sorceries</h1>
            {props.sorcs.map((sorc, idx) => {
                return <Item item={sorc} color={props.color} key={v4()} />
            })}
        </div>
    )
}

export default Sorceries
