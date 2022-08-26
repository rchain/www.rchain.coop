import React, { Fragment } from "react";

export class Nav extends React.Component {
  state = { scroll: false, moreExtended: false, mobileExtended: false };

  componentDidMount() {
    window.onscroll = this.navScroll;
    this.navScroll();
  }

  navScroll = () => {
    if (document.body.scrollTop > 5 || document.documentElement.scrollTop > 5) {
      this.setState({
        scroll: true,
      });
    } else {
      this.setState({
        scroll: false,
      });
    }
  };

  render() {
    return (
      <Fragment>
        <div className={`nav ${this.state.scroll ? "scroll" : ""}`} id="nav">
          <div className="wrapper">
            <div className="item img">
              {!this.state.scroll && (
                <img src="/assets/logo_white_small.png" id="white" />
              )}
              {this.state.scroll && (
                <img src="/assets/logo_red_small.png" id="red" />
              )}
            </div>
            <div className="item links" onclick="">
              <a href="/home.html">Home</a>
            </div>
            <div className="item links" onclick="">
              <a href="/platform.html">Platform</a>
            </div>
            <div className="item links" onclick="">
              <a href="/ecosystem.html">Ecosystem</a>
            </div>
            <div className="item links" onclick="">
              <a href="/whitepaper.html">Whitepaper</a>
            </div>
            <div
              className={`item links with-dropdown ${
                this.state.moreExtended ? "openned" : ""
              }`}
            >
              <a>
                More<span className="arrow">&rsaquo;</span>
              </a>
              <div
                className="dropdown-container"
                onClick={() => {
                  this.setState({
                    moreExtended: !this.state.moreExtended,
                  });
                }}
              >
                <div className={`dropdown`}>
                  <a href="/community.html">Community Overview</a>
                  <a href="/research.html">Research</a>
                  <a href="/resources.html">Resources</a>
                  <a href="/developer.html">Get started</a>
                  <a href="/token-and-validators.html">Token and validators</a>
                  <a href="https://blog.rchain.coop/" target="_blank">
                    Blog
                  </a>
                  <a
                    href=" https://blog.rchain.coop/category/community/weeklydebriefs/"
                    target="_blank"
                  >
                    Community debriefs
                  </a>
                  <a href="/climate.html" target="_blank">
                    Climate
                  </a>
                </div>
              </div>
            </div>
            <div className="item links long">
              <a href="#" className="btn-rchain btn-grey">
                Join Cooperative
              </a>
            </div>
          </div>
        </div>
        <div className="nav-mobile">
          <div
            className="menu-icon"
            onClick={() =>
              this.setState({
                mobileExtended: !this.state.mobileExtended,
              })
            }
          >
            <a>Menu</a>
          </div>
          <div
            className={`dropdown ${this.state.mobileExtended ? "" : "hidden"}`}
          >
            <a href="/home.html">Home</a>
            <a href="/platform.html">Platform</a>
            <a href="/ecosystem.html">Ecosystem</a>
            <a href="/resources.html">Resources</a>
            <a href="/community.html">Community / Join</a>
            <a href="/research.html">Research</a>
            <a href="/whitepaper.html">Whitepaper</a>
            <a href="/developer.html">Get started</a>
            <a href="/token-and-validators.html">Token and validators</a>
            <a
              href=" https://blog.rchain.coop/category/community/weeklydebriefs/"
              target="_blank"
            >
              Community debriefs
            </a>
            <a href="/climate.html" target="_blank">
              Climate
            </a>
            <a href="https://blog.rchain.coop/" target="_blank">
              Blog
            </a>
          </div>
        </div>
      </Fragment>
    );
  }
}
