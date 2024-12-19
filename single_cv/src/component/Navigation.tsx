

function Navigation(){

    return (
        <>
        <div className="flex justify-between border-2 py-6 px-12 bg-white shadow-md">
            <div>LOGO HERE</div>
            <div>
                <div>
                    <nav>
                        <ul className="md:flex md:justify-evenly gap-8 sm:hidden">
                            <li>Curriculum Vitae</li>
                            <li>About Me</li>
                            <li>Contact</li> 
                        </ul>
                    </nav>
                </div>
                <div className="lg:hidden md:hidden">
                    HELLO
                </div>
            </div>
        </div>
        </>
    )
}

export default Navigation