import Talismans from './Talismans'
import Incantations from './Incantations'
import Sorceries from './Sorceries'
import Ashes from './Ashes'
import Spirits from './Spirits'

function SecondaryItems(props) {
    const CSS = props.CSS
    return (
        <>
        <div className={`secondary-items-container${CSS}`}>
            <Sorceries sorcs={props.build['sorcs']} CSS={CSS}/>
            <Incantations incants={props.build['incants']} CSS={CSS}/>
            <Talismans talismans={props.build['talismans']} CSS={CSS}/>
            <div className='ashes-spirits-container'>
                <Ashes ashes={props.build['ashes']} CSS={CSS}/>
                <Spirits spirits={props.build['spirits']} CSS={CSS} />
            </div>
        </div>
        </>
    )
}

export default SecondaryItems;