import React from 'react';
export class Skills extends React.Component {
    render(){
        return(
            <div>
                <div className="bg_colour">
                <section>
                <h1 className="text-center">MY SKILLS</h1>
                    <p>HTML</p>
                    <div class="containers">
                    <div class="skills html">90%</div>
                    </div>
                    <p>CSS</p>
                    <div class="containers">
                    <div class="skills css">90%</div>
                    </div>
                    <p>Javascript</p>
                    <div class="containers">
                    <div class="skills js">85%</div>
                    </div>
                    <p>React</p>
                    <div class="containers">
                    <div class="skills react">75%</div>
                    </div>
                </section>
                </div>
            </div>
        )           
    }
}
export default Skills;