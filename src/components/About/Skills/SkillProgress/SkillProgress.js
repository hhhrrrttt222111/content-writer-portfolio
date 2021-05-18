import React, { useState, useEffect } from 'react'
import PropTypes from 'prop-types';
import LinearProgress from '@material-ui/core/LinearProgress';
import Typography from '@material-ui/core/Typography';
import Box from '@material-ui/core/Box';
import Fade from 'react-reveal/Fade'

import './SkillProgress.css'

function LinearProgressWithLabel(props) {
    return (
      <Box display="flex" alignItems="center">
        <Box width="100%" mr={1}>
          <LinearProgress variant="determinate" {...props} />
        </Box>
        <Box minWidth={35}>
          <Typography variant="body2" className="skillLinearValue">{`${Math.round(
            props.value,
          )}%`}</Typography>
        </Box>
      </Box>
    );
}

LinearProgressWithLabel.propTypes = {
    value: PropTypes.number.isRequired,
};


function SkillProgress({ value, name }) {
    const [progress, setProgress] = useState(10);

    useEffect(() => {
      const timer = setInterval(() => {
        setProgress((prevProgress) => (prevProgress >= value ? value : prevProgress + 10));
      }, 200);
      return () => {
        clearInterval(timer);
      };
    });

    return (
        <Fade bottom>
            <div className="skillProgress">
                <h3>{name}</h3>
                <LinearProgressWithLabel value={progress} />
            </div>
        </Fade>
    )
}

export default SkillProgress
