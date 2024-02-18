import React from 'react';
import ThemeFeedbackDialog from 'gatsby-theme-carbon/src/components/FeedbackDialog/FeedbackDialog';

const url = 'https://us-south.functions.appdomain.cloud/api/v1/web/5e37a8f0-05d0-4bf4-95d1-c3d27e127b8b/default/web-feedback.json';

const FeedbackDialog = ({ props }) => {
  const onSubmit = (data) => {
    fetch(url, {
      method: 'POST',
      body: JSON.stringify({ ...data }),
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
