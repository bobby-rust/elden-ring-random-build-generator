import SecondaryItems from '../components/SecondaryItems'
import Button from 'react-bootstrap/Button'
import StartingClass from '../components/StartingClass'
import Weapons from '../components/Weapons'
import Armors from '../components/Armors'

function SmallLayout(props) {
    return (
        <div className='body-container'>
            <div className='small-layout-wrapper'>
                <div className='class-weapons-container-sm'>
                    <div
                        className={`class-button-container${props.color}${props.size}`}
                    >
                        <div className='class-button-inner'>
                            <div className='class-container-sm'>
                                <StartingClass
                                    starting_class={
                                        props.build['starting_class']
                                    }
                                    size={props.size}
                                />
                            </div>
                            <div className='button-container-sm'>
                                <Button
                                    className='button-sm'
                                    onClick={props.generateNewBuild}
                                    variant='danger'
                                >
                                    GENERATE NEW BUILD
                                </Button>
                            </div>
                        </div>
                        <div className='weapons-container-sm'>
                            <Weapons
                                weapons={props.build['weapons']}
                                shields={props.build['shields']}
                                color={props.color}
                                size={props.size}
                            />
                        </div>
                    </div>
                </div>
                <div className='armor-secondary-items-container-sm'>
                    <div className='armors-container-sm'>
                        <Armors
                            armor={props.build['armor']}
                            color={props.color}
                            size={props.size}
                        />
                    </div>
                    <SecondaryItems
                        color={props.color}
                        build={props.build}
                        size={props.size}
                    />
                </div>
            </div>
        </div>
    )
}

export default SmallLayout
