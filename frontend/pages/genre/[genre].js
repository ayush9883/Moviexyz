import Spinner from '@/components/Spinner';
import useFetchData from '@/hooks/useFetchData';
import Head from 'next/head';
import Link from 'next/link';
import { useRouter } from 'next/router';
import { FaEye, FaHeart, FaStar } from 'react-icons/fa';



export default function genres() {

    const router = useRouter();

    const { genre } = router.query;

    // use hooks
    const { alldata, loading } = useFetchData(`/api/getmovies?genre=${genre}`)

    // filter for published movies required
    const filteredMovies = alldata.filter(ab => ab.genre === ab.genre).sort((a, b) => new Date(b.createdAt) - new Date(a.createdAt)).slice(0, 20);

    const genremovies = [...filteredMovies].reverse();

    // function for capitalized title
    const capitalizeTitle = (str) => {
        return str.toLowerCase().split(' ').map((word) => word.charAt(0).toUpperCase() + word.slice(1)).join(' ');
    }

    // for head title
    const pagetitle = `${router.query.genre} - Genre | MovieXYZ`;

    const capitalizedTitle = capitalizeTitle(pagetitle);


    return (

        <>
            <Head>
                <title>{capitalizedTitle}</title>
            </Head>

            <section className="genrenamesec">
                <div className="genrename">
                    <h1>Genre : {router.query.genre}</h1>
                    <p>A movie genre is like a category that tells you what kind of story a movie will tell. For example, a comedy movie is funny, a horror movie is scary, and a science fiction movie is about the future. Knowing the genre of a movie can help you choose a movie to watch.</p>
                </div>
            </section>
            <section className="genremoviesec">
                <div className="genremovie">
                    <section className="genremoviesec">
                        <div className="genremovie">
                            {loading ? <Spinner /> : <>
                                {genremovies.length === 0 ? <p className='nodatafound'>No Movie Found</p> : <>
                                    {genremovies.map((movie) => {
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
                            </>}
                        </div>
                    </section>
                </div>
            </section>

        </>
    )
}


