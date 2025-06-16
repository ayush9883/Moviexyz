import Link from "next/link"

const Footer = () => {
    return (
        <>
            <footer className='footer'>
                <section className="m-auto footersec">
                    <div className="fcontent">
                        <div className="flogo">
                            <h1><Link href="/">MovieXYZ</Link></h1>
                        </div>
                        <div className="quicklink">
                            <li><Link href='/dmca'>DMCA</Link></li>
                            <li><Link href='/'>Home</Link></li>
                            <li><Link href='/movies'>Movies</Link></li>
                            <li><Link href='/series'>Series</Link></li>
                            <li><Link href='/genre'>Genre</Link></li>
                            <li><Link href='/all'>All Movies</Link></li>
                            <li><Link href='/genre'>Category</Link></li>
                            <li><Link href='/bollywood'>Bollywood</Link></li>
                            <li><Link href='/hollywood'>Hollywood</Link></li>
                        </div>
                    </div>
                    <div className="copyright">
                        <p>Copyright &copy; 2024 All rights reserved | by&nbsp;<Link href='/'>MovieXYZ</Link></p>
                    </div>
                    <div className="fperasec">
                        <p>Disclaimer :- "We do not host any files on our servers. All files or content are hosted on third-party websites, and we do not claim ownership of such content. We do not accept responsibility for the content hosted on third-party websites, nor do we endorse or promote any content that violates copyright laws. The links provided on this website are publicly available on the internet and are solely indexed for informational purposes. Users are advised to access content at their own discretion and are responsible for complying with local copyright laws."</p>
                    </div>
                </section>
            </footer>
        </>
    )
}

export default Footer