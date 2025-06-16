
import Spinner from "@/components/Spinner";
import useFetchData from "@/hooks/useFetchData";
import Head from "next/head";
import Link from "next/link";
import { FaEye, FaHeart, FaStar } from "react-icons/fa";

export default function series() {

    // fetch data with usehook
    const { alldata, loading } = useFetchData('/api/getmovies');

    // filter for published series required
    const publishedData = alldata.filter(ab => ab.status === "publish");

    // now filter data by series
    const seriesData = publishedData.filter(ab => ab.titlecategory === 'series');


    return <>
        <Head>
            <title>ALL Web Series | MovieXYZ</title>
            <meta name="description" content="Explore a vast collection of web series on MovieXYZ. From drama to comedy, mystery to thrillers, we have something for everyone. Start your binge-watch journey now!" />
            <meta name="keywords" content="Web Series, Online Series, Drama, Thriller, Mystery, Comedy, MovieXYZ Series, Popular Series" />
            <meta property="og:title" content="All Web Series | MovieXYZ" />
            <meta property="og:description" content="Discover and stream top-rated web series on MovieXYZ. Enjoy gripping stories, unforgettable characters, and plot twists that keep you on the edge of your seat." />
            <link rel="canonical" href="https://www.moviexyz.com/series" />
            <meta property="og:url" content="https://www.moviexyz.com/series" />
            <meta property="og:type" content="website" />
        </Head>

        <section className="genrenamesec">
            <div className="genrename">
                <h1>Series</h1>
                <p>Dive into gripping stories, unforgettable characters, and plot twists that will leave you hooked. Whether it’s drama, mystery, or comedy, explore worlds where every episode keeps you guessing and wanting more. Your next binge-watch starts here!"</p>
            </div>
        </section>
        <section className="genremoviesec">
            <div className="genremovie">
                {loading ? <Spinner /> : <>
                    {seriesData.map((movie) => {
                        return <div className="mcard">
                            <Link href={`/movies/${movie.slug}`}>
                                <div className="cardimg">
                                    <img src={movie.smposter} alt={`${movie.title} poster`} loading="lazy" />
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

                    })}

                </>}
            </div>
        </section>

    </>
}