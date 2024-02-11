import { Button, Navbar, TextInput } from "flowbite-react";
import { Link, useLocation } from "react-router-dom";
import { IoMdSearch } from "react-icons/io";
import { FaMoon } from "react-icons/fa";
function Header() {
  const path = useLocation().pathname;
  return (
    <div>
      <Navbar>
        <Link to="/">
          <p className="self-center whitespace-nowrap text-sm sm:text-xl font-semibold dark:text-white">
            <span className="px-2 py-1 bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 rounded-lg text-white">
              Asif
            </span>
            Blog
          </p>
        </Link>
        <form>
          <TextInput
            type="text"
            placeholder="search..."
            rightIcon={IoMdSearch}
            className="hidden lg:inline"
          />
        </form>
        <Button className="lg:hidden w-12 h-10" color="gray" pill>
          <IoMdSearch />
        </Button>
        <div className="flex gap-2 md:order-2">
          <Button className=" w-12 h-10" color="gray" pill>
            <FaMoon />
          </Button>
          <Link to="/singin">
            <Button gradientDuoTone="purpleToBlue" outline>
              Sing In
            </Button>
          </Link>
        </div>
        <Navbar.Collapse>
          <Navbar.Link active={path === "/"} as={"div"}>
            <Link to="/">Home</Link>
          </Navbar.Link>
          <Navbar.Link active={path === "/about"} as={"div"}>
            <Link to="/about">About</Link>
          </Navbar.Link>
          <Navbar.Link active={path === "/projects"} as={"div"}>
            <Link to="/projects">Projects</Link>
          </Navbar.Link>
        </Navbar.Collapse>
      </Navbar>
    </div>
  );
}

export default Header;
