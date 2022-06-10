import React, { Component } from 'react';
export default class Porfolio extends Component {
  render() {
    let resumeData = this.props.resumeData;
    return (
      <section id="portfolio">
        <div className="row">
          <div className="twelve columns collapsed">
            <h1>Check Out Some of My Works.</h1>
            <div id="portfolio-wrapper" className="bgrid-quarters s-bgrid-thirds cf">
              <ul className="">
                {
                  resumeData.portfolio && resumeData.portfolio.map((item) => {
                    return (
                      <div className="columns portfolio-item">
                        <li>
                          {/* <img src={`${item.imgurl}`} alt="" className="item-img" /> */}
                          <a href={item.url}>
                            <img src={`${item.imgurl}`} alt="" className="item-img" />
                            {/* <p className={item.className} /> */}
                            <div className="overlay">
                              <div className="portfolio-item-meta">
                                <h5>{item.name}</h5>
                                <p>{item.description}</p>

                              </div>
                            </div>
                          </a>

                        </li>
                      </div>
                    )
                  })
                }
              </ul>
            </div>
          </div>
        </div>
      </section>
    );
  }
}