import React from 'react';
import './Sidebar.css';

class Sidebar extends React.Component {
    render() {
        return (
            <div className="Sidebar">
                <nav>
                    <a>Top</a>
                    <a>Gallery</a>
                    <a>About</a>
                    <a>Contact</a>
                </nav>
            </div>
        );
    }
}

export default Sidebar;