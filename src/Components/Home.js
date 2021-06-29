import React  from 'react';
import Img from './pic1.jpg';
export class Home extends React.Component {
    render(){
        return(
            <div>
                <section id="home">
                <center>
                <div>
                <img src={Img}
                className="igg"/>
                </div>
                </center>
                    <p >I am strong in <span> HTML</span></p>
                    <p >I am strong in<span> CSS</span></p>
                    <p >I am strong in <span>Javascript</span></p>
                </section>
            </div>
        )
    }
}
export default Home;