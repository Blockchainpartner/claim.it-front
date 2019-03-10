import React, { Component } from 'react';
import styles from './Home.module.scss';

//Components
import Home from './Home';

const bg = 'https://arweave.net/6-9PDqNXIUZIwcK_TCBSowRhtFbmuASWw9KHoEhRhJU';
const bgStyle={backgroundImage: `url(${bg})`,
            backgroundPosition: 'center',
            backgroundSize: 'cover',
            backgroundRepeat: 'no-repeat',}

class HomeWrapper extends Component {
  render() {
    return (
      <React.Fragment>
        <div style={bgStyle} className={styles["home"]}>
          <Home/>
        </div>
      </React.Fragment>
    );
  }
}

export default HomeWrapper;
