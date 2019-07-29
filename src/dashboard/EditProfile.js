import React, { Component } from "react";
import firebase from "../Firebase";
import { Router, navigate } from "@reach/router";
import ImageUpload from "../ImageUpload";
import { FaArrowRight, FaArrowLeft } from "react-icons/fa";
import { Link } from "@reach/router";

class EditProfile extends Component {
  constructor(props) {
    super(props);
    this.state = {
      ProfilePhoto: "",
      Name: props.profileInfo,
      Surname: "",
      Email: props.profileEmail,
      Skype: "",
      Location: "",
      Language: "",
      message: "",
      Mentor: false,
      Stars: 0
    };
    console.log(props.userID);
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.nextSubmit = this.nextSubmit.bind(this);
    this.locationChanged = this.locationChanged.bind(this);
  }
  locationChanged(event) {
    this.setState({
      Location: event.target.value
    });
  }

  handleChange(e) {
    const itemName = e.target.name;
    const itemValue = e.target.value;

    this.setState({ [itemName]: itemValue });
  }

  handleSubmit(e) {
    e.preventDefault();
    //hire I will put my data to database
    // name je vrednost state.Name ali se sa svakom promenom
    // handleChange menja state.Name
    //i ako je name==="" onda ce da stavmi props inace
    // ce da bude state.Name vrednost za name
    let name = this.state.Name;
    let language = this.state.Language;
    let email = this.state.Email;
    if (!name) {
      name = this.props.profileInfo;
    } else {
      // na drugi nacin se menja ime u bazi

      firebase.auth().onAuthStateChanged(FBUser => {
        if (FBUser) {
          FBUser.updateProfile({
            displayName: name
          });
        }
      });
    }
    if (!language) {
      language = "English";
    }
    if (this.state.Mentor === " " || this.state.Mentor === false) {
      this.setState({ Mentor: false });
    } else {
      this.setState({ Mentor: true });
    }

    //mejl necemo da menjamo!
    //email is not changed on any site

    const ref = firebase.database().ref(`profiles/${this.props.userID}`);

    //ako ovde stavim state uzece sadasnju vrednost
    //ako stavim props uzece uzera koji je logovan tako je namesteno
    ref
      .update({
        Name: name,
        Surname: this.state.Surname,
        Email: email,
        Skype: this.state.Skype,
        Location: this.state.Location,
        Language: language,
        Mentor: this.state.Mentor,
        Stars: this.state.Stars
      })
      .then(
        this.setState({
          message: "Your changes has been saved!"
        })
      );
    //window.location.reload();
  }
  nextSubmit(e) {
    e.preventDefault();
    e.preventDefault();
    //hire I will put my data to database
    // name je vrednost state.Name ali se sa svakom promenom
    // handleChange menja state.Name
    //i ako je name==="" onda ce da stavmi props inace
    // ce da bude state.Name vrednost za name
    let name = this.state.Name;
    let language = this.state.Language;
    let email = this.state.Email;
    if (!name) {
      name = this.props.profileInfo;
    } else {
      // na drugi nacin se menja ime u bazi
      firebase.auth().onAuthStateChanged(FBUser => {
        FBUser.updateProfile({
          displayName: name
        });
      });
    }
    if (!language) {
      language = "English";
    }
    if (this.state.Mentor === " " || this.state.Mentor === false) {
      this.setState({ Mentor: false });
    } else {
      this.setState({ Mentor: true });
    }

    //mejl necemo da menjamo!
    //email is not changed on any site

    const ref = firebase.database().ref(`profiles/${this.props.userID}`);

    //ako ovde stavim state uzece sadasnju vrednost
    //ako stavim props uzece uzera koji je logovan tako je namesteno
    ref
      .update({
        Name: name,
        Surname: this.state.Surname,
        Email: email,
        Skype: this.state.Skype,
        Location: this.state.Location,
        Language: language,
        Mentor: this.state.Mentor,
        Stars: this.state.Stars
      })
      .then(
        this.setState({
          message: "Your changes has been saved!"
        })
      ),
      console.log();

    navigate("/");
  }
  componentDidMount() {
    //ovde cemo da pokupimo podatke o useru i da update state
    const ref = firebase.database().ref(`profiles/${this.props.userID}`);

    ref.on("value", snapshot => {
      if (snapshot.val() !== null) {
        this.setState({
          Name: snapshot.val().Name,
          Surname: snapshot.val().Surname,
          Skype: snapshot.val().Skype,
          Location: snapshot.val().Location,
          Language: snapshot.val().Language,
          Mentor: snapshot.val().Mentor,
          Stars: snapshot.val().Stars
        });
      }
    });
  }

