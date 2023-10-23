import React from 'react'
import Header from './components/Header'
import FeedbackList from './components/FeedbackList'
import FeedbackData from './components/data/FeedbackData'
import { useState } from 'react';
import FeedbackStats from './components/FeedbackStats';
import FeedbackForm from './components/FeedbackForm';

function App() {
    const [feedback, setFeedback] = useState(FeedbackData);

    const deleteItem = (id) => {
        console.log('Removed feed back with id ' + id);
        setFeedback(feedback.filter(item => item.id !== id));
    }

    return (
        <>
            <Header />
            <div className="container">
                <FeedbackForm />
                <FeedbackStats feedback={feedback}/>
                <FeedbackList feedback={feedback} handleDelete={deleteItem}/>
            </div>
        </>
  )
}

export default App

