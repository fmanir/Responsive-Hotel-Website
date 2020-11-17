import './App.scss';
import logo from './img/logo.png';
import user from './img/user.jpg';
import magnifyingGlass from './img/SVG/magnifying-glass.svg';
import bookmark from './img/SVG/bookmark.svg';
import chat from './img/SVG/chat.svg';
import home from './img/SVG/home.svg';
import aircraft from './img/SVG/aircraft-take-off.svg';
import key from './img/SVG/key.svg';
import map from './img/SVG/map.svg';
import hotelOne from './img/hotel-1.jpg';
import hotelTwo from './img/hotel-2.jpg';
import hotelThree from './img/hotel-3.jpg';
import star from './img/SVG/star.svg';
import locationPin from './img/SVG/location-pin.svg';
import userOne from './img/user-1.jpg';
import userTwo from './img/user-2.jpg';
import userThree from './img/user-3.jpg';
import userFour from './img/user-4.jpg';
import userFive from './img/user-5.jpg';
import userSix from './img/user-6.jpg';

function App() {
  return (
    <div className="container">
      <header className="header">
        <img src={logo} alt="book-a-hotel logo" className="logo" />
        
        <form action="#" className="search">
        <input type="text" className="search__input" placeholder="Search hotels"/>
          <button className="search__button">
            <img src={magnifyingGlass} className="search-icon" alt="searchIcon"/>
          </button>
        </form>

        <nav className="user-nav">
          <div className="user-nav__icon-box">
            <img src={bookmark} className="user-nav__icon" alt="icon-bookmark"/>
            <span className="user-nav__notification">7</span>
          </div>
          <div className="user-nav__icon-box">
              <img src={chat} className="user-nav__icon" alt="icon-chat"/>
            <span className="user-nav__notification">13</span>
          </div>
          <div className="user-nav__user">
            <img src={user} alt="User" className="user-nav__user-photo"/>
            <span className="user-nav__user-name">Fizaan</span>
          </div>
        </nav>
      </header>

      <div className="content">
                <nav className="sidebar">
                    <ul className="side-nav">
                        <li className="side-nav__item side-nav__item--active">
                            <a href="#" className="side-nav__link">
                              <img src={home} className="side-nav__icon" alt="home"/>
                              <span>Hotel</span>
                            </a>
                        </li>
                        <li className="side-nav__item">
                            <a href="#" className="side-nav__link">
                              <img src={aircraft} className="side-nav__icon" alt="aircraft-take-off"/>
                              <span>Flight</span>
                            </a>
                        </li>
                        <li className="side-nav__item">
                            <a href="#" className="side-nav__link">
                              <img src={key} className="side-nav__icon" alt="key"/>
                              <span>Car rental</span>
                            </a>
                        </li>
                        <li className="side-nav__item">
                            <a href="#" className="side-nav__link">
                              <img src={map} className="side-nav__icon" alt="map"/>
                              <span>Tours</span>
                            </a>
                        </li>
                    </ul>

                    <div className="legal">
                        &copy; 2020 Book-A-Hotel. All rights reserved.
                    </div>
                </nav>



                <main className="hotel-view">
                    <div className="gallery">
                        <figure className="gallery__item">
                            <img src={hotelOne} alt="Hotel 1" className="gallery__photo"/>
                        </figure>
                        <figure className="gallery__item">
                            <img src={hotelTwo} alt="Hotel 2" className="gallery__photo"/>
                        </figure>
                        <figure className="gallery__item">
                            <img src={hotelThree} alt="Hotel 3" className="gallery__photo"/>
                        </figure>
                    </div>

                    <div className="overview">
                        <h1 className="overview__heading">
                            Royal Tangier Hotel
                        </h1>

                        <div className="overview__stars">
              <img src={star} className="overview__icon-star" alt="star"/>
                          <img src={star} className="overview__icon-star" alt="star"/>
                          <img src={star} className="overview__icon-star" alt="star"/>
                          <img src={star} className="overview__icon-star" alt="star"/>
                          <img src={star} className="overview__icon-star" alt="star"/>
                        </div>

                        <div className="overview__location">
                          <img src={locationPin} className="icon-location" alt="location-pin"/>
                            <button className="btn-inline">Tangier, Morocco</button>
                        </div>

                        <div className="overview__rating">
                            <div className="overview__rating-average">9.1</div>
                            <div className="overview__rating-count">839 votes</div>
                        </div>
                    </div>

                    <div className="detail">
                        <div className="description">
                            <p className="paragraph">
                            The imposing Royal Tangier Hotel is the perfect location for business or leisure. It is set amidst beautiful gardens with a huge free-form swimming pool. Situated on the shores of the Mediterranean, this hotel overlooks the beautiful Bay of Tangier.
                            </p>
                            <p className="paragraph">
                            Only a 5 to 10 minute drive from the city centre and yet far enough away to offer a calm and relaxing environment.
                            </p>
                            <ul className="list">
                                <li className="list__item">On the beach</li>
                                <li className="list__item">All-inclusive</li>
                                <li className="list__item">Free airport shuttle</li>
                                <li className="list__item">Free wifi in all rooms</li>
                                <li className="list__item">Air conditionined rooms</li>
                                <li className="list__item">No pets allowed</li>
                                <li className="list__item">Bar and nightclub on site</li>
                                <li className="list__item">Perfect for families</li>
                            </ul>
                            <div className="recommend">
                                <p className="recommend__count">
                                    Jane and 3 other friends recommend this hotel.
                                </p>
                                <div className="recommend__friends">
                                    <img src={userThree} alt="Friend 1" className="recommend__photo"/>
                                    <img src={userFour} alt="Friend 2" className="recommend__photo"/>
                                    <img src={userFive} alt="Friend 3" className="recommend__photo"/>
                                    <img src={userSix} alt="Friend 4" className="recommend__photo"/>
                                </div>
                            </div>
                        </div>

                        <div className="user-reviews">
                            <figure className="review">
                                <blockquote className="review__text">
                                    Great amenities. Clean, spacious rooms and food was amazing. Would definitely recommend.
                                </blockquote>
                                <figcaption className="review__user">
                                    <img src={userOne} alt="User 1" className="review__photo"/>
                                    <div className="review__user-box">
                                        <p className="review__user-name">John Doe</p>
                                        <p className="review__user-date">Feb 23rd, 2019</p>
                                    </div>
                                    <div className="review__rating">9.2</div>
                                </figcaption>
                            </figure>

                            <figure className="review">
                                <blockquote className="review__text">
                                    Good location, polite staff and very clean. Room we had was a bit small and food inconsistent but this was okay as we generally ate out.
                                </blockquote>
                                <figcaption className="review__user">
                                    <img src={userTwo} alt="User 1" className="review__photo"/>
                                    <div className="review__user-box">
                                        <p className="review__user-name">Jane Doe</p>
                                        <p className="review__user-date">Sept 12th, 2019</p>
                                    </div>
                                    <div className="review__rating">8.3</div>
                                </figcaption>
                            </figure>

                            <button className="btn-inline">Show all <span>&rarr;</span></button>
                        </div>

                    </div>
                    <div className="cta">
                      <h2 className="cta__book-now">
                        Good news! We have 4 rooms available for your selected dates!
                      </h2>
                        <button className="btn">
                          <span className="btn__visible">Book now</span>
                          <span className="btn__invisible">Only 4 rooms left</span>
                        </button>
                    </div>

                </main>
            </div>

    </div>
  );
}

export default App;
