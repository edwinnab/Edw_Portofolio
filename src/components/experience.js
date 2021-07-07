import React, { useState } from 'react'
import { Grid, Cell } from 'react-mdl'

export default function Experience(props) {
    const [profileState] = useState(props);

    return (
        <div>
            <Grid>
                <Cell col={4}>
                    <p>{profileState.startYear} - {profileState.stopYear}</p>
                </Cell>
                <Cell col={8}>
                    <h4 style={{marginTop: '0px'}}>{profileState.job}</h4>
                    <p>{profileState.jobDescription}</p>
                </Cell>
            </Grid>
        </div>
    )
}
