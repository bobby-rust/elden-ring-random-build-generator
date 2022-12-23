import { v4 } from 'uuid'
import React from 'react'
import Item from './Item'
import { BuildSetProps, BuildItem } from '../types/ItemTypes'

function Sorceries(props: BuildSetProps) {
    return (
        <div className='sorceries-container'>
            <h1 className={`section-container-title${props.size}`}>
                Sorceries
            </h1>
            {props.items.map((sorc: BuildItem) => {
                return (
                    <Item
                        item={sorc}
                        color={props.color}
                        key={v4()}
                        size={props.size}
                    />
                )
            })}
        </div>
    )
}

export default Sorceries
