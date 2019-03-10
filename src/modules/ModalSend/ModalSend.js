import React, { Component } from 'react';
import { connect } from 'react-redux';
import styles from '../Board/Board.module.scss';

import { postClaim } from "../../actions/ClaimActions";

class ModalSend extends Component {
  constructor(props){
    super(props);
    this.state = {
      users: [],
      title: '',
      tag: '',
      description: '',
      selectedUser: {}
    }
  }

  handleForm = (e) => {
    this.setState({[e.target.name]: e.target.value});
  };

  selectUser = (user) => {
    let selectedUser = user;
    this.setState({selectedUser});
    //DO.STUFF
  };

  submitClaim = () => {
    let ipfsData = {
      title: this.state.title,
      description: this.state.description,
      tag: this.state.tag
    };
    this.props.ipfs.add(this.props.ipfs.Buffer(JSON.stringify(ipfsData)), { progress: (prog) => console.log(`received: ${prog}`) })
        .then((response) => {
          console.log(response);
          let ipfsId = response[0].hash;
          console.log(ipfsId);
          this.props.postClaim(this.state.tag, ipfsId, this.state.selectedUser);
          this.props.getAllUsers(); // TODO do NOT do that in real life !
          this.props.history.push('/board')
        }).catch((err) => {
      console.error(err)
    })
  };

  render() {
    let {toggleSendClaim} = this.props;
    let {title, tag, description} = this.state;
    let users = [
      {
        "pseudo": "FranceConnect",
        "picture": "https://avatars0.githubusercontent.com/u/18723363?s=460&v=4"
      },
      {
        "pseudo": "skdsd",
        "picture": "https://avatars0.githubusercontent.com/u/18723363?s=460&v=4"
      },
      {
        "pseudo": "fgirg",
        "picture": "https://avatars0.githubusercontent.com/u/18723363?s=460&v=4"
      },
      {
        "pseudo": "dfef",
        "picture": "https://avatars0.githubusercontent.com/u/18723363?s=460&v=4"
      },
      {
        "pseudo": "fififi",
        "picture": "https://avatars0.githubusercontent.com/u/18723363?s=460&v=4"
      }
    ];
    return (
      <React.Fragment>
        <div className={styles["panel"]}>
          <h3>New claim</h3>

          <div className={styles["claim-form"]}>
            <span className={styles["claim-users"]}>
              <h5>Claim target</h5>
              <div className={styles["users-list"]}>
                {users.map((u)=>{
                  return <span onClick={()=>{this.selectUser(u)}}><img src={u.picture} alt={u.pseudo} title={u.pseudo}/><p>{u.pseudo}</p></span>
                })}
              </div>
            </span>

            <span className={styles["claim-data"]}>
              <h5>Claim data</h5>
              <label>Title</label>
              <input className="form-control" type="text" placeholder="Permanent residency" name="title" value={title} onChange={this.handleForm} />
              <label>Tag</label>
              <input className="form-control" type="text" placeholder="Category tag" name="tag" value={tag} onChange={this.handleForm} />
              <label>Description</label>
              <input className="form-control" type="textarea" placeholder="Text describing your claim" name="description" value={description} onChange={this.handleForm}/>
            </span>

            <span className={styles["claim-actions"]}>
              <button className="btn btn-success send" onClick={this.submitClaim}>Send</button>
              <button className="btn btn-danger cancel" onClick={toggleSendClaim}>Back</button>
            </span>
          </div>
        </div>
      </React.Fragment>
    );
  }
}

const mapStateToProps = (store) => {
  return {
    ipfs: store.eth.ipfs
  }
};

const mapDispatchToProps = (dispatch) => {
  return {
    postClaim: (tag, ipfsURI, user) => {
      dispatch(postClaim(tag, ipfsURI, user))
    }
  }
};


export default connect(
    mapStateToProps,
    mapDispatchToProps
)(ModalSend);
