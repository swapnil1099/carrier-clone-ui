import { Search, Heart, ShoppingCart, Key, User } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";

const Header = () => {
  return (
    <header className="bg-nav text-nav-text">
      <div className="flex items-center justify-between px-6 py-3">
        <div className="flex items-center gap-6">
          <div className="text-2xl font-bold italic">Carrier</div>
        </div>
        
        <div className="flex-1 max-w-md mx-8">
          <div className="relative">
            <Input
              type="search"
              placeholder="Search"
              className="w-full bg-white text-foreground pl-4 pr-10 py-2 rounded-full"
            />
            <Search className="absolute right-3 top-1/2 -translate-y-1/2 h-5 w-5 text-muted-foreground" />
          </div>
        </div>

        <div className="flex items-center gap-4">
          <Button variant="ghost" size="sm" className="text-nav-text hover:bg-nav-secondary text-xs">
            <Key className="mr-1 h-4 w-4" />
            Self-Service Password Reset
          </Button>
          <Button variant="ghost" size="sm" className="text-nav-text hover:bg-nav-secondary text-xs">
            My Assets
          </Button>
          <Button variant="ghost" size="icon" className="text-nav-text hover:bg-nav-secondary">
            <Heart className="h-5 w-5" />
          </Button>
          <Button variant="ghost" size="icon" className="text-nav-text hover:bg-nav-secondary rounded-full">
            <User className="h-5 w-5" />
          </Button>
          <Button variant="ghost" size="sm" className="text-nav-text hover:bg-nav-secondary">
            <ShoppingCart className="mr-1 h-4 w-4" />
            Cart
          </Button>
          <Button variant="ghost" size="sm" className="text-nav-text hover:bg-nav-secondary text-xs">
            Tours
          </Button>
        </div>
      </div>

      <nav className="bg-nav-secondary px-6 py-2">
        <div className="flex items-center gap-6 text-sm">
          <button className="text-nav-text hover:text-white py-2 flex items-center gap-1">
            All Applications
            <span className="text-xs">▼</span>
          </button>
          <button className="text-nav-text hover:text-white py-2 flex items-center gap-1">
            Identity & Access
            <span className="text-xs">▼</span>
          </button>
          <button className="text-nav-text hover:text-white py-2 flex items-center gap-1">
            Security
            <span className="text-xs">▼</span>
          </button>
          <button className="text-nav-text hover:text-white py-2 flex items-center gap-1">
            Computer & Peripherals
            <span className="text-xs">▼</span>
          </button>
          <button className="text-nav-text hover:text-white py-2 flex items-center gap-1">
            Office 365
            <span className="text-xs">▼</span>
          </button>
          <button className="text-nav-text hover:text-white py-2 flex items-center gap-1">
            Cloud
            <span className="text-xs">▼</span>
          </button>
          <button className="text-nav-text hover:text-white py-2 flex items-center gap-1">
            Server, Storage & Network
            <span className="text-xs">▼</span>
          </button>
          <button className="text-nav-text hover:text-white py-2 flex items-center gap-1">
            Procure-To-Pay
            <span className="text-xs">▼</span>
          </button>
        </div>
      </nav>
    </header>
  );
};

export default Header;
