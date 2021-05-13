import React from 'react';
import { FunctionComponent } from 'react';
import { Button, Typography } from '@material-ui/core';

const QuickReactions: FunctionComponent = () => {
  return (
    <div className="quick-reactions">
      <Typography
        variant="body1"
        color="secondary"
        style={{ marginLeft: 3, marginBottom: 5 }}
      >
        Quick Reactions
      </Typography>
      <div className="quick-reaction-buttons">
        <div className="quick-reaction-button-row">
          <Button
            variant="outlined"
            size="medium"
            color="primary"
            className="quick-react-button"
          >
            {'\u2728'}
          </Button>
          <Button
            variant="outlined"
            size="medium"
            color="primary"
            className="quick-react-button"
          >
            {'\u2728'}
          </Button>
          <Button
            variant="outlined"
            size="medium"
            color="primary"
            className="quick-react-button"
          >
            {'\u2728'}
          </Button>
        </div>
        <div className="quick-reaction-button-row">
          <Button
            variant="outlined"
            size="medium"
            color="primary"
            className="quick-react-button"
          >
            {'\u2728'}
          </Button>
          <Button
            variant="outlined"
            size="medium"
            color="primary"
            className="quick-react-button"
          >
            {'\u2728'}
          </Button>
          <Button
            variant="outlined"
            size="medium"
            color="primary"
            className="quick-react-button"
          >
            {'\u2728'}
          </Button>
        </div>
        <div className="quick-reaction-button-row">
          <Button
            variant="outlined"
            size="medium"
            color="primary"
            className="quick-react-button"
          >
            {'\u2728'}
          </Button>
          <Button
            variant="outlined"
            size="medium"
            color="primary"
            className="quick-react-button"
          >
            {'\u2728'}
          </Button>
          <Button
            variant="outlined"
            size="medium"
            color="primary"
            className="quick-react-button"
          >
            {'\u2728'}
          </Button>
        </div>
      </div>
    </div>
  );
};

export default QuickReactions;
