import React, { useState } from 'react';
import { Tab, Tabs, Grid, Cell, Card, CardTitle, CardText, CardActions, Button, CardMenu, IconButton  } from 'react-mdl';

export default function Projects() {
    const [activeTab, setActiveTab] = useState(0);

    const toggleCategories = () => {
        if(activeTab === 0) {
            return(
                <div className="projects-grid">
                    <Card shadow={5} style={{minWidth: '450', margin: 'auto'}}>
                        <CardTitle style={{height: '150px', fontWeight: 'bold', color: 'dark-grey', background: 'url(./download.png) center / cover'}}>
                            Python Calculator
                        </CardTitle>
                        <CardText>
                            This is a simple calculator with the basic functions of addition, subtraction, division and multiplication
                        </CardText>
                        <CardActions border >
                            <a href="https://github.com/edwinnab/calculator" rel="noopener noreferrer" target="_blank"><Button colored>Github</Button></a>
                        </CardActions>
                        <CardMenu style={{color: 'black '}}>
                            <IconButton name="share"/>
                        </CardMenu>
                    </Card>

                    <Card shadow={5} style={{minWidth: '450', margin: 'auto'}}>
                        <CardTitle style={{height: '150px', fontWeight: 'bold', color: 'grey', background: 'url(./guess2.png) center / cover'}}>
                            Python Hangman Game
                        </CardTitle>
                        <CardText>
                            A hangman game is a guessing  game written in python. It allows you to get familiar with the python syntax and also practice on coding
                        </CardText>
                        <CardActions border>
                            <a href="https://github.com/edwinnab/hangman-game" rel="noopener noreferrer" target="_blank"><Button colored>Github</Button></a>
                        </CardActions>
                        <CardMenu style={{color: 'white '}}>
                            <IconButton name="share"/>
                        </CardMenu>
                    </Card>
                </div>
            )
        } else if (activeTab === 1) {
            return(
                <Card shadow={5} style={{minWidth: '450', margin: 'auto'}}>
                    <CardTitle style={{height: '150px', fontWeight: 'bold', color: 'black', background: 'url(./dev.png) center / cover'}}>
                        Basic Website
                    </CardTitle>
                    <CardText>
                        This is a simple website made with HTML and CSS. It has a cool User Interface.
                    </CardText>
                    <CardActions border>
                        <a href="https://github.com/edwinnab/front_end-projects" rel="noopener noreferrer" target="_blank"><Button colored>Github</Button></a>
                    </CardActions>
                    <CardMenu style={{color: 'black '}}>
                        <IconButton name="share"/>
                    </CardMenu>
                </Card>
            )
        } else if (activeTab === 2) {
            return(
                <Card shadow={5} style={{minWidth: '450', margin: 'auto'}}>
                    <CardTitle style={{height: '150px', fontWeight: 'bold', color: 'black', background: 'url(./tens.png) center / cover'}}>
                        Classification using TensorFlow
                    </CardTitle>
                    <CardText>
                        This is a classification machine learning model.
                    </CardText>
                    <CardActions border>
                        <a href="https://github.com/edwinnab/Basic_Classification" rel="noopener noreferrer" target="_blank"><Button colored>Github</Button></a>
                    </CardActions>
                    <CardMenu style={{color: 'black '}}>
                        <IconButton name="share"/>
                    </CardMenu>
                </Card>
            )
        }
        
    };

    return (
        <div className="category-tabs">
            <Tabs activeTab={{activeTab}} onChange={(tabId) => setActiveTab(tabId)} ripple>
                <Tab>PYTHON</Tab>
                <Tab>HTML/CSS</Tab>
                <Tab>TENSORFLOW</Tab>
            </Tabs>

            <Grid>
                <Cell col={12}>
                    <div className="content">
                        {toggleCategories()}
                    </div>
                </Cell>
            </Grid>
        </div>
    );
}