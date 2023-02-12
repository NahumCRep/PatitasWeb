import { useScrollToTop } from '../../hooks';
import { Navbar } from '../nav/Navbar';

export const Layout = ({ children }) => {
    useScrollToTop();
    return (
        <main className='scrollbar-thin scrollbar-thumb-blue-700 scrollbar-track-blue-300 overflow-y-scroll'>
            <Navbar />
            <div className="min-h-screen pt-[80px] md:pt-[60px] bg-white">
                {children}
            </div>
            <footer className="w-full h-24 bg-plt-blue flex items-end justify-center p-2 font-secondary">
                <p className='text-sm text-white'>
                    &copy; patitas web todos los derechos reservados | {new Date().getFullYear()}
                </p>
            </footer>
        </main>
    )
}
