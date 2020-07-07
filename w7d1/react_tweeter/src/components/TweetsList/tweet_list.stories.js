import React from 'react';
import { action } from '@storybook/addon-actions';

const TweetsList = () => {
  return <h3>Tweelist works!</h3>
}

export default {
  title: 'TweetsList',
  component: TweetsList,
};

export const Text = () => <TweetsList onClick={action('clicked')}>Hello TweetsList</TweetsList>;

