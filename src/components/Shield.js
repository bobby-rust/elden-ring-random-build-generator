import Item from '../components/Item'

function Shields(props) {

    return (
        <div className="shield-container">
            {props.shields.map((shield, idx) => {
                return (
                    <Item item={shield} />
                )
            })}
        </div>
    )
}    
   
export default Shields;