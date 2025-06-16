
import axios from "axios";
import Head from "next/head";
import { useRouter } from "next/router";
import { useState } from "react";



export default function Movie(

    {
        _id,
        title: existingtitle,
        slug: existingslug,
        bgposter: existingbgposter,
        smposter: existingsmposter,
        titlecategory: existingtitlecategory,
        description: existingdescription,
        rating: existingrating,
        duration: existingduration,
        year: existingyear,
        genre: existinggenre,
        language: existinglanguage,
        subtitle: existingsubtitle,
        size: existingsize,
        quaility: existingquaility,
        youtubelink: existingyoutubelink,
        category: existingcategory,
        watchonline: existingwatchonline,
        downloadlink: existingdownloadlink,
        status: existingstatus,
    }
) {

    const [redirect, setRedirect] = useState(false);
    const router = useRouter();

    const [title, setTitle] = useState(existingtitle || '');
    const [slug, setSlug] = useState(existingslug || '');
    const [bgposter, setBgposter] = useState(existingbgposter || '');
    const [smposter, setSmposter] = useState(existingsmposter || '');
    const [titlecategory, setTitlecategory] = useState(existingtitlecategory || '');
    const [description, setDescription] = useState(existingdescription || '');
    const [rating, setRating] = useState(existingrating || '');
    const [duration, setDuration] = useState(existingduration || '');
    const [year, setYear] = useState(existingyear || '');
    const [genre, setGenre] = useState(existinggenre || []);
    const [language, setLanguage] = useState(existinglanguage || '');
    const [subtitle, setSubtitle] = useState(existingsubtitle || '');
    const [size, setSize] = useState(existingsize || '');
    const [quaility, setQuaility] = useState(existingquaility || '');
    const [youtubelink, setYoutubelink] = useState(existingyoutubelink || '');
    const [category, setCategory] = useState(existingcategory || '');
    const [watchonline, setWatchonline] = useState(existingwatchonline || '');
    const [downloadlink, setDownloadlink] = useState(existingdownloadlink || {
        "480p": "",
        "720p": "",
        "1080p": "",
        "4k": "",
        "telegram": "",
    });
    // not use for database
    const [showInputs, setShowInputs] = useState({
        "480p": false,
        "720p": false,
        "1080p": false,
        "4k": false,
        "telegram": false,
    });
    const [status, setStatus] = useState(existingstatus || '');


    // function for create movie
    async function createMovie(ev) {
        ev.preventDefault();

        const data = { title, slug, bgposter, smposter, titlecategory, description, rating, duration, year, genre, language, subtitle, size, quaility, youtubelink, category, watchonline, downloadlink, status }

        if (_id) {
            await axios.put('/api/getmovies', { ...data, _id })
        } else {
            await axios.post('/api/getmovies', data);
        }


        setRedirect(true);
    }

    if (redirect) {
        router.push('/')
        return null;
    }


    const resolutions = ["480p", "720p", "1080p", "4k", "telegram"];

    const handleInputChange = (resolution, value) => {
        setDownloadlink(prevstate => ({
            ...prevstate,
            [resolution]: value
        }));
    };

    const toggleInputVisibility = resolution => {
        setShowInputs(prevstate => ({
            ...prevstate,
            [resolution]: !prevstate[resolution]
        }));
    };


    // slug function, url for every space will be generate - for every time space
    const handleSlugChange = (ev) => {
        const inputValue = ev.target.value;

        // Replace spaces with hyphens
        const newSlug = inputValue.replace(/\s+/g, '-');

        setSlug(newSlug)
    }

    // movie category
    const categories = ["Editor_Choice", "Bollywood", "Hollywood", "South", "Gujarati", "Punjabi", "Telugu", "Tamil", "Malayalam", "Kannada", "Pakistani", "Marvel_Studio", "DC", "Tv_Shows", "Web_Series"];

    return <>
        <Head>
            <title>Add Movie page</title>
        </Head>

        <form className="addmovieform" onSubmit={createMovie}>
            { /* preview bgposter and smposter image */}
            <div className="w-100 flex gap-3 mt-1">
                {bgposter ? <div className="bgposter flex flex-col w-70 flex-left">
                    <img src={bgposter} id="prv" alt="image" />
                    <label htmlFor="prv" className="w-100">Background image Preview</label>
                </div> : null}
                {smposter ? <div className="smposter flex flex-col w-33 flex-left">
                    <img src={smposter} id="prv" alt="image" />
                    <label htmlFor="prv" className="w-100">Smposter Preview</label>
                </div> : null}
            </div>

            <div className="formdata w-100 flex flex-sb mt-3 flex-left">
                {/* for left side */}
                <div className="w-50 flex flex-col flex-left">
                    {/* movie background image */}
                    <div className="w-100 flex flex-col flex-left mb-2">
                        <label htmlFor="bgposter">Background Poster</label>
                        <input type="text"
                            id="bgposter"
                            placeholder="bgposter image link"
                            value={bgposter}
                            onChange={ev => setBgposter(ev.target.value)}
                        />
                    </div>
                    {/* {movie title} */}
                    <div className="w-100 flex flex-col flex-left mb-2">
                        <label htmlFor="title">Movie Title</label>
                        <input type="text"
                            id="title"
                            placeholder="title"
                            value={title}
                            onChange={ev => setTitle(ev.target.value)}
                        />
                    </div>

                    {/*movie description / Storyline*/}
                    <div className="w-100 flex flex-col flex-left mb-2">
                        <label htmlFor="description">Description</label>
                        <textarea type="text"
                            id="description"
                            placeholder="description"
                            value={description}
                            onChange={ev => setDescription(ev.target.value)}
                        />
                    </div>
                    {/* movie rating */}
                    <div className="w-100 flex flex-col flex-left mb-2">
                        <label htmlFor="rating">Rating</label>
                        <input type="number"
                            id="rating"
                            placeholder="rating"
                            value={rating}
                            onChange={ev => {
                                // ensure the input does not exceed 10.0
                                let newValue = ev.target.value <= 10.0 ? ev.target.value : 10.0;
                                // ensure the input is not less than 0
                                newValue = newValue >= 0 ? newValue : 0;
                                setRating(newValue);

                            }}
                            step="0.1" // define the step increment as 0.1
                            max="10.0" // set the maximum value to 10.0
                            min="0" // set the minimum value to 0
                        />
                    </div>

                    {/* movie duration */}
                    <div className="w-100 flex flex-col flex-left mb-2">
                        <label htmlFor="duration">Duration</label>
                        <input type="text"
                            id="duration"
                            placeholder="duration"
                            value={duration}
                            onChange={ev => setDuration(ev.target.value)}
                        />
                    </div>

                    {/* movie watchonline link */}
                    <div className="w-100 flex flex-col flex-left mb-2">
                        <label htmlFor="watchonline">Watchonline link</label>
                        <input type="text"
                            id="watchonline"
                            placeholder="watchonline"
                            value={watchonline}
                            onChange={ev => setWatchonline(ev.target.value)}
                        />
                    </div>

                    {/* movie downloadlink */}
                    <div className="w-100 flex flex-col flex-left mb-2">
                        <label htmlFor="downloadlink">Downloadlink link</label>
                        <div className="flex gap-1 flex-wrap">
                            <div className={showInputs['480p'] ? 'dresolbtn active' : 'dresolbtn'} onClick={() => toggleInputVisibility('480p')}>
                                {showInputs['480p'] ? 'Hide 480p' : 'Show 480p'}
                            </div>
                            <div className={showInputs['720p'] ? 'dresolbtn active' : 'dresolbtn'} onClick={() => toggleInputVisibility('720p')}>
                                {showInputs['720p'] ? 'Hide 720p' : 'Show 720p'}
                            </div>
                            <div className={showInputs['1080p'] ? 'dresolbtn active' : 'dresolbtn'} onClick={() => toggleInputVisibility('1080p')}>
                                {showInputs['1080p'] ? 'Hide 1080p' : 'Show 1080p'}
                            </div>
                            <div className={showInputs['4k'] ? 'dresolbtn active' : 'dresolbtn'} onClick={() => toggleInputVisibility('4k')}>
                                {showInputs['4k'] ? 'Hide 4k' : 'Show 4k'}
                            </div>
                            <div className={showInputs['telegram'] ? 'dresolbtn active' : 'dresolbtn'} onClick={() => toggleInputVisibility('telegram')}>
                                {showInputs['telegram'] ? 'Hide telegram' : 'Show telegram'}
                            </div>
                        </div>
                        {resolutions ? <>{resolutions.map(resolution => (
                            <div key={resolution} className="w-10">
                                {showInputs[resolution] && (
                                    <>
                                        <input type="text"
                                            id={`downloadlink${resolution}`}
                                            placeholder={`${resolution} Download link`}
                                            value={downloadlink[resolution]}
                                            onChange={ev => handleInputChange(resolution, ev.target.value)}
                                        />
                                    </>
                                )}
                            </div>
                        ))}</> : null}
                    </div>

                    {/* {Movie status (Draft or Publish)} */}
                    <div className="w-100 flex flex-col flex-left mb-2">
                        <label htmlFor="status">Status</label>
                        <div className="flex gap-05">
                            <input type="radio"
                                id="draft"
                                name="status"
                                value="draft"
                                checked={status === "draft"}
                                onChange={(e) => setStatus(e.target.value)}
                            />
                            <label htmlFor="draft">Draft</label>
                        </div>
                        <div className="flex gap-05">
                            <input type="radio"
                                id="publish"
                                name="status"
                                value="publish"
                                checked={status === "publish"}
                                onChange={(e) => setStatus(e.target.value)}
                            />
                            <label htmlFor="publish">Publish</label>
                        </div>
                    </div>


                </div>

                {/* {for right side} */}
                <div className="w-50 flex flex-col flex-left">

                    {/* {Movie small Poster} */}
                    <div className="w-100 flex flex-col flex-left mb-2">
                        <label htmlFor="smposter">Main Poster</label>
                        <input type="text"
                            id="smposter"
                            placeholder="smposter image link"
                            value={smposter}
                            onChange={ev => setSmposter(ev.target.value)}
                        />
                    </div>


                    {/* {Movie Slug url} */}
                    <div className="w-100 flex flex-col flex-left mb-2">
                        <label htmlFor="slug">Slug (url)</label>
                        <input type="text"
                            id="slug"
                            placeholder="Url of the movie"
                            value={slug}
                            onChange={handleSlugChange}
                        />
                    </div>

                    {/* {release year if the movie} */}
                    <div className="w-100 flex flex-col flex-left mb-2">
                        <label htmlFor="year">Release Year</label>
                        <input type="text"
                            id="year"
                            placeholder="year"
                            value={year}
                            onChange={ev => setYear(ev.target.value)}
                        />
                    </div>

                    {/* youtube embed link */}
                    <div className="w-100 flex flex-col flex-left mb-2">
                        <label htmlFor="youtubelink">Youtube Link</label>
                        <input type="text"
                            id="youtubelink"
                            placeholder="youtubelink"
                            value={youtubelink}
                            onChange={ev => setYoutubelink(ev.target.value)}
                        />
                    </div>

                    {/* Language of the movie */}
                    <div className="w-100 flex flex-col flex-left mb-2">
                        <label htmlFor="language">Language</label>
                        <select onChange={(e) => setLanguage(e.target.value)} value={language} name="language" id="language">
                            <option value="">Select language</option>
                            <option value="Hindi">Hindi</option>
                            <option value="Hindi (ORG)">Hindi (ORG)</option>
                            <option value=" Hindi Dubbed">Hindi Dubbed</option>
                            <option value="Dual Audio Hindi">Dual Audio Hindi</option>
                            <option value="Dual Audio (Hindi Dubbed)">Dual Audio (Hindi Dubbed)</option>
                            <option value="Hindi ORG-DD2.0">Hindi ORG-DD2.0</option>
                            <option value="English">English</option>
                            <option value="Hindi - English">Hindi - English</option>
                            <option value="Dual Audio Urdu">Dual Audio Urdu</option>
                            <option value="Urdu">Urdu</option>
                            <option value="Hindi DD5.1 + English [Dual Audio Movie]">Hindi DD5.1 + English [Dual Audio Movie]</option>
                            <option value="Hindi ORG 5.1 + English ORG 5.1 [Dual Audio Movie]">Hindi ORG 5.1 + English ORG 5.1 [Dual Audio Movie]</option>
                            <option value="Hindi HQ-Dubbed + English DD5.1 [WEB SERIES]">Hindi HQ-Dubbed + English DD5.1 [WEB SERIES]</option>
                            <option value="Hindi DD 2.0 + English[Dual Audio SERIES]">Hindi DD 2.0 + English[Dual Audio SERIES]</option>
                            <option value="Dual Audio [Hindi (ORG) + English]">Dual Audio [Hindi (ORG) + English]</option>
                            <option value="Dual Audio [Hindi (Cleaned) + English">Dual Audio [Hindi (Cleaned) + English]</option>
                            <option value="Dual Audio (Hindi - Chinese)">Dual Audio (Hindi - Chinese)</option>
                            <option value="Hindi DD5.1 + Spanish [Dual Audio Series]">Hindi DD5.1 + Spanish [Dual Audio Series]</option>
                            <option value="Hindi DD5.1 + English [Dual Audio Series]">Hindi DD5.1 + English [Dual Audio Series]</option>
                            <option value="Hindi DD5.1 + English [Multi Audio SERIES]">Hindi DD5.1 + English [Multi Audio SERIES]</option>
                            <option value="Hindi DD5.1 + English + Spanish [Multi Audio Series]">Hindi DD5.1 + English + Spanish [Multi Audio Series]</option>
                            <option value="Hindi ORG + English + Japanese [Triple Audio]">Hindi ORG + English + Japanese [Triple Audio]</option>
                            <option value="Hindi DD5.1 + English + Korean [Triple Audio Series]">Hindi DD5.1 + English + Korean [Triple Audio Series]</option>
                            <option value="Hindi ORG + Korean [Dual Audio Series]">Hindi ORG + Korean [Dual Audio Series]</option>
                            <option value="Hindi ORG [K-Drama Series]">Hindi ORG [K-Drama Series]</option>
                            <option value="Hindi ORG Dubbed">Hindi ORG Dubbed</option>
                            <option value="Tamil">Tamil</option>
                            <option value="Dual Audio (Hindi - Tamil)">Dual Audio (Hindi - Tamil)</option>
                            <option value="Telugu">Telugu</option>
                            <option value="Dual Audio (Hindi - Telugu)">Dual Audio (Hindi - Telugu)</option>
                            <option value="Malayalam">Malayalam</option>
                            <option value="Dual Audio (Hindi - Malayalam)">Dual Audio (Hindi - Malayalam)</option>
                            <option value="Kannada">Kannada</option>
                            <option value="Dual Audio (Hindi - Kannada)">Dual Audio (Hindi - Kannada)</option>
                            <option value="Punjabi">Punjabi</option>
                            <option value="Gujarati">Gujarati</option>
                            <option value="Hindi ORG Telugu">Hindi ORG Telugu</option>
                            
                            <option value="Korean Audio">Korean Audio</option>
                            <option value="Hindi + Tamil + Telugu + Malayalam + Kannada">Hindi + Tamil + Telugu + Malayalam + Kannada</option>
                            <option value="Hindi ORG-LiNE + Telugu + Tamil Malayalam [MulTi Audio Film]">Hindi ORG-LiNE + Telugu + Tamil Malayalam [MulTi Audio Film]</option>
                            <option value="Hindi (HQ Dubbed) - Tamil [Dual Audio Movie]">Hindi (HQ Dubbed) - Tamil [Dual Audio Movie]</option>

                            <option value="Hindi 2.0 LiNE + Telugu [Dual Audio Movie]">Hindi 2.0 LiNE + Telugu [Dual Audio Movie]</option>
                        </select>
                    </div>

                    {/* Quality of the movie */}
                    <div className="w-100 flex flex-col flex-left mb-2">
                        <label htmlFor="quality">Movie Quality</label>
                        <select onChange={(e) => setQuaility(e.target.value)} value={quaility} name="quality" id="quality">
                            <option value="">Select Quality</option>
                            <option value="480p || 720p - WEB-DL">480p || 720p - WEB-DL</option>
                            <option value="720p || 1080p - WEB-DL">720p || 1080p - WEB-DL</option>
                            <option value="480p || 720p || 1080p - WEB-DL">480p || 720p || 1080p - WEB-DL</option>
                            <option value="480p || 720p || 1080p - AMZN WEB-DL">480p || 720p || 1080p - AMZN WEB-DL</option>
                            <option value="480p || 720p || 1080p || 2160p - WEB-DL">480p || 720p || 1080p || 2160p - WEB-DL</option>
                            <option value="480p || 720p || 1080p || 2160p - AMZN WEB-DL">480p || 720p || 1080p || 2160p - AMZN WEB-DL</option>
                            <option value="480p || 720p || 1080p - PRE-HD">480p || 720p || 1080p - PRE-HD</option>
                            <option value="480p || 720p || 1080p - HDCAM x264">480p || 720p || 1080p - HDCAM x264</option>
                            <option value="480p || 720p || 1080p - HDTC">480p || 720p || 1080p - HDTC</option>
                            <option value="Pre-DVDRip 480p- 720p">Pre-DVDRip 480p- 720p</option>
                            <option value="HDRip 720p - 480p">HDRip 720p - 480p</option>
                            <option value="480p || 720p || 1080p - HDTC">480p || 720p || 1080p - HDTC</option>
                            <option value="1080p | 720p | 480p | BluRay">1080p | 720p | 480p | BluRay</option>
                            <option value="1080p | 720p | 480p | HDRip">1080p | 720p | 480p | HDRip</option>
                            <option value="1080p | 720p | 480p | WEB-Rip">1080p | 720p | 480p | WEB-Rip</option>
                        </select>
                    </div>

                    {/* subtitle of the movie */}
                    <div className="w-100 flex flex-col flex-left mb-2">
                        <label htmlFor="subtitle">Movie Subtitle</label>
                        <select onChange={(e) => setSubtitle(e.target.value)} value={subtitle} name="subtitle" id="subtitle">
                            <option value="">Select Subtitle</option>
                            <option value="Hindi">Hindi</option>
                            <option value="English">English</option>
                        </select>
                    </div>

                    { /* size of the movei */}
                    <div className="w-100 flex flex-col flex-left mb-2">
                        <label htmlFor="size">Movie Size</label>
                        <input type="text"
                            id="size"
                            placeholder="350MB || 1GB || 2GB || 4GB"
                            value={size}
                            onChange={ev => setSize(ev.target.value)}
                        />
                    </div>


                    <div className="moviecategory flex flex-sb flex-left">
                        { /* movie title category */}
                        <div className="w-50 flex flex-col flex-left mb-2">
                            <label>Title Category :</label>
                            {['Movies', 'Series', 'Shows'].map((cat) => (
                                <div key={cat} className="flex gap-05">
                                    <input type="radio"
                                        id={cat.toLowerCase()}
                                        name="titlecategory"
                                        value={cat.toLocaleLowerCase()}
                                        checked={titlecategory === cat.toLowerCase()}
                                        onChange={(e) => setTitlecategory(e.target.value)}
                                    />
                                    <label htmlFor={cat.toLowerCase()}>{cat}</label>
                                </div>
                            ))}
                        </div>
                        {/* movie category */}
                        <div className="w-50 flex flex-col flex-left mb-2">
                            <label>Category :</label>
                            {categories.map((cat) => (
                                <div key={cat} className="flex gap-05">
                                    <input type="radio"
                                        id={cat.toLowerCase()}
                                        name="category"
                                        value={cat.toLowerCase()}
                                        checked={category === cat.toLowerCase()}
                                        onChange={(e) => setCategory(e.target.value)}
                                    />
                                    <label htmlFor={cat.toLowerCase()}>{cat}</label>
                                </div>
                            ))}
                        </div>

                        {/* movie genre */}
                        <div className="w-50 flex flex-col flex-left mb-2">
                            <label>Genre :</label>
                            {['Action', 'Adventure', 'Animation', 'Comedy', 'Drama', 'Crime', 'Fantasy', 'Horror', 'Romance', 'Thriller', 'Science_Fiction'].map((genreOption) => (
                                <label key={genreOption} className="flex gap-05">
                                    <input type="checkbox"
                                        value={genreOption.toLowerCase()}
                                        checked={genre.includes(genreOption.toLowerCase())}
                                        onChange={(e) => {
                                            const selectedGenre = e.target.value;
                                            setGenre((preGenre) => {
                                                if (preGenre.includes(selectedGenre)) {
                                                    return preGenre.filter((genre) => genre !== selectedGenre)
                                                } else {
                                                    return [...preGenre, selectedGenre]
                                                }
                                            })
                                        }}
                                    />
                                    {genreOption}
                                </label>
                            ))}
                        </div>

                    </div>


                </div>

            </div>

            {/* for save all data in mongodb for submit button */}
            <div className="w-100 mb-2">
                <button type="submit" className="w-100 flex-center">Save Data</button>
            </div>
        </form>


    </>
}

