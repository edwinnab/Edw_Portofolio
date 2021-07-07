import React from 'react';
import { Grid, Cell, List, ListItem, ListItemContent } from 'react-mdl';

export default function Contact() {
    return (
        <div className="contact-body">
            <Grid className="contact-grid">
                <Cell col={6}>
                    <h2 style={{fontWeight: 'bold'}}>EDWINNA BIKERI</h2>
                    <img 
                        src="one.png"
                        alt="avatar"
                        style={{height: '200px', borderRadius: '10px'}}
                        />
                    <p style={{width: '75%', margin: 'auto', fontSize: '15px', paddingTop: '30px'}}> 
                        Edwinna being my name which means 'wealthy friend', I have vast knowledge in programming
                        in python, creating websites and coding learning machine models using tensorflow. 
                        Feels free to contact me anytime of the day or the week and THANK YOU.
                    </p>
                </Cell>
                <Cell col={6}>
                    <h3>CONTACT DETAILS</h3>
                    <hr/>

                    <div className="contact-list">
                        <List >
                            <ListItem>
                                <ListItemContent style={{fontSize: '20px'}}>
                                    <i className="fa fa-phone-square" aria-hidden="true"/>
                                    +254-711107233
                                </ListItemContent>
                            </ListItem>
                            <ListItem>
                                <ListItemContent style={{fontSize: '20px'}}>
                                    <i className="fa fa-envelope-square" aria-hidden="true"/>
                                    edwinnabikeri@gmail.com
                                </ListItemContent>
                            </ListItem>
                            <ListItem>
                                <ListItemContent style={{fontSize: '20px'}}>
                                    <i className="fa fa-twitter-square" aria-hidden="true"/>
                                    Alvin82381476
                                </ListItemContent>
                            </ListItem>
                        </List>
                    </div>

                </Cell>
            </Grid>
        </div>
    );
}