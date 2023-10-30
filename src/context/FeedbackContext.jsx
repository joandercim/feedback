import { createContext, useEffect, useState } from 'react';

const FeedbackContext = createContext();

export const FeedbackProvider = ({ children }) => {
  const [isLoading, setIsLoading] = useState(true);
  const [feedback, setFeedback] = useState([]);
  const [feedbackEdit, setFeedbackEdit] = useState({
    item: {},
    edit: false,
  });

  useEffect(() => {
    fetchFeedback();
  }, []);

  // Fetch feedback
  const fetchFeedback = async () => {
    const res = await fetch('/feedback?_sort=id&_order=desc');
    const data = await res.json();

    setFeedback(data);
    setIsLoading(false);
  };

  // Delete feedback
  const deleteItem = async (id) => {
    if (window.confirm('Are you sure?')) {
      await fetch(`feedback/${id}`, { method: 'DELETE' });
      setFeedback(feedback.filter((item) => item.id !== id));
      setIsLoading(false);
    }
  };

  // Add feedback
  const addFeedback = async (newFeedback) => {
    const res = await fetch('/feedback', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(newFeedback),
    });
    const data = await res.json();
    setFeedback([data, ...feedback]);
  };

  // Set item to be updated
  const editFeedbackFunction = (item) => {
    setFeedbackEdit({
      item,
      edit: true,
    });
  };

  // Update Feedback Item
  const updateFeedback = async (id, updatedItem) => {
    const res = await fetch(`feedback/${id}`, {
      method: 'PUT',
      headers: {
        'Content-type': 'application/json'
      }, 
      body: JSON.stringify(updatedItem)
    });
        
    const data = await res.json();
    setFeedback(
      feedback.map((item) =>
        item.id === id ? { ...item, ...data } : item
      )
    );
  };

  return (
    <FeedbackContext.Provider
      value={{
        feedback,
        feedbackEdit,
        isLoading,
        deleteItem,
        addFeedback,
        editFeedbackFunction,
        updateFeedback,
      }}
    >
      {children}
    </FeedbackContext.Provider>
  );
};

export default FeedbackContext;
