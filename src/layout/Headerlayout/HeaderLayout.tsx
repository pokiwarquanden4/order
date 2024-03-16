import { ReactNode } from 'react';
import Header from '../DefaultLayout/Header';
import Footer from '../DefaultLayout/Footer';

function HeaderLayout({ children }: { children: ReactNode }) {
    return <div className={`h-100 d-flex flex-column position-relative`}>
        <Header></Header>
        <div className={`flex-fill`}>{children}</div>
        <Footer></Footer>
    </div>
}

export default HeaderLayout