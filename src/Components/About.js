import React  from 'react';
import Img from './pic1.jpg';
export class About extends React.Component {
    render(){
        return(
            <div>
                <section id="ab">
                <div className="circle">
                <img src={Img}
                className="bg"/>
                <div className="content">
                <h1 className="style">ABOUT ME</h1>
                    <p>I did my schooling in abc high School.</p>
                    <p>I am currently pursing Computer Science</p> 
                    <p>and Engineering in aas College.</p>
                    <p>I am interested in Front End Development.</p>
                      <p>I have skills in HTML,CSS,JAVASCRIPT and REACT.</p>
                </div>
                </div>    
                </section>
                </div>
        )
    }
}
export default About;