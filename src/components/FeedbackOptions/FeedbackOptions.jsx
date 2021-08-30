import React from 'react';

const FeedbackOptions = ({options, onLeaveFeedback}) => {
    // console.log(options);
   
   return( Object.keys(options).map((key) => (
        <button key={key} type="button" name={key} onClick={onLeaveFeedback}>{key}</button>
   ))
   )
}

export default FeedbackOptions;
