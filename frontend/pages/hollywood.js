
import Spinner from "@/components/Spinner";
import useFetchData from "@/hooks/useFetchData";
import Head from "next/head";
import Link from "next/link";
import { FaEye, FaHeart, FaStar } from "react-icons/fa";

export default function hollywood() {

    // fetch data with usehook
    const { alldata, loading } = useFetchData('/api/getmovies');
    // filter for published movies required
    const publishedData = alldata.filter(ab => ab.status === "publish");

    // now filter data by hollywood
    const hollywoodData = publishedData.filter(ab => ab.category === 'hollywood');

    return <>
        <Head>
            <title>ALL Hollywood | MovieXYZ</title>
            <meta name="description" content="All the Hollywood movie" />
        </Head>

        <section className="genrenamesec">
            <div className="genrename">
                <h1>Hollywood</h1>
                <p>Step into the world of Hollywood – where cinematic brilliance meets limitless creativity. From blockbuster hits to critically acclaimed dramas, explore a diverse range of movies that push the boundaries of storytelling. Witness exceptional performances, cutting-edge visual effects, and thought-provoking narratives that captivate audiences worldwide. Get ready for an exhilarating cinematic journey like no other!</p>
            </div>
        </section>
        <section className="genremoviesec">
            <div className="genremovie">
                {loading ? <Spinner /> : <>
                    {hollywoodData.map((movie) => {
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