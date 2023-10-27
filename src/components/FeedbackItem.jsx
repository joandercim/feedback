import React, { useContext, useState } from 'react';
import PropTypes from 'prop-types';
import Card from './shared/Card';
import { FaTimes, FaEdit } from 'react-icons/fa';
import FeedbackContext from '../context/FeedbackContext';

function FeedbackItem({ item }) {
  const { deleteItem, editFeedbackFunction } = useContext(FeedbackContext);

  const [text, setText] = useState('This is a sample text');
  const [rating, setRating] = useState(10);
  return (
    <Card>
      <div className="num-display">{item.rating}</div>
      <div className="text-display">{item.text}</div>
      <button onClick={() => deleteItem(item.id)} className="close">
        <FaTimes color="purple" />
      </button>
      <button onClick={() => editFeedbackFunction(item)} className="edit">
        <FaEdit color="purple" />
      </button>
    </Card>
  );
}

FeedbackItem.propTypes = {
  item: PropTypes.object.isRequired,
};

export default FeedbackItem;
