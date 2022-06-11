import React, { Component } from 'react';
export default class Footer extends Component {

  render() {
    let resumeData = this.props.resumeData;


    const today = new Date();
    const year = today.getFullYear();
    const date = today.getDate();
    const time = today.getHours();
    const times = today.getMinutes();
    const month = today.getDay();

    return (
      <footer>
        <div className="row">
          <div className="twelve columns">
            <ul className="social-links">
              {
                resumeData.socialLinks && resumeData.socialLinks.map((item) => {
                  return (
                    <li>
                      <a href={item.url}>
                        <i className={item.className} />
                      </a>
                    </li>
                  )
                })
              }
            </ul>
            <h5 className="footer-text"> Manik Lal Mondal, &copy;: {year} Date:-{date},Month:-{month}, Time:-{time}:{times} All Rights
              Reserved. </h5>
            <p className="footer-text">Copyright © 2022 - All right reserved </p>

          </div>
          <div id="go-top"><a className="smoothscroll" title="Back to Top" href="#home"><i className="icon-up-open" /></a></div>
        </div>
      </footer>
    );
  }
}