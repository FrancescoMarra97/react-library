import MainMenu from "../components/MainMenu"
export default function Home() {
    return (
        <>
            <header>
                <div className="logo">
                    LOGO
                </div>
                <MainMenu />
            </header>
            <main>
                <h1>About</h1>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Nulla ipsum laudantium doloremque aliquid similique commodi dolor veritatis animi! Nihil, mollitia.</p>
            </main>

            <footer>
                <p>copyrigth 2024</p>
            </footer>
        </>
    )
}