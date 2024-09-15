import React from "react";

function Header({ username }) {
    return (
        <div id="header">
            <h1>
                {username}
            </h1>
        </div>
    );
}

export default Header;
