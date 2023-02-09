import { Bell, BookmarkSimple, DotsThreeCircle, Envelope, FileText, Hash, House, User } from 'phosphor-react';
import { NavLink } from 'react-router-dom';

import LogoTwitter from '../../assets/logo-twitter.svg';

import './Sidebar.css';

export const Sidebar = () => {
  return (
    <aside className="sidebar">
      <img src={LogoTwitter} alt="Logo Twitter" className="logo" />

      <nav className="main-navigation">
        <NavLink to="/">
          <House weight='fill' />
          Home
        </NavLink>
        <a href="">
          <Hash />
          Explore
        </a>
        <a href="">
          <Bell />
          Notifications
        </a>
        <a href="">
          <Envelope />
          Messages
        </a>
        <a href="">
          <BookmarkSimple />
          Bookmarks
        </a>
        <a href="">
          <FileText />
          Lists
        </a>
        <a href="">
          <User />
          Profile
        </a>
        <a href="">
          <DotsThreeCircle />
          More
        </a>
      </nav>

      <button type="button" className="new-tweet">
        Tweet
      </button>
    </aside>
  )
}
