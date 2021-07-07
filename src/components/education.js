import React, { useState } from 'react'
import { Grid, Cell } from 'react-mdl'

export default function Education(props) {
    const [profileState] = useState(props);

    return (
        <div>
            <Grid>
                <Cell col={4}>
                    <p>{profileState.startYear} - {profileState.stopYear}</p>
                </Cell>
                <Cell col={8}>
                    <h4 style={{marginTop: '0px'}}>{profileState.school}</h4>
                    <p>{profileState.schoolDescription}</p>
                </Cell>
            </Grid>
        </div>
    )
}
