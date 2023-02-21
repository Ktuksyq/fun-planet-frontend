import Header from '@/components/UIComponents/Header/MainPageHeader';
import { FC, ReactNode } from 'react'

interface MainLayoutModel {
    children: ReactNode,
}

const MainLayout: FC<MainLayoutModel> = ({ children }) => {
    return (
        <>
            <Header />
            {children}
        </>
    )
}

export default MainLayout;