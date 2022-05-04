import React from 'react'
import styled from 'styled-components'

const StyledOurPartners = styled.div`
    width: 100%;
    height: 100%;
    min-height: calc(100vh - 75px); /*header height ajustment*/

    background-color: lightgreen;
`

export default function OurPartners(){
    return (
        <StyledOurPartners>OurPartners</StyledOurPartners>
    )
}
