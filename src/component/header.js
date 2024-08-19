import './header.css';
import { FaRegNewspaper } from "react-icons/fa6";
import breakingnews from "../images/breakingnews.jpg";
import video1 from "../images/video1.mp4";
import video2 from "../images/video2.mp4";
import video3 from "../images/video3.mp4";
import news1 from "../images/news1.jpg";
import news2 from "../images/news2.webp";
import news3 from "../images/news3.jpg";
import news4 from "../images/news4.png";
import news5 from "../images/news5.png";
import news6 from "../images/news6.png";
import news7 from "../images/news7.png";
import news8 from "../images/news8.png";
import news9 from "../images/news9.png";
import news10 from "../images/news10.png";
function Header(){
    const articles = [
        {
            title: "He deserves a lot more' Verstappen backs Alonso",
            image: news1,
            source: "Formula 1",
            time: "3 hours ago",
            description: "Max Verstappen believes his fellow two-time world champion Fernando Alonso 'deserves a lot more' victories...",
            category: "Sport",
            readTime: "8 min read"
        },
        {
            title: "Liverpool hammer Leeds for first win in five games",
            image: news2,
            source: "BBC",
            time: "12 hours ago",
            description: "Mohamed Salah and Diogo Jota both scored twice as Liverpool claimed a first league win in five games...",
            category: "Sport",
            readTime: "8 min read"
        },
        {
            title: "Papua: At least one killed in hunt for kidnapped NZ pilot",
            image: news3,
            source: "IDN Times",
            time: "April 17, 2023",
            description: "At least one Indonesian soldier has been killed in a rebel attack while searching for a kidnapped New Zealand pilot in the Papua region...",
            category: "Crime",
            readTime: "6 min read"
        },
        {
            title: "Jeremy Bowen: Israel's unclear road ahead",
            image: news10,
            source: "BBC",
            time: "April 16, 2023",
            description: "Tensions between Israel and the Palestinians are on the rise once more, with the hopes of peace...",
            category: "Middle East",
            readTime: "8 min read"
        },
    ];
    return(
        <div>
            <header className="header">
                <div className="top-bar">
                    <p>India, IN</p>
                    <nav>
                    <a href="/">About</a>
                    <a href="/">Contact</a>
                    <a href="/">Sign Up</a>
                    <a href="/">Log In</a>
                    </nav>
                </div>
                <div className="logo-bar">
                
                    <h1><FaRegNewspaper className='icon'/> MAGNEWS</h1>
                    <nav>
                    <a href="/">Home</a>
                    <a href="/">News</a>
                    <a href="/">Entertainment</a>
                    <a href="/">Business</a>
                    <a href="/">Travel</a>
                    <a href="/">Life Style</a>
                    <a href="/">Video</a>
                    <a href="/">Features</a>
                    </nav>
                </div>
            </header>
            <div className="trending">
               <p>TRENDING NOW: Designer fashion show kicks off Variety Week</p>
            </div>
            <div className="content-container">
                <div className="main-content">
                    <div className="main-article-row">
                        <div className="main-article">
                            <img src={news4} alt="Main Article 1" />
                            <div className="article-info">
                                <h2>Microsoft quisque at ipsum vel orci eleifend ultrices</h2>
                                <p>Jack Sims - Feb 20</p>
                            </div>
                        </div>
                        <div className="main-article">
                            <img src={news5} alt="Main Article 2" />
                            <div className="article-info">
                                <h2>A New Kind of Virus Has Been Found in Rimberio City.</h2>
                                <p>Jack Sims - Mar 16</p>
                            </div>
                        </div>
                        <div className="main-article">
                            <img src={news6} alt="Main Article 3" />
                            <div className="article-info">
                                <h2>Microsoft quisque at ipsum vel orci eleifend ultrices</h2>
                                <p>Jack Sims - Jun 07</p>
                            </div>
                        </div>
                    </div>

                    <div className="main-article-row">
                        <div className="main-article">
                            <img src={news7} alt="Main Article 4" />
                            <div className="article-info">
                                <h2>A New Kind of Virus Has Been Found in Rimberio City.</h2>
                                <p>Jack Sims - Feb 28</p>
                            </div>
                        </div>
                        <div className="main-article">
                            <img src={news8} alt="Main Article 5" />
                            <div className="article-info">
                                <h2>Microsoft quisque at ipsum vel orci eleifend ultrices</h2>
                                <p>Jack Sims - Jan 13</p>
                            </div>
                        </div>
                        <div className="main-article">
                            <img src={news9} alt="Main Article 6" />
                            <div className="article-info">
                                <h2>A New Kind of Virus Has Been Found in Rimberio City.</h2>
                                <p>Jack Sims - Dec 10</p>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="side-articles">
                    <div className="side-article">
                        <video controls>
                            <source src={video1} type="video/mp4" />
                            Your browser does not support the video tag.
                        </video>
                        <h3>London ipsum dolor sit amet, consectetur adipiscing elit.</h3>
                    </div>
                    <div className="side-article">
                        <video controls>
                            <source src={video2} type="video/mp4" />
                            Your browser does not support the video tag.
                        </video>
                        <h3>Pellentesque dui nibh, pellentesque ut dapibus ut</h3>
                    </div>
                    <div className="side-article">
                        <video controls>
                            <source src={video3} type="video/mp4" />
                            Your browser does not support the video tag.
                        </video>
                        <h3>Motobike Vestibulum venenatis purus nec nibh volutpat</h3>
                    </div>
                </div>
            </div>

            <div className="header-container">
            <div className="featured-article">
                <img src={breakingnews} alt="John Wick Chapter 4" className="featured-image" />
                <div className="featured-content">
                    <p className="featured-source">Netflix • 12 minutes ago</p>
                    <h1 className='head'>Where To Watch 'John Wick: Chapter 4'</h1>
                    <p className="featured-description">
                        There’s been no official announcement regarding John Wick: Chapter 4’s streaming release. However, given it’s a Lionsgate film, John Wick: Chapter 4 will eventually be released on Starz...
                    </p>
                    <p className="featured-category">Movies • 4 min read</p>
                </div>
            </div>
        </div>

        <div className="latest-news-container">
            <div className="latest-news-header">
                <h2>Latest News</h2>
                <a href="/" className="see-all">See all</a>
            </div>
            <div className="news-grid">
                {articles.map((article, index) => (
                    <div key={index} className="news-item">
                        <img src={article.image} alt={article.title} className="news-image" />
                        <div className="news-content">
                            <p className="news-source">{article.source} • {article.time}</p>
                            <h3 className="news-title">{article.title}</h3>
                            <p className="news-description">{article.description}</p>
                            <p className="news-category">{article.category} • {article.readTime}</p>
                        </div>
                    </div>
                ))}
            </div>
        </div>
            <footer>
                <div className="footer">
                    <div className="footer-column">
                        <h2>Entertainment</h2>
                        <nav>
                            <a href="/">Movies</a>
                            <a href="/">TV Shows</a>
                            <a href="/">Music</a>
                            <a href="/">Celebrity News</a>
                            <a href="/">Interviews</a>
                            <a href="/">Trailers</a>
                            <a href="/">Reviews</a>
                            <a href="/">Awards</a>
                        </nav>
                    </div>
                    <div className="footer-column">
                        <h2>Sports</h2>
                        <nav>
                            <a href="/">Football</a>
                            <a href="/">Cricket</a>
                            <a href="/">Tennis</a>
                            <a href="/">Basketball</a>
                            <a href="/">Olympics</a>
                            <a href="/">Golf</a>
                            <a href="/">Motorsport</a>
                            <a href="/">Athletics</a>
                        </nav>
                    </div>
                    <div className="footer-column">
                        <h2>Technology</h2>
                        <nav>
                            <a href="/">Gadgets</a>
                            <a href="/">Reviews</a>
                            <a href="/">Mobile</a>
                            <a href="/">Computing</a>
                            <a href="/">AI</a>
                            <a href="/">Gaming</a>
                            <a href="/">Social Media</a>
                            <a href="/">Apps</a>
                        </nav>
                    </div>
                    <div className="footer-column">
                        <h2>Business</h2>
                        <nav>
                            <a href="/">Markets</a>
                            <a href="/">Economy</a>
                            <a href="/">Startups</a>
                            <a href="/">Investing</a>
                            <a href="/">Real Estate</a>
                            <a href="/">Personal Finance</a>
                            <a href="/">Retail</a>
                            <a href="/">Jobs</a>
                        </nav>
                    </div>
                    <div className="footer-column">
                        <h2>Travel</h2>
                        <nav>
                            <a href="/">Destinations</a>
                            <a href="/">Tips</a>
                            <a href="/">Travel News</a>
                            <a href="/">Cruises</a>
                            <a href="/">Hotels</a>
                            <a href="/">Flights</a>
                            <a href="/">Budget Travel</a>
                            <a href="/">Luxury Travel</a>
                        </nav>
                    </div>
                </div>
                    <div className='copy'>
                        <p>&copy; 2024 NewsApp. All rights reserved.</p>
                    </div>
            </footer>
        </div>
        
        
    )
}
export default Header;