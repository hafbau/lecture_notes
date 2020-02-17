import React from 'react';
import Nav from './index'
import { action } from '@storybook/addon-actions';

export default {
  title: 'Nav',
};

export const NavStory = () => <Nav toggleCompose={action('toggleCompose')} />;

