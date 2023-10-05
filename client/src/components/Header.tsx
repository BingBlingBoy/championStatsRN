const Header = () => {
    const content = (
        <>
            <div className="py-8 px-16 bg-primary flex text-white font-semibold justify-between items-center">
                <img src="#" alt="logo image"/>
                <div>
                    <ul className="flex flex-row gap-10">
                        <li><a href="/">Home</a></li>
                        <li><a href="">Champions</a></li>
                        <li><a href="">Items</a></li>
                        <li><a href="">Donate</a></li>
                    </ul>
                </div>
            </div>
        </>
    )

    return content
}

export default Header
