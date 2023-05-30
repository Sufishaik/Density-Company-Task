import React, { useEffect } from 'react'
import AOS from 'aos';
import 'aos/dist/aos.css';
function Task() {
    useEffect(() => {
        AOS.init();
      }, [])
  return (
    <>
      <div id="__next">
        <nav className="relative bg-white shadow-xl lg:shadow-none">
            <div className="max-w-7xl mx-auto px-2 sm:px-4 lg:px-12">
                <div className="flex justify-between h-16 md:h-20 lg:h-24">
                    <div className="flex px-2 lg:px-0">
                        <div className="flex-shrink-0 flex items-center justify-start">
                            <img alt="Logo" loading="lazy" width="64" height="64" decoding="async" data-nimg="1"
                                className="block h-10 sm:h-12 w-auto" style={{color:'transparent'}}
                                srcSet="https://densityfrontendui.netlify.app/_ipx/w_64,q_75/%2Fimages%2Flogo.png?url=%2Fimages%2Flogo.png&w=64&q=75"
                                src="/_next/image?url=%2Fimages%2Flogo.png&amp;w=128&amp;q=75" />
                        </div>
                    </div>
                    <div className="hidden lg:block my-auto">
                        <div className="ml-2 flex items-center gap-6 md:ml-6 text-base font-semibold"><a href="#"
                                className="ml-3 text-[#3a3a3a] hover:text-[#151515]">Emotions</a><a href="#"
                                className="ml-3 text-[#3a3a3a] hover:text-[#151515]">Manifesto</a><a href="#"
                                className="ml-3 text-[#3a3a3a] hover:text-[#151515]">Self-awarness Test</a><a href="#"
                                className="ml-3 text-[#3a3a3a] hover:text-[#151515]">Work With Us</a><a href="#"
                                className="ml-3 font-bold bg-black text-white px-6 py-3 rounded-[30px]">Download App</a>
                        </div>
                    </div>
                    <div className="-mr-2 flex lg:hidden"><button
                            className="inline-flex h-fit my-auto mr-2 items-center justify-center p-2 rounded-md text-gray-400 hover:text-[#3a3a3a] hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white"><span
                                className="sr-only">Open main menu</span><svg className="block h-6 w-6"
                                xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor"
                                ariaHidden="true">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"
                                    d="M4 6h16M4 12h16M4 18h16"></path>
                            </svg></button></div>
                </div>
            </div>
        </nav>
        <main className="mt-4 overflow-hidden">
            <div
                className="relative bg-[#efecff] min-h-[600px] rounded-2xl grid place-content-center mx-2 md:mx-6 lg:mx-10 ">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 mx-8 py-10 lg:py-4">
                    <div data-aos="zoom-in" className="aos-init aos-animate"><span
                            className="text-[#3a3a3a] text-sm md:text-base lg:text-lg pl-1">Ahead app</span>
                        <h1 className="text-4xl md:text-5xl lg:text-7xl font-bold text-start">Master your life by mastering
                            emotions</h1>
                        <div className="flex flex-col lg:flex-row items-start lg:items-center space-y-2 lg:space-x-4 mt-4">
                            <button
                                className="flex items-center bg-black text-white rounded-lg px-3 lg:px-4 pr-4 lg:pr-5 py-2 space-x-2 hover:opacity-80 transition ease-in-out duration-200">
                                <div className="flex-shrink-0">
                                    <img alt="App Store Icon" loading="lazy" width="64" height="64" decoding="async"
                                        data-nimg="1" className="w-6 h-6 lg:w-10 lg:h-10" style={{color:'transparent'}}
                                        srcSet="https://densityfrontendui.netlify.app/_ipx/w_64,q_75/%2Fimages%2Fapple.png?url=%2Fimages%2Fapple.png&w=64&q=75"
                                        src="/_next/image?url=%2Fimages%2Fapple.png&amp;w=128&amp;q=75" />
                                </div>
                                <div className="flex flex-col"><span className="text-xs">Download on the</span><span
                                        className="text-xl font-semibold">App Store</span></div>
                            </button>
                            <div className="flex flex-col space-y-1 pl-2 lg:pl-0">
                                <div className="flex items-center justify-between"><svg stroke="currentColor"
                                        fill="currentColor" strokeWidth="0" viewBox="0 0 576 512"
                                        className="text-yellow-400 aos-init aos-animate" data-aos="fade-left"
                                        data-aos-delay="300" height="1em" width="1em"
                                        xmlns="http://www.w3.org/2000/svg">
                                        <path
                                            d="M259.3 17.8L194 150.2 47.9 171.5c-26.2 3.8-36.7 36.1-17.7 54.6l105.7 103-25 145.5c-4.5 26.3 23.2 46 46.4 33.7L288 439.6l130.7 68.7c23.2 12.2 50.9-7.4 46.4-33.7l-25-145.5 105.7-103c19-18.5 8.5-50.8-17.7-54.6L382 150.2 316.7 17.8c-11.7-23.6-45.6-23.9-57.4 0z">
                                        </path>
                                    </svg><svg stroke="currentColor" fill="currentColor" strokeWidth="0"
                                        viewBox="0 0 576 512" className="text-yellow-400 aos-init aos-animate"
                                        data-aos="fade-left" data-aos-delay="300" height="1em" width="1em"
                                        xmlns="http://www.w3.org/2000/svg">
                                        <path
                                            d="M259.3 17.8L194 150.2 47.9 171.5c-26.2 3.8-36.7 36.1-17.7 54.6l105.7 103-25 145.5c-4.5 26.3 23.2 46 46.4 33.7L288 439.6l130.7 68.7c23.2 12.2 50.9-7.4 46.4-33.7l-25-145.5 105.7-103c19-18.5 8.5-50.8-17.7-54.6L382 150.2 316.7 17.8c-11.7-23.6-45.6-23.9-57.4 0z">
                                        </path>
                                    </svg><svg stroke="currentColor" fill="currentColor" strokeWidth="0"
                                        viewBox="0 0 576 512" className="text-yellow-400 aos-init aos-animate"
                                        data-aos="fade-left" data-aos-delay="300" height="1em" width="1em"
                                        xmlns="http://www.w3.org/2000/svg">
                                        <path
                                            d="M259.3 17.8L194 150.2 47.9 171.5c-26.2 3.8-36.7 36.1-17.7 54.6l105.7 103-25 145.5c-4.5 26.3 23.2 46 46.4 33.7L288 439.6l130.7 68.7c23.2 12.2 50.9-7.4 46.4-33.7l-25-145.5 105.7-103c19-18.5 8.5-50.8-17.7-54.6L382 150.2 316.7 17.8c-11.7-23.6-45.6-23.9-57.4 0z">
                                        </path>
                                    </svg><svg stroke="currentColor" fill="currentColor" strokeWidth="0"
                                        viewBox="0 0 576 512" className="text-yellow-400 aos-init aos-animate"
                                        data-aos="fade-left" data-aos-delay="300" height="1em" width="1em"
                                        xmlns="http://www.w3.org/2000/svg">
                                        <path
                                            d="M259.3 17.8L194 150.2 47.9 171.5c-26.2 3.8-36.7 36.1-17.7 54.6l105.7 103-25 145.5c-4.5 26.3 23.2 46 46.4 33.7L288 439.6l130.7 68.7c23.2 12.2 50.9-7.4 46.4-33.7l-25-145.5 105.7-103c19-18.5 8.5-50.8-17.7-54.6L382 150.2 316.7 17.8c-11.7-23.6-45.6-23.9-57.4 0z">
                                        </path>
                                    </svg><svg stroke="currentColor" fill="currentColor" strokeWidth="0"
                                        viewBox="0 0 576 512" className="text-yellow-400 aos-init aos-animate"
                                        style={{clipPath : 'inset(0 50% 0 0)'}} data-aos="fade-left" data-aos-delay="400"
                                        height="1em" width="1em" xmlns="http://www.w3.org/2000/svg">
                                        <path
                                            d="M259.3 17.8L194 150.2 47.9 171.5c-26.2 3.8-36.7 36.1-17.7 54.6l105.7 103-25 145.5c-4.5 26.3 23.2 46 46.4 33.7L288 439.6l130.7 68.7c23.2 12.2 50.9-7.4 46.4-33.7l-25-145.5 105.7-103c19-18.5 8.5-50.8-17.7-54.6L382 150.2 316.7 17.8c-11.7-23.6-45.6-23.9-57.4 0z">
                                        </path>
                                    </svg></div><span data-aos="fade-up" data-aos-delay="500"
                                    className="text-xs lg:text-sm text-gray-500 font-semibold aos-init aos-animate">100+ App
                                    Store ratings</span>
                            </div>
                        </div>
                    </div>
                    <div className="flex items-center justify-center">
                        <img data-aos="fade-left" alt="app" loading="lazy"
                            width="512" height="512" decoding="async" data-nimg="1"
                            className="block h-64 lg:h-96 w-auto aos-init aos-animate" style={{color:'transparent'}}
                            srcSet="https://densityfrontendui.netlify.app/_ipx/w_640,q_75/%2Fimages%2FappImage.png?url=%2Fimages%2FappImage.png&w=640&q=75"
                            src="https://densityfrontendui.netlify.app/_next/image?url=%2Fimages%2FappImage.png&amp;w=1080&amp;q=75" />
                    </div>
                </div>
            </div>
            <div className="mx-2 md:mx-6 lg:mx-10 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-2 lg:gap-6 px-8 py-16 md:py-24 lg:py-48">
                <h1 data-aos="fade-right"
                    className="max-w-[260px] text-2xl sm:text-3xl lg:text-4xl font-bold text-start mb-2 lg:mb-0 lg:mr-2 col-span-1 md:col-span-2 lg:col-span-1 aos-init">
                    EQ beats IQ</h1>
                <p className="text-sm lg:text-xl text-[#666568] font-semibold py-2 aos-init" data-aos="fade-left"
                    data-aos-delay="200">People with high emotional intelligence (EQ) live more fulfilled lives. They
                    tend to be happier and have healthier relationships.</p>
                <p className="text-sm lg:text-xl text-[#666568] font-semibold py-2 aos-init" data-aos="fade-left"
                    data-aos-delay="400">They are more successful in their pursuits and make for inspiring leaders.
                    According to science, they earn $29k a year.</p>
            </div>
            <div className="mx-2 md:mx-6 lg:mx-10 flex items-center my-auto">
                <h1 data-aos="fade-right"
                    className="text-3xl w-fit sm:text-4xl lg:text-5xl font-bold text-start mr-2 aos-init">Does this sound
                    familiar?</h1>
                <img data-aos="zoom-in" data-aos-delay="200" alt="player" loading="lazy" width="128" height="128"
                    decoding="async" data-nimg="1" className="block -rotate-12 h-16 lg:h-20 w-auto aos-init"
                    style={{color:'transparent'}}
                    srcSet="https://densityfrontendui.netlify.app/_ipx/w_128,q_75/%2Fimages%2FplayerPink.png?url=%2Fimages%2FplayerPink.png&w=128&q=75"
                    src="/_next/image?url=%2Fimages%2FplayerPink.png&amp;w=256&amp;q=75" />
            </div>
            <div className="overflow-auto scrollbar-hide mb-36 aos-init" data-aos="fade-up">
                <div className="relative -px-32 flex items-center justify-around w-full gap-x-16 py-8">
                    <div className="flex items-center justify-center w-[300px] h-full min-w-[300px] max-w-[300px]"
                        style={{transform: 'none'}}>
                        <div className="flex items-center justify-center w-[300px] h-full min-w-[300px] max-w-[300px]">
                            <div className="bg-[#d9f2ff] px-4 py-6 rounded-xl w-full grow h-full">
                                <h1 className="text-3xl lg:text-4xl font-bold text-start mb-4">😃</h1>
                                <h2 className="text-sm lg:text-xl font-bold">Lorem ipsum dolor sit amet, consectetur
                                    adipiscing elit.</h2>
                                <p className="text-xs lg:text-sm text-[#7c7a88] mt-1">Lorem ipsum dolor sit amet,
                                    consectetur adipiscing elit. Sed euismod, diam sit amet dictum ultrices, nunc nisl
                                    ultricies nunc, quis ultricies nisl nunc sit amet nisl. Sed euismod, diam sit amet
                                    dictum ultrices, nunc nisl ultricies nunc, quis ultricies nisl nunc sit amet nisl.
                                </p>
                            </div>
                        </div>
                    </div>
                    <div className="flex items-center justify-center w-[300px] h-full min-w-[300px] max-w-[300px]"
                         style={{transform: 'none'}}>
                        <div className="flex items-center justify-center w-[300px] h-full min-w-[300px] max-w-[300px]">
                            <div className="bg-[#efecff] rotate-6 px-4 py-6 rounded-xl w-full h-full">
                                <h1 className="text-3xl lg:text-4xl font-bold text-start mb-4">😂</h1>
                                <h2 className="text-sm lg:text-xl font-bold">Lorem ipsum dolor sit amet, consectetur
                                    adipiscing elit.</h2>
                                <p className="text-xs lg:text-sm text-[#7c7a88] mt-1">Lorem ipsum dolor sit amet,
                                    consectetur adipiscing elit. Sed euismod, diam sit amet dictum ultrices, nunc nisl
                                    ultricies nunc, quis ultricies nisl nunc sit amet nisl. Sed euismod, diam sit amet
                                    dictum ultrices, nunc nisl ultricies nunc, quis ultricies nisl nunc sit amet nisl.
                                </p>
                            </div>
                        </div>
                    </div>
                    <div className="flex items-center justify-center w-[300px] h-full min-w-[300px] max-w-[300px]"
                         style={{transform: 'none'}}>
                        <div className="flex items-center justify-center w-[300px] h-full min-w-[300px] max-w-[300px]">
                            <div className="bg-[#6441ef] -rotate-6 px-4 py-6 rounded-xl w-full h-full">
                                <h1 className="text-3xl lg:text-4xl font-bold text-start mb-4">😋</h1>
                                <h2 className="text-sm lg:text-xl font-bold text-white">Lorem ipsum dolor sit amet.</h2>
                                <p className="text-xs lg:text-sm text-gray-300 mt-1">Lorem ipsum dolor sit amet, consectetur
                                    adipiscing elit. Sed euismod, diam sit amet dictum ultrices, nunc nisl ultricies
                                    nunc, quis ultricies nisl nunc sit amet nisl. Sed euismod, diam sit amet dictum
                                    ultrices, nunc nisl ultricies nunc, quis ultricies nisl nunc sit amet nisl.</p>
                            </div>
                        </div>
                    </div>
                    <div className="flex items-center justify-center w-[300px] h-full min-w-[300px] max-w-[300px]"
                          style={{transform: 'none'}}>
                        <div className="flex items-center justify-center w-[300px] h-full min-w-[300px] max-w-[300px]">
                            <div className="bg-[#ffefd5] px-4 py-6 rounded-xl w-full h-full">
                                <h1 className="text-3xl lg:text-4xl font-bold text-start mb-4">😤</h1>
                                <h2 className="text-sm lg:text-xl font-bold">Lorem ipsum dolor sit amet, consectetur
                                    adipiscing elit.</h2>
                                <p className="text-xs lg:text-sm text-[#7c7a88] mt-1">Lorem ipsum dolor sit amet,
                                    consectetur adipiscing elit. Sed euismod, diam sit amet dictum ultrices, nunc nisl
                                    ultricies nunc, quis ultricies nisl nunc sit amet nisl. Sed euismod, diam sit amet
                                    dictum ultrices, nunc nisl ultricies nunc, quis ultricies nisl nunc sit amet nisl.
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="mx-2 md:mx-6 lg:mx-10 relative bg-[#fef6f0] min-h-[600px] rounded-2xl grid place-content-center"
                style={{opacity: 1, transform: 'none'}}>
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 items-center mx-4 lg:mx-8 py-10 lg:py-4">
                    <div className="flex flex-col items-start lg:items-center">
                        <div><span className="text-[#3a3a3a] text-sm md:text-base lg:text-lg pl-1">Built out of
                                frustration</span>
                            <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold text-start">Meet the ahead app</h1>
                        </div>
                        <img data-aos="zoom-in" alt="playerPink" loading="lazy" width="128" height="128"
                            decoding="async" data-nimg="1" className="block my-6 h-36 lg:h-40 w-auto aos-init"
                            style={{color:'transparent'}}
                            srcSet="https://densityfrontendui.netlify.app/_ipx/w_128,q_75/%2Fimages%2FplayerPink.png?url=%2Fimages%2FplayerPink.png&w=128&q=75"
                            src="/_next/image?url=%2Fimages%2FplayerPink.png&amp;w=256&amp;q=75" />
                    </div>
                    <div className="flex flex-col gap-y-4 w-3/4">
                        <p className="text-sm md:text-base lg:text-lg text-[#7c7a88]">A personalized pocket coach that
                            provides bite- sized, science-driven tools to boost emotional intelligence.</p>
                        <p className="text-start text-sm md:text-base lg:text-lg text-[#7c7a88]">Think of it as a pocket
                            cheerleader towards a better, more fulfilling.</p>
                    </div>
                </div>
            </div>
            <div className="mx-4 md:mx-8 lg:mx-16 py-20"><span data-aos="fade-up"
                    className="text-[#3a3a3a] text-sm md:text-base lg:text-lg aos-init">Wrong with self-improvement &amp;
                    how we're fixing it.</span>
                <div data-aos="fade-left" className="flex items-center -mt-4 aos-init">
                    <h1 className="text-3xl w-fit sm:text-4xl lg:text-5xl font-bold text-start mr-2">Self-improvement. Ugh.
                    </h1>
                    <img data-aos="zoom-in" data-aos-delay="200" alt="playerBeige" loading="lazy" width="128"
                        height="128" decoding="async" data-nimg="1"
                        className="block -rotate-12 h-16 lg:h-20 w-auto aos-init"   style={{color:'transparent'}}
                        srcSet="https://densityfrontendui.netlify.app/_ipx/w_128,q_75/%2Fimages%2FplayerBeige.png?url=%2Fimages%2FplayerBeige.png&w=128&q=75"
                        src="/_next/image?url=%2Fimages%2FplayerBeige.png&amp;w=256&amp;q=75" />
                </div>
                <div className="flex flex-col mx-4 md:mx-16 lg:mx-32 gap-y-8 mt-8">
                    <div data-aos="fade-left" data-aos-delay="100" className="flex flex-col gap-y-2 aos-init">
                        <h2 className="text-sm md:text-base lg:text-lg font-bold text-start">It's not as easy as 1-2-3.</h2>
                        <p className="text-sm md:text-base lg:text-lg text-[#7c7a88] font-semibold">The journey of change
                            may be long, but our sessions are quick. We get to the point and tell you what you want to
                            know (and nothing else).</p>
                    </div>
                    <div data-aos="fade-right" data-aos-delay="200" className="flex flex-col gap-y-2 aos-init">
                        <h2 className="text-sm md:text-base lg:text-lg font-bold text-start">It's not as easy as 1-2-3.</h2>
                        <p className="text-sm md:text-base lg:text-lg text-[#7c7a88] font-semibold">The journey of change
                            may be long, but our sessions are quick. We get to the point and tell you what you want to
                            know (and nothing else).</p>
                    </div>
                    <div data-aos="fade-left" data-aosDelay="300" className="flex flex-col gap-y-2 aos-init">
                        <h2 className="text-sm md:text-base lg:text-lg font-bold text-start">It's not as easy as 1-2-3.</h2>
                        <p className="text-sm md:text-base lg:text-lg text-[#7c7a88] font-semibold">The journey of change
                            may be long, but our sessions are quick. We get to the point and tell you what you want to
                            know (and nothing else).</p>
                    </div>
                    <div data-aos="fade-right" data-aosDelay="400" className="flex flex-col gap-y-2 aos-init">
                        <h2 className="text-sm md:text-base lg:text-lg font-bold text-start">It's not as easy as 1-2-3.</h2>
                        <p className="text-sm md:text-base lg:text-lg text-[#7c7a88] font-semibold">The journey of change
                            may be long, but our sessions are quick. We get to the point and tell you what you want to
                            know (and nothing else).</p>
                    </div>
                    <div data-aos="fade-left" data-aosDelay="500" className="flex flex-col gap-y-2 aos-init">
                        <h2 className="text-sm md:text-base lg:text-lg font-bold text-start">It's not as easy as 1-2-3.</h2>
                        <p className="text-sm md:text-base lg:text-lg text-[#7c7a88] font-semibold">The journey of change
                            may be long, but our sessions are quick. We get to the point and tell you what you want to
                            know (and nothing else).</p>
                    </div>
                </div>
            </div>
            <div
                className="mx-2 md:mx-6 lg:mx-10 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-2 lg:gap-6 px-8 py-48 md:py-64 lg:py-72">
                <h1 data-aos="fade-right"
                    className="max-w-[260px] text-2xl sm:text-3xl lg:text-4xl font-bold text-start mb-4 lg:mb-0 lg:mr-2 col-span-1 md:col-span-2 lg:col-span-1 aos-init">
                    Be the best you with EQ</h1>
                <p className="text-sm lg:text-xl text-[#666568] font-semibold py-2 aos-init" data-aos="fade-left"
                    data-aosDelay="200">Not having your own emotions under control might be holding you back.</p>
                <p className="text-sm lg:text-xl text-[#666568] font-semibold py-2 aos-init" data-aos="fade-left"
                    data-aosDelay="400">Additionally, not understanding those of others stops you from being parent,
                    friend you can be.</p>
            </div>
            <div className="mx-2 md:mx-6 lg:mx-10 relative bg-[#eef8fe] min-h-[600px] rounded-2xl grid place-content-center aos-init"
                data-aos="fade-up">
                <div className="flex flex-col mx-4 lg:mx-8 py-10 lg:py-16"><span
                        className="text-[#3a3a3a] text-sm md:text-base lg:text-lg pl-1 text-center">Let your friends,
                        family, and co-workers (anonymously) rate your social skills.</span>
                    <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold text-center aos-init" data-aos="fade-up">Ever
                        wondered what others think of you?</h1>
                    <div data-aos="fade-up"
                        className="relative grid grid-cols-1 sm:grid-cols-3 gap-4 mt-20 mb-4 mx-4 aos-init"
                        style={{transform: 'none'}}>
                        <div
                            className="absolute border-l-4 sm:border-l-0 w-2 h-4/6 sm:h-0 sm:rotate-0 sm:w-4/6 left-6 top-[50%] translate-y-[-50%] sm:translate-y-0 sm:top-12 sm:left-[50%] sm:translate-x-[-50%] sm:border-b-4 border-dashed border-[#bbcbcc]">
                        </div>
                        <div data-aos="fade-left" data-aosDelay="200"
                            className="z-10 flex items-center sm:flex-col gap-2 col-span-1 aos-init">
                            <div className="flex items-center justify-center relative shrink-0"><img alt="spinner"
                                    loading="lazy" width="128" height="128" decoding="async" data-nimg="1"
                                    className="block my-6 h-12 lg:h-16 w-12 lg:w-16" style={{color: 'transparent'}}
                                    srcSet="https://densityfrontendui.netlify.app/_ipx/w_128,q_75/%2Fimages%2Fspinner.png?url=%2Fimages%2Fspinner.png&w=128&q=75"
                                    src="/_next/image?url=%2Fimages%2Fspinner.png&amp;w=256&amp;q=75" /><span
                                    className="absolute text-[#bbcbcc] text-xl lg:text-2xl text-center">1</span></div>
                            <p data-aos="fade-up" className="text-start sm:text-center text-sm font-semibold aos-init">
                                Answer questions on your social skills</p>
                        </div>
                        <div data-aos="fade-left" data-aosDelay="400"
                            className="z-10 flex items-center sm:flex-col gap-2 col-span-1 aos-init">
                            <div className="flex items-center justify-center relative shrink-0">
                                <img alt="spinner" loading="lazy" width="128" height="128" decoding="async"
                                    data-nimg="1" className="block my-6 h-12 lg:h-16 w-12 lg:w-16"  style={{color:'transparent'}}
                                    srcSet="https://densityfrontendui.netlify.app/_ipx/w_128,q_75/%2Fimages%2Fspinner.png?url=%2Fimages%2Fspinner.png&w=128&q=75"
                                    src="/_next/image?url=%2Fimages%2Fspinner.png&amp;w=256&amp;q=75" /><span
                                    className="absolute text-[#bbcbcc] text-xl lg:text-2xl text-center">2</span>
                            </div>
                            <p data-aos="fade-right" className="text-start sm:text-center text-sm font-semibold aos-init">
                                Let others anonymously answer the same questions about you</p>
                        </div>
                        <div data-aos="fade-left" data-aosDelay="600"
                            className="z-10 flex items-center sm:flex-col gap-2 col-span-1 aos-init">
                            <div className="flex items-center justify-center relative shrink-0"><img alt="spinner"
                                    loading="lazy" width="128" height="128" decoding="async" data-nimg="1"
                                    className="block my-6 h-12 lg:h-16 w-12 lg:w-16"   style={{color:'transparent'}}
                                    srcSet="https://densityfrontendui.netlify.app/_ipx/w_128,q_75/%2Fimages%2Fspinner.png?url=%2Fimages%2Fspinner.png&w=128&q=75"
                                    src="/_next/image?url=%2Fimages%2Fspinner.png&amp;w=256&amp;q=75" />
                                <span className="absolute text-[#bbcbcc] text-xl lg:text-2xl text-center">3</span>
                            </div>
                            <p data-aos="fade-left" className="text-start sm:text-center text-sm font-semibold aos-init">
                                Find out where you and others see things the same way - and where not!</p>
                        </div>
                    </div>
                    <div
                        className="relative grid grid-cols-1 items-center md:grid-cols-4 h-[400px] md:h-[200px] gap-4 mt-10 mb-10 shadow-xl bg-white md:mx-20 rounded-2xl p-2 md:p-4">
                        <div
                            className="absolute border-l-4 md:border-l-0 w-2 h-[80%] md:h-0 md:w-9/12 left-[50.2%] md:left-[50%] top-[50%] translate-y-[-50%] md:translate-y-0 md:top-24 translate-x-[-50%] md:border-b-4 border-[#bbcbcc]">
                        </div>
                        <div className="relative z-10 flex items-center flex-col gap-2 col-span-1">
                            <div className="bg-blue-500 w-6 h-6 rounded-full"></div>
                            <p data-aos="fade-up"
                                className="absolute top-2 left-[54%] md:-top-10 md:left-16 text-center text-white text-xs bg-blue-500 rounded-xl px-4 py-2 aos-init">
                                You</p>
                        </div>
                        <div className="relative z-10 flex items-center flex-col gap-2 col-span-1">
                            <div className="bg-yellow-400 w-6 h-6 rounded-full"></div>
                            <p data-aos="fade-left"
                                className="absolute w-fit top-2 right-[54%] md:top-8 md:-left-0 text-center text-white text-xs bg-yellow-400 rounded-xl px-4 py-2 aos-init">
                                Anonymonos 1</p>
                        </div>
                        <div className="relative z-10 flex items-center flex-col gap-2 col-span-1">
                            <div className="bg-pink-400 w-6 h-6 rounded-full"></div>
                            <p data-aos="fade-right"
                                className="absolute w-fit top-2 left-[54%] md:-top-12 md:left-20 text-center text-white text-xs bg-pink-400 rounded-xl px-4 py-2 aos-init">
                                Anonymonos 2</p>
                        </div>
                        <div className="relative z-10 flex items-center flex-col gap-2 col-span-1">
                            <div className="bg-green-400 w-6 h-6 rounded-full"></div>
                            <p data-aos="fade-up"
                                className="absolute w-fit top-2 right-[54%] md:top-8 md:left-20 text-center text-white text-xs bg-green-400 rounded-xl px-4 py-2 aos-init">
                                Anonymonos 3</p>
                        </div>
                    </div>
                </div>
            </div>
            <div className="mx-2 md:mx-6 lg:mx-10 min-h-screen grid place-content-center">
                <div className="flex flex-col items-center justify-center gap-2"><span
                        className="text-[#3a3a3a] text-sm md:text-base">We take privacy seriously</span>
                    <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold text-center">Before you get started</h1>
                    <p className="text-center text-base md:text-lg lg:text-xl mt-4">"We won't share your answers with anyone
                        (and won't ever tell you which friends said what about you)"
                        {/* <br> */}
                        with love,<span className="text-[#3a3a3a] text-sm md:text-base lg:text-lg pl-1">Team akuod</span>
                    </p><button
                        className="bg-black text-white text-sm md:text-base lg:text-lg rounded-[24px] px-6 py-3">Start a
                        test</button><span className="text-[#3a3a3a] text-xs md:text-sm">Take only 5 minutes</span>
                </div>
            </div>
            <div className="mx-2 md:mx-6 lg:mx-10 relative bg-[#f3f1ff] min-h-[600px] rounded-2xl grid place-content-center"
                style={{opacity: '1', transform: 'none'}}>
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 mx-4 lg:mx-8 py-10 lg:py-16">
                    <div>
                        <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold text-start">Work with us</h1>
                        <div data-aos="fade-up" className="bg-white px-8 py-6 rounded-2xl mt-4 pb-10 aos-init">
                            <img alt="playerBlueFace" loading="lazy"  width='128' height="128" decoding="async"
                                data-nimg="1" className="block h-10 lg:h-16 rounded-full w-fit"   style={{color:'transparent', width: '128', height:'128'}}
                                srcSet="https://densityfrontendui.netlify.app/_ipx/w_128,q_75/%2Fimages%2FplayerBlueFace.png?url=%2Fimages%2FplayerBlueFace.png&w=128&q=75"
                                src="/_next/image?url=%2Fimages%2FplayerBlueFace.png&amp;w=256&amp;q=75" />
                            <h2 className="mt-2 text-sm md:text-base lg:text-xl font-bold text-start">About</h2>
                            <p className="text-xs md:text-sm lg:text-base text-start mt-2">At ahead our goal is to make
                                self- improvement fun and lasting. We know there's a way how to make it work. And that's
                                what aHead is all about!</p>
                        </div>
                        <div data-aos="fade-up" data-aos-delay="200"
                            className="bg-[#fef6f0] px-8 py-6 rounded-2xl -mt-6 aos-init">
                            <h2 className="mt-2 text-sm md:text-base lg:text-xl font-bold text-start">Product</h2>
                            <p className="text-xs md:text-sm lg:text-base text-start mt-2">Sure, you could spend ages
                                reading books or sitting in seminars on how to become a better spouse, parent, or
                                manager - like we did...</p>
                        </div>
                    </div>
                    <div>
                        <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold text-end mr-12 text-[#80be1f]">ahead</h1>
                        <div
                            className="grid grid-flow-row items-center justify-center overflow-y-auto px-2 sm:px-10 gap-y-4 max-h-[500px] py-4">
                            <div className="flex flex-col p-2 sm:p-6 items-center justify-center gap-4 bg-white rounded-xl">
                                <h1 className="text-sm md:text-base lg:text-xl font-bold text-start">Power through, even
                                    when the going gets tough</h1>
                                <p className="text-start text-base md:text-lg lg:text-xl">We help you spot and work around
                                    whatever stands in the way, be it bad habits, fears, etc.</p>
                            </div>
                            <div className="flex flex-col p-6 items-center justify-center gap-4 bg-white rounded-xl">
                                <h1 className="text-sm md:text-base lg:text-xl font-bold text-start">Power through, even
                                    when the going gets tough</h1>
                                <p className="text-start text-base md:text-lg lg:text-xl">We help you spot and work around
                                    whatever stands in the way, be it bad habits, fears, etc.</p>
                            </div>
                            <div className="flex flex-col p-6 items-center justify-center gap-4 bg-white rounded-xl">
                                <h1 className="text-sm md:text-base lg:text-xl font-bold text-start">Power through, even
                                    when the going gets tough</h1>
                                <p className="text-start text-base md:text-lg lg:text-xl">We help you spot and work around
                                    whatever stands in the way, be it bad habits, fears, etc.</p>
                            </div>
                            <div className="flex flex-col p-6 items-center justify-center gap-4 bg-white rounded-xl">
                                <h1 className="text-sm md:text-base lg:text-xl font-bold text-start">Power through, even
                                    when the going gets tough</h1>
                                <p className="text-start text-base md:text-lg lg:text-xl">We help you spot and work around
                                    whatever stands in the way, be it bad habits, fears, etc.</p>
                            </div>
                            <div className="flex flex-col p-6 items-center justify-center gap-4 bg-white rounded-xl">
                                <h1 className="text-sm md:text-base lg:text-xl font-bold text-start">Power through, even
                                    when the going gets tough</h1>
                                <p className="text-start text-base md:text-lg lg:text-xl">We help you spot and work around
                                    whatever stands in the way, be it bad habits, fears, etc.</p>
                            </div>
                            <div className="flex flex-col p-6 items-center justify-center gap-4 bg-white rounded-xl">
                                <h1 className="text-sm md:text-base lg:text-xl font-bold text-start">Power through, even
                                    when the going gets tough</h1>
                                <p className="text-start text-base md:text-lg lg:text-xl">We help you spot and work around
                                    whatever stands in the way, be it bad habits, fears, etc.</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="mx-2 md:mx-6 lg:mx-10 px-8 py-16 md:py-24 lg:py-48">
                <h1
                    className="text-3xl sm:text-4xl lg:text-5xl font-bold text-start mb-2 lg:mb-0 lg:mr-2 col-span-1 md:col-span-2 lg:col-span-1">
                    Open vacancies</h1>
                <div className="grid grid-flow-row sm:grid-cols-2 lg:grid-cols-3 items-center justify-center gap-4 mt-6">
                    <div data-aos="fade-right" className="bg-[#fefbec] p-4 rounded-xl flex flex-col aos-init">
                        <h2 className="text-sm md:text-base lg:text-xl font-semibold text-start">Senior Full-Stack Engineer
                        </h2>
                        <ul className="list-disc list-inside mt-2">
                            <li>Full-time position</li>
                            <li>Berlin or remote</li>
                            <li>€65-85k, 0.5-1.50% equity share options</li>
                        </ul>
                    </div>
                    <div data-aos="fade-up" className="bg-[#fefbec] p-4 rounded-xl flex flex-col aos-init">
                        <h2 className="text-sm md:text-base lg:text-xl font-semibold text-start">Senior Designer</h2>
                        <ul className="list-disc list-inside mt-2">
                            <li>Full-time position</li>
                            <li>Berlin or remote</li>
                            <li>€40-55k, 0.25-0.50% equity share options</li>
                        </ul>
                    </div>
                    <div data-aos="fade-left" className="bg-[#fefbec] p-4 rounded-xl flex flex-col aos-init">
                        <h2 className="text-sm md:text-base lg:text-xl font-semibold text-start">Superstar Intern</h2>
                        <ul className="list-disc list-inside mt-2">
                            <li>Full-time position</li>
                            <li>Berlin or remote</li>
                            <li>€20-24k, 0.5-1.50% equity share options</li>
                        </ul>
                    </div>
                </div>
            </div>
        </main>
        <div className="border-t-4 border-gray-200 grid place-content-center pt-20 pb-10 text-center mx-0">
            <div className="flex flex-col items-center justify-center">
                <img alt="logo" loading="lazy" width="64" height="64"
                    decoding="async" data-nimg="1"   style={{color:'transparent'}}
                    srcSet="https://densityfrontendui.netlify.app/_ipx/w_64,q_75/%2Fimages%2Flogo.png?url=%2Fimages%2Flogo.png&w=64&q=75"
                    src="https://densityfrontendui.netlify.app/_next/image?url=%2Fimages%2Flogo.png&amp;w=128&amp;q=75" />
                <h1 className="text-lg text-[#80be1f] md:text-xl lg:text-2xl font-semibold text-start">ahead</h1>
                <div className="flex flex-col sm:flex-row items-center justify-center gap-2 sm:gap-10 my-4">
                    <div className="flex items-center justify-center gap-2"><svg stroke="currentColor" fill="currentColor"
                            strokeWidth="0" viewBox="0 0 512 512"
                            className="w-8 h-8 p-2 inline-block bg-[#80be1f] rounded-full" height="1em" width="1em"
                            xmlns="http://www.w3.org/2000/svg">
                            <path
                                d="M444.52 3.52L28.74 195.42c-47.97 22.39-31.98 92.75 19.19 92.75h175.91v175.91c0 51.17 70.36 67.17 92.75 19.19l191.9-415.78c15.99-38.39-25.59-79.97-63.97-63.97z">
                            </path>
                        </svg>
                        <p className="text-sm md:text-base lg:text-xl font-semibold text-start">Berlin, Germany</p>
                    </div>
                    <div className="flex items-center justify-center gap-2">
                        <svg stroke="currentColor" fill="currentColor" strokeWidth="0" viewBox="0 0 512 512"
                            className="w-8 h-8 p-2 inline-block bg-[#80be1f] rounded-full" height="1em" width="1em"
                            xmlns="http://www.w3.org/2000/svg">
                            <path
                                d="M497.39 361.8l-112-48a24 24 0 0 0-28 6.9l-49.6 60.6A370.66 370.66 0 0 1 130.6 204.11l60.6-49.6a23.94 23.94 0 0 0 6.9-28l-48-112A24.16 24.16 0 0 0 122.6.61l-104 24A24 24 0 0 0 0 48c0 256.5 207.9 464 464 464a24 24 0 0 0 23.4-18.6l24-104a24.29 24.29 0 0 0-14.01-27.6z">
                            </path>
                        </svg>
                        <p className="text-sm md:text-base lg:text-xl font-semibold text-start">+49 123 456 789</p>
                    </div>
                </div>
                <button
                    className="flex items-center bg-black text-white rounded-lg px-2 lg:px-3 pr-3 lg:pr-4 py-1 space-x-1 hover:opacity-80 transition ease-in-out duration-200">
                    <div className="flex-shrink-0">
                        <img alt="App Store Icon" loading="lazy" width="64" height="64" decoding="async" data-nimg="1"
                            className="w-6 h-6"   style={{color:'transparent'}}
                            srcSet="https://densityfrontendui.netlify.app/_ipx/w_64,q_75/%2Fimages%2Fapple.png?url=%2Fimages%2Fapple.png&w=64&q=75"
                            src="https://densityfrontendui.netlify.app/_next/image?url=%2Fimages%2Fapple.png&amp;w=128&amp;q=75" />
                    </div>
                    <div className="flex flex-col">
                        <span className="text-[12px]">Download on the</span>
                        <span className="text-sm font-semibold">App Store</span>
                    </div>
                </button>
                <p className="text-xs lg:text-sm text-start mt-4">©ahead All rights reserved</p>
            </div>
        </div>
    </div>

    <script id="__NEXT_DATA__" type="application/json">
           {/* {

               "props"
               :{"pageProps":{ }},"page":"/","query":{ },"buildId":"-bZmqSVWIDBPaJMt8Tbna","nextExport":true,"autoExport":true,"isFallback":false,"scriptLoader":[]  
            }                                                                  */}
                                                                            </script>
    <next-route-announcer>
        <p aria-live="assertive" id="__next-route-announcer__" role="alert"
            style={{border: '0px', clip: 'rect(0px, 0px, 0px, 0px)', height: '1px', margin: '-1px', overflow : 'hidden', padding: '0px',position: 'absolute', top: '0px', width: '1px', whiteSpace: 'nowrap', overflowWrap:' normal'}}>

        </p>
    </next-route-announcer>
    </>
  )
}

export default Task
