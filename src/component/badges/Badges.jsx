import React from 'react'

const Badges = ({techBadges}) => {
  return (
    <div className='badge-btn-container'>
        {techBadges.map((badge , index)=>(
            <div className='badge-btn-text' key={index}>{badge}</div>
        ))}
    </div>
  )
}
export default Badges
