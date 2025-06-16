import React from 'react'
import Head from 'next/head'
import Genrecard from '@/components/Genrecard'



const category = (props) => {
    return (
        <>
            <Head>
                <title>Genre - Category | MovieXYZ</title>
            </Head>

            <section className="genrenamesec">
                <div className="genrename">
                    <h2>Explore by Genre</h2>
                    <p>Discover a world of diverse genres! Dive into thrilling adventures, heartwarming romances, spine-tingling horrors, and more. Whether you’re in the mood for action-packed excitement, mystery-filled suspense, or a fantasy escape, we’ve got it all. Explore your favorite genres and find the perfect movie or series for your next viewing experience!</p>
                </div>
            </section>
            <section className="genremoviesec genremovie">
                <Genrecard link={'/genre/action'} img={'/img/action.jpg'} title={"Action Movies"} description={"Hold on tight for non-stop action, intense fight scenes, and heart-racing stunts! These movies deliver thrilling experiences with daring heroes, explosive sequences, and high-octane battles."} />
                <Genrecard link={'/genre/adventure'} img={'/img/adventure.jpg'} title={"Adventure Movies"} description={"Embark on thrilling journeys through exotic locations, brave quests, and daring escapades! These movies take you to the edge of your seat with incredible adventures"} />
                <Genrecard link={'/genre/animation'} img={'/img/animation.jpg'} title={"Animation Movies"} description={"Dive into a world of magic, adventure, and imagination! These movies bring colorful characters and enchanting stories to life, captivating both kids and adults alike. Experience fun, laughter, and heartwarming moments like never before!"} />
                <Genrecard link={'/genre/comedy'} img={'/img/comedy.jpg'} title={"Comedy Movies"} description={"Get ready to laugh out loud! These movies bring humor, witty characters, and hilarious situations to the screen. From slapstick comedy to witty banter, they deliver non-stop laughs and light-hearted fun for all ages."} />
                <Genrecard link={'/genre/crime'} img={'/img/crime.jpg'} title={"Crime Movies"} description={"Uncover suspense, danger, and thrilling mysteries. Follow characters through twists and intense crime stories as they battle corruption and seek justice."} />
                <Genrecard link={'/genre/drama'} img={'/img/drama.jpg'} title={"Drama Movies"} description={"Experience powerful storytelling and deep emotions. These movies explore complex characters, relationships, and life’s challenges, creating a compelling narrative that resonates long after the credits roll."} />
                <Genrecard link={'/genre/fantasy'} img={'/img/fantasy.jpg'} title={"Fantasy Movies"} description={"Enter a world of magic, mythical creatures, and epic adventures. These movies transport you to extraordinary realms where anything is possible, filled with wonder, imagination, and magical journeys."} />
                <Genrecard link={'/genre/horror'} img={'/img/horror.jpg'} title={"Horror Movies"} description={"Get ready for chills and thrills! These movies bring spine-tingling fear, dark mysteries, and supernatural scares. Dive into a world where fear lurks around every corner, leaving you on the edge of your seat."} />
                <Genrecard link={'/genre/mystery'} img={'/img/mystery.jpg'} title={"Mystery Movies"} description={"Unravel intriguing puzzles and suspenseful plots. These films keep you guessing with twists, turns, and unexpected revelations as characters search for the truth hidden in secrets and mysteries."} />
                <Genrecard link={'/genre/romance'} img={'/img/romantic.jpg'} title={"Romance Movies"} description={"Fall in love all over again with heartwarming stories of love, passion, and longing. These movies celebrate the beauty of relationships, capturing the magic and complexities of romance that make us believe in love."} />
                <Genrecard link={'/genre/science_fiction'} img={'/img/scifi.jpg'} title={"Science-fiction Movies"} description={"Journey into futuristic worlds, explore cutting-edge technology, and uncover cosmic mysteries. These movies blend science with imagination, taking you to space, distant planets, and beyond, where the possibilities are endless."} />
                <Genrecard link={'/genre/thriller'} img={'/img/thriller.jpg'} title={"Thriller Movies"} description={"Hold your breath with intense suspense, heart-racing action, and unpredictable twists. These movies keep you on the edge of your seat, as characters face danger and unravel thrilling mysteries."} />
            </section>

        </>
    )
}

export default category