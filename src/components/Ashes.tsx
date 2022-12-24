import Item from './Item'
import { v4 } from 'uuid'
import React from 'react'
import { BuildSetProps, BuildItem } from '../types/ItemTypes'

function Ashes(props: BuildSetProps) {
    return (
        <div>
            <h1>Ashes</h1>
            {props.items.map((ash: BuildItem) => {
                return (
                    <Item
                        item={ash}
                        color={props.color}
                        key={v4()}
                        size={props.size}
                    />
                )
            })}
        </div>
    )
}

export default Ashes
