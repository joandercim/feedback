import React, { useContext, useState, useEffect } from 'react';
import Card from './shared/Card';
import Button from './shared/Button';
import RatingSelect from './RatingSelect';
import FeedbackContext from '../context/FeedbackContext';

function FeedbackForm() {
  const [text, setText] = useState('');
  const [btnDisabled, setBtnDisabled] = useState(true);
  const [message, setMessage] = useState('');
  const [rating, setRating] = useState(10);

  const { addFeedback, feedbackEdit, updateFeedback } = useContext(FeedbackContext);

  useEffect(() => {
    if (feedbackEdit.edit === true) {
      setBtnDisabled(false)
      setRating(feedbackEdit.item.rating);
      setText(feedbackEdit.item.text);
    }
  }, [feedbackEdit]);

  const handleChange = (e) => {
    if (text === '') {
      setBtnDisabled(true);
      setMessage(null);
    } else if (text !== '' && text.trim().length <= 10) {
      setBtnDisabled(true);
      setMessage('Text must be at least 10 characters.');
    } else {
      setBtnDisabled(false);
      setMessage(null);
    }
    setText(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (text.trim().length > 10) {
      const newFeedback = {
        text,
        rating,
      };
      if (feedbackEdit.edit === true) {
        updateFeedback(feedbackEdit.item.id, newFeedback)
      } else {
        addFeedback(newFeedback);
      }

    }

    setText('');
  };

  return (
    <Card>
      <form onSubmit={handleSubmit}>
        <h2>How would you rate your experience with us?</h2>
        <RatingSelect select={(rating) => setRating(rating)} />
        <div className="input-group">
          <input
            type="text"
            placeholder="Write a review"
            value={text}
            onChange={handleChange}
          />
          <Button type="submit" isDisabled={btnDisabled}>
            Send
          </Button>
        </div>
      </form>
      {message && <div className="message">{message}</div>}
    </Card>
  );
}

export default FeedbackForm;
