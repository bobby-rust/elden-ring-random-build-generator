import Item from '../components/Item'

function Armors(props) {

    return (
        <>
        <div className="armors-outer" >
            <h1 className="section-container-title">Armor</h1>
            <div className="armors-inner">
            {props.armor.map((currArmor, idx) => {
                    return (
                        <div className="armors-container">
                            <Item item={currArmor} />
                        </div>
                    )
                })}
                </div>
        </div>
        </>
    )
}

export default Armors;