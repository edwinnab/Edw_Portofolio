import React from 'react';
import { Grid, Cell } from 'react-mdl';

export default function Home() {
    return (
        <div style={{width: '100%', height: '100%', margin: 'auto'}}>
            <Grid className='home-grid'>
                <Cell col={12}>
                    <img 
                        src="./one.png"
                        alt="avatar"
                        className="profile-pic"
                        />

                    <div className="banner-text">
                        <h1>Full Stack Python Developer</h1>
                        
                        <hr/>

                        <p>HTML/CSS | PHP | PYTHON | C++ | LINUX_CMD | SQL</p>

                        <div className="social-links">
                            <a href="https://www.linkedin.com/in/edwinna-bikeri" rel="noopener noreferrer" target="_blank">
                                <i className="fa fa-linkedin-square" aria-hidden="true" />
                            </a>

                            <a href="https://github.com/edwinnab" rel="noopener noreferrer" target="_blank">
                                <i className="fa fa-github-square" aria-hidden="true" />
                            </a>

                            <a href="https://web.facebook.com/edwinna.bikeriomwando" rel="noopener noreferrer" target="_blank">
                                <i className="fa fa-facebook-square" aria-hidden="true" />
                            </a>

                            <a href="https://twitter.com/Alvin82381476" rel="noopener noreferrer" target="_blank">
                                <i className="fa fa-twitter-square" aria-hidden="true" />
                            </a>
                        </div>
                    </div>
                </Cell>
            </Grid>

        </div>
    );
}