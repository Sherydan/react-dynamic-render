import React from "react";

const Header = ({ filter, setFilter }) => {
    
    return (
        <header className="py-3 mb-4 border-bottom">
            <div className="container d-flex flex-wrap justify-content-center">
                <a
                    href="/"
                    className="d-flex align-items-center mb-3 mb-lg-0 me-lg-auto text-dark text-decoration-none"
                >
                    <svg className="bi me-2" width="40" height="32"></svg>
                    <span className="fs-4">Search</span>
                </a>
                <form className="col-12 col-lg-auto mb-3 mb-lg-0" role="search">
                    <input
                        value={filter}
                        type="search"
                        className="form-control"
                        placeholder="Search..."
                        aria-label="Search"
                        onChange={(e) => setFilter(e.target.value)}
                    />
                </form>
            </div>
        </header>
    );
};

export default Header;
