import { SignInButton, SignUpButton } from "@clerk/nextjs";
import Image from "next/image";
import Link from "next/link";
import { Button } from "../ui/button";

const Header = () => {
  return (
    <nav className="fixed top-0 right-0 left-0 z-50 px-6 border-b border-border/50 bg-background/80 backdrop-blur-md h-16">
      <div className="max-w-6xl mx-auto flex justify-between items-center">
        <Link href="/" className="flex items-center">
          <Image
            src={"/brain.png"}
            alt="TheraLink Logo"
            width={32}
            height={32}
            className="w-11"
          />
          <span className="font-semibold text-lg tracking-widest">
            TheraLink
          </span>
        </Link>

        <div className="hidden md:flex items-center gap-8">
          <a href="#" className="text-muted-foreground">
            How It Works
          </a>
          <a href="#" className="text-muted-foreground">
            Pricing
          </a>
          <a href="#" className="text-muted-foreground">
            About
          </a>
        </div>

        <div className="flex items-center gap-3">
          <SignInButton mode="modal">
            <Button variant={"ghost"} size={"sm"}>
              Sign In
            </Button>
          </SignInButton>
          <SignUpButton mode="modal">
            <Button size={"sm"}>Sign Up</Button>
          </SignUpButton>
        </div>
      </div>
    </nav>
  );
};
export default Header;
