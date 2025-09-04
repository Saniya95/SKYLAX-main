import {
  Navbar,
  NavbarBrand,
  NavbarContent,
  div,
  Button,
  Select,
  SelectItem,
  useDisclosure,
  Avatar,
  Dropdown,
  DropdownTrigger,
  DropdownMenu,
  DropdownItem,
} from "@heroui/react";
import Image from "next/image";
import skylaxLogo from "../../../../public/assets/logoAndIcons/skylaxLogo.svg";
import { ChevronDownIcon } from "@heroicons/react/24/solid";
import { Container } from "@mui/material";
import Link from "next/link";
import LoginModal from "@/auth/signin";
import menueMob from "../../../../public/assets/logoAndIcons/menueMob.svg";
import { useEffect, useState } from "react";
import { useRouter } from "next/router";
import { useApi } from "@/hooks/useApi";
import { apis } from "@/utils/apis";

export const DropIcon = () => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      fill="none"
      viewBox="0 0 40 40"
      strokeWidth={1.5}
      stroke="currentColor"
      className="size-6"
    >
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        d="m19.5 8.25-7.5 7.5-7.5-7.5"
      />
    </svg>
  );
};

export default function Header({ onLoginClick }) {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [userData, setUserData] = useState({ name: "" });
  const [scrolled, setScrolled] = useState(false);
  const [showSubMenu, setShowSubMenu] = useState(null);
  const router = useRouter();
  const { Get } = useApi();
  const { profile } = apis;

  useEffect(() => {
    // Check if token exists in localStorage
    const token =
      typeof window !== "undefined" ? localStorage.getItem("token") : null;
    setIsLoggedIn(!!token);

    // If token exists, fetch user data
    if (token) {
      fetchUserData();
    }

    // Add scroll event listener
    const handleScroll = () => {
      const offset = window.scrollY;
      if (offset > 50) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };

    window.addEventListener("scroll", handleScroll);

    // Clean up event listener
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const fetchUserData = async () => {
    try {
      const data = await Get(profile);
      if (data?.status && data?.data) {
        setUserData(data.data);
      }
    } catch (error) {
      console.log(error, "_error_");
    }
  };

  const handleLogout = () => {
    localStorage.removeItem("token");
    setIsLoggedIn(false);
    setUserData({ name: "" });
    router.push("/");
  };

  let links = [
    { link: "/", name: "Home" },
    {
      link: "/services",
      name: "Services",
      subLink: [
        { link: "/services/commerce", name: "Commerce" },
        { link: "/services/inventory", name: "Inventory" },
        { link: "/services/management", name: "Management" },
        { link: "/services/pos", name: "POS" },
        { link: "/services/crm", name: "CRM" },
      ],
    },
    { link: "/ai-solutions", name: <p>AI&nbsp;solutions</p> },
    { link: "/pricing", name: "Pricing" },
    {
      link: "/retail",
      name: "Retail",
      subLink: [
        { link: "/retail/jewelry", name: "Jewelry" },
        { link: "/retail/watches", name: "Watches" },
        { link: "/retail/collectable", name: "Collectable" },
        { link: "/retail/cars", name: "Cars" },
      ],
    },
  ];

  const onShowSubMenu = (i) => {
    if (showSubMenu === i) {
      setShowSubMenu(null);
    } else {
      setShowSubMenu(i);
    }
  };

  return (
    <>
      <div
        className={`fixed w-full flex justify-center z-50 ${
          scrolled ? "bg-[#080707ee]" : "bg-transparent"
        }`}
      >
        <div className="header_con">
          <div className="flex items-center w-full !justify-between py-4 xl:gap-[80px]">
            <div className="sm:hidden block w-full ">
              <Link href={"/"}>
                <Image
                  src={skylaxLogo}
                  alt="skylaxLogo"
                  className="w-[87px] h-[28px]"
                />
              </Link>
            </div>
            <div className="sm:block hidden w-full">
              <Link href={"/"}>
                <Image
                  src={skylaxLogo}
                  alt="skylaxLogo"
                  width={1920}
                  height={1080}
                  className="w-[9.25rem] h-[2.25rem]"
                />
              </Link>
            </div>
            <div className="hidden sm:flex gap-8" justify="cente justify-end ">
              {links?.length
                ? links?.map((v, i) => (
                    <div key={i} className="relative">
                      <Link
                        color="foreground"
                        className="flex items-center text-[18px] font-normal leading-[120%] space-[42.9px]"
                        href={
                          v?.name === "Services"
                            ? "#"
                            : v?.name === "Retail"
                            ? "#"
                            : v?.link
                        }
                        onClick={() => onShowSubMenu(i)}
                      >
                        {v?.name}
                        {v?.name === "Services" ? (
                          <ChevronDownIcon className={`h-4 w-4 text-[#F3F6FF] ml-2 font-semibold`} />
                        ) : (
                          ""
                        )}
                        {v?.name === "Retail" ? (
                          <ChevronDownIcon className={`h-4 w-4 text-[#F3F6FF] ml-2 font-semibold`} />
                        ) : (
                          ""
                        )}
                      </Link>
                      {showSubMenu === i && v?.subLink?.length ? (
                        <div
                          className={`absolute top-[150%] left-[-35%] rounded-xl bg-[#F3F6FF] flex flex-col gap-3 h-fit p-4 ${
                            v?.name === "Retail" ? "w-[180%]" : "w-[150%]"
                          } `}
                        >
                          {v?.subLink.map((val, idx) => (
                            <Link
                              key={idx}
                              href={val?.link}
                              className="text-[#080707] text-lg font_neue_montreal_medium"
                            >
                              {val?.name}
                            </Link>
                          ))}
                        </div>
                      ) : null}
                    </div>
                  ))
                : null}
            </div>
            <div className="flex items-center justify-end gap-4">
              <div className="hidden lg:flex items-center">
                {/* country selector */}
                <Select
                  label={null}
                  placeholder="Country"
                  size="md"
                  radius="md"
                  className="w-auto min-w-[120px] mr-4 text-[#F3F6FF] !text-lg font_neue_montreal_medium"
                  defaultSelectedKeys={["usa"]}
                  variant="flat"
                  color="default"
                  disallowEmptySelection
                  classNames={{
                    base: "",
                    trigger:
                      "bg-transparent border-none shadow-none hover:bg-white/5 data-[hover=true]:bg-white/5 focus:outline-none focus:ring-0 data-[focus=true]:outline-none px-2 min-h-10",
                    value: "whitespace-nowrap max-w-none text-[#F3F6FF]",
                    selectorIcon: "text-[#F3F6FF]",
                    popoverContent:
                      "bg-[#F3F6FF] text-[#080707] rounded-xl shadow-xl border border-black/10 min-w-[160px]",
                    listbox: "text-[#080707]",
                  }}
                >
                  <SelectItem key="usa" className="!text-lg text-[#080707]">
                    USA
                  </SelectItem>
                  <SelectItem key="in" className="!text-lg text-[#080707]">
                    India
                  </SelectItem>
                  <SelectItem key="uae" className="!text-lg text-[#080707]">
                    UAE
                  </SelectItem>
                </Select>

                {isLoggedIn ? (
                  <div className="flex items-center gap-3">
                    <span className="text-[#F3F6FF] font_neue_montreal_regular">
                      {userData.name || ""}
                    </span>
                    <Dropdown placement="bottom-end">
                      <DropdownTrigger>
                        <Avatar
                          as="button"
                          className="transition-transform bg-gradient-to-r from-[#55D0FF] to-[#6361FC] text-white"
                          name={userData.name || ""}
                          size="md"
                          src={userData.avatar || ""}
                        />
                      </DropdownTrigger>
                      <DropdownMenu aria-label="Profile Actions" variant="flat">
                        <DropdownItem key="profile" className="h-14 gap-2">
                          <p className="font-semibold">Signed in as</p>
                          <p className="font-semibold">
                            {userData.email || "user@example.com"}
                          </p>
                        </DropdownItem>
                        <DropdownItem key="settings">
                          <Link href="/profile" className="w-full h-full block">
                            Profile Settings
                          </Link>
                        </DropdownItem>
                        <DropdownItem key="subscriptions">
                          <Link
                            href="/subscription"
                            className="w-full h-full block"
                          >
                            Subscriptions
                          </Link>
                        </DropdownItem>
                        <DropdownItem
                          key="logout"
                          color="danger"
                          onClick={handleLogout}
                        >
                          Log Out
                        </DropdownItem>
                      </DropdownMenu>
                    </Dropdown>
                  </div>
                ) : (
                  <Button
                    color="primary"
                    variant="faded"
                    className="w-[6.25rem] h-12 !text-[1em] border-[#F3F6FF] text-[#F3F6FF] font_neue_montreal_regular bg-transparent rounded-[8px] flex justify-center items-center !border-[1px]"
                    onClick={onLoginClick}
                  >
                    Login
                  </Button>
                )}
              </div>
              <div className="flex items-center justify-end gap-4">
                <div>
                  <Button
                    color="primary"
                    variant="faded"
                    className="w-32 h-12 !text-[1em] border-none text-[#080707] font_neue_montreal_medium bg-gradient-to-r from-[#55D0FF] to-[#6361FC] rounded-[8px] sm:flex hidden justify-center items-center"
                    onClick={() => router.push('/schedule-a-demo')}
                  >
                    Get a Demo
                  </Button>
                  <Image
                    src={menueMob}
                    alt="menueMob"
                    width={192}
                    height={108}
                    className="w-8 h-8 sm:hidden block"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="py-9" />
    </>
  );
}
