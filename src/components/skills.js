import React, { useState } from 'react'
import { Grid, Cell, ProgressBar } from 'react-mdl'

export default function Skills(props) {
    const [profileState] = useState(props);

    return (
        <div>
            <Grid>
                <Cell col={12}>
                    <div 
                        style={{display: 'flex'}}>
                            {profileState.skill}
                            <ProgressBar style={{margin: 'auto', width: '80%' }} progress={profileState.progress} />
                    </div>
                </Cell>
            </Grid>
        </div>
    )
}
