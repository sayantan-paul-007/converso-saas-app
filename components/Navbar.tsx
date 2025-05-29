import Image from "next/image"
import Link from "next/link"
import NavItems from "@/components/NavItems"

const Navbar = () => {
  return (
    <nav className="navbar">
      <Link href="/">
        <div className="flex items-center gap-2.5 cursor-pointer">
          <Image 
          src='/images/logo.svg'
          height={46}
          width={44}
          alt="logo"
          />
        </div>
      </Link>
      <div className="flex items-center gap-8">
        <NavItems/>
        <p>Sign In</p>
      </div>
    </nav>
  )
}

export default Navbar