import React from 'react'
import PropTypes from 'prop-types'
import { useState } from 'react';
import Card from './shared/Card';
import {FaTimes} from 'react-icons/fa'

function FeedbackItem({ item, handleDelete }) {
  const [text, setText] = useState('This is a sample text');
  const [rating, setRating] = useState(10);
  return (
    <Card>
      <div className="num-display">{item.rating}</div>
      <div className="text-display">{item.text}</div>
      <button onClick={() => handleDelete(item.id)} className="close">
        <FaTimes color='purple'/>
      </button>
    </Card>
  )
}

FeedbackItem.propTypes = {
  item: PropTypes.object.isRequired
}

export default FeedbackItem
