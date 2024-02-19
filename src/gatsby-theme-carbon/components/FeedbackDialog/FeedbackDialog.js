import React from 'react';
import ThemeFeedbackDialog from 'gatsby-theme-carbon/src/components/FeedbackDialog/FeedbackDialog';

const url = 'https://worker-lx-feedback.dia-f40.workers.dev';

const FeedbackDialog = ({ props }) => {
  const onSubmit = (data) => {
    fetch(url, {
      method: 'POST',
      body: JSON.stringify({ ...data }),
      headers: {
        'Content-Type': 'application/json',
      },
    }).then((res) => 
      res.json()
    ).then((json) => {
      console.log(json);
    }).catch((err) => {
      console.error(err);
    });
  };

  return <ThemeFeedbackDialog {...props} onSubmit={onSubmit} />;
};

export default FeedbackDialog;
