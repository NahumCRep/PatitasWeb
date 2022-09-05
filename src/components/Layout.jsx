import { Navbar } from './nav/Navbar';

export const Layout = ({ children }) => {
    return (
        <main>
            <Navbar />
            <div className="pt-[80px] bg-plt-cream">
                {children}
            </div>
        </main>
    )
}
