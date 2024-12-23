import Image from "next/image";
import logo from "../../../public/logo.svg"
import Link from "next/link";
import { IoIosHome } from "react-icons/io";
import { MdRoundaboutRight } from "react-icons/md";
import { GrServices } from "react-icons/gr";
import { FaBlogger } from "react-icons/fa";
import { RiContactsFill } from "react-icons/ri";
import { ImMenu } from "react-icons/im";

const menus = [
    { route: "Home", path: "/", icon: IoIosHome },
    { route: "About", path: "/about", icon: MdRoundaboutRight },
    { route: "Services", path: "/services", icon: GrServices },
    { route: "Blog", path: "/blog", icon: FaBlogger },
    { route: "Contact", path: "/contact", icon: RiContactsFill },
]

const Navbar = () => {
    return (
        <main className="flex justify-between items-center lg:gap-10 px-5  md:px-10 xl:px-16 py-5">
            <Link href="/"><Image src={logo} alt="Logo" width={80} height={80} /></Link>
            <section className="lg:flex-1 hidden lg:flex justify-center items-center gap-10">
                {menus.map((menu, index) => (
                    <Link href={menu?.path} key={index}>
                        <span className="font-semibold">{menu?.route}</span>
                    </Link>
                ))}
            </section>
            <section className="ml-auto lg:hidden">
                <ImMenu size={25} />
            </section>
            <Link href="/appointment"><button className="hidden lg:flex text-base font-semibold text-[#ff3811] px-3 py-2 border border-[#ff3811] rounded-[5px]">Appointment</button></Link>
        </main>
    );
};

export default Navbar;