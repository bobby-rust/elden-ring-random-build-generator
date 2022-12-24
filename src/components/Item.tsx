import React from 'react'
import { BuildItemProps } from '../types/ItemTypes'

function Item(props: BuildItemProps) {
    /**
     * This is a generic component
     * Any styling on this component should remain generic
     * i.e. NOT specific to any layout or theme
     */
    return (
        <div>
            <h4>{props.item.name}</h4>
            <a
                href={`https://eldenring.wiki.fextralife.com/${props.item.name}`}
                rel='noreferrer'
                target='_blank'
            >
                <img src={props.item.image} alt={props.item.name + ' img'} />
            </a>
            <p className='item-desc'>{props.item.description}</p>
        </div>
    )
}

export default Item
