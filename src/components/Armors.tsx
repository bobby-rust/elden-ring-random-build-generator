import Item from './Item'
import { v4 } from 'uuid'
import React from 'react'
import { BuildSetProps, BuildItem } from '../types/ItemTypes'

function Armors(props: BuildSetProps) {
    return (
        <>
            {props.items.map((currArmor: BuildItem) => {
                return (
                    <div className={''} key={v4()}>
                        <Item
                            key={v4()}
                            item={currArmor}
                            color={props.color}
                            size={props.size}
                        />
                    </div>
                )
            })}
        </>
    )
}

export default Armors
