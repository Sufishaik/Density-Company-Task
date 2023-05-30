import React from 'react'
import "../Navbar/Navbar.css";
function Navbar() {

    return (
        <div>
            <div className="nav-v2" data-site-nav-v2="">
                <div className="nav-v2__dark-overlay"></div>

                <div className="nav-v2__wrapper">
                    <button className="nav-v2-burger" data-nav-v2-burger="" aria-label="Toggle mobile menu">
                        <span></span>
                        <span></span>
                        <span></span>
                    </button>

                    <nav className="nav-v2-main" role="navigation" data-nav-v2-mobile="">
                        <div className="nav-v2-main__wrapper">
                            <ul ul="" className="nav-v2-main__list">
                                <li className="nav-v2-main__item">
                                    <a data-nav-event-clicked="Hire Designers" href="https://dribbble.com/shots/19807069-Ahead-app-redesign-concept/hiring">Find talent</a>
                                </li>

                                <li className="nav-v2-main__item">
                                    <a href="https://dribbble.com/shots/19807069-Ahead-app-redesign-concept/for-designers" data-nav-event-clicked="For Designers">For designers</a>
                                </li>

                                <li className="nav-v2-main__item">
                                    <a data-nav-event-clicked="Inspiration" href="https://dribbble.com/shots/19807069-Ahead-app-redesign-concept/shots/popular">Inspiration</a>
                                </li>

                                <li className="nav-v2-main__item">
                                    <a data-nav-event-clicked="Learn Design" href="/learn">Learn design</a>
                                </li>

                                <li className="nav-v2-main__item nav-v2-main__item--pink">
                                    <a data-nav-event-clicked="Go Pro" href="/pro">Go Pro</a>
                                </li>

                            </ul>
                        </div>
                    </nav>

                    <a className="nav-v2-logo" href="/" data-nav-event-clicked="Logo" aria-label="Back to home page">
                        <svg xmlns="http://www.w3.org/2000/svg" width="76" height="30" viewBox="0 0 76 19" fill="none" className="fill-current">
                            <title>Dribbble: the community for graphic design</title>

                        </svg>

                    </a>

                    <div className="nav-v2-dynamic nav-v2-dynamic--loaded" data-nav-v2-dynamic="">
                        <div className="nav-v2-dynamic__logged-in">
                            <form className="nav-v2-search" action="/search">
                                <svg xmlns="http://www.w3.org/2000/svg" width="17" height="17" viewBox="0 0 17 17" fill="none" role="img" className="icon nav-v2-search__icon">
                                    <path d="M1.5 7.75C1.5 9.4076 2.15848 10.9973 3.33058 12.1694C4.50269 13.3415 6.0924 14 7.75 14C9.4076 14 10.9973 13.3415 12.1694 12.1694C13.3415 10.9973 14 9.4076 14 7.75C14 6.0924 13.3415 4.50269 12.1694 3.33058C10.9973 2.15848 9.4076 1.5 7.75 1.5C6.0924 1.5 4.50269 2.15848 3.33058 3.33058C2.15848 4.50269 1.5 6.0924 1.5 7.75V7.75Z" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"></path>
                                    <path d="M12.814 12.8132L15.5 15.4999" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"></path>
                                </svg>

                                <input className="nav-v2-search__input" type="text" name="q" placeholder="Search..." autoComplete="off" defaultValue="" />

                            </form>

                            <a className="nav-v2-dynamic__share-work btn2 btn2--medium js-site-nav-upload" data-nav-event-clicked="Share my work" href="/uploads/new">Share work</a>

                            <a className="nav-v2-search-btn" title="Search" data-nav-event-clicked="Search" href="/search">
                                <svg xmlns="http://www.w3.org/2000/svg" width="17" height="17" viewBox="0 0 17 17" fill="none" role="img" className="icon nav-v2-search-btn__icon">
                                    <path d="M1.5 7.75C1.5 9.4076 2.15848 10.9973 3.33058 12.1694C4.50269 13.3415 6.0924 14 7.75 14C9.4076 14 10.9973 13.3415 12.1694 12.1694C13.3415 10.9973 14 9.4076 14 7.75C14 6.0924 13.3415 4.50269 12.1694 3.33058C10.9973 2.15848 9.4076 1.5 7.75 1.5C6.0924 1.5 4.50269 2.15848 3.33058 3.33058C2.15848 4.50269 1.5 6.0924 1.5 7.75V7.75Z" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"></path>
                                    <path d="M12.814 12.8132L15.5 15.4999" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"></path>
                                </svg>

                            </a>
                            <div className="nav-v2-avatar ">
                                <a data-nav-v2-avatar="true" title="Open profile" href="/DiggiSufi">
                                    <img className="nav-v2-avatar__image" alt="Sufi" width="32" height="32" src="https://cdn.dribbble.com/users/16403313/avatars/normal/data?1685345774" />
                                </a>
                                <div className="nav-v2-profile" data-nav-v2-profile="" data-nav-event-category="Profile">
                                    <div className="nav-v2-profile__wrapper" data-nav-v2-profile-wrapper="">
                                        <a className="nav-v2-user" title="Open profile" data-nav-event-clicked="Profile" href="/DiggiSufi">
                                            <img className="nav-v2-user__image" alt="Sufi" width="80" height="80" src="https://cdn.dribbble.com/users/16403313/avatars/normal/data?1685345774" />
                                            <div className="nav-v2-user__name">Sufi</div>
                                        </a>
                                        <div className="nav-v2-sessions">
                                        </div>

                                        <a className="nav-v2-profile__share-work btn2 btn2--medium btn2--gray" data-nav-event-clicked="Share my work" href="/uploads/new">Share work</a>


                                        <ul className="nav-v2-profile__menu">


                                            <li className="nav-v2-profile__item">
                                                <a data-nav-event-clicked="Work preferences" data-open-availability-modal="work-types" href="#">Work preferences</a>
                                            </li>


                                            <li className="nav-v2-profile__item">
                                                <a data-nav-event-clicked="Settings" href="/account">Settings</a>
                                            </li>


                                            <li className="nav-v2-profile__item nav-v2-profile__item--divided">
                                                <form method="POST" action="https://dribbble.com/session">
                                                    <input name="_method" value="delete" type="hidden" />
                                                    <input name="authenticity_token" value="MWFLFcyQegMEO3MbwOg2X0izqFu2lkFj3+ymSNb6i0DLa+9Sl6UV5xKBrzfhyz05NZHUF6ZMdvFYDhtNLhWwNw==" type="hidden" />
                                                    <button type="submit" data-nav-event-clicked="Sign Out">Sign out</button>
                                                </form>
                                            </li>
                                        </ul>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                </div>
            </div>

            <div className="notice verify" role="alert">
                <h2>Verify your email to get the most out of Dribbble. Didn't receive an email? <a href="/account/unverified">Resend confirmation</a></h2>
            </div>
            <div className="notice-alert">
                {/* <h3><!-- message goes here --></h3> */}
                <div className="close" aria-label="close">
                    <img className="lazyload" data-src="https://cdn.dribbble.com/assets/icon-shot-x-light-f3676a5f3f6b7d0902be702c858a78e3de991957bbb7cec07daef7150e284fd8.png" width="16" height="16" alt="close" />
                </div>
            </div>


            <div id="wrap">




                <div id="wrap-inner" className="flushed">
                    <div id="content" role="main">









                        <div className="non-overlay group">














                            <div className="shot-container js-shot-container lazyload-hidden-element ">
                                <div className="shot-content js-media-content ">
                                    <div className="shot-content-container">


                                        <div className="shot-header js-shot-header">
                                            <div className="shot-header-content">
                                                <div className="shot-user-container">
                                                    <div className="shot-user-avatar shot-user-avatar-large-screens">
                                                        <a className="hoverable url" rel="contact" title="Taras Migulko" href="/ui_migulko"><picture>
                                                            <source srcSet="https://cdn.dribbble.com/users/1998175/avatars/normal/af46ac7b92eb85f76f5a3fe4f214fdf2.jpg?1542363868" media="(-webkit-min-device-pixel-ratio: 1.5), (min--moz-device-pixel-ratio: 1.5), (-o-min-device-pixel-ratio: 3/2), (min-device-pixel-ratio: 1.5), (min-resolution: 1.5dppx)" />
                                                            <source srcSet="https://cdn.dribbble.com/users/1998175/avatars/small/af46ac7b92eb85f76f5a3fe4f214fdf2.jpg?1542363868" />
                                                            <img className="photo" alt="Taras Migulko" width="48" height="48" src="https://cdn.dribbble.com/users/1998175/avatars/small/af46ac7b92eb85f76f5a3fe4f214fdf2.jpg?1542363868" />
                                                        </picture>
                                                        </a>
                                                    </div>
                                                    <div className="shot-header-details">
                                                        <h1 className="shot-header-title">Ahead app redesign concept</h1>
                                                        <div className="display-flex align-center width-100">
                                                            <div className="shot-user-avatar shot-user-avatar-small-screens">
                                                                <a className="hoverable url" rel="contact" title="Taras Migulko" href="/ui_migulko"><picture>
                                                                    <source srcSet="https://cdn.dribbble.com/users/1998175/avatars/normal/af46ac7b92eb85f76f5a3fe4f214fdf2.jpg?1542363868" media="(-webkit-min-device-pixel-ratio: 1.5), (min--moz-device-pixel-ratio: 1.5), (-o-min-device-pixel-ratio: 3/2), (min-device-pixel-ratio: 1.5), (min-resolution: 1.5dppx)" />
                                                                    <source srcSet="https://cdn.dribbble.com/users/1998175/avatars/small/af46ac7b92eb85f76f5a3fe4f214fdf2.jpg?1542363868" />
                                                                    <img className="photo" alt="Taras Migulko" width="48" height="48" src="https://cdn.dribbble.com/users/1998175/avatars/small/af46ac7b92eb85f76f5a3fe4f214fdf2.jpg?1542363868" />
                                                                </picture>
                                                                </a>
                                                            </div>
                                                            <div className="shot-header-author-and-actions">
                                                                <div className="shot-user-details">
                                                                    <a className="hoverable shot-user-link" rel="contact" href="/ui_migulko">Taras Migulko</a>
                                                                </div>

                                                                <div className="shot-header-action-links js-shot-header-action-links ">
                                                                    <span className="shot-user-divider-dot large-screens-only">•</span>
                                                                    <div className="follow-prompt follow-prompt-text follow-link" data-ga-name="ui_migulko" data-ga-key="UA-246355115-1">

                                                                        <a className="form-btn follow shot-follow sentence-btn " href="/ui_migulko/followers">Follow</a>
                                                                        <a className="form-btn tipsy-mobile-disabled unfollow stripped-btn" href="/ui_migulko/followers/ui_migulko">
                                                                            <span>Following</span>
                                                                        </a></div>
                                                                    <span className="shot-user-divider-dot">•</span>
                                                                    <div className="js-contact-overlay-trigger">







                                                                        <div className="profile-message">

                                                                            <a className="contact message-btn " rel="tipsy" data-message-recipient="1998175" data-button-location="profile" href="/messages/new?recipient_id=ui_migulko" original-title="">
                                                                                <span>Hire Me</span>
                                                                            </a></div>

                                                                    </div>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                                <div className="shot-header-actions-container">
                                                    <ul className="actions shot-actions">

                                                        <div className="shot-action-item shot-action-item-desktop-only">
                                                            <li data-bucket-container="true">


                                                                <a className="bucket-shot form-btn" data-bucket-add="true" data-screenshot-id="19807069" data-screenshot-user-id="1998175" data-is-from-modal="true" title="Save shot" href="/shots/19807069-Ahead-app-redesign-concept/bucketings/new">

                                                                    Save
                                                                </a>
                                                            </li>

                                                        </div>

                                                        <div className="shot-action-item shot-action-item-desktop-only">


                                                            <div className="like-action-19807069 modal-true  shot-action">
                                                                {/* <script>
        if (typeof(Dribbble) != "undefined" && typeof(Dribbble.Shots) != "undefined") {
          Dribbble.Shots.update(19807069, {
            likes_count: 1113,
            liked: true
        });
        }
      </script> */}
                                                                <a className="form-btn highlighted stats-action like-shot current-user-likes" rel="no-follow" data-fav-toggle="shot" data-screenshot-id="19807069" data-primary-like="true" data-is-from-modal="true" data-unlike-path="/DiggiSufi/likes/19807069-Ahead-app-redesign-concept?modal=true" data-like-path="/DiggiSufi/likes?modal=true&amp;screenshot_id=19807069-Ahead-app-redesign-concept" title="You like this shot. Click to undo." href="/DiggiSufi/likes/19807069-Ahead-app-redesign-concept?modal=true">
                                                                    <span className="like-button-icon-loading"></span>
                                                                    <svg xmlns="http://www.w3.org/2000/svg" enableBackground="new 0 0 24 24" viewBox="0 0 24 24" role="img" className="icon "><path d="m18.199 2.04c-2.606-.284-4.262.961-6.199 3.008-2.045-2.047-3.593-3.292-6.199-3.008-3.544.388-6.321 4.43-5.718 7.96.966 5.659 5.944 9 11.917 12 5.973-3 10.951-6.341 11.917-12 .603-3.53-2.174-7.572-5.718-7.96z"></path></svg>

                                                                    1113
                                                                </a>  </div>

                                                        </div>
                                                    </ul>
                                                    {/* <!----> */}
                                                </div>
                                            </div>
                                        </div>




                                        <section className="  case-study-shot-media" data-screenshot_id="19807069">
                                            <div className="js-media-container shot-media-container  " data-shot-id="19807069" data-type="page">


                                                <div className="shot-image-color-palette-container">



                                                </div>
                                            </div>
                                        </section>



                                        <div id="ssr-app" className="shot-page-container" data-v-0764b874="">
                                            <div data-test="content-block-468083" className="content-block-container full-width" data-v-0764b874="">
                                                <div className="block-media-wrapper content-block" style={{ aspecratio: 3333333333333333 }} data-v-71abd4c2="" data-v-0764b874="">
                                                    <div data-v-71abd4c2="" className="block-media contain auto-width false" style={{ aspectratio: .33333 / 1, objectFit: 'contain' }}>
                                                        <div data-v-27edef16="" data-v-71abd4c2="" className="v-video video-container is-loaded">
                                                            <div data-v-27edef16="" className="video-progress-container">
                                                                <video data-v-27edef16="" data-test="video-content" preload="auto" src="https://cdn.dribbble.com/userupload/3938332/file/original-984e9c8aa7bb40df5be856ec56201be1.mp4" playsInline={true} loop="loop" draggable="false" className="" autoPlay="autoplay"></video>
                                                                <div data-v-27edef16="" data-test-id="progress-bar-container" className="progress-bar-container">
                                                                    <div data-v-27edef16="" data-test-id="progress-bar" className="progress-bar" style={{ transform: 'translateX(12.8655)' }}>
                                                                        {/* trslateX(12.8656) */}
                                                                    </div></div>
                                                            </div></div></div></div>
                                            </div>
                                            <div data-test="content-block-468081" className="content-block-container" data-v-0764b874="">
                                                <div className="content-block" data-v-0ffb479a="" data-v-0764b874="">
                                                    <p>Hey all, </p><p></p>
                                                    <p>I've decided to make a redesign and animation for the <a target="_blank" rel="noopener noreferrer nofollow" href="https://www.ahead-app.com/">Ahead</a> app. Please review and happy to read your feedback!</p>
                                                    <p></p>

                                                    <p>Design — Figma</p>
                                                    <p style={{ textAlign: 'start' }}>Illustrations — Adobe Illustrator</p>
                                                    <p style={{ textAlign: 'start' }}>Animation — Adobe After Effects</p>
                                                    <p style={{ textAlign: 'start' }}></p>
                                                    <p style={{ textAlign: 'start' }}>************&nbsp;</p>
                                                    <p style={{ textAlign: 'start' }}>💌 I am open to new projects!&nbsp;<a target="_blank" rel="noopener noreferrer nofollow" href="mailto:hey@migulko.cz">hey@migulko.cz</a>&nbsp;</p>
                                                    <p style={{ textAlign: 'start' }}>************</p>
                                                    <p style={{ textAlign: 'start' }}><a target="_blank" rel="noopener noreferrer nofollow" href="https://www.instagram.com/ui_migulko/">Instagram</a>&nbsp;|&nbsp;
                                                        <a target="_blank" rel="noopener noreferrer nofollow" href="https://www.linkedin.com/in/taras-migulko-818654152/">Linkedin</a>&nbsp;|&nbsp;<a target="_blank" rel="noopener noreferrer nofollow" href="https://ui8.net/users/ui_migulko">UI8</a></p><p></p>
                                                </div></div>




                                            <div data-test="content-block-468082" className="content-block-container full-width" data-v-0764b874=""><div className="block-media-wrapper content-block" style={{ aspectRatio: 0.1650429799426934 }} data-v-71abd4c2="" data-v-0764b874=""><div data-v-71abd4c2="" className="block-media contain auto-width is-lazy" style={{ aspectRatio: 0.165043 / 1, objectFit: 'contain' }}> <a data-v-71abd4c2="" data-photoswipe-image="" href="https://cdn.dribbble.com/userupload/3938331/file/original-6350195b7dd8a06f9dbce8a8aeee3e72.jpg?compress=1&amp;resize=752x" data-pswp-srcset="https://cdn.dribbble.com/userupload/3938331/file/original-6350195b7dd8a06f9dbce8a8aeee3e72.jpg?compress=1&amp;resize=1440x8725 1440w, https://cdn.dribbble.com/userupload/3938331/file/original-6350195b7dd8a06f9dbce8a8aeee3e72.jpg?compress=1&amp;resize=640x3878 640w, https://cdn.dribbble.com/userupload/3938331/file/original-6350195b7dd8a06f9dbce8a8aeee3e72.jpg?compress=1&amp;resize=850x5150 850w, https://cdn.dribbble.com/userupload/3938331/file/original-6350195b7dd8a06f9dbce8a8aeee3e72.jpg?compress=1&amp;resize=1024x6204 1024w" data-pswp-width="1440" data-pswp-height="8725" target="_blank"><img data-v-71abd4c2="" data-test="v-img" alt="" width="1440" height="8725" data-sizes="auto" data-aspectratio="0.1650429799426934" draggable="false" className="v-img content-block border-radius-8 lazyautosizes lazyloaded" data-srcset="https://cdn.dribbble.com/userupload/3938331/file/original-6350195b7dd8a06f9dbce8a8aeee3e72.jpg?compress=1&amp;resize=320x1939&amp;vertical=center 320w, https://cdn.dribbble.com/userupload/3938331/file/original-6350195b7dd8a06f9dbce8a8aeee3e72.jpg?compress=1&amp;resize=400x2424&amp;vertical=center 400w, https://cdn.dribbble.com/userupload/3938331/file/original-6350195b7dd8a06f9dbce8a8aeee3e72.jpg?compress=1&amp;resize=640x3878&amp;vertical=center 640w, https://cdn.dribbble.com/userupload/3938331/file/original-6350195b7dd8a06f9dbce8a8aeee3e72.jpg?compress=1&amp;resize=752x4556&amp;vertical=center 752w, https://cdn.dribbble.com/userupload/3938331/file/original-6350195b7dd8a06f9dbce8a8aeee3e72.jpg?compress=1&amp;resize=1024x6204&amp;vertical=center 1024w, https://cdn.dribbble.com/userupload/3938331/file/original-6350195b7dd8a06f9dbce8a8aeee3e72.jpg?compress=1&amp;resize=1200x7271&amp;vertical=center 1200w, https://cdn.dribbble.com/userupload/3938331/file/original-6350195b7dd8a06f9dbce8a8aeee3e72.jpg?compress=1&amp;resize=1504x9113&amp;vertical=center 1504w, https://cdn.dribbble.com/userupload/3938331/file/original-6350195b7dd8a06f9dbce8a8aeee3e72.jpg?compress=1&amp;resize=2048x12409&amp;vertical=center 2048w, https://cdn.dribbble.com/userupload/3938331/file/original-6350195b7dd8a06f9dbce8a8aeee3e72.jpg?compress=1&amp;resize=815x4938&amp;vertical=center 815w, https://cdn.dribbble.com/userupload/3938331/file/original-6350195b7dd8a06f9dbce8a8aeee3e72.jpg?compress=1&amp;resize=1630x9876&amp;vertical=center 1630w" sizes="819px" srcSet="https://cdn.dribbble.com/userupload/3938331/file/original-6350195b7dd8a06f9dbce8a8aeee3e72.jpg?compress=1&amp;resize=320x1939&amp;vertical=center 320w, https://cdn.dribbble.com/userupload/3938331/file/original-6350195b7dd8a06f9dbce8a8aeee3e72.jpg?compress=1&amp;resize=400x2424&amp;vertical=center 400w, https://cdn.dribbble.com/userupload/3938331/file/original-6350195b7dd8a06f9dbce8a8aeee3e72.jpg?compress=1&amp;resize=640x3878&amp;vertical=center 640w, https://cdn.dribbble.com/userupload/3938331/file/original-6350195b7dd8a06f9dbce8a8aeee3e72.jpg?compress=1&amp;resize=752x4556&amp;vertical=center 752w, https://cdn.dribbble.com/userupload/3938331/file/original-6350195b7dd8a06f9dbce8a8aeee3e72.jpg?compress=1&amp;resize=1024x6204&amp;vertical=center 1024w, https://cdn.dribbble.com/userupload/3938331/file/original-6350195b7dd8a06f9dbce8a8aeee3e72.jpg?compress=1&amp;resize=1200x7271&amp;vertical=center 1200w, https://cdn.dribbble.com/userupload/3938331/file/original-6350195b7dd8a06f9dbce8a8aeee3e72.jpg?compress=1&amp;resize=1504x9113&amp;vertical=center 1504w, https://cdn.dribbble.com/userupload/3938331/file/original-6350195b7dd8a06f9dbce8a8aeee3e72.jpg?compress=1&amp;resize=2048x12409&amp;vertical=center 2048w, https://cdn.dribbble.com/userupload/3938331/file/original-6350195b7dd8a06f9dbce8a8aeee3e72.jpg?compress=1&amp;resize=815x4938&amp;vertical=center 815w, https://cdn.dribbble.com/userupload/3938331/file/original-6350195b7dd8a06f9dbce8a8aeee3e72.jpg?compress=1&amp;resize=1630x9876&amp;vertical=center 1630w" /></a></div></div></div>
                                        </div>


                                        <div className="shot-description-container ">
                                        </div>











                                        <div className="user-details-section">
                                            <div className="user-avatar-container">
                                                <span className="user-avatar-line"></span>
                                                <a className="url" rel="contact" title="Taras Migulko" href="/ui_migulko"><picture>
                                                    <source srcSet="https://cdn.dribbble.com/users/1998175/avatars/normal/af46ac7b92eb85f76f5a3fe4f214fdf2.jpg?1542363868" media="(-webkit-min-device-pixel-ratio: 1.5), (min--moz-device-pixel-ratio: 1.5), (-o-min-device-pixel-ratio: 3/2), (min-device-pixel-ratio: 1.5), (min-resolution: 1.5dppx)" />
                                                    <source srcSet="https://cdn.dribbble.com/users/1998175/avatars/small/af46ac7b92eb85f76f5a3fe4f214fdf2.jpg?1542363868" />
                                                    <img className="photo" alt="Taras Migulko" src="https://cdn.dribbble.com/users/1998175/avatars/small/af46ac7b92eb85f76f5a3fe4f214fdf2.jpg?1542363868" />
                                                </picture>
                                                </a>
                                                <span className="user-avatar-line"></span>
                                            </div>

                                            <a className="user-name" rel="contact" href="/ui_migulko">Taras Migulko</a>

                                            <div className="user-bio">
                                                Email me hey@migulko. cz
                                            </div>









                                            <div className="profile-message">

                                                <a className="contact message-btn form-sub text-align-center w-100 " rel="tipsy" data-message-recipient="1998175" data-button-location="profile" href="/messages/new?recipient_id=ui_migulko" original-title="Send a message about a work opportunity">
                                                    <span className="check"><svg xmlns="http://www.w3.org/2000/svg" enableBackground="new 0 0 24 24" viewBox="0 0 24 24" role="img" className="icon "><path d="m21.28 4.473c-.848-.721-2.109-.604-2.817.262l-8.849 10.835-4.504-3.064c-.918-.626-2.161-.372-2.773.566s-.364 2.205.555 2.83l7.494 5.098 11.151-13.653c.707-.866.592-2.152-.257-2.874z"></path></svg>
                                                    </span>
                                                    <svg xmlns="http://www.w3.org/2000/svg" enableBackground="new 0 0 24 24" viewBox="0 0 24 24" role="img" className="icon "><path d="m12 13.595c-.715 0-1.43-.153-2.095-.46l-9.905-4.572v11.437c0 1.105.895 2 2 2h20c1.105 0 2-.895 2-2v-11.437l-9.905 4.572c-.665.307-1.38.46-2.095.46zm10-11.595h-20c-1.105 0-2 .895-2 2v2.36l10.743 4.958c.799.368 1.716.369 2.515 0l10.742-4.958v-2.36c0-1.105-.895-2-2-2z"></path></svg>

                                                    <span>Hire Me </span>
                                                </a></div>


                                        </div>
                                        <div className="more-by-user-section">
                                            <div className="more-by-heading-container">
                                                <h4>More by Taras Migulko</h4>
                                                <a href="/ui_migulko">View profile</a>
                                            </div>

                                            <div className="more-by-thumbnails-container js-more-by lazyloaded" data-include="/shots/19807069/more_by" data-currentinclude="">    <div className="more-by-shot-thumbnail">


                                                <li id="screenshot-20309020" data-thumbnail-id="20309020" className="shot-thumbnail js-thumbnail shot-thumbnail-container      " data-ad-data="" data-boost-id="" data-is-boost-fallback="">


                                                    <div className="js-thumbnail-base shot-thumbnail-base disabled-shot-section dribbble-shot dribbble video " data-video-teaser-small="https://cdn.dribbble.com/userupload/4254484/file/small-1a17797fa3792cb973f25cba514909c3.mp4" data-video-teaser-medium="https://cdn.dribbble.com/userupload/4254484/file/large-ed034e1de974a2b36db054d7e2001fda.mp4" data-video-teaser-large="https://cdn.dribbble.com/userupload/4254484/file/large-ed034e1de974a2b36db054d7e2001fda.mp4" data-video-teaser-original="https://cdn.dribbble.com/userupload/4254484/file/original-352a8ba3af6df8071d3fd78602df8dcf.mp4">
                                                        <figure className="js-thumbnail-placeholder shot-thumbnail-placeholder">
                                                            <noscript>
                                                                <img src="https://cdn.dribbble.com/userupload/4254484/file/still-b08b53f42e2641ed66963d951dd91db1.png?resize=400x0" alt="Home app product page animation app app design best website 2023 dribbble design home page interaction interaction landing landing page landing page design motion motion design motion web top website dribbble 2023 ui ux web website design" />
                                                            </noscript>
                                                            <img alt="Home app product page animation app app design best website 2023 dribbble design home page interaction interaction landing landing page landing page design motion motion design motion web top website dribbble 2023 ui ux web website design" data-srcset="https://cdn.dribbble.com/userupload/4254484/file/still-b08b53f42e2641ed66963d951dd91db1.png?compress=1&amp;resize=320x240&amp;vertical=top 320w, https://cdn.dribbble.com/userupload/4254484/file/still-b08b53f42e2641ed66963d951dd91db1.png?compress=1&amp;resize=400x300&amp;vertical=top 400w, https://cdn.dribbble.com/userupload/4254484/file/still-b08b53f42e2641ed66963d951dd91db1.png?compress=1&amp;resize=450x338&amp;vertical=top 450w, https://cdn.dribbble.com/userupload/4254484/file/still-b08b53f42e2641ed66963d951dd91db1.png?compress=1&amp;resize=640x480&amp;vertical=top 640w, https://cdn.dribbble.com/userupload/4254484/file/still-b08b53f42e2641ed66963d951dd91db1.png?compress=1&amp;resize=700x525&amp;vertical=top 700w, https://cdn.dribbble.com/userupload/4254484/file/still-b08b53f42e2641ed66963d951dd91db1.png?compress=1&amp;resize=800x600&amp;vertical=top 800w, https://cdn.dribbble.com/userupload/4254484/file/still-b08b53f42e2641ed66963d951dd91db1.png?compress=1&amp;resize=840x630&amp;vertical=top 840w, https://cdn.dribbble.com/userupload/4254484/file/still-b08b53f42e2641ed66963d951dd91db1.png?compress=1&amp;resize=1000x750&amp;vertical=top 1000w, https://cdn.dribbble.com/userupload/4254484/file/still-b08b53f42e2641ed66963d951dd91db1.png?compress=1&amp;resize=1200x900&amp;vertical=top 1200w" data-src="https://cdn.dribbble.com/userupload/4254484/file/still-b08b53f42e2641ed66963d951dd91db1.png?compress=1&amp;resize=400x300&amp;vertical=top" data-sizes="auto" data-animated-url="https://cdn.dribbble.com/userupload/4254484/file/original-352a8ba3af6df8071d3fd78602df8dcf.mp4" className="lazyautosizes ls-is-cached lazyloaded" src="https://cdn.dribbble.com/userupload/4254484/file/still-b08b53f42e2641ed66963d951dd91db1.png?compress=1&amp;resize=400x300&amp;vertical=top" sizes="390px" srcset="https://cdn.dribbble.com/userupload/4254484/file/still-b08b53f42e2641ed66963d951dd91db1.png?compress=1&amp;resize=320x240&amp;vertical=top 320w, https://cdn.dribbble.com/userupload/4254484/file/still-b08b53f42e2641ed66963d951dd91db1.png?compress=1&amp;resize=400x300&amp;vertical=top 400w, https://cdn.dribbble.com/userupload/4254484/file/still-b08b53f42e2641ed66963d951dd91db1.png?compress=1&amp;resize=450x338&amp;vertical=top 450w, https://cdn.dribbble.com/userupload/4254484/file/still-b08b53f42e2641ed66963d951dd91db1.png?compress=1&amp;resize=640x480&amp;vertical=top 640w, https://cdn.dribbble.com/userupload/4254484/file/still-b08b53f42e2641ed66963d951dd91db1.png?compress=1&amp;resize=700x525&amp;vertical=top 700w, https://cdn.dribbble.com/userupload/4254484/file/still-b08b53f42e2641ed66963d951dd91db1.png?compress=1&amp;resize=800x600&amp;vertical=top 800w, https://cdn.dribbble.com/userupload/4254484/file/still-b08b53f42e2641ed66963d951dd91db1.png?compress=1&amp;resize=840x630&amp;vertical=top 840w, https://cdn.dribbble.com/userupload/4254484/file/still-b08b53f42e2641ed66963d951dd91db1.png?compress=1&amp;resize=1000x750&amp;vertical=top 1000w, https://cdn.dribbble.com/userupload/4254484/file/still-b08b53f42e2641ed66963d951dd91db1.png?compress=1&amp;resize=1200x900&amp;vertical=top 1200w" />
                                                        </figure>


                                                        <div className="shot-thumbnail-extras">
                                                            <div className="loading-indicator shot-thumbnail-extras-icon disable-media-icons"></div>

                                                            <a className="animated-target" href="/shots/20309020-Home-app-product-page">
                                                                <span className="accessibility-text">Shot Link</span>
                                                            </a>
                                                        </div>

                                                        <a className="shot-thumbnail-link dribbble-link js-shot-link" href="/shots/20309020-Home-app-product-page">
                                                            <span className="accessibility-text">View Home app product page</span>
                                                        </a>
                                                        <div className="shot-thumbnail-overlay">
                                                            <div className="shot-thumbnail-overlay-content">
                                                                <div className="shot-title">Home app product page</div>

                                                                <ul className="js-dribbble-shot-actions shot-actions-container">
                                                                    <li data-bucket-container="true" className="shot-action">


                                                                        <a className="bucket-shot form-btn" data-bucket-add="true" data-screenshot-id="20309020" data-screenshot-user-id="1998175" data-is-from-modal="false" title="Save shot" href="/shots/20309020-Home-app-product-page/bucketings/new">

                                                                            <svg xmlns="http://www.w3.org/2000/svg" enableBackground="new 0 0 24 24" viewBox="0 0 24 24" role="img" className="icon "><path d="m22 5h-11l-2-3h-7c-1.104 0-2 .896-2 2v16c0 1.104.896 2 2 2h20c1.104 0 2-.896 2-2v-13c0-1.104-.896-2-2-2zm-6 10h-3v3c0 .55-.45 1-1 1s-1-.45-1-1v-3h-3c-.55 0-1-.45-1-1s.45-1 1-1h3v-3c0-.55.45-1 1-1s1 .45 1 1v3h3c.55 0 1 .45 1 1s-.45 1-1 1z"></path></svg>

                                                                        </a>
                                                                    </li>



                                                                    <div className="like-action-20309020   shot-action">
                                                                        {/* <script>
        if (typeof(Dribbble) != "undefined" && typeof(Dribbble.Shots) != "undefined") {
          Dribbble.Shots.update(20309020, {
            likes_count: 512,
            liked: false
        });
        }
      </script> */}
                                                                        <a className="form-btn stats-action like-shot" id="shots-like-button" rel="no-follow" data-fav-toggle="shot" data-screenshot-id="20309020" data-primary-like="false" data-is-from-modal="false" data-unlike-path="/DiggiSufi/likes/20309020-Home-app-product-page?modal=false&amp;on_hover=true" data-like-path="/DiggiSufi/likes?modal=false&amp;on_hover=true&amp;screenshot_id=20309020" title="Like this shot" href="/DiggiSufi/likes?modal=false&amp;on_hover=true&amp;screenshot_id=20309020">
                                                                            <span className="like-button-icon-loading"></span>
                                                                            <svg xmlns="http://www.w3.org/2000/svg" enableBackground="new 0 0 24 24" viewBox="0 0 24 24" role="img" className="icon "><path d="m18.199 2.04c-2.606-.284-4.262.961-6.199 3.008-2.045-2.047-3.593-3.292-6.199-3.008-3.544.388-6.321 4.43-5.718 7.96.966 5.659 5.944 9 11.917 12 5.973-3 10.951-6.341 11.917-12 .603-3.53-2.174-7.572-5.718-7.96z"></path></svg>

                                                                            <span className="accessibility-text">Like</span>
                                                                        </a>  </div>

                                                                </ul>
                                                            </div>
                                                        </div>
                                                    </div>





                                                </li>

                                            </div>
                                                <div className="more-by-shot-thumbnail">


                                                    <li id="screenshot-20181677" data-thumbnail-id="20181677" className="shot-thumbnail js-thumbnail shot-thumbnail-container      " data-ad-data="" data-boost-id="" data-is-boost-fallback="">


                                                        <div className="js-thumbnail-base shot-thumbnail-base disabled-shot-section dribbble-shot dribbble video " data-video-teaser-small="https://cdn.dribbble.com/userupload/4166227/file/small-ddeac1763bbdcf39f3a5b41b66d9c022.mp4" data-video-teaser-medium="https://cdn.dribbble.com/userupload/4166227/file/large-43e2c9e43fcaf6187e02301307f05754.mp4" data-video-teaser-large="https://cdn.dribbble.com/userupload/4166227/file/large-43e2c9e43fcaf6187e02301307f05754.mp4" data-video-teaser-original="https://cdn.dribbble.com/userupload/4166227/file/original-a09637f100b3b8b3232008ffa082a74c.mp4">
                                                            <figure className="js-thumbnail-placeholder shot-thumbnail-placeholder">
                                                                <noscript>
                                                                    <img src="https://cdn.dribbble.com/userupload/4166227/file/still-8f09cd9b0c37f77b0da2766e8ece41a0.png?resize=400x0" alt="Host web home page interaction animation best web design dribbble design home page interaction landing landing page landing page design motion motion design project top web design dribbble ui user experience user interface ux web web design" />
                                                                </noscript>
                                                                <img alt="Host web home page interaction animation best web design dribbble design home page interaction landing landing page landing page design motion motion design project top web design dribbble ui user experience user interface ux web web design" data-srcset="https://cdn.dribbble.com/userupload/4166227/file/still-8f09cd9b0c37f77b0da2766e8ece41a0.png?compress=1&amp;resize=320x240&amp;vertical=top 320w, https://cdn.dribbble.com/userupload/4166227/file/still-8f09cd9b0c37f77b0da2766e8ece41a0.png?compress=1&amp;resize=400x300&amp;vertical=top 400w, https://cdn.dribbble.com/userupload/4166227/file/still-8f09cd9b0c37f77b0da2766e8ece41a0.png?compress=1&amp;resize=450x338&amp;vertical=top 450w, https://cdn.dribbble.com/userupload/4166227/file/still-8f09cd9b0c37f77b0da2766e8ece41a0.png?compress=1&amp;resize=640x480&amp;vertical=top 640w, https://cdn.dribbble.com/userupload/4166227/file/still-8f09cd9b0c37f77b0da2766e8ece41a0.png?compress=1&amp;resize=700x525&amp;vertical=top 700w, https://cdn.dribbble.com/userupload/4166227/file/still-8f09cd9b0c37f77b0da2766e8ece41a0.png?compress=1&amp;resize=800x600&amp;vertical=top 800w, https://cdn.dribbble.com/userupload/4166227/file/still-8f09cd9b0c37f77b0da2766e8ece41a0.png?compress=1&amp;resize=840x630&amp;vertical=top 840w, https://cdn.dribbble.com/userupload/4166227/file/still-8f09cd9b0c37f77b0da2766e8ece41a0.png?compress=1&amp;resize=1000x750&amp;vertical=top 1000w, https://cdn.dribbble.com/userupload/4166227/file/still-8f09cd9b0c37f77b0da2766e8ece41a0.png?compress=1&amp;resize=1200x900&amp;vertical=top 1200w" data-src="https://cdn.dribbble.com/userupload/4166227/file/still-8f09cd9b0c37f77b0da2766e8ece41a0.png?compress=1&amp;resize=400x300&amp;vertical=top" data-sizes="auto" data-animated-url="https://cdn.dribbble.com/userupload/4166227/file/original-a09637f100b3b8b3232008ffa082a74c.mp4" className="lazyautosizes ls-is-cached lazyloaded" src="https://cdn.dribbble.com/userupload/4166227/file/still-8f09cd9b0c37f77b0da2766e8ece41a0.png?compress=1&amp;resize=400x300&amp;vertical=top" sizes="390px" srcSet="https://cdn.dribbble.com/userupload/4166227/file/still-8f09cd9b0c37f77b0da2766e8ece41a0.png?compress=1&amp;resize=320x240&amp;vertical=top 320w, https://cdn.dribbble.com/userupload/4166227/file/still-8f09cd9b0c37f77b0da2766e8ece41a0.png?compress=1&amp;resize=400x300&amp;vertical=top 400w, https://cdn.dribbble.com/userupload/4166227/file/still-8f09cd9b0c37f77b0da2766e8ece41a0.png?compress=1&amp;resize=450x338&amp;vertical=top 450w, https://cdn.dribbble.com/userupload/4166227/file/still-8f09cd9b0c37f77b0da2766e8ece41a0.png?compress=1&amp;resize=640x480&amp;vertical=top 640w, https://cdn.dribbble.com/userupload/4166227/file/still-8f09cd9b0c37f77b0da2766e8ece41a0.png?compress=1&amp;resize=700x525&amp;vertical=top 700w, https://cdn.dribbble.com/userupload/4166227/file/still-8f09cd9b0c37f77b0da2766e8ece41a0.png?compress=1&amp;resize=800x600&amp;vertical=top 800w, https://cdn.dribbble.com/userupload/4166227/file/still-8f09cd9b0c37f77b0da2766e8ece41a0.png?compress=1&amp;resize=840x630&amp;vertical=top 840w, https://cdn.dribbble.com/userupload/4166227/file/still-8f09cd9b0c37f77b0da2766e8ece41a0.png?compress=1&amp;resize=1000x750&amp;vertical=top 1000w, https://cdn.dribbble.com/userupload/4166227/file/still-8f09cd9b0c37f77b0da2766e8ece41a0.png?compress=1&amp;resize=1200x900&amp;vertical=top 1200w" />
                                                            </figure>


                                                            <div className="shot-thumbnail-extras">
                                                                <div className="loading-indicator shot-thumbnail-extras-icon disable-media-icons"></div>

                                                                <a className="animated-target" href="/shots/20181677-Host-web-home-page-interaction">
                                                                    <span className="accessibility-text">Shot Link</span>
                                                                </a>
                                                            </div>

                                                            <a className="shot-thumbnail-link dribbble-link js-shot-link" href="/shots/20181677-Host-web-home-page-interaction">
                                                                <span className="accessibility-text">View Host web home page interaction</span>
                                                            </a>
                                                            <div className="shot-thumbnail-overlay">
                                                                <div className="shot-thumbnail-overlay-content">
                                                                    <div className="shot-title">Host web home page interaction</div>

                                                                    <ul className="js-dribbble-shot-actions shot-actions-container">
                                                                        <li data-bucket-container="true" className="shot-action">


                                                                            <a className="bucket-shot form-btn" data-bucket-add="true" data-screenshot-id="20181677" data-screenshot-user-id="1998175" data-is-from-modal="false" title="Save shot" href="/shots/20181677-Host-web-home-page-interaction/bucketings/new">

                                                                                <svg xmlns="http://www.w3.org/2000/svg" enableBackground="new 0 0 24 24" viewBox="0 0 24 24" role="img" className="icon "><path d="m22 5h-11l-2-3h-7c-1.104 0-2 .896-2 2v16c0 1.104.896 2 2 2h20c1.104 0 2-.896 2-2v-13c0-1.104-.896-2-2-2zm-6 10h-3v3c0 .55-.45 1-1 1s-1-.45-1-1v-3h-3c-.55 0-1-.45-1-1s.45-1 1-1h3v-3c0-.55.45-1 1-1s1 .45 1 1v3h3c.55 0 1 .45 1 1s-.45 1-1 1z"></path></svg>

                                                                            </a>
                                                                        </li>



                                                                        <div className="like-action-20181677   shot-action">
                                                                            {/* <script>
        if (typeof(Dribbble) != "undefined" && typeof(Dribbble.Shots) != "undefined") {
          Dribbble.Shots.update(20181677, {
            likes_count: 258,
            liked: false
        });
        }
      </script> */}
                                                                            <a className="form-btn stats-action like-shot" id="shots-like-button" rel="no-follow" data-fav-toggle="shot" data-screenshot-id="20181677" data-primary-like="false" data-is-from-modal="false" data-unlike-path="/DiggiSufi/likes/20181677-Host-web-home-page-interaction?modal=false&amp;on_hover=true" data-like-path="/DiggiSufi/likes?modal=false&amp;on_hover=true&amp;screenshot_id=20181677" title="Like this shot" href="/DiggiSufi/likes?modal=false&amp;on_hover=true&amp;screenshot_id=20181677">
                                                                                <span className="like-button-icon-loading"></span>
                                                                                <svg xmlns="http://www.w3.org/2000/svg" enableBackground="new 0 0 24 24" viewBox="0 0 24 24" role="img" className="icon "><path d="m18.199 2.04c-2.606-.284-4.262.961-6.199 3.008-2.045-2.047-3.593-3.292-6.199-3.008-3.544.388-6.321 4.43-5.718 7.96.966 5.659 5.944 9 11.917 12 5.973-3 10.951-6.341 11.917-12 .603-3.53-2.174-7.572-5.718-7.96z"></path></svg>

                                                                                <span className="accessibility-text">Like</span>
                                                                            </a>  </div>

                                                                    </ul>
                                                                </div>
                                                            </div>
                                                        </div>





                                                    </li>

                                                </div>
                                                <div className="more-by-shot-thumbnail">


                                                    <li id="screenshot-20076776" data-thumbnail-id="20076776" className="shot-thumbnail js-thumbnail shot-thumbnail-container      " data-ad-data="" data-boost-id="" data-is-boost-fallback="">


                                                        <div className="js-thumbnail-base shot-thumbnail-base disabled-shot-section dribbble-shot dribbble video " data-video-teaser-small="https://cdn.dribbble.com/userupload/4101859/file/small-73236cfc4b394c93c6c508f42ab955e7.mp4" data-video-teaser-medium="https://cdn.dribbble.com/userupload/4101859/file/large-732229749255cf5abbce430b95e97300.mp4" data-video-teaser-large="https://cdn.dribbble.com/userupload/4101859/file/large-732229749255cf5abbce430b95e97300.mp4" data-video-teaser-original="https://cdn.dribbble.com/userupload/4101859/file/original-dbe0ab8d0c390401cdc47375943b63cb.mp4">
                                                            <figure className="js-thumbnail-placeholder shot-thumbnail-placeholder">
                                                                <noscript>
                                                                    <img src="https://cdn.dribbble.com/userupload/4101859/file/still-1de3369e32f0ad46440c5f994b9b3baf.png?resize=400x0" alt="Crypto trading home page animation design home page design illustration illustrator interaction landing landing page design motion motion design motion graphics ui ui design user interface ux web web design website" />
                                                                </noscript>
                                                                <img alt="Crypto trading home page animation design home page design illustration illustrator interaction landing landing page design motion motion design motion graphics ui ui design user interface ux web web design website" data-srcset="https://cdn.dribbble.com/userupload/4101859/file/still-1de3369e32f0ad46440c5f994b9b3baf.png?compress=1&amp;resize=320x240&amp;vertical=top 320w, https://cdn.dribbble.com/userupload/4101859/file/still-1de3369e32f0ad46440c5f994b9b3baf.png?compress=1&amp;resize=400x300&amp;vertical=top 400w, https://cdn.dribbble.com/userupload/4101859/file/still-1de3369e32f0ad46440c5f994b9b3baf.png?compress=1&amp;resize=450x338&amp;vertical=top 450w, https://cdn.dribbble.com/userupload/4101859/file/still-1de3369e32f0ad46440c5f994b9b3baf.png?compress=1&amp;resize=640x480&amp;vertical=top 640w, https://cdn.dribbble.com/userupload/4101859/file/still-1de3369e32f0ad46440c5f994b9b3baf.png?compress=1&amp;resize=700x525&amp;vertical=top 700w, https://cdn.dribbble.com/userupload/4101859/file/still-1de3369e32f0ad46440c5f994b9b3baf.png?compress=1&amp;resize=800x600&amp;vertical=top 800w, https://cdn.dribbble.com/userupload/4101859/file/still-1de3369e32f0ad46440c5f994b9b3baf.png?compress=1&amp;resize=840x630&amp;vertical=top 840w, https://cdn.dribbble.com/userupload/4101859/file/still-1de3369e32f0ad46440c5f994b9b3baf.png?compress=1&amp;resize=1000x750&amp;vertical=top 1000w, https://cdn.dribbble.com/userupload/4101859/file/still-1de3369e32f0ad46440c5f994b9b3baf.png?compress=1&amp;resize=1200x900&amp;vertical=top 1200w" data-src="https://cdn.dribbble.com/userupload/4101859/file/still-1de3369e32f0ad46440c5f994b9b3baf.png?compress=1&amp;resize=400x300&amp;vertical=top" data-sizes="auto" data-animated-url="https://cdn.dribbble.com/userupload/4101859/file/original-dbe0ab8d0c390401cdc47375943b63cb.mp4" className="lazyautosizes ls-is-cached lazyloaded" src="https://cdn.dribbble.com/userupload/4101859/file/still-1de3369e32f0ad46440c5f994b9b3baf.png?compress=1&amp;resize=400x300&amp;vertical=top" sizes="390px" srcSet="https://cdn.dribbble.com/userupload/4101859/file/still-1de3369e32f0ad46440c5f994b9b3baf.png?compress=1&amp;resize=320x240&amp;vertical=top 320w, https://cdn.dribbble.com/userupload/4101859/file/still-1de3369e32f0ad46440c5f994b9b3baf.png?compress=1&amp;resize=400x300&amp;vertical=top 400w, https://cdn.dribbble.com/userupload/4101859/file/still-1de3369e32f0ad46440c5f994b9b3baf.png?compress=1&amp;resize=450x338&amp;vertical=top 450w, https://cdn.dribbble.com/userupload/4101859/file/still-1de3369e32f0ad46440c5f994b9b3baf.png?compress=1&amp;resize=640x480&amp;vertical=top 640w, https://cdn.dribbble.com/userupload/4101859/file/still-1de3369e32f0ad46440c5f994b9b3baf.png?compress=1&amp;resize=700x525&amp;vertical=top 700w, https://cdn.dribbble.com/userupload/4101859/file/still-1de3369e32f0ad46440c5f994b9b3baf.png?compress=1&amp;resize=800x600&amp;vertical=top 800w, https://cdn.dribbble.com/userupload/4101859/file/still-1de3369e32f0ad46440c5f994b9b3baf.png?compress=1&amp;resize=840x630&amp;vertical=top 840w, https://cdn.dribbble.com/userupload/4101859/file/still-1de3369e32f0ad46440c5f994b9b3baf.png?compress=1&amp;resize=1000x750&amp;vertical=top 1000w, https://cdn.dribbble.com/userupload/4101859/file/still-1de3369e32f0ad46440c5f994b9b3baf.png?compress=1&amp;resize=1200x900&amp;vertical=top 1200w" />
                                                            </figure>


                                                            <div className="shot-thumbnail-extras">
                                                                <div className="loading-indicator shot-thumbnail-extras-icon disable-media-icons"></div>

                                                                <a className="animated-target" href="/shots/20076776-Crypto-trading-home-page">
                                                                    <span className="accessibility-text">Shot Link</span>
                                                                </a>
                                                            </div>

                                                            <a className="shot-thumbnail-link dribbble-link js-shot-link" href="/shots/20076776-Crypto-trading-home-page">
                                                                <span className="accessibility-text">View Crypto trading home page</span>
                                                            </a>
                                                            <div className="shot-thumbnail-overlay">
                                                                <div className="shot-thumbnail-overlay-content">
                                                                    <div className="shot-title">Crypto trading home page</div>

                                                                    <ul className="js-dribbble-shot-actions shot-actions-container">
                                                                        <li data-bucket-container="true" className="shot-action">


                                                                            <a className="bucket-shot form-btn" data-bucket-add="true" data-screenshot-id="20076776" data-screenshot-user-id="1998175" data-is-from-modal="false" title="Save shot" href="/shots/20076776-Crypto-trading-home-page/bucketings/new">

                                                                                <svg xmlns="http://www.w3.org/2000/svg" enableBackground="new 0 0 24 24" viewBox="0 0 24 24" role="img" className="icon "><path d="m22 5h-11l-2-3h-7c-1.104 0-2 .896-2 2v16c0 1.104.896 2 2 2h20c1.104 0 2-.896 2-2v-13c0-1.104-.896-2-2-2zm-6 10h-3v3c0 .55-.45 1-1 1s-1-.45-1-1v-3h-3c-.55 0-1-.45-1-1s.45-1 1-1h3v-3c0-.55.45-1 1-1s1 .45 1 1v3h3c.55 0 1 .45 1 1s-.45 1-1 1z"></path></svg>

                                                                            </a>
                                                                        </li>



                                                                        <div className="like-action-20076776   shot-action">
                                                                            {/* <script>
        if (typeof(Dribbble) != "undefined" && typeof(Dribbble.Shots) != "undefined") {
          Dribbble.Shots.update(20076776, {
            likes_count: 548,
            liked: false
        });
        {'}'}
      </script> */}
                                                                            <a className="form-btn stats-action like-shot" id="shots-like-button" rel="no-follow" data-fav-toggle="shot" data-screenshot-id="20076776" data-primary-like="false" data-is-from-modal="false" data-unlike-path="/DiggiSufi/likes/20076776-Crypto-trading-home-page?modal=false&amp;on_hover=true" data-like-path="/DiggiSufi/likes?modal=false&amp;on_hover=true&amp;screenshot_id=20076776" title="Like this shot" href="/DiggiSufi/likes?modal=false&amp;on_hover=true&amp;screenshot_id=20076776">
                                                                                <span className="like-button-icon-loading"></span>
                                                                                <svg xmlns="http://www.w3.org/2000/svg" enableBackground="new 0 0 24 24" viewBox="0 0 24 24" role="img" className="icon "><path d="m18.199 2.04c-2.606-.284-4.262.961-6.199 3.008-2.045-2.047-3.593-3.292-6.199-3.008-3.544.388-6.321 4.43-5.718 7.96.966 5.659 5.944 9 11.917 12 5.973-3 10.951-6.341 11.917-12 .603-3.53-2.174-7.572-5.718-7.96z"></path></svg>

                                                                                <span className="accessibility-text">Like</span>
                                                                            </a>  </div>

                                                                    </ul>
                                                                </div>
                                                            </div>
                                                        </div>





                                                    </li>

                                                </div>
                                                <div className="more-by-shot-thumbnail">


                                                    <li id="screenshot-18726580" data-thumbnail-id="18726580" className="shot-thumbnail js-thumbnail shot-thumbnail-container      " data-ad-data="" data-boost-id="" data-is-boost-fallback="">


                                                        <div className="js-thumbnail-base shot-thumbnail-base disabled-shot-section dribbble-shot dribbble video " data-video-teaser-small="https://cdn.dribbble.com/userupload/3079935/file/small-5f0932f1a4aeec00c6511206b57c7a75.mp4" data-video-teaser-medium="https://cdn.dribbble.com/userupload/3079935/file/large-0735eab824522ecd97aff8f86a49e826.mp4" data-video-teaser-large="https://cdn.dribbble.com/userupload/3079935/file/large-0735eab824522ecd97aff8f86a49e826.mp4" data-video-teaser-original="https://cdn.dribbble.com/userupload/3079935/file/original-a0fb1c83717e0f613884ecc5a1597edb.mp4">
                                                            <figure className="js-thumbnail-placeholder shot-thumbnail-placeholder">
                                                                <noscript>
                                                                    <img src="https://cdn.dribbble.com/userupload/3079935/file/still-67926190d1ec9a1f80d68b8beeba04ea.png?resize=400x0" alt="Mediatool home page interaction animation design crypto design illustration interaction interactive landing landing page motion motion design product ui ux web website website design" />
                                                                </noscript>
                                                                <img alt="Mediatool home page interaction animation design crypto design illustration interaction interactive landing landing page motion motion design product ui ux web website website design" data-srcset="https://cdn.dribbble.com/userupload/3079935/file/still-67926190d1ec9a1f80d68b8beeba04ea.png?compress=1&amp;resize=320x240&amp;vertical=top 320w, https://cdn.dribbble.com/userupload/3079935/file/still-67926190d1ec9a1f80d68b8beeba04ea.png?compress=1&amp;resize=400x300&amp;vertical=top 400w, https://cdn.dribbble.com/userupload/3079935/file/still-67926190d1ec9a1f80d68b8beeba04ea.png?compress=1&amp;resize=450x338&amp;vertical=top 450w, https://cdn.dribbble.com/userupload/3079935/file/still-67926190d1ec9a1f80d68b8beeba04ea.png?compress=1&amp;resize=640x480&amp;vertical=top 640w, https://cdn.dribbble.com/userupload/3079935/file/still-67926190d1ec9a1f80d68b8beeba04ea.png?compress=1&amp;resize=700x525&amp;vertical=top 700w, https://cdn.dribbble.com/userupload/3079935/file/still-67926190d1ec9a1f80d68b8beeba04ea.png?compress=1&amp;resize=800x600&amp;vertical=top 800w, https://cdn.dribbble.com/userupload/3079935/file/still-67926190d1ec9a1f80d68b8beeba04ea.png?compress=1&amp;resize=840x630&amp;vertical=top 840w, https://cdn.dribbble.com/userupload/3079935/file/still-67926190d1ec9a1f80d68b8beeba04ea.png?compress=1&amp;resize=1000x750&amp;vertical=top 1000w, https://cdn.dribbble.com/userupload/3079935/file/still-67926190d1ec9a1f80d68b8beeba04ea.png?compress=1&amp;resize=1200x900&amp;vertical=top 1200w" data-src="https://cdn.dribbble.com/userupload/3079935/file/still-67926190d1ec9a1f80d68b8beeba04ea.png?compress=1&amp;resize=400x300&amp;vertical=top" data-sizes="auto" data-animated-url="https://cdn.dribbble.com/userupload/3079935/file/original-a0fb1c83717e0f613884ecc5a1597edb.mp4" className="lazyautosizes ls-is-cached lazyloaded" src="https://cdn.dribbble.com/userupload/3079935/file/still-67926190d1ec9a1f80d68b8beeba04ea.png?compress=1&amp;resize=400x300&amp;vertical=top" sizes="390px" srcSet="https://cdn.dribbble.com/userupload/3079935/file/still-67926190d1ec9a1f80d68b8beeba04ea.png?compress=1&amp;resize=320x240&amp;vertical=top 320w, https://cdn.dribbble.com/userupload/3079935/file/still-67926190d1ec9a1f80d68b8beeba04ea.png?compress=1&amp;resize=400x300&amp;vertical=top 400w, https://cdn.dribbble.com/userupload/3079935/file/still-67926190d1ec9a1f80d68b8beeba04ea.png?compress=1&amp;resize=450x338&amp;vertical=top 450w, https://cdn.dribbble.com/userupload/3079935/file/still-67926190d1ec9a1f80d68b8beeba04ea.png?compress=1&amp;resize=640x480&amp;vertical=top 640w, https://cdn.dribbble.com/userupload/3079935/file/still-67926190d1ec9a1f80d68b8beeba04ea.png?compress=1&amp;resize=700x525&amp;vertical=top 700w, https://cdn.dribbble.com/userupload/3079935/file/still-67926190d1ec9a1f80d68b8beeba04ea.png?compress=1&amp;resize=800x600&amp;vertical=top 800w, https://cdn.dribbble.com/userupload/3079935/file/still-67926190d1ec9a1f80d68b8beeba04ea.png?compress=1&amp;resize=840x630&amp;vertical=top 840w, https://cdn.dribbble.com/userupload/3079935/file/still-67926190d1ec9a1f80d68b8beeba04ea.png?compress=1&amp;resize=1000x750&amp;vertical=top 1000w, https://cdn.dribbble.com/userupload/3079935/file/still-67926190d1ec9a1f80d68b8beeba04ea.png?compress=1&amp;resize=1200x900&amp;vertical=top 1200w" />
                                                            </figure>


                                                            <div className="shot-thumbnail-extras">
                                                                <div className="loading-indicator shot-thumbnail-extras-icon disable-media-icons"></div>

                                                                <a className="animated-target" href="/shots/18726580-Mediatool-home-page-interaction">
                                                                    <span className="accessibility-text">Shot Link</span>
                                                                </a>
                                                            </div>

                                                            <a className="shot-thumbnail-link dribbble-link js-shot-link" href="/shots/18726580-Mediatool-home-page-interaction">
                                                                <span className="accessibility-text">View Mediatool home page interaction</span>
                                                            </a>
                                                            <div className="shot-thumbnail-overlay">
                                                                <div className="shot-thumbnail-overlay-content">
                                                                    <div className="shot-title">Mediatool home page interaction</div>

                                                                    <ul className="js-dribbble-shot-actions shot-actions-container">
                                                                        <li data-bucket-container="true" className="shot-action">


                                                                            <a className="bucket-shot form-btn" data-bucket-add="true" data-screenshot-id="18726580" data-screenshot-user-id="1998175" data-is-from-modal="false" title="Save shot" href="/shots/18726580-Mediatool-home-page-interaction/bucketings/new">

                                                                                <svg xmlns="http://www.w3.org/2000/svg" enableBackground="new 0 0 24 24" viewBox="0 0 24 24" role="img" className="icon "><path d="m22 5h-11l-2-3h-7c-1.104 0-2 .896-2 2v16c0 1.104.896 2 2 2h20c1.104 0 2-.896 2-2v-13c0-1.104-.896-2-2-2zm-6 10h-3v3c0 .55-.45 1-1 1s-1-.45-1-1v-3h-3c-.55 0-1-.45-1-1s.45-1 1-1h3v-3c0-.55.45-1 1-1s1 .45 1 1v3h3c.55 0 1 .45 1 1s-.45 1-1 1z"></path></svg>

                                                                            </a>
                                                                        </li>



                                                                        <div className="like-action-18726580   shot-action">
                                                                            {/* <script>
        if (typeof(Dribbble) != "undefined" && typeof(Dribbble.Shots) != "undefined") {
          Dribbble.Shots.update(18726580, {
            likes_count: 554,
            liked: false
        });
        }
      </script> */}
                                                                            <a className="form-btn stats-action like-shot" id="shots-like-button" rel="no-follow" data-fav-toggle="shot" data-screenshot-id="18726580" data-primary-like="false" data-is-from-modal="false" data-unlike-path="/DiggiSufi/likes/18726580-Mediatool-home-page-interaction?modal=false&amp;on_hover=true" data-like-path="/DiggiSufi/likes?modal=false&amp;on_hover=true&amp;screenshot_id=18726580" title="Like this shot" href="/DiggiSufi/likes?modal=false&amp;on_hover=true&amp;screenshot_id=18726580">
                                                                                <span className="like-button-icon-loading"></span>
                                                                                <svg xmlns="http://www.w3.org/2000/svg" enableBackground="new 0 0 24 24" viewBox="0 0 24 24" role="img" className="icon "><path d="m18.199 2.04c-2.606-.284-4.262.961-6.199 3.008-2.045-2.047-3.593-3.292-6.199-3.008-3.544.388-6.321 4.43-5.718 7.96.966 5.659 5.944 9 11.917 12 5.973-3 10.951-6.341 11.917-12 .603-3.53-2.174-7.572-5.718-7.96z"></path></svg>

                                                                                <span className="accessibility-text">Like</span>
                                                                            </a>  </div>

                                                                    </ul>
                                                                </div>
                                                            </div>
                                                        </div>





                                                    </li>

                                                </div>
                                            </div>
                                        </div>







                                    </div>
                                </div>
                                <div className="">
                                    <div className="shots-grid">
                                        <div className="shot-footer-container">
                                            <div className="keyboard-legend">
                                                <div className="keyboard-button-container">
                                                    <svg xmlns="http://www.w3.org/2000/svg" width="22" height="25" viewBox="0 0 22 25" fill="none" role="img" className="icon keyboard-button-icon">
                                                        <g filter="url(#filter0_d)">
                                                            <rect y="0.865234" width="22" height="22" rx="5" fill="white"></rect>
                                                            <path d="M8.27 14.8652H13.77V13.5342H9.788V6.68123H8.27V14.8652Z" fill="#9E9EA7"></path>
                                                            <rect x="0.5" y="1.36523" width="21" height="21" rx="4.5" stroke="#DBDADE"></rect>
                                                        </g>
                                                        <defs>
                                                            <filter id="filter0_d" x="0" y="0.865234" width="22" height="24" filterUnits="userSpaceOnUse" colorInterpolationFilters="sRGB">
                                                                <feFlood floodOpacity="0" result="BackgroundImageFix"></feFlood>
                                                                <feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"></feColorMatrix>
                                                                <feOffset dy="2"></feOffset>
                                                                <feColorMatrix type="matrix" values="0 0 0 0 0.858824 0 0 0 0 0.854902 0 0 0 0 0.870588 0 0 0 1 0"></feColorMatrix>
                                                                <feBlend mode="normal" in2="BackgroundImageFix" result="effect1_dropShadow"></feBlend>
                                                                <feBlend mode="normal" in="SourceGraphic" in2="effect1_dropShadow" result="shape"></feBlend>
                                                            </filter>
                                                        </defs>
                                                    </svg>

                                                    <svg xmlns="http://www.w3.org/2000/svg" width="22" height="25" viewBox="0 0 22 25" fill="none" role="img" className="icon keyboard-button-icon">
                                                        <g filter="url(#filter0_d)">
                                                            <rect y="0.865234" width="22" height="22" rx="5" fill="white"></rect>
                                                            <path d="M13.363 11.3562V10.0912H9.788V7.99023H14.078V6.68123H8.27V14.8652H9.788V11.3562H13.363Z" fill="#9E9EA7"></path>
                                                            <rect x="0.5" y="1.36523" width="21" height="21" rx="4.5" stroke="#DBDADE"></rect>
                                                        </g>
                                                        <defs>
                                                            <filter id="filter0_d" x="0" y="0.865234" width="22" height="24" filterUnits="userSpaceOnUse" colorInterpolationFilters="sRGB">
                                                                <feFlood floodOpacity="0" result="BackgroundImageFix"></feFlood>
                                                                <feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"></feColorMatrix>
                                                                <feOffset dy="2"></feOffset>
                                                                <feColorMatrix type="matrix" values="0 0 0 0 0.858824 0 0 0 0 0.854902 0 0 0 0 0.870588 0 0 0 1 0"></feColorMatrix>
                                                                <feBlend mode="normal" in2="BackgroundImageFix" result="effect1_dropShadow"></feBlend>
                                                                <feBlend mode="normal" in="SourceGraphic" in2="effect1_dropShadow" result="shape"></feBlend>
                                                            </filter>
                                                        </defs>
                                                    </svg>

                                                    Like
                                                </div>
                                            </div>

                                            <div id="flag-section" className="flag report-shot-link-container">
                                                <a id="flag-link-19807069" className="flag js-flag-link" title="Flag this screenshot as inappropriate" href="/shots/19807069-Ahead-app-redesign-concept/flags">
                                                    <svg xmlns="http://www.w3.org/2000/svg" enableBackground="new 0 0 24 24" viewBox="0 0 24 24" role="img" className="icon fill-current"><path d="m23.512 17.5-8.334-14.648c-1.405-2.47-4.951-2.47-6.356 0l-8.334 14.648c-1.395 2.451.367 5.5 3.178 5.5h16.668c2.811 0 4.573-3.049 3.178-5.5zm-12.512-10.501c0-.552.448-1 1-1 .552 0 1 .447 1 1v7.001c0 .552-.448 1-1 1-.552 0-1-.447-1-1zm1 13.001c-.828 0-1.5-.672-1.5-1.5s.672-1.5 1.5-1.5 1.5.672 1.5 1.5-.672 1.5-1.5 1.5z"></path></svg>
                                                    Report
                                                </a>
                                                <form className="flag-confirm js-flag-confirm hide" action="/shots/19807069-Ahead-app-redesign-concept/flags" acceptCharset="UTF-8" method="post"><input name="utf8" type="hidden" value="✓" /><input type="hidden" name="_method" value="put" /><input type="hidden" name="authenticity_token" value="MWFLFcyQegMEO3MbwOg2X0izqFu2lkFj3+ymSNb6i0DLa+9Sl6UV5xKBrzfhyz05NZHUF6ZMdvFYDhtNLhWwNw==" />
                                                    <input type="hidden" name="screenshot_id" id="screenshot_id" value="19807069" />
                                                    <p className="font-sublabel-bold color-deep-blue-sea margin-b-4">Why are you reporting this shot?</p>
                                                    <p className="copyright-violation-text">Please visit our Help Center for instructions on reporting&nbsp;<a href="https://support.dribbble.com/hc/en-us/articles/360058563974-Reporting-Trademark-or-Copyright-Violations">Trademark or Copyright violations</a>.</p>
                                                    <textarea name="flag_note" id="flag_note"></textarea>
                                                    <input type="submit" name="commit" value="Report" className="form-sub" data-disable-with="Report" />
                                                </form>
                                            </div>
                                        </div>

                                    </div>
                                </div>


                                <div data-v-4d07bdbe="" id="shot-sidebar-app" className="shot-sidebar-app"><div data-v-6f1a6a54="" data-v-4d07bdbe="" className="shot-actions-toolbar-wrapper"><div data-v-6f1a6a54="" className="shot-actions-toolbar"><div data-v-6f1a6a54="" name="shot-actions-toolbar-avatar" className="designer-hovercard" dataTippy=""> <span data-v-6f1a6a54="" className="profile-avatar"><a href="/ui_migulko" title="" className="avatar-link">
                                    <div className="lazy-img-wrapper loaded avatar-image-wrapper avatar-medium">
                                        <img data-src="https://cdn.dribbble.com/users/1998175/avatars/normal/af46ac7b92eb85f76f5a3fe4f214fdf2.jpg?1542363868&amp;compress=1&amp;resize=80x80" dataId="1998175" alt="Taras Migulko's avatar" className="avatar-image ls-is-cached lazyloaded" src="https://cdn.dribbble.com/users/1998175/avatars/normal/af46ac7b92eb85f76f5a3fe4f214fdf2.jpg?1542363868&amp;compress=1&amp;resize=80x80" />
                                        </div> 

                                        <span className="accessibility-text">
                                    Link to Taras Migulko's profile'
                                </span></a></span></div> 
                                <div data-v-6f1a6a54="" className="shot-actions-toolbar-buttons"><button data-v-6f1a6a54="" className="btn-icon tertiary with-indicator comments-action" dataTippy="" dataOriginalTitle="Feedback"><svg viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg" svgInline="" role="presentation" focusable="false" tabIndex="-1" className="icon-16"><path d="M10 0H6a5.998 5.998 0 00-1.333 11.846V16l4.666-4H10a6 6 0 100-12z" fill="currentColor"></path></svg> <span className="accessibility-text">
                                    View comments
                                </span> <span className="count-indicator">
                                        28
                                    </span></button><button data-v-6f1a6a54="" className="btn-icon tertiary share-action" dataTippy="" dataOriginalTitle="Share"><svg viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg" svg-inline="" role="presentation" focusable="false" tabIndex="-1" className="icon-16"><path d="M0 12.782c0 .85.1 1.65.3 2.45.1.45.35.45.5 0 1.05-2.65 2.75-5.15 5.55-5.65H8v2.2c0 1 .6 1.3 1.3.7l6.4-5.5c.35-.3.35-.8 0-1.15L9.3.332c-.7-.65-1.3-.3-1.3.65v2.35c-4.8.8-8 4.7-8 9.45z" fill="currentColor"></path></svg> <span className="accessibility-text">
                                        Share actions
                                    </span> </button><button data-v-6f1a6a54="" className="btn-icon tertiary" datTippy="" dataOriginalTitle="Shot details"><svg viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" width="24" height="24" svgInline="" role="presentation" focusable="false" tabIndex="-1" className="icon-16"><path d="M12 0C5.373 0 0 5.37 0 12c0 6.627 5.373 12 12 12s12-5.373 12-12c0-6.63-5.373-12-12-12zm1 18a1 1 0 01-2 0v-7a1 1 0 012 0zM12 8a1.5 1.5 0 11.001-3.001A1.5 1.5 0 0112 8z"></path></svg> <span className="accessibility-text">
                                        Detail actions
                                    </span> </button><button data-v-6f1a6a54="" className="btn-icon collection-action tertiary" dataTippy="" dataOriginalTitle="Save"><svg width="16" height="16" fill="none" xmlns="http://www.w3.org/2000/svg" svgInline="" role="presentation" focusable="false" tabIndex="-1"><path fillRule="evenodd" clipRule="evenodd" d="M7.334 3.333h7.333c.736 0 1.333.598 1.333 1.334v8.666c0 .736-.597 1.334-1.333 1.334H1.333A1.334 1.334 0 010 13.334V2.667c0-.736.597-1.333 1.333-1.333H6l1.334 2zM8.667 10h2c.367 0 .667-.3.667-.666 0-.367-.3-.667-.667-.667h-2v-2C8.667 6.3 8.367 6 8 6c-.366 0-.666.3-.666.667v2h-2c-.367 0-.667.3-.667.667 0 .366.3.666.666.666h2v2c0 .367.3.667.667.667.367 0 .667-.3.667-.667v-2z" fill="currentColor"></path></svg> <span className="accessibility-text">
                                        Save this shot to a collection
                                    </span></button><button data-v-3249d1f6="" data-v-6f1a6a54="" className="btn-icon like-action like-button is-liked highlighted" dataTippy="" data-original-title="Unlike"><span data-v-3249d1f6="" className="like-button-icon"><svg data-v-3249d1f6="" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" svgInline="" role="presentation" focusable="false" tabIndex="-1" className="like-button-icon-heart"><path data-v-3249d1f6="" d="M18.199 2.04c-2.606-.284-4.262.961-6.199 3.008C9.955 3.001 8.407 1.756 5.801 2.04 2.257 2.428-.52 6.47.083 10 1.049 15.659 6.027 19 12 22c5.973-3 10.951-6.341 11.917-12 .603-3.53-2.174-7.572-5.718-7.96z"></path></svg></span> <span data-v-3249d1f6="" className="accessibility-text">
                                        Like this shot
                                    </span></button></div> </div></div> <div data-v-77407238="" data-v-4d07bdbe="" className="shot-sidebar" style={{ display: 'none' }}><div data-v-77407238="" className="shot-sidebar-content"> <div data-v-77407238="" infiniteScrollDistance="10" infiniteScrollListenForEvent="infiniteScroll" className="sidebar-scrolling-container" style={{ display: 'none' }}></div></div></div>
                                    </div>
                            </div>

                            <div id="boosted-shots-app"></div>







                        </div>




                    </div>
                </div>
            </div>

            {/* <hr> */}

            <div id="footer" className="site-footer js-site-footer" role="contentinfo">
                <div className="container-large">
                    <div className="footer-main-content">
                        <div>
                            <a href="/">
                                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 96 24" role="img" aria-labelledby="adt4ayt889agq0hmd8jxdghyixnl4ksz" className="icon dribbble-wordmark">
                                    <title id="adt4ayt889agq0hmd8jxdghyixnl4ksz">Dribbble: the community for graphic design</title>
                                    <path fillRule="evenodd" clipRule="evenodd" d="M95.8512 18.5141C91.8395 25.3156 85.4862 23.342 83.5781 21.7968C82.7661 22.3478 81.342 23.5554 79.4433 23.4161C75.3996 23.1192 73.9514 17.3405 73.9514 17.3405C73.9804 17.3636 72.747 17.7662 72.0802 17.759C72.0716 19.4536 70.6067 23.5018 66.6533 23.4501C62.217 23.3922 61.3151 16.7828 61.3151 16.7828C61.3151 16.7828 60.8736 17.3959 59.195 18.0064C59.2795 16.7045 59.2177 23.2519 53.9006 23.3481C49.6971 23.4242 48.5623 16.6809 48.5623 16.6809C48.5623 16.6809 47.8331 17.4385 46.4199 17.7012C46.5097 16.378 46.3637 23.3703 41.0459 23.3481C37.4523 23.3331 36.2242 19.1941 36.3197 18.6197C36.4416 17.8875 35.1052 23.4511 31.6145 23.3644C30.1739 23.322 29.1 22.2791 28.4261 20.8885C27.524 21.9209 26.2142 23.3644 24.7448 23.3644C22.1075 23.3644 20.9446 21.1584 21.1416 14.8577C21.1583 14.1105 21.1044 13.8165 20.3616 13.7047C19.9157 13.6304 19.459 13.4895 18.976 13.4152C18.8211 13.932 17.5076 23.1962 12.9912 23.372C11.476 23.4311 10.6475 22.1186 9.96715 21.1443C8.92417 22.5241 7.54738 23.4161 5.58603 23.4161C2.26365 23.4161 0 20.7302 0 17.417C0 14.1038 2.26365 11.4182 5.58603 11.4182C6.17345 11.4182 6.33836 11.5024 6.87502 11.659C5.77137 1.61058 8.37774 0.0401515 10.6578 0.0401515C12.8467 0.0401515 16.5863 5.12064 11.3244 18.0074C12.4926 21.8512 15.0111 21.6338 16.2214 13.7212C16.4676 12.1128 15.809 9.9423 16.8335 9.63937C18.7061 9.08575 18.9048 10.7468 19.7828 11.0235C20.7112 11.316 21.2531 11.2875 22.1444 11.4736C23.6674 11.771 24.2618 12.5892 24.0761 14.4113C23.8533 16.7171 23.4636 20.0729 24.652 20.4818C25.5091 20.779 27.0739 19.0016 27.3485 18.0291C27.623 17.0566 27.6803 16.7237 27.7047 16.0105C27.7419 14.4859 27.7884 13.3684 28.0484 12.2154C28.1597 11.7693 28.2865 11.4739 28.7912 11.4537C29.2066 11.4431 29.9661 11.318 30.3005 11.5782C30.7461 11.9131 30.6905 12.2529 30.6393 13.1471C30.121 25.8966 34.11 19.5319 35.2994 14.4357C34.876 8.67313 35.1667 0.145675 38.7779 0.00265405C40.6559 -0.0717249 41.4861 1.43282 41.5775 2.55581C41.8357 5.72757 40.3888 10.9815 38.4859 14.5148C37.3984 21.7242 43.2411 23.1498 44.1754 17.3952C42.6467 16.6684 40.9947 13.7265 42.339 12.2928C43.0934 11.4882 46.2335 12.6441 46.2849 15.1651C47.8252 14.7531 48.0308 13.8835 48.0522 14.0276C47.6287 8.265 48.0214 0.145749 51.6328 0.00272768C53.5106 -0.0716513 54.3408 1.43289 54.4321 2.55589C54.6904 5.72764 53.2435 10.9816 51.3408 14.5149C50.253 21.7243 56.096 23.1498 57.0301 17.3953C55.8983 17.1769 53.5091 14.0478 54.8876 12.2929C55.6243 11.3551 58.7528 13.3053 59.1032 15.2486C60.5829 14.8298 60.7838 13.9878 60.805 14.1296C60.3815 8.36712 60.7742 0.247876 64.3855 0.104854C66.2634 0.0304754 67.0936 1.53502 67.1849 2.65802C67.4432 5.82977 65.9962 11.0838 64.0933 14.6171C63.0058 21.8266 68.8485 23.2519 69.7829 17.4973C68.2276 17.2383 66.0171 13.9344 67.7962 12.2442C68.507 11.5689 71.2229 13.3219 71.8586 15.3218C72.742 15.2878 73.2918 14.9833 73.4097 14.9525C71.9995 8.18754 73.0493 0.0705829 76.9342 0.00282686C79.0338 -0.0337594 81.0867 1.13799 80.1856 7.57394C79.3256 13.7146 76.234 16.2916 76.2411 16.331C76.4211 17.0667 78.0074 23.2233 82.0023 19.9749C81.7955 19.5066 81.5885 19.0282 81.4728 18.4486C80.8107 15.0729 82.1112 11.2599 85.6462 10.6436C87.6715 10.2906 89.5793 11.2766 89.881 13.4996C90.3773 17.1371 87.0927 19.7715 85.8437 20.3429C85.2843 20.0251 90.9148 23.6362 94.2563 16.3995C94.45 15.9863 94.6837 16.0213 94.9863 16.2343C95.2 16.3847 96.4175 17.5379 95.8512 18.5141ZM8.00277 16.5233C7.83274 16.0149 7.48381 14.8949 7.36044 14.4096C6.68091 13.8187 6.19588 13.7227 5.32365 13.7227C3.38526 13.7227 2.24437 15.5148 2.24437 17.4473C2.24437 19.3798 3.48729 21.1722 5.42567 21.1722C7.10552 21.1722 8.38402 20.03 8.77408 18.4132C8.50106 17.7829 8.23024 17.2036 8.00277 16.5233ZM10.6103 2.70004C9.24825 2.70004 8.78622 5.94913 8.87589 8.72092C8.95519 11.1715 9.63996 13.329 9.99519 14.2956C10.0854 14.4168 10.0686 14.338 10.1491 14.4665C12.514 9.28488 11.5331 2.70004 10.6103 2.70004ZM38.9724 2.80209C37.212 2.60021 37.2233 9.93334 37.4419 11.5782C38.3561 10.1157 39.9444 3.1959 38.9724 2.80209V2.80209ZM51.827 2.80209C50.0667 2.60021 50.078 9.93334 50.2966 11.5782C51.2108 10.1157 52.7991 3.1959 51.827 2.80209ZM64.5798 2.90412C62.8194 2.70223 62.8307 10.0354 63.0494 11.6804C63.9635 10.2177 65.5518 3.2979 64.5798 2.90412V2.90412ZM77.1284 2.37283C74.3857 2.9236 75.0244 12.0682 75.4409 13.672C78.6717 9.23475 78.7381 2.20615 77.1284 2.37283V2.37283ZM87.4073 13.8005C87.268 13.2175 86.5707 12.9058 86.0894 12.9826C84.7123 13.1707 83.3767 14.8858 83.8937 17.497C84.0087 18.0786 84.2967 18.6138 84.2921 18.5961C87.3741 16.5285 87.636 14.8991 87.4073 13.8005ZM29.3312 9.43526C28.9376 9.43534 28.5528 9.31869 28.2255 9.10007C27.8982 8.88145 27.6431 8.57067 27.4924 8.20705C27.3417 7.84344 27.3023 7.4433 27.379 7.05726C27.4558 6.67122 27.6453 6.31661 27.9236 6.03827C28.2019 5.75994 28.5565 5.57039 28.9425 5.49359C29.3285 5.41679 29.7287 5.45619 30.0923 5.60681C30.456 5.75744 30.7668 6.01252 30.9854 6.33979C31.2041 6.66706 31.3208 7.05183 31.3208 7.44542C31.3208 7.70672 31.2693 7.96546 31.1693 8.20686C31.0694 8.44827 30.9228 8.66763 30.7381 8.8524C30.5533 9.03718 30.334 9.18375 30.0926 9.28376C29.8512 9.38377 29.5925 9.43525 29.3312 9.43526V9.43526Z"></path>
                                </svg>

                                <span className="accessibility-text">Back to home page</span>
                            </a>
                            <div className="tagline">
                                Dribbble is the world’s leading community for creatives to share, grow, and get hired.
                            </div>
                            <div className="social-links-container">
                                <a href="/dribbble">
                                    <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 32 32" fill="none" role="img" className="icon fill-current">
                                        <rect width="32" height="32" fill="black" fillOpacity="0"></rect>
                                        <path fill-rule="evenodd" clip-rule="evenodd" d="M16 0C7.16703 0 0 7.16703 0 16C0 24.833 7.16703 32 16 32C24.8156 32 32 24.833 32 16C32 7.16703 24.8156 0 16 0ZM26.5683 7.37527C28.4772 9.70065 29.6226 12.6681 29.6573 15.8785C29.2061 15.7918 24.6941 14.872 20.1475 15.4447C20.0434 15.2191 19.9566 14.9761 19.8525 14.7332C19.5748 14.0738 19.2625 13.397 18.9501 12.7549C23.9826 10.7072 26.2733 7.75705 26.5683 7.37527ZM16 2.36009C19.4707 2.36009 22.6464 3.66161 25.0586 5.7961C24.8156 6.14317 22.7505 8.90239 17.8915 10.7245C15.6529 6.61171 13.1714 3.24512 12.7896 2.72451C13.8134 2.48156 14.8894 2.36009 16 2.36009ZM10.1866 3.64425C10.551 4.13015 12.9805 7.5141 15.2538 11.5401C8.86768 13.2408 3.22777 13.2061 2.62039 13.2061C3.50542 8.9718 6.36876 5.44902 10.1866 3.64425ZM2.32538 16.0174C2.32538 15.8785 2.32538 15.7397 2.32538 15.6009C2.9154 15.6182 9.54447 15.705 16.3644 13.6573C16.7636 14.4208 17.128 15.2017 17.4751 15.9826C17.3015 16.0347 17.1106 16.0868 16.9371 16.1388C9.89154 18.4121 6.14317 24.6247 5.8308 25.1453C3.6616 22.7332 2.32538 19.5228 2.32538 16.0174ZM16 29.6746C12.8416 29.6746 9.92625 28.5987 7.61822 26.7939C7.86117 26.2907 10.6377 20.9458 18.3427 18.256C18.3774 18.2386 18.3948 18.2386 18.4295 18.2213C20.3557 23.2017 21.1367 27.3839 21.3449 28.5813C19.6963 29.2928 17.8915 29.6746 16 29.6746ZM23.6182 27.3319C23.4794 26.4989 22.7505 22.5076 20.9631 17.5965C25.2495 16.9197 28.9978 18.0304 29.4664 18.1866C28.8764 21.987 26.6898 25.2668 23.6182 27.3319Z"></path>
                                    </svg>

                                    <span className="accessibility-text">Back to home page</span>
                                </a>
                                <a href="http://twitter.com/dribbble">
                                    <svg xmlns="http://www.w3.org/2000/svg" aria-labelledby="a1k73teucqyiia119j38qbnb3a9gkrua" role="img" viewBox="0 0 24 24" className="icon fill-current"><title id="a1k73teucqyiia119j38qbnb3a9gkrua">Twitter icon</title><path d="M23.954 4.569c-.885.389-1.83.654-2.825.775 1.014-.611 1.794-1.574 2.163-2.723-.951.555-2.005.959-3.127 1.184-.896-.959-2.173-1.559-3.591-1.559-2.717 0-4.92 2.203-4.92 4.917 0 .39.045.765.127 1.124C7.691 8.094 4.066 6.13 1.64 3.161c-.427.722-.666 1.561-.666 2.475 0 1.71.87 3.213 2.188 4.096-.807-.026-1.566-.248-2.228-.616v.061c0 2.385 1.693 4.374 3.946 4.827-.413.111-.849.171-1.296.171-.314 0-.615-.03-.916-.086.631 1.953 2.445 3.377 4.604 3.417-1.68 1.319-3.809 2.105-6.102 2.105-.39 0-.779-.023-1.17-.067 2.189 1.394 4.768 2.209 7.557 2.209 9.054 0 13.999-7.496 13.999-13.986 0-.209 0-.42-.015-.63.961-.689 1.8-1.56 2.46-2.548l-.047-.02z"></path></svg>

                                    <span className="accessibility-text">Twitter</span>
                                </a>
                                <a href="http://facebook.com/dribbble">
                                    <svg xmlns="http://www.w3.org/2000/svg" aria-labelledby="ao89abrd2u32u6u1kau48wmg5kqtl8gl" role="img" viewBox="0 0 24 24" className="icon fill-current"><title id="ao89abrd2u32u6u1kau48wmg5kqtl8gl">Facebook icon</title><path d="M22.676 0H1.324C.593 0 0 .593 0 1.324v21.352C0 23.408.593 24 1.324 24h11.494v-9.294H9.689v-3.621h3.129V8.41c0-3.099 1.894-4.785 4.659-4.785 1.325 0 2.464.097 2.796.141v3.24h-1.921c-1.5 0-1.792.721-1.792 1.771v2.311h3.584l-.465 3.63H16.56V24h6.115c.733 0 1.325-.592 1.325-1.324V1.324C24 .593 23.408 0 22.676 0"></path></svg>

                                    <span className="accessibility-text">Facebook</span>
                                </a>
                                <a href="http://instagram.com/dribbble">
                                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 16" fillRule="evenodd" clipRule="evenodd" strokeLinejoin="round" strokeMiterlimit="1.414" role="img" className="icon fill-current"><path d="M8 0C5.827 0 5.555.01 4.702.048 3.85.088 3.27.222 2.76.42c-.526.204-.973.478-1.417.923-.445.444-.72.89-.923 1.417-.198.51-.333 1.09-.372 1.942C.008 5.555 0 5.827 0 8s.01 2.445.048 3.298c.04.852.174 1.433.372 1.942.204.526.478.973.923 1.417.444.445.89.72 1.417.923.51.198 1.09.333 1.942.372.853.04 1.125.048 3.298.048s2.445-.01 3.298-.048c.852-.04 1.433-.174 1.942-.372.526-.204.973-.478 1.417-.923.445-.444.72-.89.923-1.417.198-.51.333-1.09.372-1.942.04-.853.048-1.125.048-3.298s-.01-2.445-.048-3.298c-.04-.852-.174-1.433-.372-1.942-.204-.526-.478-.973-.923-1.417-.444-.445-.89-.72-1.417-.923-.51-.198-1.09-.333-1.942-.372C10.445.008 10.173 0 8 0zm0 1.44c2.136 0 2.39.01 3.233.048.78.036 1.203.166 1.485.276.374.145.64.318.92.598.28.28.453.546.598.92.11.282.24.705.276 1.485.038.844.047 1.097.047 3.233s-.01 2.39-.048 3.233c-.036.78-.166 1.203-.276 1.485-.145.374-.318.64-.598.92-.28.28-.546.453-.92.598-.282.11-.705.24-1.485.276-.844.038-1.097.047-3.233.047s-2.39-.01-3.233-.048c-.78-.036-1.203-.166-1.485-.276-.374-.145-.64-.318-.92-.598-.28-.28-.453-.546-.598-.92-.11-.282-.24-.705-.276-1.485C1.45 10.39 1.44 10.136 1.44 8s.01-2.39.048-3.233c.036-.78.166-1.203.276-1.485.145-.374.318-.64.598-.92.28-.28.546-.453.92-.598.282-.11.705-.24 1.485-.276C5.61 1.45 5.864 1.44 8 1.44zm0 2.452c-2.27 0-4.108 1.84-4.108 4.108 0 2.27 1.84 4.108 4.108 4.108 2.27 0 4.108-1.84 4.108-4.108 0-2.27-1.84-4.108-4.108-4.108zm0 6.775c-1.473 0-2.667-1.194-2.667-2.667 0-1.473 1.194-2.667 2.667-2.667 1.473 0 2.667 1.194 2.667 2.667 0 1.473-1.194 2.667-2.667 2.667zm5.23-6.937c0 .53-.43.96-.96.96s-.96-.43-.96-.96.43-.96.96-.96.96.43.96.96z"></path></svg>

                                    <span className="accessibility-text">Instagram</span>
                                </a>
                                <a href="http://www.pinterest.com/dribbble/">
                                    <svg xmlns="http://www.w3.org/2000/svg" aria-labelledby="aa8yf6wlarwaccbbz0qh1dkbuqvdgvcf" role="img" viewBox="0 0 24 24" className="icon fill-current"><title id="aa8yf6wlarwaccbbz0qh1dkbuqvdgvcf">Pinterest icon</title><path d="M12.017 0C5.396 0 .029 5.367.029 11.987c0 5.079 3.158 9.417 7.618 11.162-.105-.949-.199-2.403.041-3.439.219-.937 1.406-5.957 1.406-5.957s-.359-.72-.359-1.781c0-1.663.967-2.911 2.168-2.911 1.024 0 1.518.769 1.518 1.688 0 1.029-.653 2.567-.992 3.992-.285 1.193.6 2.165 1.775 2.165 2.128 0 3.768-2.245 3.768-5.487 0-2.861-2.063-4.869-5.008-4.869-3.41 0-5.409 2.562-5.409 5.199 0 1.033.394 2.143.889 2.741.099.12.112.225.085.345-.09.375-.293 1.199-.334 1.363-.053.225-.172.271-.401.165-1.495-.69-2.433-2.878-2.433-4.646 0-3.776 2.748-7.252 7.92-7.252 4.158 0 7.392 2.967 7.392 6.923 0 4.135-2.607 7.462-6.233 7.462-1.214 0-2.354-.629-2.758-1.379l-.749 2.848c-.269 1.045-1.004 2.352-1.498 3.146 1.123.345 2.306.535 3.55.535 6.607 0 11.985-5.365 11.985-11.987C23.97 5.39 18.592.026 11.985.026L12.017 0z"></path></svg>

                                    <span className="accessibility-text">Pinterest</span>
                                </a>
                            </div>
                        </div>
                        <div className="links-container">
                            <div className="links-column">
                                <div className="link-heading">For designers</div>
                                <a className="link" href="/pro">Go Pro!</a>
                                <a className="link" href="/shots">Explore design work</a>
                                <a className="link" href="/stories">Design blog</a>
                                <a className="link" href="/overtime">Overtime podcast</a>
                                <a className="link" href="/shots?list=playoffs">Playoffs</a>
                                <a className="link" href="/guidelines">Code of conduct</a>
                            </div>
                            <div className="links-column">
                                <div className="link-heading">Hire designers</div>
                                <a className="link" href="/jobs/new">Post a job opening</a>
                                <a className="link" href="/freelance-jobs">Post a freelance project</a>
                                <a className="link" href="/designers">Search for designers</a>
                                <div className="link-heading">Brands</div>
                                <a className="link" href="/advertise">Advertise with us</a>
                            </div>
                            <div className="links-column">
                                <div className="link-heading">Company</div>
                                <a className="link" href="/about">About</a>
                                <a className="link" href="/careers">Careers</a>
                                <a className="link" href="/contact">Support</a>
                                <a className="link" href="/media-kit">Media kit</a>
                                <a className="link" href="/testimonials">Testimonials</a>
                                <a className="link" href="https://developer.dribbble.com">API</a>
                                <a className="link" href="/terms">Terms of service</a>
                                <a className="link" href="/privacy">Privacy policy</a>
                                <a className="link" href="/cookie-policy">Cookie policy</a>
                            </div>
                            <div className="links-column">
                                <div className="link-heading">Directories</div>
                                <a className="link" href="/directories/jobs">Design jobs</a>
                                <a className="link" href="/directories/designers">Designers for hire</a>
                                <a className="link" href="/directories/freelance-designers">Freelance designers for hire</a>
                                <a className="link" href="/tags">Tags</a>
                                <a className="link" href="/places">Places</a>
                                <div className="link-heading">Design assets</div>
                                <a className="link" href="/marketplace">Dribbble Marketplace</a>
                                <a target="_blank" rel="noopener" className="link" href="https://creativemarket.com/?utm_source=dribbble&amp;utm_medium=referral&amp;utm_campaign=footer">Creative Market</a>
                                <a target="_blank" rel="noopener" className="link" href="https://www.fontspring.com/?utm_source=dribbble&amp;utm_medium=referral&amp;utm_campaign=footer">Fontspring</a>
                                <a target="_blank" rel="noopener" className="link" href="https://www.fontsquirrel.com/?utm_source=dribbble&amp;utm_medium=referral&amp;utm_campaign=footer">Font Squirrel</a>
                            </div>
                            <div className="links-column">
                                <div className="link-heading">Design Resources</div>
                                <a rel="noopener" className="link" href="/resources/freelance">Freelancing</a>
                                <a rel="noopener" className="link" href="/resources/design-hiring">Design Hiring</a>
                                <a rel="noopener" className="link" href="/resources/design-portfolio">Design Portfolio</a>
                                <a rel="noopener" className="link" href="/resources/education">Design Education</a>
                                <a rel="noopener" className="link" href="/resources/creative-process">Creative Process</a>
                                <a rel="noopener" className="link" href="https://www.industry-trends.dribbble.com">Design Industry Trends</a>
                            </div>
                        </div>
                    </div>
                    <div className="footer-lower-content">
                        <div>© 2023 Dribbble. All rights reserved.</div>
                        <div className="total-shots-container">
                            <div>
                                <span className="shots-count">21,597,106</span>
                                shots dribbbled
                            </div>
                            <img className="dribbble-ball lazyloaded" data-src="https://cdn.dribbble.com/assets/dribbble-ball-icon-4e54c54abecf8efe027abe6f8bc7794553b8abef3bdb49cd15797067cf80ca53.svg" width="24px" height="24px" alt="Dribbble ball icon" src="https://cdn.dribbble.com/assets/dribbble-ball-icon-4e54c54abecf8efe027abe6f8bc7794553b8abef3bdb49cd15797067cf80ca53.svg" />
                        </div>
                    </div>
                </div>
            </div>

            <div className="shot-overlay js-shot-overlay lazyloading-hidden-container" tabIndex="-1" data-include="css:https://cdn.dribbble.com/assets/components/media-overlay-modal-d7fe0ee79037b7fd06bc8947d09c823fa37c1a81138554cfecd27b1c7bbb6561.css">
                <div className="overlay-content js-overlay-content"></div>
                <div className="shot-nav-prev">
                    <div className="shot-nav-button-container">
                        <a href="#">
                            <div className="shot-nav-button">
                                <svg xmlns="http://www.w3.org/2000/svg" enableBackground="new 0 0 24 24" viewBox="0 0 24 24" role="img" className="icon fill-current"><path d="m13.532 4.585-7.532 7.415 7.532 7.415c.792.779 2.081.779 2.873 0s.792-2.049 0-2.829l-4.659-4.586 4.659-4.587c.384-.378.595-.88.595-1.414s-.211-1.036-.595-1.414c-.792-.78-2.082-.78-2.873 0z"></path></svg>

                            </div>
                        </a>
                        <span>Previous</span>
                    </div>
                </div>
                <div className="shot-nav-next">
                    <div className="shot-nav-button-container">
                        <a href="#">
                            <div className="shot-nav-button">
                                <svg xmlns="http://www.w3.org/2000/svg" enableBackground="new 0 0 24 24" viewBox="0 0 24 24" role="img" className="icon fill-current"><path d="m10.468 19.415 7.532-7.415-7.532-7.415c-.792-.779-2.081-.779-2.873 0s-.792 2.049 0 2.829l4.659 4.586-4.659 4.587c-.384.378-.595.88-.595 1.414s.211 1.036.595 1.414c.792.78 2.082.78 2.873 0z"></path></svg>

                            </div>
                        </a>
                        <span>Next</span>
                    </div>
                </div>
                <a href="#" className="js-close-overlay close-overlay" aria-label="close">
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 26 26" fill="none" role="img" className="icon fill-current">
                        <path d="M8.28596 6.51819C7.7978 6.03003 7.00634 6.03003 6.51819 6.51819C6.03003 7.00634 6.03003 7.7978 6.51819 8.28596L11.2322 13L6.51819 17.714C6.03003 18.2022 6.03003 18.9937 6.51819 19.4818C7.00634 19.97 7.7978 19.97 8.28596 19.4818L13 14.7678L17.714 19.4818C18.2022 19.97 18.9937 19.97 19.4818 19.4818C19.97 18.9937 19.97 18.2022 19.4818 17.714L14.7678 13L19.4818 8.28596C19.97 7.7978 19.97 7.00634 19.4818 6.51819C18.9937 6.03003 18.2022 6.03003 17.714 6.51819L13 11.2322L8.28596 6.51819Z" fill="currentColor"></path>
                    </svg>

                </a>
            </div>
        </div>
    )
}

export default Navbar
