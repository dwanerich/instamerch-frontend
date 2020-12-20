import React from 'react'

const CoverCard = (props) => {
    const { title, imgUrl } = props
    return (
        <div className="card">
            <img src={imgUrl} alt={title} /><br />
            <p>{title}</p>
        </div>
    )
}

export default CoverCard