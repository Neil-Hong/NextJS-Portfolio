import React from "react";

const Footer = () => {
    return (
        <footer className="footer border z-10 border-t-[#33353F] border-l-transparent border-r-transparent text-white">
            <div className="container p-12 flex justify-between">
                <span>
                    <img src="/images/signature.png" style={{ width: "300px" }} />
                </span>
                <p className="text-slate-600" style={{ alignItems: "center", display: "flex" }}>
                    All rights reserved.
                </p>
            </div>
        </footer>
    );
};

export default Footer;
