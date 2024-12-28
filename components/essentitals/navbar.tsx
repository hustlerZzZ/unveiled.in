import Logo from "./logo";
import { ModeToggle } from "./theme";

function Navbar() {
    return (
        <header className="flex justify-between container mx-auto mt-8 px-4 md:px-0">
            <div>
                <Logo />
            </div>

            <nav className="flex items-center justify-center space-x-8">
                {/* <ul className="flex items-center justify-center space-x-8">
                    <li>
                        <Link href="#">Home</Link>
                    </li>
                    <li>
                        <Link href="#">Docs</Link>
                    </li>
                    <li>
                        <Link href="#">Blog</Link>
                    </li>
                    <li>
                        <Link href="#">Showcase</Link>
                    </li>
                </ul> */}

                <div>
                    <ModeToggle />
                </div>
            </nav>
        </header>
    );
}

export default Navbar;
