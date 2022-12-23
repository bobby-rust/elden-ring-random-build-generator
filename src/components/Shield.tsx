import { v4 } from 'uuid'
import React from 'react'
import { BuildItem, BuildSetProps } from '../types/ItemTypes'
import Item from './Item'

function Shields(props: BuildSetProps) {
    console.log(props.items)
    return (
        <div className='shield-container'>
            {props.items.map((item: BuildItem) => {
                return (
                    <Item
                        item={item}
                        color={props.color}
                        key={v4()}
                        size={props.size}
                    />
                )
            })}
        </div>
    )
}

export default Shields
