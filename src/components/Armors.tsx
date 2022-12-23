import Item from './Item'
import { v4 } from 'uuid'
import React from 'react'
import{ BuildSetProps, BuildItem }from '../types/ItemTypes'

function Armors(props: BuildSetProps) {
    return (
        <>
            <div className={`armors-outer${props.color}${props.size}`}>
                <h1 className={`section-container-title${props.size}`}>
                    Armor
                </h1>
                <div className='armors-inner'>
                    {props.items.map((currArmor: BuildItem) => {
                        return (
                            <div
                                className={`armors-container${props.size}`}
                                key={v4()}
                            >
                                <Item
                                    key={v4()}
                                    item={currArmor}
                                    color={props.color}
                                    size={props.size}
                                />
                            </div>
                        )
                    })}
                </div>
            </div>
        </>
    )
}

export default Armors
