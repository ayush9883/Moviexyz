import Link from "next/link";
import { usePathname } from "next/navigation";
import { useRouter } from "next/router"
import { useEffect, useState } from "react";
import { BiCameraMovie, BiSolidCameraMovie } from "react-icons/bi";
import { IoHomeSharp } from "react-icons/io5";
import { MdOutlinePlaylistAdd } from "react-icons/md";
import { RiDraftFill } from "react-icons/ri";
import { FaUser } from "react-icons/fa";
import { PiSignInBold } from "react-icons/pi";


export default function Aside({ open, close }) {


    const router = useRouter();
    const [clicked, setClicked] = useState(false);
    const [activelink, setActivelink] = useState('/');

    const handleClick = () => {
        setClicked(!clicked);
    }

    const handleLinkClick = (link) => {
        setActivelink(link);
        setClicked(false);
    }

    useEffect(() => {
        // update active link state when the page is reloaded
        setActivelink(router.pathname)
    }, [router.pathname])


    return <>
        <div className={open ? 'aside open' : 'aside'}>
            <div className="logo flex">
                <BiCameraMovie />
                <Link href="/"><h1>MOVIES</h1></Link>
            </div>
            <ul className="mt-2" onClick={close}>
                <Link href="/" className={activelink === '/' ? 'active' : ''} onClick={() => handleLinkClick('/')}><li><div><IoHomeSharp /></div>Dashboard</li></Link>

                <Link href="/movies" className={activelink === '/movies' ? 'active' : ''} onClick={() => handleLinkClick('/movies')}><li><div><BiSolidCameraMovie /></div>Movies</li></Link>

                <Link href="/addmovie" className={activelink === '/addmovie' ? 'active' : ''} onClick={() => handleLinkClick('/addmovie')}><li><div><MdOutlinePlaylistAdd /></div>Add</li></Link>

                <Link href="/draft" className={activelink === '/draft' ? 'active' : ''} onClick={() => handleLinkClick('/draft')}><li><div><RiDraftFill /></div>Draft</li></Link>
            </ul>
            <h3 className="mt-2">Account Pages</h3>
            <ul className="mt-2" onClick={close}>
                <Link href="/profile" className={activelink === '/profile' ? 'active' : ''} onClick={() => handleLinkClick('/profile')}><li><div><FaUser /></div>Profile</li></Link>

                <Link href="/auth" className={activelink === '/auth' ? 'active' : ''} onClick={() => handleLinkClick('/auth')}><li><div><PiSignInBold /></div>SignIn</li></Link>
            </ul>
        </div>
    </>
}