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