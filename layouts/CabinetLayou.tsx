import CabinetHeader from '@/components/UIComponents/Header/CabinetHeader';
import { FC, ReactNode } from 'react'



interface LayoutModel {
    children: ReactNode,
}

const CabinetLayout: FC<LayoutModel> = ({ children }) => {
    return (
        <>
            <CabinetHeader />
            {children}
        </>
    )
}

export default CabinetLayout;