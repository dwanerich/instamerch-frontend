import React from 'react'

const CoverCard = (props) => {
    const { name, imgUrl } = props
    return (
        <div className="card">
            <img src={imgUrl} alt={name} /><br />
            <p>{name}</p>
        </div>
    )
}

export default CoverCard