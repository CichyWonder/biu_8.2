import React from 'react';
import { BrowserRouter as Router, Routes, Route, NavLink, useNavigate } from 'react-router-dom';

const Home = () => <h1>Strona główna</h1>;
const About = () => <h1>O nas</h1>;
const Services = () => <h1>Usługi</h1>;
const Contact = () => <h1>Kontakt</h1>;
const NotFound = () => {
    return <h1>Nie znaleziono elementu: {window.location.pathname}</h1>;
};

const App = () => {
    return (
        <Router>
            <nav>
                <ul>
                    <li>
                        <NavLink exact to="/" activeClassName="active">
                            Strona główna
                        </NavLink>
                    </li>
                    <li>
                        <NavLink to="/about" activeClassName="active">
                            O nas
                        </NavLink>
                    </li>
                    <li>
                        <NavLink to="/services" activeClassName="active">
                            Usługi
                        </NavLink>
                    </li>
                    <li>
                        <NavLink to="/contact" activeClassName="active">
                            Kontakt
                        </NavLink>
                    </li>
                    <li>
                        <NavLink to="/contact/us" activeClassName="active">
                            Kontakt - US
                        </NavLink>
                    </li>
                    <li>
                        <NavLink to="/contact/pl" activeClassName="active">
                            Kontakt - PL
                        </NavLink>
                    </li>
                    <li>
                        <NavLink to="/contact/de" activeClassName="active">
                            Kontakt - DE
                        </NavLink>
                    </li>
                </ul>
            </nav>

            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/about" element={<About />} />
                <Route path="/services" element={<Services />} />
                <Route path="/contact" element={<Contact />} />
                <Route path="/contact/us" element={<Contact />} />
                <Route path="/contact/pl" element={<Contact />} />
                <Route path="/contact/de" element={<Contact />} />
                <Route path="*" element={<NotFound />} />
            </Routes>
        </Router>
    );
};

export default App;
