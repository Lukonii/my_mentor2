import React, { Component } from "react";
import { Link } from "@reach/router";
import { FiUserPlus, FiFileText, FiArrowUp } from "react-icons/fi";

import TopMentors from "./TopMentors";
import { Spring } from "react-spring/renderprops";
class Home extends Component {
  state = {
    mes1: ""
  };

  componentWillMount() {
    let newDate = new Date();
    let date = newDate.getDate();
    date = date / 7;
    let date2 = date;
    date = date * 10;
    date = Number.parseInt(date, 10);
    date2 = Number.parseInt(date2, 10);
    date2 = date2 * 10;
    date = date - date2;
    switch (date) {
      case 1:
        this.setState({
          mes1:
            "Pick people to help you that you like being around. Make sure you’re following your heart while not running from the hard issues.  Become a Master in the Art of Living where people can’t tell if you’re working or playing because, to you, you’re always doing both!"
        });
        return;
      case 2:
        this.setState({
          mes1:
            "Do something about your personal development plan today. It’s going to take some time to achieve lasting change so you need to start now. You can build on what you do today, tomorrow. Don’t become a pro at crastination!"
        });
        return;
      case 4:
        this.setState({
          mes1:
            "To make a plan you need to include steps. Break a large goal into it’s smallest components. Keep the end result in mind as you focus on the smaller bite sized steps."
        });
        return;
      case 5:
        this.setState({
          mes1:
            "You can gain from the success of other people and you can learn from their mistakes. Your own experience is a harsh teacher so learn from the mistakes of others. If you can find a mentor or coach your task will be easier. Read as many books as you can."
        });
        return;
      case 7:
        this.setState({
          mes1:
            "You are responsible for your own progress. You are responsible for what you are today and where you are today."
        });
        return;
      case 8:
        this.setState({
          mes1:
            "Your personal self development plan needs to include how you are going to change, what action will you take? Only action leads to results.  “I see better than I hear” comes to mind here."
        });
        return;
      case 0:
        this.setState({
          mes1:
            "Focus on what you already have. Think about how others benefit from what you do. If you improve yourself, those benefits will increase. Your personal development is for others, as well as for you."
        });
        return;
    }
  }
  render() {
    const { user } = this.props;
    return (
      <React.Fragment>
        <div className="">
          <div className="container">
            <Spring
              config={{ delay: 500 }}
              from={{ opacity: 0 }}
              to={{ opacity: 1 }}
            >
              {props1 => (
                <div style={props1}>
                  <div className="row d-flex justify-content-center">
                    <div className="card text-left" id="primo1">
                      <div className="card-body">
                        <h1 className="card-title">Let the mentor show you!</h1>
                        <div className="card-text">
                          <p>
                            <i id="primo1subtitle">
                              Your mentor for personal development.
                            </i>
                          </p>
                          <h2 className="pt-2 pl-2">
                            <span>
                              Work with mentor for a hour, day or month.
                            </span>
                          </h2>
                          <Spring
                            config={{ delay: 1000 }}
                            from={{ opacity: 0 }}
                            to={{ opacity: 1 }}
                          >
                            {props => (
                              <div className="mt-5 mb-3" style={props}>
                                <a href="#primo3">
                                  <button className="btn btn-light mr-1 mt-2">
                                    <FiFileText /> read more
                                  </button>
                                </a>
                                <Link
                                  to="/mentors"
                                  className="btn btn-info mt-2"
                                >
                                  <FiUserPlus /> find your mentor
                                </Link>
                              </div>
                            )}
                          </Spring>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              )}
            </Spring>
          </div>
          <div className="container">
            <Spring
              config={{ delay: 2000 }}
              from={{ opacity: 0 }}
              to={{ opacity: 1 }}
            >
              {props1 => (
                <div style={props1}>
                  <div className="row d-flex justify-content-center">
                    <div className="card text-left" id="top3">
                      <div className="card-body">
                        <h1 className="card-title">Top 3 mentors:</h1>
                        <div className="card-text">
                          <TopMentors />
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              )}
            </Spring>
          </div>
          <Spring
            config={{ delay: 3000 }}
            from={{ opacity: 0 }}
            to={{ opacity: 1 }}
          >
            {props1 => (
              <div style={props1}>
                <div className="container">
                  <div className="row d-flex justify-content-center">
                    <div className="card text-left" id="primo2">
                      <div className="card-body">
                        <h1 className="card-title">
                          1. Why you should have a mentor?
                        </h1>
                        <div className="lead card-text">
                          <p>
                            Where there is no parent or friend to help you,
                            there is a mentor.
                            <br />
                            Choose a mentor and he will work with you on your
                            persoanl development.
                          </p>
                          <p>
                            <span id="boldit">
                              I believe that a mentor can help you make progress
                              fast.
                            </span>{" "}
                            An experienced mentor who knows how to work can give
                            you real tips that are useful to you as a specific
                            individual. It can help you a lot in solving your
                            problems from a social area that suits you. Mentor
                            meets you personally and knows what's best for you.{" "}
                            <br />
                            The mentor can GIVE YOU instructions and advices on
                            how to behave in society, how to overcome fears and
                            deal with them, how to work on yourself and
                            self-confidence, and much more.
                            <br />
                            That's not such a great connection like you can get
                            HERE.
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="container">
                  <div className="row d-flex justify-content-center">
                    <div className="card text-left" id="primo2">
                      <div className="card-body">
                        <h1 className="card-title">
                          2. How mentor can help you?
                        </h1>
                        <div className="lead card-text">
                          <p>
                            Ok... if you DECIDE to engage mentor, you will have
                            some BENEFITS in your life. You probably know for
                            some of tham, but let's dig deeper.
                            <br />
                            <br />
                            <span id="boldit">
                              {" "}
                              The specific benefits of being mentored include:
                            </span>
                            1. Being encouraged and empowered in personal
                            development. <br />
                            2. Being helped to identify and achieve career
                            goals.
                            <br />
                            3. Being helped to identify and correct gaps in
                            generic skills and knowledge.
                            <br />
                            4. Increasing your confidence developing and
                            maintaining a broader perspective on career options
                            and opportunities.
                            <br />
                            5. Having access to a senior role model gaining
                            insight into University culture developing social
                            and personal skills.
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div id="primo3">
                  <div className="container">
                    <div className="row d-flex justify-content-center">
                      <div className="card text-left" id="primo2">
                        <div className="card-body">
                          <h1 className="card-title">
                            3. What you should do to start your personal
                            development?
                          </h1>
                          <div className="lead card-text">
                            <p>
                              The process is very easy! All you need to do is to
                              pick a mentor that you like, and start
                              communication with him. You will get to know the
                              mentor online via SKYPE and discuss what you would
                              like to improve.
                              <span id="boldit">
                                Talk 1:1 online with your mentor!
                              </span>{" "}
                              Your mentor will become your PERSONAL trainer. If
                              you do not like mentor, you can try it with
                              others, etc.
                              <br />
                              After just a few classes with a mentor, you will
                              feel MORE confident and become aware.
                            </p>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="container-fluid">
                  <div className="row">
                    <div className="card text-center" id="primo21">
                      <div className="card-body">
                        <h2 className="card-title">
                          Five adventages of online mentoring:
                        </h2>
                        <br />
                        <div className=" card-text">
                          <div className="row d-flex justify-content-center">
                            <div className="col-11 col-sm-11 col-md-2 col-lg-2 col-xl-2">
                              <h4>
                                <span id="boldit">
                                  Accessibility and Flexibility
                                </span>
                              </h4>
                            </div>

                            <div className="col-11 col-sm-11 col-md-2 col-lg-2 col-xl-2">
                              <h4>
                                {" "}
                                <span id="boldit">Lowest Price</span>
                              </h4>
                            </div>
                            <div className="col-11 col-sm-11 col-md-2 col-lg-2 col-xl-2">
                              <h4>
                                {" "}
                                <span id="boldit">Bigger choice</span>
                              </h4>
                            </div>
                            <div className="col-11 col-sm-11 col-md-2 col-lg-2 col-xl-2">
                              <h4>
                                {" "}
                                <span id="boldit">Face to Face</span>
                              </h4>
                            </div>
                            <div className="col-11 col-sm-11 col-md-2 col-lg-2 col-xl-2">
                              <h4>
                                {" "}
                                <span id="boldit">Comfort</span>
                              </h4>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="container">
                  <div className="row d-flex justify-content-center">
                    <div className="card text-left" id="primo2">
                      <div className="card-body">
                        <h1 className="card-title">Daily tip:</h1>
                        <div className="lead card-text">
                          <h2 id="daily">"{this.state.mes1}"</h2>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="container">
                  <div className="row d-flex justify-content-center">
                    <div className="card text-left" id="primo2">
                      <div className="card-body">
                        <h1 className="card-title">Motivation:</h1>
                        <div className="lead card-text">
                          <p>
                            For now let me tell you, no matter what your
                            motivations might be: If there's just ONE thing I
                            learned not only in SELF DEVELOPMENT then it's THIS…
                          </p>
                          <p>
                            YOU HAVE THE POWER TO CHANGE YOUR LIFE. You've
                            probably seen it. And you've also probably done it:
                            <br />
                            1. You picked one area in your life.
                            <br />
                            2. You realized what your current situation in that
                            area is.
                            <br />
                            3. You decided that it shall NOT be like this for
                            the rest of your life.
                            <br />
                            4. You spotted the flaws and deficiencies.
                            <br />
                            5. You did some research about what to do.
                            <br />
                            6. You found somebody that seemed to know what
                            they're talking about.
                            <br />
                            7. You followed their advice, applied it and saw
                            different results than before.
                            <br />
                            Pretty simple, right?
                            <br />
                            Now this could be areas like your health and
                            fitness. This can be your social life. This can be
                            your happiness and overall well-being. It can also
                            be your financial situation. No matter what area of
                            your life it is, important is to claim the power to
                            change your life.
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="container">
                  <div className="row d-flex justify-content-center">
                    <div className="card text-left" id="primo2">
                      <div className="card-body">
                        <div className="card-text">
                          <div className="row text-center">
                            <div className="col-11 col-sm-11 col-md-7 col-lg-4 col-lx-4">
                              <h3>Number of active users:</h3>
                              <h1 className="text-center">184</h1>
                            </div>
                            <div className="col-11 col-sm-11 col-md-7 col-lg-4 col-lx-4">
                              <h3>Number of mentors:</h3>
                              <h1 className="text-center">10</h1>
                            </div>
                            <div className="col-11 col-sm-11 col-md-7 col-lg-4 col-lx-4">
                              {user == null && (
                                <span>
                                  <h3>Join us:</h3>
                                  <Link
                                    to="/register"
                                    className="btn btn-light mr-2"
                                  >
                                    Register
                                  </Link>
                                  <Link
                                    to="/login"
                                    className="btn btn-info mr-2"
                                  >
                                    Log In
                                  </Link>
                                </span>
                              )}
                              {user && (
                                <div className="pb-3">
                                  <h3>Need a mentor?</h3>
                                  <Link to="/mentors" className="btn btn-info">
                                    find mentor
                                  </Link>
                                </div>
                              )}
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="container">
                  <div className="row d-flex justify-content-center">
                    <div className="card text-left" id="primo2">
                      <div className="card-body">
                        <h1 className="card-title">To resume:</h1>
                        <div className="lead card-text">
                          <p>
                            Your mentor can help you progress much, but the KEY
                            is in you. The mentor will give you INSTRUCTIONS on
                            how to react and react in certain life
                            circumstances, but it is up to you to APPLY them. If
                            you need a mentor looking for it click here.
                          </p>
                          <a href="#primo1">
                            <button className="btn btn-light mr-1">
                              <FiArrowUp /> back on top
                            </button>
                          </a>
                          <Link to="/mentors" className="btn btn-info">
                            <FiUserPlus /> find your mentor
                          </Link>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="container">
                  <div className="row d-flex justify-content-center">
                    <div className="card text-left" id="primo2">
                      <div className="card-body">
                        <h1 className="card-title">Future updates:</h1>
                        <div className="lead card-text">
                          1. Live chat and support. <br />
                          2. Search buy keywords & tags. <br />
                          3. Suggested books as separated section. <br />
                          4. Subscription to newsletter. <br />
                          5. Payments via web platform.
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            )}
          </Spring>
        </div>
      </React.Fragment>
    );
  }
}

export default Home;
