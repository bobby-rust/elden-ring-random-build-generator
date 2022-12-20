import Talismans from './Talismans'
import Incantations from './Incantations'
import Sorceries from './Sorceries'
import Ashes from './Ashes'
import Spirits from './Spirits'

function SecondaryItems(props) {
    const color = props.color
    return (
        <>
            <div className={`secondary-items-container${color}`}>
                <Sorceries sorcs={props.build['sorcs']} color={color} />
                <Incantations incants={props.build['incants']} color={color} />
                <Talismans talismans={props.build['talismans']} color={color} />
                <div className='ashes-spirits-container'>
                    <Ashes ashes={props.build['ashes']} color={color} />
                    <Spirits spirits={props.build['spirits']} color={color} />
                </div>
            </div>
        </>
    )
}

export default SecondaryItems
