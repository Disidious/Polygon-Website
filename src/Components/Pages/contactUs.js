import React from 'react';

function ContactUs() {
    window.scrollTo(0, 0);
    return (
        <div id="wrapper">
            <div id="page" className="container">
                <div style={{ width: "45em" }}>
                </div>
                <div className="row">
                    <div className="col-lg-4 col-12">
                        <div className="text-centered">
                            <div className="title" style={{ margin: "0em 0em 0em 1em" }}>
                                <h2>Contact Us</h2>
                            </div>
                            <div className="byline">Phone Number<br /><strong>0122 295 7402</strong><br /><strong>0101 253 8320</strong></div>
                            <div className="byline-lower">EMAIL<br /><strong>info@polygon-nc.com</strong></div>
                        </div>
                    </div>
                    <div className="col-lg-4 col-12">
                        <div className="text-centered">
                            <div className="title" style={{ margin: "0em 0em 0em 1em" }}>
                                <h2>Support</h2>
                            </div>
                            <div className="byline">Phone Number<br /><strong>0106 284 7774</strong></div>
                            <div className="byline-lower">EMAIL<br /><strong>support@polygon-nc.com</strong></div>
                        </div>
                    </div>
                    <div className="col-lg-4 col-12">
                        <div className="text-centered">
                            <div className="title" style={{ margin: "0em 0em 0em 1em" }}>
                                <h2>Sales</h2>
                            </div>
                            <div className="byline">Phone Number<br /><strong>0101 253 8320</strong></div>
                            <div className="byline-lower">EMAIL<br /><strong>sales@polygon-nc.com</strong></div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default ContactUs;