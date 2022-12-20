import Item from '../components/Item'
import { v4 } from 'uuid'

function Shields(props) {

    return (
        <div className="shield-container">
            {props.shields.map((shield, idx) => {
                return (
                    <Item item={shield} CSS={props.CSS} key={v4()}/>
                )
            })}
        </div>
    )
}    
   
export default Shields;