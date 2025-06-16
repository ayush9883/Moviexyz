
import Spinner from "@/components/Spinner";
import useFetchData from "@/hooks/useFetchData";
import Head from "next/head";
import Link from "next/link";
import { FaEye, FaHeart, FaStar } from "react-icons/fa";


export default function all() {


  // fetch data with usehook
  const { alldata, loading } = useFetchData('/api/getmovies');
  // filter for published movies required
  const publishedData = alldata.filter(ab => ab.status === "publish");


  return (
    <>
      <Head>
        <title>All Movies & Web Series Download | MovieXYZ</title>
        <meta name="description" content="Explore a vast collection of movies and web series from all genres. Download and enjoy your favorite entertainment at MovieXYZ." />
        <meta name="keywords" content="movies download, web series download, moviexyz movies, MovieXYZ web series" />
        <link rel="canonical" href="https://www.moviexyz.com/all" />
        <meta property="og:title" content="All Movies & Web Series Download | MovieXYZ" />
        <meta property="og:description" content="Discover the ultimate collection of movies and web series from MovieXYZ. Download your favorites and start watching now!" />
        <meta property="og:url" content="https://www.moviexyz.com/all" />
        <meta property="og:type" content="website" />

      </Head>

      <section className="genrenamesec">
        <div className="genrename">
          <h1>All Movies & Series</h1>
          <p>Browse through a vast collection of movies and series from various genres! Whether you’re looking for action-packed thrillers, heartwarming dramas, laugh-out-loud comedies, or mind-bending science fiction, we have something for everyone. Discover your next favorite film or series and enjoy endless entertainment at your fingertips!</p>
        </div>
      </section>
      <section className="genremoviesec">
        <div className="genremovie">
          {loading ? <Spinner /> : <>
            {publishedData.map((movie) => {
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
  )
}

