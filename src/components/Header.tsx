import {
    NavigationMenu,
    NavigationMenuContent,
  //  NavigationMenuIndicator,
    NavigationMenuItem,
    NavigationMenuLink,
    NavigationMenuList,
    NavigationMenuTrigger,
  //  NavigationMenuViewport,
} from "@/components/ui/navigation-menu"

import { Button } from "@/components/ui/button"

function Header() {
    return (
        <header className="fixed top-0 left-0 min-w-screen py-3 bg-black">
            <div className="flex items-center justify-between mx-auto px-5">
                <NavigationMenu>
                    <NavigationMenuList>
                        <NavigationMenuItem>
                            <NavigationMenuTrigger>Products</NavigationMenuTrigger>
                            <NavigationMenuContent>
                                <NavigationMenuLink>one</NavigationMenuLink>
                            </NavigationMenuContent>
                        </NavigationMenuItem>
                    </NavigationMenuList>

                    <NavigationMenuList>
                        <NavigationMenuItem>
                            <NavigationMenuTrigger>Solutions</NavigationMenuTrigger>
                            <NavigationMenuContent>
                                <NavigationMenuLink>two</NavigationMenuLink>
                            </NavigationMenuContent>
                        </NavigationMenuItem>
                    </NavigationMenuList>

                    <NavigationMenuList>
                        <NavigationMenuItem>
                            <NavigationMenuTrigger>Resources</NavigationMenuTrigger>
                            <NavigationMenuContent>
                                <NavigationMenuLink>three</NavigationMenuLink>
                            </NavigationMenuContent>
                        </NavigationMenuItem>
                    </NavigationMenuList>
                    
                    

                    <NavigationMenuList>
                        <NavigationMenuItem>
                            <a href="/" className="inline-flex h-9 w-max items-center justify-center rounded-xl bg-background px-4 py-2 text-sm font-medium hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground disabled:pointer-events-none disabled:opacity-50 data-[state=open]:hover:bg-accent data-[state=open]:text-accent-foreground data-[state=open]:focus:bg-accent data-[state=open]:bg-accent/50 focus-visible:ring-ring/50 outline-none transition-[color,box-shadow] focus-visible:ring-[3px] focus-visible:outline-1">Enterprise</a>
                        </NavigationMenuItem>
                    </NavigationMenuList>

                    <NavigationMenuList>
                        <NavigationMenuItem>
                            <a href="/" className="inline-flex h-9 w-max items-center justify-center rounded-xl bg-background px-4 py-2 text-sm font-medium hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground disabled:pointer-events-none disabled:opacity-50 data-[state=open]:hover:bg-accent data-[state=open]:text-accent-foreground data-[state=open]:focus:bg-accent data-[state=open]:bg-accent/50 focus-visible:ring-ring/50 outline-none transition-[color,box-shadow] focus-visible:ring-[3px] focus-visible:outline-1">Docs</a>
                        </NavigationMenuItem>
                    </NavigationMenuList>

                    <NavigationMenuList>
                        <NavigationMenuItem>
                            <a href="/" className="inline-flex h-9 w-max items-center justify-center rounded-xl bg-background px-4 py-2 text-sm font-medium hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground disabled:pointer-events-none disabled:opacity-50 data-[state=open]:hover:bg-accent data-[state=open]:text-accent-foreground data-[state=open]:focus:bg-accent data-[state=open]:bg-accent/50 focus-visible:ring-ring/50 outline-none transition-[color,box-shadow] focus-visible:ring-[3px] focus-visible:outline-1">Pricing</a>
                        </NavigationMenuItem>
                    </NavigationMenuList>

                </NavigationMenu>

                <div className="flex items-center justify-equal gap-3 ">
                    <Button variant="outline">Log In</Button>
                    <Button variant="outline">Contact</Button>
                    <Button variant="default">Sign Up</Button>
                </div>
            </div>
        </header>
    )
}

export default Header