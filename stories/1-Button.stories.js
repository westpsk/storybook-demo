import React from 'react';
import PropTypes from 'prop-types';
import { action } from '@storybook/addon-actions';
import { Button } from '@storybook/react/demo';

export default {
  title: 'Button',
  component: Button,
};

export const Text = () => <Button onClick={action('clicked')}>Hello Button</Button>;


Text.propTypes = {
  status: PropTypes.oneOf(['positive', 'negative', 'neutral', 'error', 'warning']),
};
Text.defaultProps = {
  status: 'neutral',
};

export const Emoji = () => (
  <Button onClick={action('clicked')}>
    <span role="img" aria-label="so cool">
      😀 😎 👍 💯
    </span>
  </Button>
);


export const Emoji1 = () => (
  <Button onClick={action('clicked')}>
    <span role="img" aria-label="so cool">
      😀 😎 👍 💯
    </span>
  </Button>
);
