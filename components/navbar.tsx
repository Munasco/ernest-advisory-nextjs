'use client'

import {Logo} from "@/components/logo";
import React from "react";
import {Button} from "@/components/ui/button";

function Navbar() {
    return (
        <header className="fixed top-0 left-0 right-0 z-50 bg-background/80 backdrop-blur-sm border-b border-border group">
            <div className="container mx-auto px-4 py-4 flex items-center justify-between">
                {/* Logo */}
                <div className="flex items-center space-x-4">
                    <Logo className="w-10 h-10"/>
                    <span
                        className="text-xl font-semibold bg-gradient-to-r from-blue-400 to-purple-500 text-transparent bg-clip-text">
                    Ernest Advisory
                    </span>
                </div>

                {/* Mobile Menu Toggle (Checkbox Hack) */}
                <input type="checkbox" id="menu-toggle" className="peer hidden"/>

                {/* Hamburger Icon */}
                <svg
                    onClick={() => document.getElementById('menu-toggle')?.click()}
                    className="w-6 h-6 cursor-pointer text-foreground/80 hover:text-primary transition-colors block peer-checked:hidden
                    md:hidden duration-300 ease-in-out"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                    xmlns="http://www.w3.org/2000/svg"
                >
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16m-7 6h7"/>
                </svg>

                {/* Close Icon */}
                <svg
                    onClick={() => document.getElementById('menu-toggle')?.click()}
                    className="w-6 h-6 cursor-pointer text-foreground/80 hover:text-primary transition-all hidden peer-checked:block
                    md:hidden duration-300 ease-in-out visible peer-checked:visible"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                    xmlns="http://www.w3.org/2000/svg"
                >
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12"/>
                </svg>

                {/* Desktop Navigation */}
                <nav className="hidden md:block">
                    <ul className="flex space-x-6">
                        <li><Button type="button" variant="link"
                                    onClick={() => document.getElementById("services")?.scrollIntoView({behavior: "smooth"})}
                                    className="text-foreground/80 hover:text-primary transition-colors">
                            Services</Button>
                        </li>
                        <li><Button type="button" variant="link"
                                    onClick={() => document.getElementById("about")?.scrollIntoView({behavior: "smooth"})}
                                    className="text-foreground/80 hover:text-primary transition-colors">About</Button>
                        </li>
                        <li><Button type="button" variant="link"
                                    onClick={() => document.getElementById("newsletter")?.scrollIntoView({behavior: "smooth"})}
                                    className="text-foreground/80 hover:text-primary transition-colors">Newsletter</Button>
                        </li>
                        <li><Button type="button" variant="link"
                                    onClick={() => document.getElementById("contact")?.scrollIntoView({behavior: "smooth"})}
                                    className="text-foreground/80 hover:text-primary transition-colors">Contact</Button>
                        </li>
                    </ul>
                </nav>
            </div>

            {/* Mobile Navigation (Hidden by Default) */}
            <nav
                className="hidden group-has-checked:block md:hidden bg-background/90 backdrop-blur-sm border-t border-border">
                <ul className="flex flex-col items-center space-y-4 py-4">
                    <li><Button type="button" variant="link"
                                onClick={() => document.getElementById("services")?.scrollIntoView({behavior: "smooth"})}
                                className="text-foreground/80 hover:text-primary transition-colors">
                        Services</Button>
                    </li>
                    <li><Button type="button" variant="link"
                                onClick={() => document.getElementById("about")?.scrollIntoView({behavior: "smooth"})}
                                className="text-foreground/80 hover:text-primary transition-colors">About</Button></li>
                    <li><Button type="button" variant="link"
                                onClick={() => document.getElementById("newsletter")?.scrollIntoView({behavior: "smooth"})}
                                className="text-foreground/80 hover:text-primary transition-colors">Newsletter</Button>
                    </li>
                    <li><Button type="button" variant="link"
                                onClick={() => document.getElementById("contact")?.scrollIntoView({behavior: "smooth"})}
                                className="text-foreground/80 hover:text-primary transition-colors">Contact</Button>
                    </li>
                </ul>
            </nav>
        </header>
    )
}

export default Navbar
