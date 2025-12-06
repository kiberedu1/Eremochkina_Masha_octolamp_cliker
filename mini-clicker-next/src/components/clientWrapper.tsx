'use client'

import {ReactNode} from 'react'
import StyledComponentsRegistry from './StyledComponentsRegistry'
import GlobalStyles from '@/app/styles/GlobalStyles'

interface ClientWrapperProps {
    children: ReactNode
}

    export default function ClientWrapper({children }: ClientWrapperProps){
     return(
            <StyledComponentsRegistry>
                <GlobalStyles/>
                {children}
            </StyledComponentsRegistry>
    )
}