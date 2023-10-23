import React, { useState } from 'react';
import Card from './shared/Card';
import Button from './shared/Button';
import RatingSelect from './RatingSelect';

function FeedbackForm() {
    const [text, setText] = useState('');
    const [btnDisabled, setBtnDisabled] = useState(true);
    const [message, setMessage] = useState('');
    const [rating, setRating] = useState(10);

    const handleChange = (e) => {
        if (text === '') {
            setBtnDisabled(true);
            setMessage(null)
        } else if (text !== '' && text.trim().length <= 10) {
            setBtnDisabled(true);
            setMessage('Text must be at least 10 characters.');
        } else {
            setBtnDisabled(false);
            setMessage(null);
        }
        setText(e.target.value)
    };
    
  return (
      <Card>
          <form>
              <h2>How would you rate your experience with us?</h2>
              <RatingSelect select={(rating) => setRating(rating)}/>
              <div className="input-group">
                  <input type="text" placeholder='Write a review' value={text} onChange={handleChange} />
                  <Button type="submit" isDisabled={btnDisabled}>Send</Button>
              </div>
          </form>
          {message && <div className="message">{message}</div>}
    </Card>
  )
}

export default FeedbackForm