import Item from '../components/Item'

function Sorceries(props) {

    return (
        <div className='sorceries-container'>
            <h1>Sorceries</h1>
            {props.sorcs.map((sorc, idx) => {
                return (
                    <Item item={sorc} />
                )
            })}
        </div>
    )
}

export default Sorceries
