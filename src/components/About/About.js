import React from 'react';
import './About.css';
import Saikal from '../../Saikal.jpg';

class About extends React.Component {
    render() {
        return (
            <div className="About">
                <h1>About</h1>
                <img src={Saikal} className='Saikal-photo' alt='Saikal'/>
                <p>
                    Abdymomunova Saikal is a  17 year old digital artist 
                    living in Bishkek, Kyrhyzstan, where she is an active 
                    member of the Dunkcomics publishing team.
                </p>
            </div>
        );
    }
}

export default About;