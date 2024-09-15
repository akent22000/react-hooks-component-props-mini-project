import React from "react";

function About({ image, bio }) {
    return (
        <div id="about">
            <h2>
                {bio}
            </h2>
            <img src={image} alt="blog logo" />

        </div>
    );
}

export default About;