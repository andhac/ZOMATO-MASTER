import React from "react";
import {}
function MobileNav () {
    return()
}

function LargeNav() {
    return()
}

function Navbar() {
    return(
        <>
        <nav className="p-4 flex bg-white shadow-md lg:shadow-none w-full items-center">
            <MobileNav />
            <LargeNav />
        </nav>
            </>
    )
}

export default Navbar;