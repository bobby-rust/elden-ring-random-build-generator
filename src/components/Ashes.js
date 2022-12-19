import Item from '../components/Item'
import { v4 } from 'uuid'

function Ashes(props) {

    return (
        <div className='ashes-container'>
            <h1 className="section-container-title">Ashes</h1>
            {props.ashes.map((ash, idx) => {
                return (
                    <Item item={ash} CSS={props.CSS} key={v4()}/>
                )
            })}
        </div>
    )
}

export default Ashes
