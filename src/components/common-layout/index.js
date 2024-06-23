import { ReduxProvider } from '@/provider'
import Header from '../header';
import { auth } from '@/auth';

const CommonLayout = async ({ children }) => {
    const getSession = await auth();
    return (
        <ReduxProvider>
            <Header getSession={getSession} />
            {children}
        </ReduxProvider>
    )
}

export default CommonLayout;