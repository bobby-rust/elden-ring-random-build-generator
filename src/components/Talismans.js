import Item from '../components/Item'

function Talismans(props) {

    return (
        <div className='talismans-container'>
            <h1 className="section-container-title">Talismans</h1>
            {props.talismans.map((talisman, idx) => {
                return (
                    <Item item={talisman} />
                )
            })}
        </div>
    )
}

export default Talismans
