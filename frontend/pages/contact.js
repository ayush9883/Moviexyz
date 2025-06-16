import { HiMiniBars3BottomRight } from "react-icons/hi2";
import { AiFillSetting } from "react-icons/ai";
import { IoLogoInstagram } from "react-icons/io";
import { RiTelegramLine } from "react-icons/ri";
import { SiGithub } from "react-icons/si";
import Link from "next/link";
import { FaArrowDown } from "react-icons/fa";

export default function contact() {
    return <>
      <div className="contactpage">
        <div className="contactcard">
            <div className="contactdesign">
                <div className="topccard">
                    <div className="tcardsvg">
                    <HiMiniBars3BottomRight />
                    <AiFillSetting />
                    </div>
                    <div className="usercoderimg">
                        <img src="/img/coder.png" alt="tbzcoder" />
                    </div>
                    <div className="usercoderinfo">
                        <h1>TBZ CODER</h1>
                        <h3>Web Developer</h3>
                        <div className="usercodersvg">
                            <Link href='https://t.me/moviexyz_com'><IoLogoInstagram /></Link>
                            <Link href='https://t.me/moviexyz_com'><RiTelegramLine /></Link>
                            <Link href='https://t.me/moviexyz_com'><SiGithub /></Link>
                        </div>
                    </div>
                </div>
                <div className="bottomcard">
                    <Link href='/' className="followbtn">Follow</Link>
                    <div className="bcardtext">
                        <p>Learn More About My Profile</p>
                        <FaArrowDown/>
                    </div>
                </div>
            </div>
        </div>
      </div>
    </>
}