import { ReactNode } from 'react';
import HeaderWithSearch from '../DefaultLayout/HeaderWithSearch';
import Footer from '../DefaultLayout/Footer';

function HeaderWithSearchLayout({ children }: { children: ReactNode }) {
    return <div className={`h-100 d-flex flex-column position-relative`}>
        <HeaderWithSearch></HeaderWithSearch>
        <div className={`flex-fill overflow-auto`}>{children}</div>
        <Footer></Footer>
    </div>
}

export default HeaderWithSearchLayout