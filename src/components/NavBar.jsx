"use client";

import { useState, useRef } from "react";
import { useTheme } from "next-themes";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { User, Crown, Star, Home, LogOut, Sun, Moon } from "lucide-react";
import {
  Sheet,
  SheetContent,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";
import ProgressBar from "./ProgressBar";

function NavBar() {
  const [isOpen, setIsOpen] = useState(false);
  const { theme, setTheme } = useTheme();
  const themeButtonRef = useRef(null);
  const themeIconRef = useRef(null);

  // GSAP animation for theme toggle
  useGSAP(() => {
    if (themeButtonRef.current) {
      gsap.fromTo(
        themeButtonRef.current,
        { scale: 1 },
        { scale: 1.1, duration: 0.2, ease: "power2.out" }
      );

      setTimeout(() => {
        gsap.to(themeButtonRef.current, {
          scale: 1,
          duration: 0.2,
          ease: "power2.out",
        });
      }, 200);
    }
  }, [theme]);

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60 border-b">
      <div className="container mx-auto px-4 h-16 flex items-center justify-between">
        {/* Left side - can be used for logo or other elements */}
        <div className="flex items-center space-x-4">
          {/* Placeholder for logo or other elements */}
        </div>

        {/* Center - Home */}
        <div className="flex items-center">
          <Home className="h-5 w-5 mr-2" />
          <span className="text-lg font-semibold">Home</span>
        </div>

        {/* Right side - Avatar with Sheet */}
        <div className="flex items-center">
          <Sheet open={isOpen} onOpenChange={setIsOpen}>
            <SheetTrigger asChild>
              <button className="flex items-center justify-center w-10 h-10 rounded-full bg-primary text-primary-foreground hover:bg-primary/90 transition-colors cursor-pointer">
                <User className="h-5 w-5" />
              </button>
            </SheetTrigger>
            <SheetContent
              side="right"
              className="w-[300px] sm:w-[400px] p-6 flex flex-col"
            >
              <SheetHeader className="pb-6">
                <SheetTitle></SheetTitle>
              </SheetHeader>

              {/* Main Content */}
              <div className="flex flex-col items-center space-y-8 flex-1">
                <div className="w-24 h-24 rounded-full bg-gradient-to-br from-yellow-400 to-yellow-600 flex items-center justify-center shadow-lg">
                  <User className="h-12 w-12 text-white" />
                </div>

                <div>
                  <div className="text-center mb-2">
                    <h2 className="text-2xl font-bold">Nandu</h2>
                  </div>

                  <div className="inline-flex items-center px-3 py-1 rounded-full bg-gradient-to-r from-yellow-400 to-yellow-600 text-white shadow-md">
                    <Crown className="h-4 w-4 mr-1.5" />
                    <span className="font-semibold text-sm">Gold Member</span>
                  </div>
                </div>

                <ProgressBar progress={75} totalXP={1000} currentXP={750} />
              </div>

              {/* Bottom Actions */}
              <div className="flex flex-col space-y-3 pt-4 border-t">
                {/* Dark Mode Toggle */}
                <button
                  ref={themeButtonRef}
                  onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
                  className="flex items-center justify-center space-x-2 px-3 py-2 rounded-lg hover:bg-muted/50 transition-colors w-full cursor-pointer"
                >
                  {theme === "dark" ? (
                    <Sun className="h-4 w-4" />
                  ) : (
                    <Moon className="h-4 w-4" />
                  )}
                  <span className="text-sm font-medium">
                    {theme === "dark" ? "Light Mode" : "Dark Mode"}
                  </span>
                </button>

                {/* Logout Button */}
                <button className="flex items-center justify-center space-x-2 px-3 py-2 rounded-lg hover:bg-muted/50 transition-colors text-red-600 hover:text-red-700 w-full cursor-pointer">
                  <LogOut className="h-4 w-4" />
                  <span className="text-sm font-medium">Logout</span>
                </button>
              </div>
            </SheetContent>
          </Sheet>
        </div>
      </div>
    </nav>
  );
}

export default NavBar;
