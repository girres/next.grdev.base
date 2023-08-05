'use client';

import React, { useContext } from 'react';
import PropTypes from 'prop-types';

import { Context } from '@/context/index';

function Component({ title = null }) {
  const { Alerts } = useContext(Context);

  return (
    <button
      onClick={() => Alerts.Info('HI World!!')}
      className='btn btn-primary'
    >
      {title || 'Show Alert'}
    </button>
  );
}

Component.propTypes = {
  title: PropTypes.string,
};

export default Component;
