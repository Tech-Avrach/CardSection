import React from "react";
import "./VideoComponent.css";

const VideoComponent = () => {
    return (
        <div className="video-component">
            <div className="instructor-header">
                <p className="small-title">WORLD-CLASS INSTRUCTORS</p>
                <h2 className="main-heading">Classes Taught by Industry Expert</h2>
                <p className="sub-heading">
                    Geeks teachers are icons, experts, and industry rock stars excited to
                    share their <br/>experience, wisdom, and trusted tools with you.
                </p>
            </div>
            <div className="instructor-cards">
                <div className="card">
                    <div className="card-image-body">
                        <img
                            src="https://img-cdn.pixlr.com/image-generator/history/65bb506dcb310754719cf81f/ede935de-1138-4f66-8ed7-44bd16efc709/medium.webp"
                            alt="Esther Howard"
                            className="card-image"
                        />
                    </div>
                    <div className="card-content-body">
                        <h3 className="card-name">Mary Roberts</h3>
                        <p className="card-title">Professional Web Developer</p>
                        <div className="card-info">
                            <span>⭐ 4.5</span>
                            <span>9,692 Students</span>
                            <span>3 Courses</span>
                        </div>
                    </div>
                </div>
                <div className="card">
                    <div className="card-image-body">
                        <img
                            src="https://img-cdn.pixlr.com/image-generator/history/65bb506dcb310754719cf81f/ede935de-1138-4f66-8ed7-44bd16efc709/medium.webp"
                            alt="Esther Howard"
                            className="card-image"
                        />
                    </div>
                    <div className="card-content-body">
                        <h3 className="card-name">Mary Roberts</h3>
                        <p className="card-title">Professional Web Developer</p>
                        <div className="card-info">
                            <span>⭐ 4.5</span>
                            <span>9,692 Students</span>
                            <span>3 Courses</span>
                        </div>
                    </div>
                </div>
                <div className="card">
                    <div className="card-image-body">
                        <img
                            src="https://img-cdn.pixlr.com/image-generator/history/65bb506dcb310754719cf81f/ede935de-1138-4f66-8ed7-44bd16efc709/medium.webp"
                            alt="Esther Howard"
                            className="card-image"
                        />
                    </div>
                    <div className="card-content-body">
                        <h3 className="card-name">Mary Roberts</h3>
                        <p className="card-title">Professional Web Developer</p>
                        <div className="card-info">
                            <span>⭐ 4.5</span>
                            <span>9,692 Students</span>
                            <span>3 Courses</span>
                        </div>
                    </div>
                </div>
                <div className="card">
                    <div className="card-image-body">
                        <img
                            src="https://img-cdn.pixlr.com/image-generator/history/65bb506dcb310754719cf81f/ede935de-1138-4f66-8ed7-44bd16efc709/medium.webp"
                            alt="Esther Howard"
                            className="card-image"
                        />
                    </div>
                    <div className="card-content-body">
                        <h3 className="card-name">Mary Roberts</h3>
                        <p className="card-title">Professional Web Developer</p>
                        <div className="card-info">
                            <span>⭐ 4.5</span>
                            <span>9,692 Students</span>
                            <span>3 Courses</span>
                        </div>
                    </div>
                </div>
            </div>
            <button className="see-courses-button">See All Courses</button>
        </div>
    );
};

export default VideoComponent;
