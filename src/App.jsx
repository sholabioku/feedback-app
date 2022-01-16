import { useState } from 'react';
import FeedbackData from './components/data/FeedbackData';
import FeedbackList from './components/FeedbackList';
import Header from './components/Header';
import './index.css';

function App() {
  const [feedback, setFeedback] = useState(FeedbackData);
  return (
    <>
      <Header />
      <div className='container'>
        <FeedbackList feedback={feedback} />
      </div>
    </>
  );
}

export default App;
