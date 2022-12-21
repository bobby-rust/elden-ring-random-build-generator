import Item from '../components/Item'
import { v4 } from 'uuid'

function Talismans(props) {
    return (
        <div className='talismans-container'>
            <h1 className={`section-container-title${props.size}`}>
                Talismans
            </h1>
            {props.talismans.map((talisman, idx) => {
                return (
                    <Item
                        item={talisman}
                        color={props.color}
                        key={v4()}
                        size={props.size}
                    />
                )
            })}
        </div>
    )
}

export default Talismans
