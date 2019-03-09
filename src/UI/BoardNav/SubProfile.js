import React, { Component } from 'react';
import {connect} from 'react-redux';
import styles from './BoardNav.module.scss';
import ethereumjs from "ethereumjs-tx";
import { initEthStore } from '../../actions/EthAction';
import PropTypes from "prop-types";

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
    const currentUser = {
      "id": "0xjd43fT67",
      "username": "wawa.h8",
      "picture": "https://media.licdn.com/dms/image/C4D03AQEFEkHs6eyTKg/profile-displayphoto-shrink_200_200/0?e=1557360000&v=beta&t=iD77qK1-Gp3rGBetxiSJu6mu0E6wnCArxU2wKrtIUNI",
    }
    return (
      <React.Fragment>
        <div className={styles["sub-profile"]}>
          <span className={styles["actions"]}>
            <p>{currentUser.id}</p>
            <button className="btn btn-info">PROFILE</button>
            <button className="btn btn-danger">LOGOUT</button>
          </span>

          <span className={styles["picture"]}>
            <img src={currentUser.picture} alt="Profile" title={currentUser.username} />
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
});

const mapDispatchToProps = dispatch => ({
  initEthStore: () => {
    dispatch(initEthStore())
  },

});

export default connect(mapStateToProps, mapDispatchToProps)(SubProfile);
