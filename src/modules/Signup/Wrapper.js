import React, { Component } from 'react';
import bg from '../../media/bg1.png';
import styles from './Signup.module.scss';

//Components
import Signup from './Signup';

const bgStyle={backgroundImage: `url(${bg})`,
            backgroundPosition: 'center',
            backgroundSize: 'cover',
            backgroundRepeat: 'no-repeat',}

class SignupWrapper extends Component {
  render() {
    return (
      <React.Fragment>
        <div style={bgStyle} className={styles["signup"]}>
          <Signup/>
        </div>
      </React.Fragment>
    );
  }
}

export default SignupWrapper;
