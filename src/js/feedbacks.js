import { getFeedBacks } from './soundwave-api';
import { createFeedBack } from './render-functions';

async function renderFeedbackSection() {
  try {
    const response = await getFeedBacks();
    console.log('API response:', response);
    if (response && response.data) {
      createFeedBack(response.data);
    } else {
      console.warn('No feedbacks found or wrong format:', response);
    }
  } catch (error) {
    console.error('Failed to load feedbacks:', error);
  }
}

renderFeedbackSection();
