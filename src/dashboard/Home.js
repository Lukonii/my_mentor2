import React, { Component } from "react";
import { Link } from "@reach/router";
import slika2_1 from "../assets/images/slika2_1.JPG";
import slika2_2 from "../assets/images/slika2_2.JPG";
import slika29 from "../assets/images/slika29.jpg";

class Home extends Component {
  render() {
    const { user } = this.props;

    const biggerLead = {
      fontSize: 1.4 + "em",
      fontWeight: 200
    };
    return (
      <div className="container text-center pt-5">
        <div className="row justify-content-center">
          <div className="col-10" id="intro1">
            <div
              className="display-4 text-primary mt-5 mb-5 mb-2"
              style={{
                fontSize: 2.8 + "em"
              }}
            >
              <h1>SATISFIED IN YOUR COMMUNICATION?</h1>
            </div>
            <h2 className="font-weight-light">
              THIS MIGHT BE THE MOST IMPORTANT SITE OF YOUR LIFE...
            </h2>
            <br />
            <h4 className="font-weight-light text-left">Dear Friend.</h4>
            <div className="pl-4 pr-4">
              <p className="lead text-left" style={biggerLead}>
                With years of working with people we have been realized that ...
                More and more people in this world have a problem with
                comunnication. And with all socialmedia stuff, instead of people
                becomming more conecter, they become more and more intothem self
                If you find yourself in this group of people. then you're in the
                place you are It's safe to change my life, I promise you that.
              </p>
            </div>
            <div className="row">
              <div className="col-sm">
                <p className="lead text-left" style={biggerLead}>
                  A Brief Explanation: By using this, you can significantly
                  improve your skills in communication in all fields so that no
                  problem You talk to neighbors, acquaintances, colleagues, safo
                  or a random walker on the street
                </p>
              </div>
              <div className="col">
                <img id="slika1" src={slika2_1} alt="slika2_1" />
              </div>
            </div>
          </div>
          <br />
          <div className="col-10 mt-3 pt-3" id="intro1">
            <p className="lead text-left" style={biggerLead}>
              Have you ever had a blockade in saying that you wanted to tell
              somebody? Something, but you did not know how to express yourself.
              Did you dare to give your opinion? Were these people
              misunderstood?{" "}
            </p>
            <p className="lead text-left" style={biggerLead}>
              In your life, your personality, person, attitudes, concord and
              disagreeing through communication, knowing the best way to which
              can be the expression is one bonus that helps you to open and that
              people from your environment better understand.
            </p>
            <div className="col">
              <img id="slika1" src={slika29} alt="slika29" />
            </div>
            <p className="lead text-left" style={biggerLead}>
              For now let me tell you, no matter what your motivations might be:
              If there's just ONE thing I learned not only in SELF DEVELOPMENT
              but also in BUSINESS, then it's THIS…
            </p>
            <p className="lead text-left" style={biggerLead}>
              YOU HAVE THE POWER TO CHANGE YOUR LIFE. You've probably seen it.
              And you've also probably done it: 1. You picked one area in your
              life. 2. You realized what your current situation in that area is.
              3. You decided that it shall NOT be like this for the rest of your
              life. 4. You spotted the flaws and deficiencies. 5. You did some
              research about what to do. 6. You found somebody that seemed to
              know what they're talking about. 7. You followed their advice,
              applied it and saw different results than before. Pretty simple,
              right? Now this could be areas like your health and fitness. This
              can be your social life. This can be your happiness and overall
              well-being. It can also be your financial situation. No matter
              what area of your life it is, important is to claim the power to
              change your life.
            </p>
            <p className="lead text-left" style={biggerLead}>
              komunikacijski tipovi, ovde cu u zavisnosti od dana u nedelji da
              menjam tip za taj dan
            </p>
            <p className="lead text-left" style={biggerLead}>
              how to become better in comunication, cekiraj listu nasih mentora,
              za sada je ona mala a li probrana uskoro cemo je prosiriti
            </p>
            <p className="lead text-left" style={biggerLead}>
              ovde treba da se napise sta je poenta i kako funkcionise sajt
            </p>
            <p className="lead text-left" style={biggerLead}>
              sta je neophodno da bi se koristio ovaj sajt WHO IS THE MENTORING
              PROGRAM FOR? Here’s the necessary CRITERIA for acceptance into the
              mentoring program with Max: Outside the box thinkers: This is for
              the people daring to change the world, for people going against
              the mainstream, for people who KNOW they are destined for
              something bigger. Work Ethic: You don't dread hard work – quite
              the opposite– you actually enjoy the process of putting in the
              hours that are necessary to build your OWN LIFE. Positive Energy:
              You have a positive outlook on life and are able to push through
              challenges whenever they occur - you stay motivated and keep
              moving towards your goals. ​Complete Ownership: You understand
              that it’s YOUR LIFE you are responsible for and no matter what
              happens to you, there's at least 80% of things, thoughts and
              actions you can CONTROL.
            </p>
            <p className="lead text-left" style={biggerLead}>
              What can the mentoring program help you with? Stop doing what you
              hate: If you currently feel stuck in a 9-to-5-job that you don't
              enjoy, it's our primary goal to get you to be able to quit that
              sucker – without losing your financial stability in the process.
              Start doing what you love: In order for that to work, we'll find
              out what you're naturally good at (even if you don't know the
              answer to that yet), which problems you can solve for others and
              get paid in such amounts that you'll never have to worry about
              your paycheck again. Becoming your own boss: Once you're ready to
              fully commit to your new venture and can confidently rely on your
              solid second income stream, (exceeding your current job) then it's
              time to say goodbye to your boss and finally become your own.
              ​Becoming financially independent: Now that you are wholeheartedly
              involved in your business, we can work out together how you can
              open the gates of prosperity and really make a difference – in the
              world, on your bank account, in your family, everywhere.
            </p>
            {user == null && (
              <span>
                <Link to="/register" className="btn btn-outline-primary mr-2">
                  Register
                </Link>
                <Link to="/login" className="btn btn-outline-primary mr-2">
                  Log In
                </Link>
              </span>
            )}
            {user && (
              <Link to="/meetings" className="btn btn-primary">
                Meetings
              </Link>
            )}
          </div>{" "}
          {/* columns */}
        </div>
        <div className="row">
          <div className="col">
            ovo treba da bude celom
            duzinommmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmm
          </div>
        </div>
      </div>
    );
  }
}

export default Home;
