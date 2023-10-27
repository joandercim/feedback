import { createContext, useState } from 'react';
import { v4 as uuidv4 } from 'uuid';

const FeedbackContext = createContext();

export const FeedbackProvider = ({ children }) => {
  const [feedback, setFeedback] = useState([
    {
      id: 1,
      rating: 10,
      text: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. consequuntur vel vitae commodi alias voluptatem est voluptatum ipsa quae.',
    },
    {
      id: 2,
      rating: 9,
      text: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. consequuntur vel vitae commodi alias voluptatem est voluptatum ipsa quae.',
    },
    {
      id: 3,
      rating: 8,
      text: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. consequuntur vel vitae commodi alias voluptatem est voluptatum ipsa quae.',
    },
  ]);

  const [feedbackEdit, setFeedbackEdit] = useState({
    item: {},
    edit: false,
  });

  // Delete feedback
  const deleteItem = (id) => {
    if (true) {
      console.log('Removed feed back with id ' + id);
      setFeedback(feedback.filter((item) => item.id !== id));
    }
  };

  // Add feedback
  const addFeedback = (newFeedback) => {
    newFeedback.id = uuidv4();
    setFeedback([newFeedback, ...feedback]);
  };

  // Set item to be updated
  const editFeedbackFunction = (item) => {
    setFeedbackEdit({
      item,
      edit: true,
    });
  };

  // Update Feedback Item
  const updateFeedback = (id, updatedItem) => {
    setFeedback(
      feedback.map((item) =>
        item.id === id ? { ...item, ...updatedItem } : item
      )
    );
  };

  return (
    <FeedbackContext.Provider
      value={{
        feedback,
        feedbackEdit,
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
