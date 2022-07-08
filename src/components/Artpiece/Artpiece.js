import React from 'react';
import './Artpiece.css';

class Artpiece extends React.Component {
    render() {
        return (
            <div class="Artpiece">
                <div className="image-container">
                    <img src='https://s3.amazonaws.com/codecademy-content/programs/react/ravenous/pizza.jpg' alt=''/>
                </div>
            </div>
        );
    }
}

export default Artpiece;