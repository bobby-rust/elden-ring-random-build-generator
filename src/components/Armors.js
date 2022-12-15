import Item from '../components/Item'

function Armors(props) {

    return (
        <>
        <h2>Armor</h2>
        <div className="armors-outer" >
            {props.armor.map((currArmor, idx) => {
                    return (
                        <div className="armors-container">
                            <Item item={currArmor} />
                        </div>
                    )
                })}
        </div>
        </>
    )
}

export default Armors;