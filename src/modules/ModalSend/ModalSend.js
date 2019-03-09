import React, { Component } from 'react';
import styles from '../Board/Board.module.scss';

class ModalSend extends Component {
  constructor(props){
    super(props);
    this.state = {
      users: [],
      keyword: '',
      title: '',
      tag: '',
      description: ''
    }
  }

  handleFilter = (e) => {
    let keyword = e.target.value;
    this.setState({keyword});
  }

  handleForm = (e) => {
    this.setState({[e.target.name]: e.target.value});
  }

  render() {
    let {toggleSendClaim} = this.props;
    let {keyword, title, tag, description} = this.state;
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
            <span>
              <input className="form-control" type="text" value={keyword} onChange={this.handleFilter}/>
              <div className={styles["users-list"]}>
                {users.map((u)=>{
                  return <span><img src={u.picture} alt={u.pseudo} title={u.pseudo}/><p>{u.pseudo}</p></span>
                })}
              </div>
            </span>

            <span>
              <input className="form-control" type="text" name="title" value={title} onChange={this.handleForm}/>
              <input className="form-control" type="text" name="tag" value={tag} onChange={this.handleForm}/>
              <input className="form-control" type="textarea" name="description" value={description} onChange={this.handleForm}/>
            </span>

            <span>
              <button className="btn btn-success">Send</button>
              <button className="btn btn-danger" onClick={toggleSendClaim}>Cancel</button>
            </span>
          </div>
        </div>
      </React.Fragment>
    );
  }
}

export default ModalSend;
