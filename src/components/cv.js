import React from 'react';
import { Grid, Cell } from 'react-mdl';
import Education from './education';
import Experience from './experience';
import Skills from './skills';

export default function Cv() {
    return (
        <div >
            <Grid>
                <Cell col={4} className="left-column">
                    <div style={{textAlign: 'center'}}>
                        <img
                            src='one.png'
                            alt='avatar'
                            style={{height: '200px'}}
                            />
                    </div>

                    <h2>Edwinna Bikeri</h2>
                    <h5>Programmer</h5>
                    <hr/>
                    <p>
                        I am a front-end web developer who specializs in HTML and CSS. 
                        I also partake in Machine Learning where we make models that can 
                        adapt overtime. This is mainly done in Python which I am also 
                        proficient in. 
                    </p>
                    <hr/>
                    <h5>Address</h5>
                    <p>Nakuru, Kenya</p>
                    <hr/>
                    <h5>Phone Number</h5>
                    <p>+254-711107233</p>
                    <h5>Email</h5>
                    <p>edwinnabikeri@gmail.com</p>
                    <hr/>
                </Cell>
                <Cell col={8} className="right-column">
                    <h2>Education</h2>
                    <Education 
                        startYear={2014}
                        stopYear={2017}
                        school={"High School"}
                        schoolDescription={"Finished high school with a grade of A-"}
                        />
                    <Education 
                        startYear={2018}
                        stopYear={2021}
                        school={"Laikipia University"}
                        schoolDescription={"Currently in 3rd Year partaking BSc Computer Science. The University has also allowed me to work with robotics(arduino) and also Networking(Cisco/Huawei)"}
                        />
                    <hr/>

                    <h2>Experience</h2>
                    <Experience
                        startYear={2019}
                        stopYear={2020}
                        job={"Arduino Project"}
                        jobDescription={"Made a 4WD motor robot with Arduino that had a geo-location sensor to show its exact coordinates"}
                        />

                    <Experience
                        startYear={2019}
                        stopYear={2020}
                        job={"University Python Project"}
                        jobDescription={"Made a python Information Management system that uses a database to maintain maize distribution in a particular town"}
                        />
                    <hr/>

                    <h2>Skills</h2>
                    <Skills 
                        skill={"Python"}
                        progress={86}
                    />
                    <Skills 
                        skill={"HTML/CSS"}
                        progress={69}
                    />
                    <Skills 
                        skill={"TensorFlow"}
                        progress={48}
                    />
                    <Skills 
                        skill={"PHP"}
                        progress={51}
                    />
                    <Skills 
                        skill={"SQL"}
                        progress={73}
                    />
                </Cell>
            </Grid>
        </div>
    );
}