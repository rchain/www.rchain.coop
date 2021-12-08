import React, { Fragment } from "react";

export class Footer extends React.Component {
  render() {
    return (
      <Fragment>
        <div className="footer-top">
          <div className="sitemap">
            <div>
              <div>
                <a href="/index.html">Home</a>
              </div>
              <div>
                <a href="/platform.html">Platform</a>
              </div>
              <div>
                <a href="/ecosystem.html">Ecosystem</a>
              </div>
              <div>
                <a href="/whitepaper.html">Whitepaper</a>
              </div>
              <div>
                <a href="/community.html">Community Overview</a>
              </div>
              <div>
                <a href="/research.html">Research</a>
              </div>
            </div>
            <div>
              <div>
                <a href="/developer.html">Developer</a>
              </div>
              <div>
                <a href="/team.html">Team</a>
              </div>
              <div>
                <a href="https://blog.rchain.coop/" target="_blank">
                  Blog
                </a>
              </div>
              <div>
                <a href="/climate.html" target="_blank">
                  Climate
                </a>
              </div>
              <div>
                <a href="/presskit" target="_blank">
                  Press Kit
                </a>
              </div>
              <div>
                <a href="/newsletter" target="_blank">
                  Newsletter
                </a>
              </div>
            </div>
          </div>
          <div className="social-media">
            <h4 className="engage">Engage with the community</h4>
            <div className="social-media-icons">
              <div>
                <a href="https://github.com/rchain" target="_blank">
                  <img
                    alt="Github logo"
                    title="Github logo"
                    src="/assets/github@3x.png"
                  />
                </a>
              </div>
              <div>
                <a href="https://twitter.com/rchain_coop" target="_blank">
                  <img
                    alt="Twitter logo"
                    title="Twitter logo"
                    src="/assets/twitter@3x.png"
                  />
                </a>
              </div>
              <div>
                <a
                  href="https://www.youtube.com/channel/UCSS3jCffMiz574_q64Ukj_w"
                  target="_blank"
                >
                  <img
                    alt="Youtube logo"
                    title="Youtube logo"
                    src="/assets/youtube@3x.png"
                  />
                </a>
              </div>
              <div>
                <a
                  href="https://www.linkedin.com/company/rchain-cooperative/"
                  target="_blank"
                >
                  <img
                    alt="LinkedIn logo"
                    title="LinkedIn logo"
                    src="/assets/linkedin@3x.png"
                  />
                </a>
              </div>
              <div>
                <a href="https://t.me/rchaincoop" target="_blank">
                  <img
                    alt="Telegram logo"
                    title="Telegram logo"
                    src="/assets/telegram@3x.png"
                  />
                </a>
              </div>
              <div>
                <a
                  href="https://discord.gg/NWkQnfH"
                  onclick="captureOutboundLink('https://discord.gg/NWkQnfH'); return false;"
                >
                  <img
                    alt="Discord logo"
                    title="Discord logo"
                    src="/assets/discord@3x.png"
                  />
                </a>
              </div>
              <div>
                <a href="https://www.reddit.com/r/RChain/" target="_blank">
                  <img
                    alt="Reddit logo"
                    title="Reddit logo"
                    src="/assets/reddit@3x.png"
                  />
                </a>
              </div>
            </div>
          </div>
        </div>
        <div className="footer-bot">
          <div className="center">
            <img
              alt="RChain logo red"
              title="RChain logo red"
              src="/assets/logo_red.png"
            />
          </div>
          <p>copyright &copy; 2021 RChain Cooperative All rights reserved</p>
          <p>RChain and REV are registered trademarks of RChain Cooperative</p>
          <a href="https://github.com/rchain/legaldocs/blob/master/Form%20of%20Privacy%20Policy.pdf">
            Privacy terms and conditions
          </a>
        </div>
      </Fragment>
    );
  }
}
