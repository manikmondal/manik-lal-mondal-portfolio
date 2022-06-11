import React, { Component } from 'react';
export default class Blog extends Component {
    render() {
        // let resumeData = this.props.resumeData;
        return (
            <section id="blog">
                <div className='contact'>
                    <div className="row section-head">
                        <div className="ten columns">
                            <h1 className="text-center">MY BLOGS</h1>
                        </div>
                    </div>
                    <div className="row">
                        <aside className="eigth columns footer-widgets">
                            <div className="widget">
                                <h4>Coming soon
                                </h4>
                            </div>
                        </aside>
                    </div>
                </div>

            </section>
        );
    }
}