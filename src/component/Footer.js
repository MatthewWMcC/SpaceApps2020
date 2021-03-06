import React, { Component } from "react";
import git_logo from '../res/git_logo.png';
import challenge_logo from '../res/challenge_logo.png';
import dataset_logo from '../res/dataset_logo.png';

class Footer extends Component {
    total_style = () => {
        return {
            display: "flex",
            width: "100%",
            height: "100px",
            padding: "50px",
            margin: "0px",
            justifyContent: "space-around",
            backgroundColor: "#3A3A3A",
        }
    };

    column_style = () => {
        return {
            display: "flex",
            height: "25px"
        }
    };

    text_style = () => {
        return {
            height: "25px",
            margin: "0px",
            color: "#FFFFFF"
        }
    };

    link_style = () => {
        return {
            display: "flex",
            padding: "5px",
            textDecoration: "none"
        }
    };

    image_style = () => {
        return {
            height: "25px",
            padding: "5px",
            margin: "0px"
        }
    }

    render() {
        return (
            <div style={this.total_style()}>
                <div style={this.column_style()}>
                    <h5 style={{ height: "25px", padding: "6px", margin: "0px", color: "#FFFFFF" }}>Made for NASA SpaceApps Hackathon 2020</h5>
                </div>

                <div style={this.column_style()}>
                    <a style={this.link_style()} href="https://github.com/bentvelj/SpaceApps2020">
                        <h5 style={this.text_style()}>Github</h5>
                        <img src={git_logo} style={this.image_style()}></img>
                    </a>

                    <a style={this.link_style()} href="https://2020.spaceappschallenge.org/challenges/connect/space-exploration-your-backyard/details">
                        <h5 style={this.text_style()}>Challenge</h5>
                        <img src={challenge_logo} style={this.image_style()}></img>
                    </a>

                </div>
            </div>
        )
    }
}

export default Footer;