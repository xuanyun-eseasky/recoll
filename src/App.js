// import React from 'react';
// import logo from './logo.svg';
// import './App.css';
//
// function App() {
//   return (
//     <div className="App">
//       <header className="App-header">
//         <img src={logo} className="App-logo" alt="logo" />
//         <p>
//           Edit <code>src/App.js</code> and save to reload.
//         </p>
//         <a
//           className="App-link"
//           href="https://reactjs.org"
//           target="_blank"
//           rel="noopener noreferrer"
//         >
//           Learn React
//         </a>
//       </header>
//     </div>
//   );
// }
//
// export default App;
import React from 'react';
import "./pricing.css";
import "./signin.css";

const App = () => (
    <div>
        <div
            className="d-flex flex-column flex-md-row align-items-center p-3 px-md-4 mb-3 bg-white border-bottom shadow-sm">
            <h5 className="my-0 mr-md-auto font-weight-normal">For Qualcomm Colleagues!</h5>
            {/*<nav className="my-2 my-md-0 mr-md-3">*/}
            {/*    <a className="p-2 text-dark" href="#">Features</a>*/}
            {/*    <a className="p-2 text-dark" href="#">Enterprise</a>*/}
            {/*    <a className="p-2 text-dark" href="#">Support</a>*/}
            {/*    <a className="p-2 text-dark" href="#">Pricing</a>*/}
            {/*</nav>*/}
            <a className="btn btn-outline-primary" href="#">Sign up</a>
        </div>
        <div className="pricing-header px-3 py-3 pt-md-5 pb-md-4 mx-auto text-center">
            <h1 className="display-4">Recognize Your Colleagues!</h1>
            <p className="lead">From the beginning of <b>WFH</b>, how long did you not see the <i>live</i> face of your collegues?</p>
            <p>If you miss them try to recoginze your <i>dear</i> collegegues from photoes or just <b>CHALLENGE</b> them by upload your own selfie!</p>
            <p>Faith and smile will be the <b>BEST</b> weapon to against the <i>Pandemic</i>.</p>
            <p>KEEP SMILE and HAVE FUN!</p>
        </div>
        <form className="form-signin">
                <label htmlFor="inputEmail" className="sr-only">Email address</label>
                <input type="email" id="inputEmail" className="form-control" placeholder="Email address" required
                       autoFocus/>
                       <label htmlFor="inputPassword" className="sr-only">Password</label>
                    <input type="password" id="inputPassword" className="form-control" placeholder="Password" required/>
                        <div className="checkbox mb-3">
                            <label>
                                <input type="checkbox" value="remember-me"/> Remember me
                            </label>
                        </div>
                        <button className="btn btn-lg btn-primary btn-block" type="submit">Sign in</button>

        </form>
        <div className="row"> <button type="button" className="btn btn-link col">Register(Only for Qualcomm employee)</button></div>
    </div>

);

export default App;
