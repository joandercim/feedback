import FeedbackItem from './FeedbackItem';
import { motion, AnimatePresence } from 'framer-motion';
import { useContext } from 'react';
import FeedbackContext from '../context/FeedbackContext';

function FeedbackList() {
  const { feedback, deleteItem } = useContext(FeedbackContext);

  if (!feedback || feedback.length === 0) {
    return <p>No Feedback yet</p>;
  }


  return (
    <div className="feedback-list">
      <AnimatePresence>
        {feedback.map((item) => (
          <motion.div
            key={item.id}
            initial={{ y: 0, opacity: 0 }}
            animate={{ y: 40, opacity: 1 }}
            exit={{ y: -50, opacity: 0 }}
          >
            <FeedbackItem
              key={item.id}
              item={item}
            />
          </motion.div>
        ))}
      </AnimatePresence>
    </div>
  );
}

export default FeedbackList;
