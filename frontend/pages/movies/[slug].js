import Link from 'next/link';
import Head from 'next/head';
import { useRouter } from 'next/router';
import useFetchData from '@/hooks/useFetchData';
import { FaBookmark, FaCheck, FaEye, FaFacebookSquare, FaHeart, FaImdb, FaInstagram, FaStar, FaThumbsDown, FaThumbsUp } from 'react-icons/fa';
import { FaShareFromSquare } from 'react-icons/fa6';
import { useEffect, useRef, useState } from 'react';
import { IoLogoWhatsapp } from 'react-icons/io5';

export default function moviesPost() {

    const router = useRouter();

    const { slug } = router.query;

    // use hooks
    const { alldata, loading } = useFetchData(`/api/getmovies?slug=${slug}`)
    const { allMovie } = useFetchData('/api/getmovies');

    // filter for published movies required
    const publishedData = allMovie.filter(ab => ab.status === "publish");

    // scroll left right data
    const [scrollPosition, setScrollPosition] = useState(0);

    const scrollLeft = () => {
        const scrollContainer = document.querySelector(".scrollcards");
        scrollContainer.scrollLeft -= 300;
    }
    const scrollRight = () => {
        const scrollContainer = document.querySelector(".scrollcards");
        scrollContainer.scrollLeft += 500;
    }


    // share in whatsapp app
    const [showShareLinks, setShowShareLinks] = useState(false);
    const sharelinkref = useRef(null);

    const handleButtonClick = () => {
        setShowShareLinks(!showShareLinks);
    }
    const handlePageClick = (event) => {
        if (sharelinkref.current && !sharelinkref.current.contains(event.target)) {
            setShowShareLinks(false);
        }
    }

    useEffect(() => {
        // attach the click event listener to the ducument
        document.addEventListener("click", handlePageClick);

        return () => {
            // cleanup the event listener
            document.removeEventListener("click", handlePageClick)
        }
    }, []);


    return <>
        <>
            <Head>
                {/* Dynamic Metadata */}
                <title>{alldata && alldata[0]?.title} - MovieXYZ</title>
                 {/* <title>{slug.replaceAll('-', ' ')}</title> */}
                <meta
                    name="description"
                    content={
                        alldata && alldata[0]?.description
                            ? alldata[0].description.slice(0, 150) + '...'
                            : 'Watch or download movies online for free at MovieXYZ.'
                    }
                />
                <meta
                    name="keywords"
                    content={
                        alldata && alldata[0]?.genre.join(', ') + ', ' + alldata[0]?.title + ', download movies, MovieXYZ'
                    }
                />
                {/* <meta property="og:title" content={`${alldata && alldata[0]?.title - MovieXYZ}`} /> */}
                <meta
                    property="og:description"
                    content={
                        alldata && alldata[0]?.description
                            ? alldata[0].description.slice(0, 150) + '...'
                            : 'Watch or download movies online for free at MovieXYZ.'
                    }
                />
                <meta property="og:image" content={alldata && alldata[0]?.smposter} />
                <meta property="og:url" content={`https://www.moviexyz.com/movies/${slug}`} />
                <meta property="og:type" content="website" />
            </Head>
            <div>
                <div className="slideimagebx">
                    <img src={alldata && alldata[0]?.bgposter} alt="movie" loading='lazy' />
                </div>
                <div className="mainmoviebx" ref={sharelinkref}>
                    <div className="leftdata">
                        <div className="leftimgbx">
                            <img src={alldata && alldata[0]?.smposter} alt="movie" loading='lazy' />
                            <div className="seenonly">
                                <div className="seenwatch">
                                    <button><FaBookmark className='sebtn' />Watchlist</button>
                                    <button><FaCheck className='sebtn' />Seen</button>
                                    <button><FaThumbsUp className='sebtn' />Like</button>
                                    <button><FaThumbsDown className='sebtn' />Dislike</button>
                                </div>
                                <a target='_blank' href={`${alldata && alldata[0]?.watchonline}`}><button className='watchmoviebtn'>Click To watch online</button></a>
                            </div>
                        </div>
                        <div className="rating">
                            <h3>RATING</h3>
                            <div className="rate">
                                <FaImdb className='faImdb' />
                                <h4>{alldata && alldata[0]?.rating} <span>IMDB</span></h4>
                            </div>
                        </div>
                        <div className="rating">
                            <h3>GENRE</h3>
                            <h4 className='uppercase'>{alldata && alldata[0]?.genre.join(', ')}</h4>
                        </div>
                        <div className="rating">
                            <h3>DURATION</h3>
                            <h4>{alldata && alldata[0]?.duration}</h4>
                        </div>
                        <div className="rating">
                            <h3>YEAR</h3>
                            <h4>{alldata && alldata[0]?.year}</h4>
                        </div>
                        <div className="rating">
                            <h3>QUALITY</h3>
                            <h4>{alldata && alldata[0]?.quaility}</h4>
                        </div>
                    </div>
                    <div className="rightdata">
                        <div className="movietitle">
                            <h1>{alldata && alldata[0]?.slug.replaceAll('-', ' ')}</h1>
                            <button onClick={handleButtonClick} className='faShareFromSquare'><FaShareFromSquare /></button>
                        </div>
                        <p className='dpera'>DOWNLOAD FREE NOW</p>
                        <div className="moviedescription">
                            <article className='movieinfo'>
                                <h3 className='uppercase'>{alldata && alldata[0]?.titlecategory} info :</h3>
                                <table>
                                    <tbody>
                                        <tr>
                                            <td className='uppercase'>&#9642; {alldata && alldata[0]?.titlecategory} Name :</td>
                                            <td> {alldata && alldata[0]?.title}</td>
                                        </tr>
                                        <tr>
                                            <td>&#9642; Release Year:</td>
                                            <td> {alldata && alldata[0]?.year}</td>
                                        </tr>
                                        <tr>
                                            <td>&#9642; Genre:</td>
                                            <td> {alldata && alldata[0]?.genre.join(', ')}</td>
                                        </tr>
                                        <tr>
                                            <td>&#9642; Language:</td>
                                            <td> {alldata && alldata[0]?.language}</td>
                                        </tr>
                                        <tr>
                                            <td>&#9642; Subtitle:</td>
                                            <td> {alldata && alldata[0]?.subtitle}</td>
                                        </tr>
                                        <tr>
                                            <td>&#9642; Size:</td>
                                            <td> {alldata && alldata[0]?.size}</td>
                                        </tr>
                                        <tr>
                                            <td>&#9642; Quality:</td>
                                            <td> {alldata && alldata[0]?.quaility}</td>
                                        </tr>
                                        <tr>
                                            <td>&#9642; Format:</td>
                                            <td>MKV</td>
                                        </tr>
                                    </tbody>
                                </table>
                            </article>
                            <article>
                                <div className="storyline">
                                    <h3>Sunopsis / Story Line :</h3>
                                    <p>{alldata && alldata[0]?.description}</p>
                                </div>
                            </article>
                            <section className='downloadsec'>
                                <h2>G-Drive [GDToT] Download Links</h2>
                                <div className="downloadlinks">
                                    <a target='_blank' href={alldata && alldata[0]?.downloadlink['480p']}>Download 480p</a>
                                    <a target='_blank' href={alldata && alldata[0]?.downloadlink['720p']}>Download 720p</a>
                                    <a target='_blank' href={alldata && alldata[0]?.downloadlink['1080p']}>Download 1080p</a>
                                    <a target='_blank' href={alldata && alldata[0]?.downloadlink['4k']}>Download 2160p</a>
                                    <a target='_blank' href={alldata && alldata[0]?.downloadlink['telegram']}>Download Telegram</a>
                                </div>
                            </section>
                        </div>
                        <div className="youtubeiframe">
                            <h3 id="movietrailer" className='uppercase'>{alldata && alldata[0]?.titlecategory} Trailer :</h3>
                            <iframe width="100%" height="370" src={alldata && alldata[0]?.youtubelink} frameborder="0"></iframe>
                        </div>
                    </div>
                </div>
                <div className="raletedmovies">
                    <h3>LATEST MOVIES :</h3>
                    <div className="scrollcards">
                        {publishedData.slice(0, 12).map((movie) => (
                            <div className="card">
                                <Link href={`/movies/${movie.slug}`}>
                                    <div className="cardimg">
                                        <img src={movie.smposter} alt="movie" loading="lazy" />
                                    </div>
                                    <div className="contents">
                                        <h5>{movie.title}</h5>
                                        <h6>
                                            <span>{movie.year}</span>
                                            <div className="rate">
                                                <i className="cardfas">
                                                    <FaHeart />
                                                </i>
                                                <i className="cardfas">
                                                    <FaEye />
                                                </i>
                                                <i className="cardfas">
                                                    <FaStar />
                                                </i>
                                                <h6>{movie.rating}</h6>
                                            </div>
                                        </h6>
                                    </div>

                                </Link>
                            </div>
                        ))}
                    </div>
                    <div className="cardbuttons">
                        <button onClick={scrollLeft} className='cardleft'>&#8592;</button>
                        <button onClick={scrollRight} className='cardRight'>&#8594;</button>
                    </div>
                </div>
                <div className="sharelinks" style={{ display: showShareLinks ? 'flex' : 'none' }}>
                    <div className="svg"><Link href={`https://api.whatsapp.com/send?text=${`https://www.moviexyz.com/${router.query.slug}`}`} target='_blank'><FaInstagram /></Link></div>
                    <div className="svg"><Link href={`https://api.whatsapp.com/send?text=${`https://www.moviexyz.com/${router.query.slug}`}`} target='_blank'><FaFacebookSquare /></Link></div>
                    <div className="svg"><Link href={`https://api.whatsapp.com/send?text=${`https://www.moviexyz.com/${router.query.slug}`}`} target='_blank'><IoLogoWhatsapp /></Link></div>
                </div>
            </div>

        </>
    </>
}