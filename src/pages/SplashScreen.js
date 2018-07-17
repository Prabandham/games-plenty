import React, { Component } from 'react';
import PropTypes from 'prop-types'
import Http from "../services/Http"


export default class SplashScreen extends Component {
  constructor(props) {
    super(props);
    this.state = {
      height: 0,
      width: 0,
      redirect: false
    }
  }

  static contextTypes = {
    router: PropTypes.object
  }

  componentDidMount() {
    this.setState({height: window.innerHeight})
    this.setState({width: window.innerWidth})

    let http = new Http()
    http.get("GameList")
    .then(res => {
        const games = res.data.contents;
        this.setState({redirect: true})
        this.props.store.setGames(games);
        this.performRedirect();
    })
  }

  performRedirect = () => {
    if(this.state.redirect) {
      this.context.router.history.push(`/home`)
    }
  }

  render() {
    return (
      <div className="container-fluid" style={{ background: "#000000", height: this.state.height, width: this.state.width }}>
        <img src="/games-plenty.jpg" className="img-responsive" alt="Games-Plenty" style={{ height: this.state.height, width: this.state.width }} />
      </div>
    );
  }
}
