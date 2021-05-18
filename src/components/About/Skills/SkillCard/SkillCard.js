import React, { useState, useEffect  } from 'react'
import PropTypes from 'prop-types';
import CircularProgress from '@material-ui/core/CircularProgress';
import Typography from '@material-ui/core/Typography';
import Box from '@material-ui/core/Box';
import Fade from 'react-reveal/Fade'

import './SkillCard.css'



function CircularProgressWithLabel(props) {

    return (
      <Box position="relative" display="inline-flex">
        <CircularProgress variant="determinate" {...props} style={{width: '120px', height: '120px'}}/>
        <Box
          top={0}
          left={0}
          bottom={0}
          right={0}
          position="absolute"
          display="flex"
          alignItems="center"
          justifyContent="center"
        >
          <Typography className="skillValue" variant="caption" component="div" >{`${Math.round(
            props.value,
          )}%`}</Typography>
        </Box>
      </Box>
    );
}

  CircularProgressWithLabel.propTypes = {
    value: PropTypes.number.isRequired,
  };

function SkillCard( { value, name, Icon }) {
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
            <div className="skillCard">
                <h2>{name}</h2>
                <div className="sk_circle">
                    <CircularProgressWithLabel value={progress} />
                </div>
                <Icon className="skill_icon"/>
            </div>
        </Fade>
    )
}

export default SkillCard
