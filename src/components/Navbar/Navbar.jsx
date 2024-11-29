import React, { useEffect, useRef, useState } from 'react';
import LogoIcon from '../../assets/images/Logo.svg';
import './Navbar.css';
import ScaleDiv from '../RepetitiveComponents/ScaleDiv';
import MenuIcon from "../../assets/images/menu.svg";

const Navbar = () => {
  const [activeLink, setActiveLink] = useState('');

  const handleLinkClick = (linkName) => {
    setActiveLink(linkName);
  };

  const [isListVisible, setIsListVisible] = useState(false);
  const listRef = useRef(null);
  const iconRef = useRef(null);

  const toggleList = () => {
    if (isListVisible) setIsListVisible(false);
    else setIsListVisible(true);
  };

  const handleClickOutside = (event) => {
    if (
      listRef.current && 
      !listRef.current.contains(event.target) && 
      iconRef.current &&
      !iconRef.current.contains(event.target)
    ) {
      setIsListVisible(false); 
    }
  };

  useEffect(() => {
    document.addEventListener('mousedown', handleClickOutside);

    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, []);

  // Handle smooth scroll with offset for fixed navbar
  const handleSmoothScroll = (e, targetId) => {
    e.preventDefault();
    const offset = 75; // Navbar height
    const target = document.querySelector(targetId);
    window.scrollTo({
      top: target.offsetTop - offset,
      behavior: 'smooth',
    });
  };

  return (
    <div className="w-full h-[75px] flex items-center justify-center fixed top-[56px] left-0 right-0 z-10 bg-white">
      <ScaleDiv className="flex justify-between items-center relative ">
        <div className="flex items-center">
          <img src={LogoIcon} alt="Logo" />
          <span className="text-main font-[700] text-[18px] mr-2">احجزلــــــــــي</span>
        </div>

        <div className="">
          {/* Menu Icon */}
          <div
            ref={iconRef}
            className="md:hidden cursor-pointer"
            onClick={toggleList}
          >
            <a>
              <img src={MenuIcon} alt="MenuIcon" />
            </a>
          </div>

          {/* List */}
          {isListVisible && (
            <div
              ref={listRef}
              className="list absolute border border-main w-full top-full right-0 bg-white z-10"
            >
              <a href='#' className='m-3 hover:text-main' onClick={(e) => handleSmoothScroll(e, '#main')}>
                <div className="pr-3 text-secondary text-[16px] hover:text-main w-fit transition-all ease-in-out duration-300">الرئيسية</div>
              </a>
              <a href='#' className='m-3 hover:text-main' onClick={(e) => handleSmoothScroll(e, '#about')}>
                <div className="pr-3 text-secondary text-[16px] hover:text-main w-fit transition-all ease-in-out duration-300">من نحن</div>
              </a>
              <a href='#' className='m-3 hover:text-main' onClick={(e) => handleSmoothScroll(e, '#Features')}>
                <div className="pr-3 text-secondary text-[16px] hover:text-main w-fit transition-all ease-in-out duration-300">المميزات</div>
              </a>
              <a href='#' className='m-3 hover:text-main' onClick={(e) => handleSmoothScroll(e, '#questions')}>
                <div className="pr-3 text-secondary text-[16px] hover:text-main w-fit transition-all ease-in-out duration-300">الاسئلة الشائعة</div>
              </a>
            </div>
          )}
        </div>

        <div className="justify-between w-[398px] text-secondary hidden md:flex">
          <a
            href="#main"
            className={`nav-link ${activeLink === 'home' ? 'active' : ''}`}
            onClick={(e) => { handleLinkClick('home'); handleSmoothScroll(e, '#main'); }}
          >
            <span>الرئيسية</span>
          </a>
          <a
            href="#about"
            className={`nav-link ${activeLink === 'about' ? 'active' : ''}`}
            onClick={(e) => { handleLinkClick('about'); handleSmoothScroll(e, '#about'); }}
          >
            <span>من نحن</span>
          </a>
          <a
            href="#Features"
            className={`nav-link ${activeLink === 'features' ? 'active' : ''}`}
            onClick={(e) => { handleLinkClick('features'); handleSmoothScroll(e, '#Features'); }}
          >
            <span>المميزات</span>
          </a>
          <a
            href="#questions"
            className={`nav-link ${activeLink === 'faq' ? 'active' : ''}`}
            onClick={(e) => { handleLinkClick('faq'); handleSmoothScroll(e, '#questions'); }}
          >
            <span>الاسئلة الشائعة</span>
          </a>
        </div>
      </ScaleDiv>
    </div>
  );
};

export default Navbar;
