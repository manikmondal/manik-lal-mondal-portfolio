import React, { Component } from 'react';
export default class Footer extends Component {

  render() {
    let resumeData = this.props.resumeData;


    const today = new Date();
    const year = today.getFullYear();
    const date = today.getDate();
    const time = today.getHours();

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
            <h5 className="widget"> Manik Lal Mondal, &copy;: {year} date:-{date}:Time:-{time} All Rights
              Reserved. </h5>
            <p>Copyright © 2022 - All right reserved </p>

          </div>
          <div id="go-top"><a className="smoothscroll" title="Back to Top" href="#home"><i className="icon-up-open" /></a></div>
        </div>
      </footer>
    );
  }
}