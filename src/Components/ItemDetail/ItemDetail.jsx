import React from 'react'

const ItemDetail = ({itemSelected}) => {
  return (
    <div>
        <h6 className='card-tittle'>{itemSelected?.title}</h6>
        <img src={itemSelected?.image} alt={itemSelected?.title} width={70} />
        <div className="card-descriptiom">
            <p>{itemSelected?.description}</p>
        </div>

        <p>%{itemSelected?.price}</p>
    </div>
  )
}

export default ItemDetail