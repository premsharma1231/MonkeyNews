import React, { Component } from "react";
import { Link } from "react-router-dom";
import Swal from 'sweetalert2';

// import { useMediaQuery } from 'react-responsive'


export class NavBar extends Component {

  updateCategory = (category) => {
    this.props.updateCategory({ category });
  };

  updateCountry = (country) => {
    this.props.updateCountry({ country });
  };

  // Example = () => {
  //   const isDesktopOrLaptop = useMediaQuery({
  //     query: '(min-width: 1224px)'
  //   })
  //   const isBigScreen = useMediaQuery({ query: '(min-width: 1824px)' })
  //   const isTabletOrMobile = useMediaQuery({ query: '(max-width: 1224px)' })
  //   const isPortrait = useMediaQuery({ query: '(orientation: portrait)' })
  //   const isRetina = useMediaQuery({ query: '(min-resolution: 2dppx)' })
  // }
  
  ShowingAlert = () => {
    Swal.fire({
      title: "Important Message...",
      text: "Only english is available for now, but stay connected we are working on it!!",
      icon: "info",
    });
  }
  

  render() {
    const categories = [
      'general', 'business', 'entertainment', 'health', 
      'science', 'sports', 'technology',
    ];
    
    const countries = [
       { code: 'ae', name: 'United Arab Emirates' },
       { code: 'ar', name: 'Argentina' },
       { code: 'at', name: 'Austria' },
       { code: 'au', name: 'Australia' },
       { code: 'be', name: 'Belgium' },
       { code: 'bg', name: 'Bulgaria' },
       { code: 'br', name: 'Brazil' },
       { code: 'ca', name: 'Canada' },
       { code: 'ch', name: 'Switzerland' },
       { code: 'cn', name: 'China' },
       { code: 'co', name: 'Colombia' },
       { code: 'cu', name: 'Cuba' },
       { code: 'cz', name: 'Czech Republic' },
       { code: 'de', name: 'Germany' },
       { code: 'eg', name: 'Egypt' },
       { code: 'fr', name: 'France' },
       { code: 'gb', name: 'United Kingdom' },
       { code: 'gr', name: 'Greece' },
       { code: 'hk', name: 'Hong Kong' },
       { code: 'hu', name: 'Hungary' },
       { code: 'id', name: 'Indonesia' },
       { code: 'ie', name: 'Ireland' },
       { code: 'il', name: 'Israel' },
       { code: 'in', name: 'India' },
       { code: 'it', name: 'Italy' },
       { code: 'jp', name: 'Japan' },
       { code: 'kr', name: 'South Korea' },
       { code: 'lt', name: 'Lithuania' },
       { code: 'lv', name: 'Latvia' },
       { code: 'ma', name: 'Morocco' },
       { code: 'mx', name: 'Mexico' },
       { code: 'my', name: 'Malaysia' },
       { code: 'ng', name: 'Nigeria' },
       { code: 'nl', name: 'Netherlands' },
       { code: 'no', name: 'Norway' },
       { code: 'nz', name: 'New Zealand' },
       { code: 'ph', name: 'Philippines' },
       { code: 'pl', name: 'Poland' },
       { code: 'pt', name: 'Portugal' },
       { code: 'ro', name: 'Romania' },
       { code: 'rs', name: 'Serbia' },
       { code: 'ru', name: 'Russia' },
       { code: 'sa', name: 'Saudi Arabia' },
       { code: 'se', name: 'Sweden' },
       { code: 'sg', name: 'Singapore' },
       { code: 'si', name: 'Slovenia' },
       { code: 'sk', name: 'Slovakia' },
       { code: 'th', name: 'Thailand' },
       { code: 'tr', name: 'Turkey' },
       { code: 'tw', name: 'Taiwan' },
       { code: 'ua', name: 'Ukraine' },
       { code: 'us', name: 'United States' },
       { code: 've', name: 'Venezuela' },
       { code: 'za', name: 'South Africa' },
    ];

    const language = [
      { code: 'ar', name: 'Arabic'},
      { code: 'de', name: 'German'},
      { code: 'en', name: 'English'},
      { code: 'es', name: 'Spanish'},
      { code: 'fr', name: 'French'},
      { code: 'he', name: 'Hebrew'},
      { code: 'it', name: 'Italian'},
      { code: 'nl', name: 'Dutch'},
      { code: 'no', name: 'Norwegian'},
      { code: 'pt', name: 'Portuguese'},
      { code: 'ru', name: 'Russian'},
      { code: 'se', name: 'Swedish'},
      { code: 'zh', name: 'Chinese'},
    ]

    return (
      <div className={`flex list-none flex-row h-16 justify-between sticky top-0 z-10 align-middle bg-slate-500 text-white leading-[3.7rem] pr-5 pl-5`}
      style={{backgroundColor: this.props.mode === 'light' ? 'rgb(112, 128, 144)' : 'rgb(0 0 0 / 48%)'}}>
        <ul className="flex flex-row align-middle leading-12">
          <li>
              <Link to={'/'} className={`text-lg hover: cursor-pointer ${this.props.mode === 'light' ? 'rgb(54 54 54 / 48%)' : 'text-white'}`}>MonkeyNews</Link>
          </li>
          <li>
              <Link to={'/about'} className={`text-sm hover: cursor-pointer ml-4 ${this.props.mode === 'light' ? 'rgb(54 54 54 / 48%)' : 'text-white'}`}>About</Link>
          </li>
        </ul>

        <div className="flex flex-row align-middle">
          <div className="dropdown mr-2">
            <a className="btn btn-secondary dropdown-toggle bg-gray-800" href="/" role="button" data-bs-toggle="dropdown" aria-expanded="false">
            Select Category
            </a>
            <ul className="dropdown-menu">
              {categories.map((category) => (
                <li key={category} onClick={() => this.updateCategory(category)}>
                  <Link className="dropdown-item hover:text-white leading-10 hover:bg-slate-800" to={`/country/us/${category}`}>
                    {category.charAt(0).toUpperCase() + category.slice(1)}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div className="dropdown mr-2">
            <a className="btn btn-secondary dropdown-toggle bg-gray-800" href="/" role="button" data-bs-toggle="dropdown" aria-expanded="false">
              Select Country
            </a>
            <ul className="dropdown-menu h-96 overflow-scroll">
              {countries.map(({ code, name }) => (
                <li key={name} onClick={() => this.updateCountry(code)}>
                  <Link className="dropdown-item hover:text-white leading-10 hover:bg-slate-800" to={`/${code}`}>
                    {name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>


          <div onClick={this.ShowingAlert} className="dropdown mr-2">
            <a className="btn btn-secondary dropdown-toggle bg-gray-800" href="/" disabled role="button" data-bs-toggle="dropdown" aria-expanded="false">
              Select Language
            </a>
            <ul className="dropdown-menu h-96 overflow-scroll">
              {language.map(({ code, name }) => (
                <li key={name} onClick={() => this.updateLanguage(code)}>
                  <Link className="dropdown-item hover:text-white leading-10 hover:bg-slate-800" to={`/${code}`}>
                    {name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>  

        <div className="flex align-middle flex-row form-check form-switch">
          <input
            className="leading-[3.9rem] form-check-input mt-4 hover:cursor-pointer"
            type="checkbox"
            role="switch"
            onClick={this.props.ModeChanging}
            
          />
          <label className={`ml-2 hover:cursor-pointer ${this.props.mode === 'light' ? 'text-black' : 'text-white'}`}>
            <strong>
            Dark Mode
            </strong>
          </label>
        </div>
      </div>
    );
  }
}

export default NavBar;