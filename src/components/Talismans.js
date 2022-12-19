import Item from '../components/Item'
import { v4 } from 'uuid'

function Talismans(props) {

    return (
        <div className='talismans-container'>
            <h1 className="section-container-title">Talismans</h1>
            {props.talismans.map((talisman, idx) => {
                return (
                    <Item item={talisman} CSS={props.CSS} key={v4()}/>
                )
            })}
        </div>
    )
}

export default Talismans