  render() {
    return (
      <div className="mb-0 pb-3">
        <form className="form-group" onSubmit={this.handleSubmit}>
          <div className="container mt-3">
            <div className="row justify-content-center">
              <div className="col-xl-7 col-lg-7 col-md-10 col-sm-10">
                <div className="card bg-light">
                  <div className="card-body">
                    <h3 className="font-weight-light mb-3">Edit profile:</h3>
                    <ImageUpload userID={this.props.userID} />
                    <br />
                    <h5>Profile Data:</h5>

                    <div className="input-group input-group-sm">
                      <div className="input-group input-group-sm mb-3">
                        <div className="input-group-prepend">
                          <span
                            className="input-group-text"
                            id="inputGroup-sizing-sm"
                          >
                            Name:
                          </span>
                        </div>
                        <input
                          type="text"
                          className="form-control"
                          name="Name"
                          aria-label="Small"
                          aria-describedby="inputGroup-sizing-sm"
                          placeholder={this.state.Name}
                          value={this.state.Name}
                          onChange={this.handleChange}
                        />
                      </div>
                      <div className="input-group input-group-sm mb-3">
                        <div className="input-group-prepend">
                          <span
                            className="input-group-text"
                            id="inputGroup-sizing-sm"
                          >
                            Surname:
                          </span>
                        </div>
                        <input
                          type="text"
                          className="form-control"
                          name="Surname"
                          aria-label="Small"
                          aria-describedby="inputGroup-sizing-sm"
                          placeholder="put surname here"
                          value={this.state.Surname}
                          onChange={this.handleChange}
                        />
                      </div>
                      <div className="input-group input-group-sm mb-3">
                        <div className="input-group-prepend">
                          <span
                            className="input-group-text"
                            id="inputGroup-sizing-sm"
                          >
                            Skype:
                          </span>
                        </div>
                        <input
                          type="text"
                          className="form-control"
                          name="Skype"
                          aria-label="Small"
                          aria-describedby="inputGroup-sizing-sm"
                          placeholder="put skype name here"
                          value={this.state.Skype}
                          onChange={this.handleChange}
                        />
                      </div>
                      <div className="input-group input-group-sm mb-3">
                        <div className="input-group-prepend">
                          <span
                            className="input-group-text"
                            id="inputGroup-sizing-sm"
                          >
                            Country:
                          </span>
                        </div>
                        <select
                          className="form-control"
                          id="country"
                          name="country"
                          onChange={this.locationChanged}
                        >
                          <option defaultValue={this.state.Location}>
                            {this.state.Location}
                          </option>
                          <option value="Afghanistan">Afghanistan</option>
                          <option value="Albania">Albania</option>
                          <option value="Algeria">Algeria</option>
                          <option value="Andorra">Andorra</option>
                          <option value="Antigua and Barbuda">
                            Antigua and Barbuda
                          </option>
                          <option value="Argentina">Argentina</option>
                          <option value="Armenia">Armenia</option>
                          <option value="Australia">Australia</option>
                          <option value="Austria">Austria</option>
                          <option value="Azerbaijan">Azerbaijan</option>
                          <option value="Bahamas">Bahamas</option>
                          <option value="Bahrain">Bahrain</option>
                          <option value="Bangladesh">Bangladesh</option>
                          <option value="Barbados">Barbados</option>
                          <option value="Belarus">Belarus</option>
                          <option value="Belgium">Belgium</option>
                          <option value="Belize">Belize</option>
                          <option value="Benin">Benin</option>
                          <option value="Bhutan">Bhutan</option>
                          <option value="Bolivia">Bolivia</option>
                          <option value="Bosnia and Herzegovina">
                            Bosnia and Herzegovina
                          </option>
                          <option value="Botswana">Botswana</option>
                          <option value="Brazil">Brazil</option>
                          <option value="Brunei">Brunei</option>
                          <option value="Bulgaria">Bulgaria</option>
                          <option value="Burkina Faso">Burkina Faso</option>
                          <option value="Burundi">Burundi</option>
                          <option value="Cambodia">Cambodia</option>
                          <option value="Cameroon">Cameroon</option>
                          <option value="Canada">Canada</option>
                          <option value="Cape Verde">Cape Verde</option>
                          <option value="Central African Republic">
                            Central African Republic
                          </option>
                          <option value="Chad">Chad</option>
                          <option value="Chile">Chile</option>
                          <option value="China">China</option>
                          <option value="Colombia">Colombia</option>
                          <option value="Comoros">Comoros</option>
                          <option value="Congo">Congo</option>
                          <option value="Costa Rica">Costa Rica</option>
                          <option value="Cote d'Ivoire">Cote d'Ivoire</option>
                          <option value="Croatia">Croatia</option>
                          <option value="Cuba">Cuba</option>
                          <option value="Cyprus">Cyprus</option>
                          <option value="Czech Republic">Czech Republic</option>
                          <option value="Denmark">Denmark</option>
                          <option value="Djibouti">Djibouti</option>
                          <option value="Dominica">Dominica</option>
                          <option value="Dominican Republic">
                            Dominican Republic
                          </option>
                          <option value="East Timor">East Timor</option>
                          <option value="Ecuador">Ecuador</option>
                          <option value="Egypt">Egypt</option>
                          <option value="El Salvador">El Salvador</option>
                          <option value="Equatorial Guinea">
                            Equatorial Guinea
                          </option>
                          <option value="Eritrea">Eritrea</option>
                          <option value="Estonia">Estonia</option>
                          <option value="Ethiopia">Ethiopia</option>
                          <option value="Fiji">Fiji</option>
                          <option value="Finland">Finland</option>
                          <option value="France">France</option>
                          <option value="Gabon">Gabon</option>
                          <option value="Gambia">Gambia</option>
                          <option value="Georgia">Georgia</option>
                          <option value="Germany">Germany</option>
                          <option value="Ghana">Ghana</option>
                          <option value="Greece">Greece</option>
                          <option value="Grenada">Grenada</option>
                          <option value="Guatemala">Guatemala</option>
                          <option value="Guinea">Guinea</option>
                          <option value="Guinea-Bissau">Guinea-Bissau</option>
                          <option value="Guyana">Guyana</option>
                          <option value="Haiti">Haiti</option>
                          <option value="Honduras">Honduras</option>
                          <option value="Hong Kong">Hong Kong</option>
                          <option value="Hungary">Hungary</option>
                          <option value="Iceland">Iceland</option>
                          <option value="India">India</option>
                          <option value="Indonesia">Indonesia</option>
                          <option value="Iran">Iran</option>
                          <option value="Iraq">Iraq</option>
                          <option value="Ireland">Ireland</option>
                          <option value="Israel">Israel</option>
                          <option value="Italy">Italy</option>
                          <option value="Jamaica">Jamaica</option>
                          <option value="Japan">Japan</option>
                          <option value="Jordan">Jordan</option>
                          <option value="Kazakhstan">Kazakhstan</option>
                          <option value="Kenya">Kenya</option>
                          <option value="Kiribati">Kiribati</option>
                          <option value="North Korea">North Korea</option>
                          <option value="South Korea">South Korea</option>
                          <option value="Kuwait">Kuwait</option>
                          <option value="Kyrgyzstan">Kyrgyzstan</option>
                          <option value="Laos">Laos</option>
                          <option value="Latvia">Latvia</option>
                          <option value="Lebanon">Lebanon</option>
                          <option value="Lesotho">Lesotho</option>
                          <option value="Liberia">Liberia</option>
                          <option value="Libya">Libya</option>
                          <option value="Liechtenstein">Liechtenstein</option>
                          <option value="Lithuania">Lithuania</option>
                          <option value="Luxembourg">Luxembourg</option>
                          <option value="Macedonia">Macedonia</option>
                          <option value="Madagascar">Madagascar</option>
                          <option value="Malawi">Malawi</option>
                          <option value="Malaysia">Malaysia</option>
                          <option value="Maldives">Maldives</option>
                          <option value="Mali">Mali</option>
                          <option value="Malta">Malta</option>
                          <option value="Marshall Islands">
                            Marshall Islands
                          </option>
                          <option value="Mauritania">Mauritania</option>
                          <option value="Mauritius">Mauritius</option>
                          <option value="Mexico">Mexico</option>
                          <option value="Micronesia">Micronesia</option>
                          <option value="Moldova">Moldova</option>
                          <option value="Monaco">Monaco</option>
                          <option value="Mongolia">Mongolia</option>
                          <option value="Montenegro">Montenegro</option>
                          <option value="Morocco">Morocco</option>
                          <option value="Mozambique">Mozambique</option>
                          <option value="Myanmar">Myanmar</option>
                          <option value="Namibia">Namibia</option>
                          <option value="Nauru">Nauru</option>
                          <option value="Nepal">Nepal</option>
                          <option value="Netherlands">Netherlands</option>
                          <option value="New Zealand">New Zealand</option>
                          <option value="Nicaragua">Nicaragua</option>
                          <option value="Niger">Niger</option>
                          <option value="Nigeria">Nigeria</option>
                          <option value="Norway">Norway</option>
                          <option value="Oman">Oman</option>
                          <option value="Pakistan">Pakistan</option>
                          <option value="Palau">Palau</option>
                          <option value="Panama">Panama</option>
                          <option value="Papua New Guinea">
                            Papua New Guinea
                          </option>
                          <option value="Paraguay">Paraguay</option>
                          <option value="Peru">Peru</option>
                          <option value="Philippines">Philippines</option>
                          <option value="Poland">Poland</option>
                          <option value="Portugal">Portugal</option>
                          <option value="Puerto Rico">Puerto Rico</option>
                          <option value="Qatar">Qatar</option>
                          <option value="Romania">Romania</option>
                          <option value="Russia">Russia</option>
                          <option value="Rwanda">Rwanda</option>
                          <option value="Saint Kitts and Nevis">
                            Saint Kitts and Nevis
                          </option>
                          <option value="Saint Lucia">Saint Lucia</option>
                          <option value="Saint Vincent and the Grenadines">
                            Saint Vincent and the Grenadines
                          </option>
                          <option value="Samoa">Samoa</option>
                          <option value="San Marino">San Marino</option>
                          <option value="Sao Tome and Principe">
                            Sao Tome and Principe
                          </option>
                          <option value="Saudi Arabia">Saudi Arabia</option>
                          <option value="Senegal">Senegal</option>
                          <option value="Serbia">Serbia</option>
                          <option value="Seychelles">Seychelles</option>
                          <option value="Sierra Leone">Sierra Leone</option>
                          <option value="Singapore">Singapore</option>
                          <option value="Slovakia">Slovakia</option>
                          <option value="Slovenia">Slovenia</option>
                          <option value="Solomon Islands">
                            Solomon Islands
                          </option>
                          <option value="Somalia">Somalia</option>
                          <option value="South Africa">South Africa</option>
                          <option value="Spain">Spain</option>
                          <option value="Sri Lanka">Sri Lanka</option>
                          <option value="Sudan">Sudan</option>
                          <option value="Suriname">Suriname</option>
                          <option value="Swaziland">Swaziland</option>
                          <option value="Sweden">Sweden</option>
                          <option value="Switzerland">Switzerland</option>
                          <option value="Syria">Syria</option>
                          <option value="Taiwan">Taiwan</option>
                          <option value="Tajikistan">Tajikistan</option>
                          <option value="Tanzania">Tanzania</option>
                          <option value="Thailand">Thailand</option>
                          <option value="Togo">Togo</option>
                          <option value="Tonga">Tonga</option>
                          <option value="Trinidad and Tobago">
                            Trinidad and Tobago
                          </option>
                          <option value="Tunisia">Tunisia</option>
                          <option value="Turkey">Turkey</option>
                          <option value="Turkmenistan">Turkmenistan</option>
                          <option value="Tuvalu">Tuvalu</option>
                          <option value="Uganda">Uganda</option>
                          <option value="Ukraine">Ukraine</option>
                          <option value="United Arab Emirates">
                            United Arab Emirates
                          </option>
                          <option value="United Kingdom">United Kingdom</option>
                          <option value="United States">United States</option>
                          <option value="Uruguay">Uruguay</option>
                          <option value="Uzbekistan">Uzbekistan</option>
                          <option value="Vanuatu">Vanuatu</option>
                          <option value="Vatican City">Vatican City</option>
                          <option value="Venezuela">Venezuela</option>
                          <option value="Vietnam">Vietnam</option>
                          <option value="Yemen">Yemen</option>
                          <option value="Zambia">Zambia</option>
                          <option value="Zimbabwe">Zimbabwe</option>
                        </select>
                      </div>
                      <div className="input-group input-group-sm mb-3">
                        <div className="input-group-prepend">
                          <span
                            className="input-group-text"
                            id="inputGroup-sizing-sm"
                          >
                            Language:
                          </span>
                        </div>
                        <input
                          type="text"
                          className="form-control"
                          name="Language"
                          aria-label="Small"
                          aria-describedby="inputGroup-sizing-sm"
                          placeholder="put languages you know here"
                          value={this.state.Language}
                          onChange={this.handleChange}
                        />
                      </div>

                      <div className="text-center">
                        <button
                          type="submit"
                          className="btn btn-info"
                          id="buttonAdd"
                        >
                          submit Changes
                        </button>
                      </div>
                    </div>
                    <p className="ml-2">{this.state.message}</p>
                    <p className="ml-2">
                      * Fill in your data fields or modify existing ones.
                    </p>
                    <div className="row mb-1">
                      <div className="col text-left">
                        <Link to={"/profile"}>
                          <button className="btn btn-info">
                            <FaArrowLeft />
                          </button>
                        </Link>
                      </div>
                      <div className="col text-right">
                        <button
                          className="btn btn-info"
                          id="buttonAdd"
                          onClick={this.nextSubmit}
                        >
                          <FaArrowRight />
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </form>
      </div>
    );
  }
}

export default EditProfile;
