import React from 'react';

const ResumePdf = (resumeData) => {
    return (
        <div>
            <ul className="social-links">
                {
                    resumeData.resumepdf && resumeData.resumepdf.map((item) => {
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
        </div>
    );
};

export default ResumePdf;