import { getFeedBacks } from './soundwave-api';
import { createFeedBack } from './render-functions';

async function renderFeedbackSection() {
  try {
    const response = await getFeedBacks();
    if (response && response.data) {
      const shuffled = [...response.data].sort(() => Math.random() - 0.5);
      createFeedBack(shuffled);
    } else {
      console.warn('No feedbacks found or wrong format:', response);
    }
  } catch (error) {
    console.error('Failed to load feedbacks:', error);
  }
}

renderFeedbackSection();
