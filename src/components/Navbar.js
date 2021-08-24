import React from "react";
import logo from "../assets/logo.svg";

class Navbar extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      count: 0
    };
  }

  navClick() {
    if(this.state.count === 0){
      document.querySelector("#menu").classList.remove('hidden');
      this.setState({
        count: 1
      });
    } else {
      document.querySelector("#menu").classList.add('hidden');
      this.setState({
        count: 0
      });
    }

  }
  
  render() {

    return (
      <div className="h-24 md:h-32">
        <div className="h-full flex justify-between items-center px-6 md:px-10">
          <div className="">
            <img src={logo} alt={"logo"} className="w-36" />
          </div>
          <div className="block md:hidden">
              <i className="fas fa-bars text-white text-2xl" id="button" onClick={() => this.navClick()} />
          </div>
          <div className="hidden md:block md:static md:w-auto flex absolute top-20 left-0 p-6 w-full" id="menu">
              <ul className="md:flex md:flex-row font-barlow md:text-white md:text-xl md:justify-center md:items-center md:static md:w-auto md:top-0 md:bg-transparent md:my-none bg-white w-full flex flex-col items-center p-4 md:p-0">
                  <li className="mx-6 cursor-pointer text-center mt-6 md:mt-0">About</li>
                  <li className="mx-6 cursor-pointer text-center mt-6 md:mt-0">Services</li>
                  <li className="mx-6 cursor-pointer text-center mt-6 md:mt-0">Projects</li>
                  <li className="md:bg-white py-3 px-5 rounded-full text-black font-fraunces cursor-pointer hover:bg-opacity-30 hover:text-white text-center bg-yellow-300 my-6 w-36 items-center md:my-0 md:mx-0">CONTACT</li>
              </ul>
              <div className="md:hidden block bg-white w-3 h-4 absolute top-3 right-6 border-l-8 border-white"></div>
          </div>
        </div>
      </div>
    );
  }
}

export default Navbar;
