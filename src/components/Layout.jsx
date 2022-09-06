import { Navbar } from './nav/Navbar';

export const Layout = ({ children }) => {
    return (
        <main>
            <Navbar />
            <div className="pt-[80px] md:pt-[60px] bg-white">
                {children}
            </div>
            <footer className="w-full h-80 bg-plt-blue">

            </footer>
        </main>
    )
}
