// create header and footer markup

const header = `<header>
                    <div class="branding">
                        <a href="index.html">90/90</a>
                    </div>
                    <nav>
                        <a href="events.html">Events</a>
                        <a href="news.html">News</a>
                        <a href="about.html">About</a>
                    </nav>
                    <div class="signup">
                        <a href="host-event.html">Host an event</a>
                        <a href="#">Donate</a>
                    </div>
                </header>`;

const footer = `<footer>
                    <div class="footer-section">
                        <div class="branding">
                            <a href="index.html">90/90</a>
                        </div>
                        <div class="links">
                            <ul>
                                <li><a href="press.html">Press</a></li>
                                <li><a href="partnerships.html">Partnerships</a></li>
                                <li><a href="faq.html">FAQ</a></li>
                                <li><a href="contact.html">Contact</a></li>
                                <li><a href="get-involved.html">Get Involved</a></li>
                            </ul>
                        </div>
                    </div>
                    <div class="footer-section">
                        <div class="copyright-privacy">
                            <p>&copy;2024 All rights reserved</p>
                            <a href="privacy.html">Privacy</a>
                        </div>
                        <div class="socials">
                            <ul>
                                <li><a href="#">Social</a></li>
                                <li><a href="#">Social</a></li>
                                <li><a href="#">Social</a></li>
                            </ul>
                        </div>
                        <div class="signin">
                            <a href="sign-in.html">Sign In</a>
                        </div>
                    </div>
                </footer>`;

// add header and footer to the page

document.body.insertAdjacentHTML('afterbegin', header);
document.body.insertAdjacentHTML('beforeend', footer);

// get current page and reference to links
const currentUrl = window.location.pathname.split('/').pop();
const links = document.querySelectorAll('header a, footer a');

// add "current" class to links where appropriate
links.forEach(function (l) {
    let href = l.getAttribute('href');
    if (href === currentUrl) {
        l.classList.add('current');
    }
})