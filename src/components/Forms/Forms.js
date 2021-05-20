import React from 'react';
import mobiscroll from '@mobiscroll/react';
import '@mobiscroll/react/dist/css/mobiscroll.min.css';


function Forms () {
        return (
            <mobiscroll.Form className="mbsc-form-grid" theme="ios"  themeVariant="light">
                <div className="mbsc-grid">
                    <div className="mbsc-row mbsc-justify-content-center">
                        <div className="mbsc-col-sm-9 mbsc-col-md-7 mbsc-col-xl-5 mbsc-align-center">
                            <mobiscroll.Note color="primary">Please Fill Out the Details for any Verified Resources</mobiscroll.Note>
                        </div>
                    </div>
                    <div className="mbsc-row">
                        <div className="mbsc-col-12 mbsc-col-md-6 mbsc-col-lg-3">
                            <mobiscroll.Input inputStyle="box" labelStyle="floating" placeholder="Full Name">Full Name</mobiscroll.Input>
                        </div>
                        <div className="mbsc-col-12 mbsc-col-lg-6">
                            <mobiscroll.Input inputStyle="box" labelStyle="floating" placeholder="Resource Link">Link</mobiscroll.Input>
                        </div>
                    </div>
                    <div className="mbsc-row">
                        <div className="mbsc-col-12 mbsc-col-md-6 mbsc-col-lg-3">
                            <mobiscroll.Input inputStyle="box" labelStyle="floating" placeholder="Resource Type">Resource Type</mobiscroll.Input>
                        </div>
                        <div className="mbsc-col-12 mbsc-col-md-6 mbsc-col-lg-3">
                            <mobiscroll.Input inputStyle="box" labelStyle="floating" placeholder="Enter your town">Town</mobiscroll.Input>
                        </div>
                        <div className="mbsc-col-12 mbsc-col-md-6 mbsc-col-lg-3">
                            <mobiscroll.Input inputStyle="box" labelStyle="floating" placeholder="Select your state">State</mobiscroll.Input>
                        </div>
                        <div className="mbsc-col-12 mbsc-col-md-6 mbsc-col-lg-3">
                            <mobiscroll.Input inputStyle="box" labelStyle="floating" placeholder="Select your country">Country</mobiscroll.Input>
                        </div>
                    </div>
                    <div className="mbsc-row">
                        <div className="mbsc-col-12 mbsc-col-md-16 mbsc-col-lg-3">
                            <div className="mbsc-btn-group-block">
                                <mobiscroll.Button color="success">Submit Details</mobiscroll.Button>
                            </div>
                        </div>
                    </div>
                    {/* <div className="mbsc-row mbsc-justify-content-center">
                        <div className="mbsc-col-sm-9 mbsc-col-md-7 mbsc-col-xl-5">
                            <mobiscroll.Note color="secondary">
                                <p className="mbsc-align-left">Use the grid layout classes to set how the form should look on different screen sizes.</p>
                                <ul className="mbsc-align-left">
                                    <li>The column widths will adapt to the screen size based on the predefined <b>.mbsc-col-{'{'}breakpoint{'}'}-{'{'}size{'}'}</b> classes and become horizontal at the specified breakpoint.
                                    </li>
                                    <li>The examples are using the <b>.mbsc-col-md-6</b>, <b>.mbsc-col-lg-6</b> and <b>.mbsc-col-lg-3</b> classes.</li>
                                </ul>
                            </mobiscroll.Note>
                        </div>
                    </div> */}
                </div>
            </mobiscroll.Form>
        );
}

export default Forms;