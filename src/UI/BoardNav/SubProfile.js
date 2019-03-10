import React, { Component } from 'react';
import {connect} from 'react-redux';
import styles from './BoardNav.module.scss';
import ethereumjs from "ethereumjs-tx";
import { initEthStore } from '../../actions/EthAction';
import PropTypes from "prop-types";
import {withRouter} from "react-router-dom";
import {IPFS_NODE_URI_PREFIX} from "../../util/constants";

class SubProfile extends Component {
  constructor(props){
    super(props);
    this.state = {};
  }

  componentDidUpdate(prevProps, prevState) {
    this.props.initEthStore();

  }

  addResolver = () => {
    const web3 = this.props.web3;
    const ensContract = this.props.ensContract;

    var account = "0xc2467ac1d5e60ef3a70e9e69c83724d3ff634050";
    const privateKey = Buffer.from('0E67EF3725A00F4FF2FC7AFBA6AF4FB348B0E0B509A663D7FB7280C740CF70CA', 'hex')

    web3.eth.getTransactionCount(account, function (err, nonce) {
      var data = ensContract.methods.setResolver("test", "0xc2467ac1d5e60ef3a70e9e69c83724d3ff634050").encodeABI();

      var tx = new ethereumjs({
        nonce: nonce,
        gasPrice: web3.utils.toHex(web3.utils.toWei("0", "wei")),
        gasLimit: 100000,
        to: ensContract.options.address,
        value: 0,
        data: data,
      });

      tx.sign(privateKey);

      const serializedTx = `0x${tx.serialize().toString('hex')}`;

      web3.eth.sendSignedTransaction(serializedTx,function (err, transactionHash) {
        console.log(transactionHash);
      });
    });
  };

  getResolver = async (node) => {
    const ensContract = this.props.ensContract;

    var result = await ensContract.methods.resolver(node).call();

    console.log(result);
  };

  render() {
    const {toggleProfile, currentUser,} = this.props;
    console.log(this.props)
    const proxyAddress = currentUser ? currentUser.proxyAddress : "0x0";
    const pictureUri = currentUser ? IPFS_NODE_URI_PREFIX + currentUser.pictureUri : "";
    const pseudonym = currentUser ? currentUser.pseudonym : "";
    return (
      <React.Fragment>
        <div className={styles["sub-profile"]}>
          <span className={styles["actions"]}>
            <p>{proxyAddress}</p>
            <button className="btn btn-info" onClick={()=>toggleProfile()}>PROFILE</button>
            <button className="btn btn-danger" onClick={()=>{this.props.history.push('/')}}>LOGOUT</button>

          </span>

          <span className={styles["picture"]}>
            <img src={pictureUri} alt="Profile" title={pseudonym} />
          </span>
        </div>
      </React.Fragment>
    );
  }
}

SubProfile.propTypes = {
  // props from store
  web3: PropTypes.object.isRequired,
  ensContract: PropTypes.object.isRequired,
};

const mapStateToProps = (state) => ({
  currentUser: state.user.currentUser
});

const mapDispatchToProps = dispatch => ({
  initEthStore: () => {
    dispatch(initEthStore())
  },

});

export default withRouter(
  connect(mapStateToProps, mapDispatchToProps)(SubProfile)
);
