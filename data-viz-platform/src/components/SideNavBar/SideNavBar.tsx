import React, { useState } from "react";
import Dashboard from "../../features/dashboard/Dashboard"; // seems unused here – could remove later
import { Outlet } from "react-router-dom";

// Icons from Lucide
import {
  Menu as MenuIcon, X as CloseIcon,
  Home,
  Bell,
  Calendar,
  Upload,
  Settings,
  User,
  Search,
} from "lucide-react";

// styled-components for layout + interactivity
import {
  SidebarContainer,
  SidebarContent,
  MenuItem,
  TopHeaderContainer,
  TopTabs,
  Tab,
  SearchContainer,
  SearchInput,
  ActiveTab,
  MobileHamburger,
} from "./SideNavBar.styled";

const SideNavBar: React.FC = () => {
  // controls if sidebar is expanded or collapsed
  const [isExpanded, setExpanded] = useState<boolean>(false);

  // sidebar layout for desktop and mobile
  const Sidebar = (
    <SidebarContainer expanded={isExpanded}>
      <SidebarContent>
        {/* top section: hamburger + nav items */}
        <div className="flex flex-col items-center w-full space-y-6">
          {/* menu toggle button */}
          <div className="block md:block">
            <MenuItem
              expanded={isExpanded}
              onClick={() => setExpanded(prev => !prev)}
            >
              {isExpanded ? (
                <CloseIcon className="menu-item-icon" size={22} />
              ) : (
                <MenuIcon className="menu-item-icon" size={22} />
              )}
              {isExpanded && <p>Menu</p>}
            </MenuItem>
          </div>

          {/* nav items */}
          {[{ label: "Home", Icon: Home },
            { label: "Notifications", Icon: Bell },
            { label: "Reminders", Icon: Calendar },
            { label: "Upload", Icon: Upload },
            { label: "Settings", Icon: Settings }].map(({ label, Icon }) => (
            <MenuItem
              key={label}
              expanded={isExpanded}
              onClick={() => setExpanded(false)} // collapse sidebar on item click
            >
              <Icon className="menu-item-icon" size={22} />
              {isExpanded && <p>{label}</p>}
            </MenuItem>
          ))}
        </div>

        {/* bottom: profile */}
        <div className="mt-auto mb-4">
          <MenuItem expanded={isExpanded}>
            <User className="menu-item-icon" size={22} />
            {isExpanded && <p>Profile</p>}
          </MenuItem>
        </div>
      </SidebarContent>
    </SidebarContainer>
  );

  // top header with tabs and search
  const TopHeader = (
    <TopHeaderContainer>
      {/* hamburger for mobile */}
      {!isExpanded && (
        <MobileHamburger>
          <MenuIcon
            size={24}
            className="cursor-pointer text-white"
            onClick={() => setExpanded(true)}
          />
        </MobileHamburger>
      )}

      {/* tabs in center */}
      <TopTabs>
        <ActiveTab>Charging Stations</ActiveTab>
        <Tab>Fleet Sizing</Tab>
        <Tab>Parking</Tab>
      </TopTabs>

      {/* right-aligned search bar */}
      <SearchContainer>
        <Search size={16} className="absolute left-[0.5rem] top-1/2 -translate-y-1/2 text-gray-400" />
        <SearchInput
          type="text"
          placeholder="Search"
        />
      </SearchContainer>
    </TopHeaderContainer>
  );

  // layout = sidebar on the left + top bar + routed content
  return (
    <div className="flex min-h-screen bg-[#0f0f0f] text-white overflow-hidden">
      {Sidebar}

      <div className="flex-1 flex flex-col overflow-hidden">
        {TopHeader}
        <main className="flex-1 p-6 overflow-y-auto overflow-x-hidden">
          <Outlet /> {/* routed views render here */}
        </main>
      </div>
    </div>
  );
};

export default SideNavBar;
