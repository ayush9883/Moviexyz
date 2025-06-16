
import Spinner from "@/components/Spinner";
import useFetchData from "@/hooks/useFetchData";
import Head from "next/head";
import Link from "next/link";
import { FaEye, FaHeart, FaStar } from "react-icons/fa";

export default function bollywood() {

    // fetch data with usehook
    const { alldata, loading } = useFetchData('/api/getmovies');
    // filter for published movies required
    const publishedData = alldata.filter(ab => ab.status === "publish");

    // now filter data by bollywood
    const bollywoodData = publishedData.filter(ab => ab.category === 'bollywood');

    return <>
        <Head>
            <title>ALL Bollywood | MovieXYZ</title>
            <meta name="description" content="Discover and download Bollywood movies. Watch your favorite Hindi films from various genres on MovieXYZ." />
            <meta name="keywords" content="Bollywood movies download, Hindi movies, Bollywood films, MovieXYZ Bollywood" />
            <link rel="canonical" href="https://www.moviexyz.com/bollywood" />
            <meta property="og:title" content="Bollywood Movies Download | MovieXYZ" />
            <meta property="og:description" content="Explore the latest Bollywood movies. Download Hindi films and enjoy the magic of Indian cinema on MovieXYZ." />
            <meta property="og:url" content="https://www.moviexyz.com/bollywood" />
            <meta property="og:type" content="website" />

        </Head>

        <section className="genrenamesec">
            <div className="genrename">
                <h1>Bollywood</h1>
                <p>Experience the magic of Bollywood – a perfect blend of drama, romance, action, and unforgettable music. From heartwarming love stories to thrilling blockbusters, explore movies that celebrate life, emotions, and larger-than-life moments. Dive into a world where every story is a rollercoaster of emotions, leaving you entertained and inspired."</p>
            </div>
        </section>
        <section className="genremoviesec">
            <div className="genremovie">
                {loading ? <Spinner /> : <>
                    {bollywoodData.map((movie) => {
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