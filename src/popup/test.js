import React from 'react';
import { Link } from 'react-router-dom';
import Button from '@material-ui/core/Button';

const test = () => {
  return (
    <div className='test-container'>
      <h1>Test POPUP</h1>

      <Link to='/popup.html'>
        <Button>Go Bac</Button>
      </Link>
    </div>
  );
};

export default test;
