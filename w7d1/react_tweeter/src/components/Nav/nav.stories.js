import React from 'react';
import { action } from '@storybook/addon-actions';
import MyNav from './Nav';


export default {
  title: 'MyNav',
  component: MyNav,
};

export const Default = () => <MyNav>Hello MyNav</MyNav>;

