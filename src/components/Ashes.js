import Item from '../components/Item'

function Ashes(props) {

    return (
        <div className='ashes-container'>
            <h1 className="section-container-title">Ashes</h1>
            {props.ashes.map((ash, idx) => {
                return (
                    <Item item={ash} />
                )
            })}
        </div>
    )
}

export default Ashes
