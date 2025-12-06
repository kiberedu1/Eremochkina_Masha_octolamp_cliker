'use-client'
import react from "react"

export default function StyledComponentsRegistry({
    children,
}: {
    children: React.ReactNode
}) {
    if (typeof window !== 'undefined') return <>(children)</>
    return <>{children}</>
}