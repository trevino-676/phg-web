export default function Header() {
    return (
        <header className="fixed top-0 w-full mx-auto bg-sky-500/50">
            <nav className="flex items-center px-6 py-4 text-sm justify-between">
                <div className="hidden md:flex flex-row justify-start">
                    <a href="/" className="inline-block">Ghp web app</a>
                </div>
                <div className="hidden md:flex flex-row justify-end">
                    <a href="/examples" className="inline-block px-6">Examples</a>
                    <a href="/Help" className="inline-block">Help</a>
                </div>
            </nav>
        </header>
    )
}