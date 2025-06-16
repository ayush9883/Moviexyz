import WelcomeAnimation from "@/components/WelcomeAnimation";
import TelegramModal from "@/components/TelegramModal";
import useFetchData from "@/hooks/useFetchData";
import Head from "next/head";
import { useEffect, useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';
import { Pagination, Navigation, Autopay, Autoplay } from 'swiper/modules';
import Loader from "@/components/Loader";
import { FaAngleDoubleUp, FaCheck, FaDownload, FaEye, FaFilm, FaHeart, FaPhotoVideo, FaPlus, FaStar } from "react-icons/fa";
import Link from "next/link";
import { FaClapperboard } from "react-icons/fa6";
import { FaArrowRight } from "react-icons/fa";


export default function Home() {


  // fetch data with usehook
  const { alldata, loading } = useFetchData('/api/getmovies');

  const [wloading, setWLoading] = useState(true);

  // video animation function
  useEffect(() => {
    // check if user visited the home page before
    const visitedbefore = sessionStorage.getItem('visitedHome');
    if (visitedbefore) {
      // if visited before, don't show the welcome animation
      setWLoading(false);
    } else {
      // if it's the first time visit, simulate loading time for the animation 
      setTimeout(() => {
        setWLoading(false);
        // set flag to indicate that the user has visited the home page
        sessionStorage.setItem('visitedHome', 'false');
      }, 3000); // 3 second
    }
  }, []);

  // filter for published movies required
  const publishedData = alldata.filter(ab => ab.status === "publish");

  // this function for filter by genre
  const [selectedGenre, setSelectedGenre] = useState('all movies');

  const genres = ['all movies', 'editor_choice', 'action', 'adventure', 'animation', 'comedy', 'drama', 'crime', 'fantasy', 'horror', 'romance', 'thriller', 'science_fiction'];

  const categories = ["bollywood", "hollywood", "south", "gujarati", "punjabi", "telugu", "tamil", "malayalam", "kannada", "pakistani", "marvel_studio", "dC", "tv_Shows", "web_series"];

  const handleGenreClick = (genre) => {
    setSelectedGenre(genre);
  }

  const filteredData = publishedData.filter(movie => {
    if (selectedGenre === 'all movies') return true;
    if (categories.includes(selectedGenre)) {
      return movie.category === selectedGenre;
    } else {
      return movie.genre.includes(selectedGenre);
    }

  })




  return (


    <>
      <Head>
        <title>MovieXYZ - Free Download Bollywood, Hollywood, & South Indian Movies</title>
        <meta name="description" content="MovieXYZ is India's top website for downloading Bollywood movies 2024, Hollywood Hindi dubbed movies, South Indian action movies, and free web series. Discover and download your favorite movies now!" />
        <meta name="keywords" content="Latest Bollywood movies 2024 free download, Hindi dubbed Hollywood movies, South Indian action movies, free web series streaming, top movie website in India" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />

        {/* Open Graph Tags for Social Sharing */}
        <meta property="og:title" content="MovieXYZ - Free Download Bollywood, Hollywood, & South Indian Movies" />
        <meta property="og:description" content="Explore and download the latest movies and web series for free on MovieXYZ, India's top movie platform." />
        {/* <meta property="og:image" content="/path-to-featured-image.jpg" /> */}
        <meta property="og:url" content="https://www.moviexyz.com/" />
        <meta property="og:type" content="website" />
        {/* Canonical URL */}
        <link rel="canonical" href="https://www.moviexyz.com/" />
      </Head>

      <div>
        {wloading ? <WelcomeAnimation /> : <div>
          <TelegramModal />
          <div className="swiper_top_main">
            <Swiper
              autoplay={{
                delay: 3000,
                disableOnInteraction: false
              }}
              direction="horizontal"
              loop={true}
              speed={1200}
              watchSlidesProgress={true}
              parallax={true}
              pagination={{
                clickable: true,
              }}
              modules={[Pagination, Navigation, Autoplay]}
              scrollbar={{ draggable: true }}
            >
              {loading ? <div className="slideimagebx flex flex-center"><Loader /></div> : <>
                {publishedData.slice(0, 4).map((movie) => {
                  return <SwiperSlide key={movie._id}>
                    <div className="slideimagebx">
                      {/* slideshow background image */}
                      <img src={movie.bgposter} alt="movie" loading="lazy" />
                      {/* content */}
                      <div className="content" key={movie._id}>
                        <div className="contentflex">
                          <div className="smalimg">
                            <img src={movie.smposter} alt="movie" loading="lazy" />
                          </div>
                          <div className="movieconte">
                            <h1 className="header_title">{movie.title}</h1>
                            <h6>Duration: <span id="header_dur">{movie.duration}</span></h6>
                            <h3 id="header_gen">
                              <span className="star">&#9733;</span>
                              {movie.rating}
                              <span>{movie.genre.join(', ')}</span>
                            </h3>
                            <div className="btns">
                              <Link href={`/movies/${movie.slug}`}>
                                <button className="btn_download">
                                  <FaDownload className="faDownload" /> DOWNLOAD <span>FREE</span>
                                </button>
                              </Link>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </SwiperSlide>
                })}
              </>}

              <div className="swiper-pagination"></div>
              <div className="swiper-scrollbar"></div>

            </Swiper>
          </div>

          <div className="tranding_bx">
            <li><Link href='/all' className="active"><i><FaAngleDoubleUp className="fas" /></i> Latest</Link></li>

            <li><Link href='/movies' ><i><FaFilm className="fas" /></i> Movies</Link></li>

            <li><Link href='/series' ><i><FaStar className="fas" /></i> Series</Link></li>

            <li><Link href='/all' ><i><FaPlus className="fas" /></i> Recently Added</Link></li>
          </div>

          <div className="scrollcardssec">
            <Swiper
              slidesPerView={7}
              spaceBetween={40}
              className="myswiper"
              autoplay={{
                delay: 3000,
                disableOnInteraction: false
              }}
              direction="horizontal"
              loop={true}
              speed={1200}
              watchSlidesProgress={true}
              parallax={true}
              modules={[Pagination, Navigation, Autoplay]}
              breakpoints={{
                1587: {
                  slidesPerView: 8,
                  spaceBetween: 10,
                },
                1500: {
                  slidesPerView: 7,
                  spaceBetween: 10,
                },
                1200: {
                  slidesPerView: 6,
                  spaceBetween: 20,
                },
                1040: {
                  slidesPerView: 5,
                  spaceBetween: 10,
                },
                992: {
                  slidesPerView: 6,
                  spaceBetween: 10,
                },
                768: {
                  slidesPerView: 4,
                  spaceBetween: 10,
                },
                650: {
                  slidesPerView: 3,
                  spaceBetween: 10,
                },
                400: {
                  slidesPerView: 2,
                  spaceBetween: 10,
                },
                370: {
                  slidesPerView: 2,
                  spaceBetween: 10,
                },
                350: {
                  slidesPerView: 2,
                  spaceBetween: 10,
                },

              }}
            >
              <div className="scrollcards">
                {loading ? <div className="scrollcardssec flex flex-center h-15vh"><Loader /></div> : <>
                  {publishedData.map((movie) => {
                    return <SwiperSlide key={movie._id}>
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
                    </SwiperSlide>
                  })}

                </>}
              </div>


            </Swiper>
          </div>

          <div className="tranding_bx" style={{ marginTop: '40px' }}>
            <li><Link href='/movies'><i><FaPhotoVideo className="fas" /></i> Movies</Link></li>

            <li><Link href='/series' ><i><FaFilm className="fas" /></i> Series</Link></li>

            <li><Link href='/series' ><i><FaCheck className="fas" /></i> Original Series</Link></li>

            <li><Link href='/genre' ><i><FaClapperboard className="fas" /></i> Genre</Link></li>
          </div>

          <div className="moviestegs">
            {/* mapping over the genres array to generate buttons */}
            {genres.slice(0, 16).map(genre => (
              <button key={genre} className={selectedGenre === genre ? 'active' : ''} onClick={() => handleGenreClick(genre)}>
                {genre}
              </button>
            ))}
            {categories.map(category => (
              <button key={category} className={selectedGenre === category ? 'active' : ''} onClick={() => handleGenreClick(category)}>
                {category}
              </button>
            ))}
          </div>

          <div className="moviescontainer">
            {loading ? <div className="scrollcardssec flex flex-center h-15vh"><Loader /></div> : <>
              {filteredData.length === 0 ? <p className="nodatafound">No Movie Found</p> : <>
                {filteredData.map((movie) => (
                  <div className="card" key={movie._id}>
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

              </>}
            </>}
          </div>

          <div className="nextpagelink">
            <Link href='/all'>
              <button className="cssbuttons_io_button">Next Page
                <div className="icon">
                  <FaArrowRight />
                </div>
              </button>
            </Link>
          </div>
        </div>}
      </div>


    </>
  );
}
