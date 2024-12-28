import Image from "next/image";
import logo from "@/public/logo.png";

function Logo() {
    return <Image src={logo} alt="logo" width={50} height={50} />;
}

export default Logo;
