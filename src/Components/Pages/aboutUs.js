import React from 'react';
import {
    Link
} from 'react-router-dom';

function AboutUs() {
    return (
        <div id="wrapper">
            <div id="page" class="container">
                <div class="row">
                    <div class="col-md-12 m-auto">
                        <div class="title" style={{ margin: "0em 0em 0em 1em" }}>
                            <center><h2>About us</h2></center>
                        </div>
                    </div>
                </div>
                <hr/>
                <div class="row1" style={{ backgroundImage: "url(/images/connections2.jpg)" }}>
                    <div class="text-to-right">
                        <h2>Welcome to Polygon Network Company</h2>
                        <p>
                            Our Company is a registered enterprise structured cabling certified company,
                            authorized to deploy Panduit&reg; enterprise structured cabling systems and participate in the certification
                            Plus sm System Warranty, and we are dedicated to giving you the very best of Network Infrastructures, CCTVs, Access Controls and Data Shows
                            with System integration and we are constantly working to improve our network services and solutions to overcome all expected challenges and
                            to fulfill and exceed our customer requirements.
                        </p>
                    </div>
                </div>
                <div class="row1" style={{ backgroundImage: "url(images/datacenters4.jpg)" }}>
                    <h2>Who are we ?</h2>
                    <p>

                        Our company is an IT Service Provider and a System Integrator Company located in Cairo Egypt.
                        We deliver fast and reliable IT Services including Video System Surveillances, Projectors,
                        Large Format Display and Network Solutions.
					</p>
                </div>
            </div>
        </div>
    );
}

export default AboutUs;