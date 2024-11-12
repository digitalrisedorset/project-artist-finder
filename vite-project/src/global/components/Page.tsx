import { GlobalStyles } from "../styles/Global";

interface PageProps {
    children: React.ReactNode
}

export const Page: React.FC<PageProps> = ({ children }: PageProps) => {
    return (
        <>
            <GlobalStyles />
            {children}
        </>
    )
}