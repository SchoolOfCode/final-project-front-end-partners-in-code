import React from 'react';
import AuthenticationButton from '../Auth0/Auth0InOutButton/Auth0InOut';
import NavBar from '../NavBar/NavBar';
import H1 from '../Global/H1/H1';
import { Link } from 'react-router-dom';
import Logo from '../Global/Logo/Logo';
import css from './sustainability.module.css';
import { useAuth0 } from '@auth0/auth0-react';
import SignupButton from '../Auth0/Auth0SignUpButton/Auth0SignUp';

function Sustainability() {
  const { isAuthenticated } = useAuth0();
  if (isAuthenticated) {
    return (
      <div className={css.displayContainer} data-testid="list-item">
        <div className={css.box}>
          <div className={css.logoItem}>
            <div className={css.logo}>
              <Link to="/">
                <Logo />
              </Link>
            </div>
          </div>
          <div className={css.pinkButtons}>
            <div className={css.logInButton}>
              <AuthenticationButton />
            </div>
            {/* <div className={css.signUpButton}>
              <SignupButton />
            </div> */}
            <div className={css.navBar}>
              <NavBar />
            </div>
          </div>
        </div>
        <div className={css.browse}>
          <H1 text="Sustainability" />
        </div>
        <div className={css.background}>
          <div className={css.headingContainer}>
            <div className={css.heading}>
              <div className={css.h2}>
                <h2> People powered </h2>
              </div>
              <div className={css.p}>
                <p>
                  {' '}
                  Our platform is powered by real people – buying, selling,
                  hiring, searching and connecting. There are no Robots here, no
                  algorithm overlords. Just real people, selling and finding
                  real things. So the first rule of Gumtree? Be respectful, be
                  kind and be helpful to each other. We reserve the right to
                  block any users who are reported for abusive, harmful or
                  discriminatory content.
                </p>
              </div>

              <div className={css.h2}>
                <h2>Trust your gut </h2>
              </div>
              <div className={css.p}>
                <p>
                  It’s important to us that our site is safe and we have a
                  number of measures in place to keep it that way (thanks to
                  some really clever tech and a team of experts). To help our
                  community stay safe, aware, and informed we have extensive
                  safety information on our site and you can report any worrying
                  activity to us via our Help Desk. But we encourage everyone to
                  use their best judgment and to walk away if anything about a
                  transaction doesn’t feel right to you. If it seems too good to
                  be true, it probably is.{' '}
                </p>
              </div>
              <div className={css.h2}>
                <h2>Less is more</h2>
              </div>
              <div className={css.p}>
                <p>
                  We connect real people on Gumtree, this is what drives our
                  site. However, we strongly encourage our users to think about
                  the personal information they share. Much like a first date,
                  you don’t want to give too much away! Use our secure messaging
                  system to speak to each other, and only reveal personal
                  information when you’re ready to buy/sell. Never share payment
                  information or pay a deposit before you’ve seen an item in
                  real life.{' '}
                </p>
              </div>
              <div className={css.h2}>
                <h2>No time-wasters </h2>
              </div>
              <div className={css.p}>
                <p>
                  Yes a Good Find could be that vintage lamp, but a true Good
                  Find on our platform is someone who replies to messages
                  quickly and politely, is clear on price expectations, explains
                  if they’re no longer interested (or an item has sold), and
                  keeps to any arrangements made (e.g. viewing an item, having a
                  call etc.) We want to build a community based on trust and
                  respect, which is why you’ll find ratings on our sellers,
                  including their response rates.{' '}
                </p>
              </div>

              <div className={css.h2}>
                <h2>Keep it clean and legal</h2>
              </div>
              <div className={css.p}>
                <p>
                  We don’t allow illegal activity on Gumtree and we prohibit any
                  activity that could cause harm – this includes individual harm
                  (e.g. abusive messages, scams, physical harm, stolen items),
                  animal welfare issues (e.g. all pet-related ads should meet
                  PAAG’s industry standards on the sale of animals online),
                  environmental harm (e.g. illegal waste removal and scrap metal
                  collecting). If you believe you have identified potentially
                  illegal activity on our site, report it to us immediately.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  } else {
    return (
      <div className={css.displayContainer} data-testid="list-item">
        <div className={css.box}>
          <div className={css.logoItem}>
            <div className={css.logo}>
              <Link to="/">
                <Logo />
              </Link>
            </div>
          </div>
          <div className={css.pinkButtons}>
            <div className={css.logInButton}>
              <AuthenticationButton />
            </div>
            <div className={css.signUpButton}>
              <SignupButton />
            </div>
            <div className={css.navBar}>
              <NavBar />
            </div>
          </div>
        </div>
        <div className={css.browse}>
          <H1 text="Sustainability" />
        </div>
        <div className={css.background}>
          <div className={css.headingContainer}>
            <div className={css.heading}>
              <div className={css.h2}>
                <h2> People powered </h2>
              </div>
              <div className={css.p}>
                <p>
                  {' '}
                  Our platform is powered by real people – buying, selling,
                  hiring, searching and connecting. There are no Robots here, no
                  algorithm overlords. Just real people, selling and finding
                  real things. So the first rule of Gumtree? Be respectful, be
                  kind and be helpful to each other. We reserve the right to
                  block any users who are reported for abusive, harmful or
                  discriminatory content.
                </p>
              </div>

              <div className={css.h2}>
                <h2>Trust your gut </h2>
              </div>
              <div className={css.p}>
                <p>
                  It’s important to us that our site is safe and we have a
                  number of measures in place to keep it that way (thanks to
                  some really clever tech and a team of experts). To help our
                  community stay safe, aware, and informed we have extensive
                  safety information on our site and you can report any worrying
                  activity to us via our Help Desk. But we encourage everyone to
                  use their best judgment and to walk away if anything about a
                  transaction doesn’t feel right to you. If it seems too good to
                  be true, it probably is.{' '}
                </p>
              </div>
              <div className={css.h2}>
                <h2>Less is more</h2>
              </div>
              <div className={css.p}>
                <p>
                  We connect real people on Gumtree, this is what drives our
                  site. However, we strongly encourage our users to think about
                  the personal information they share. Much like a first date,
                  you don’t want to give too much away! Use our secure messaging
                  system to speak to each other, and only reveal personal
                  information when you’re ready to buy/sell. Never share payment
                  information or pay a deposit before you’ve seen an item in
                  real life.{' '}
                </p>
              </div>
              <div className={css.h2}>
                <h2>No time-wasters </h2>
              </div>
              <div className={css.p}>
                <p>
                  Yes a Good Find could be that vintage lamp, but a true Good
                  Find on our platform is someone who replies to messages
                  quickly and politely, is clear on price expectations, explains
                  if they’re no longer interested (or an item has sold), and
                  keeps to any arrangements made (e.g. viewing an item, having a
                  call etc.) We want to build a community based on trust and
                  respect, which is why you’ll find ratings on our sellers,
                  including their response rates.{' '}
                </p>
              </div>

              <div className={css.h2}>
                <h2>Keep it clean and legal</h2>
              </div>
              <div className={css.p}>
                <p>
                  We don’t allow illegal activity on Gumtree and we prohibit any
                  activity that could cause harm – this includes individual harm
                  (e.g. abusive messages, scams, physical harm, stolen items),
                  animal welfare issues (e.g. all pet-related ads should meet
                  PAAG’s industry standards on the sale of animals online),
                  environmental harm (e.g. illegal waste removal and scrap metal
                  collecting). If you believe you have identified potentially
                  illegal activity on our site, report it to us immediately.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
export default Sustainability;
