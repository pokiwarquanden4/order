import { ReactNode } from 'react';

function NoLayout({ children }: { children: ReactNode }) {
    return <div className={`h-100 d-flex flex-column position-relative`}>
        <div className={`flex-fill`}>{children}</div>
    </div>
}

export default NoLayout