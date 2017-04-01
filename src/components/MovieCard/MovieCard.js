// @flow
import React from 'react'

import './MovieCard.scss'

type MovieCardProps = {
  title: string,
  category: string,
  image: string,
  rating: number,
}

const MovieCard = ({ title, category, image, rating }: MovieCardProps) => (
  <div styleName='card'>
    <figure>
      <img src={image} alt='The Martian poster' />
    </figure>
    <div>
      <span>{rating}</span>
      <p className='title'>{title}</p>
      <p className='subtitle'>{category}</p>
    </div>
  </div>
)

export default MovieCard
