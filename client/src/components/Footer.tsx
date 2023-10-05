const Footer = () => {
    const content = (
        <>
            <div className="bg-primary text-white px-12 flex flex-row justify-between items-center">
                <div className="space-y-4">
                    <img src="#" alt="logo image" />
                    <p>Handcrafted by the greatness of my mind</p>
                    <div>
                        <ul className="flex flex-row justify-between items-center gap-4">
                            <li><a href="#">Terms of service</a></li>
                            <li><a href="#">Privacy Policy</a></li>
                            <li><a href="#">Cookie Policy</a></li>
                        </ul>
                    </div>
                </div>
                <div>
                    <ul className="flex flex-row justify-between items-center gap-4">
                        <li className="bg-accent rounded-lg p-2"><a href="">Instagram</a></li>
                        <li className="bg-accent rounded-lg p-2"><a href="">Facebook</a></li>
                        <li className="bg-accent rounded-lg p-2"><a href="">Twitter (not x fuck you)</a></li>
                        <li className="bg-accent rounded-lg p-2"><a href="">Discord</a></li>
                    </ul>
                </div>
            </div>

        </>
    )

    return content
} 

export default Footer
