
import Spinner from "@/components/Spinner";
import useFetchData from "@/hooks/useFetchData";
import Head from "next/head";
import Link from "next/link";
import { FaEye, FaHeart, FaStar } from "react-icons/fa";

export default function movies() {

    // fetch data with usehook
    const { alldata, loading } = useFetchData('/api/getmovies');
    // filter for published movies required
    const publishedData = alldata.filter(ab => ab.status === "publish");

    // now filter data by movies
    const moviesData = publishedData.filter(ab => ab.titlecategory === 'movies');


    return <>
        <Head>
            <title>Movies Collection | MovieXYZ</title>
            <meta name="description" content="Explore our collection of movies featuring explosive stunts, heart-pounding battles, and unforgettable adventures. Get your entertainment fix on MovieXYZ!" />
            <meta name="keywords" content="movies, MovieXYZ,moviexyz, action movies, drama, thriller, movie collection" />
            <meta name="robots" content="index, follow" />
            <link rel="canonical" href="https://www.moviexyz.com/movies" />

            {/* Open Graph meta tags */}
            <meta property="og:title" content="Movies Collection | MovieXYZ" />
            <meta property="og:description" content="Explore our extensive collection of movies featuring explosive stunts, heart-pounding battles, and unforgettable adventures. Available now on MovieXYZ!" />
            <meta property="og:url" content="https://www.moviexyz.com/movies" />
            <meta property="og:type" content="website" />

        </Head>

        <section className="genrenamesec">
            <div className="genrename">
                <h1>Movies</h1>
                <p>Get ready for explosive stunts, heart-pounding battles, and non-stop thrills! Watch as heroes take on incredible challenges, face danger head-on, and showcase their skills in action-packed adventures that will keep you glued to the screen."</p>
            </div>
        </section>
        <section className="genremoviesec">
            <div className="genremovie">
                {loading ? <Spinner /> : <>
                    {moviesData.map((movie) => {
                        return <div className="mcard">
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

                    })}

                </>}
            </div>
        </section>


    </>
}