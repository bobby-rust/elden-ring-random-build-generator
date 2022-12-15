import Item from '../components/Item'

function Spirits(props) {

    return (
        <div className='spirits-container'>
            {/* <h2>Spirits</h2> */}
            {props.spirits.map((spirit, idx) => {
                return (
                    <Item item={spirit} />
                )
            })}
        </div>
    )
}

export default Spirits
