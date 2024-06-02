import { ReactNode } from 'react';
import Footer from '../DefaultLayout/Footer';
import Header from '../DefaultLayout/Header';

function HeaderLayout({ children }: { children: ReactNode }) {
    return <div className={`h-100 d-flex flex-column position-relative`}>
        <Header></Header>
        <div className={`flex-fill overflow-auto`}>{children}</div>
        <Footer></Footer>
    </div>
}

export default HeaderLayout