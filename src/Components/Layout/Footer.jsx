export const Footer = () => {
    return (
        <>
            {/* <div className="container my-5"> */}
            <footer
                className="text-center text-lg-start text-white"
                style={{ backgroundColor: "#1c2331" }}
            >
                {/* Section: Social media */}
                <section
                    className="d-flex justify-content-between p-4"
                    style={{ backgroundColor: "#6351ce" }}
                >
                    <div className="me-5">
                        <span>Get connected with us on social networks:</span>
                    </div>
                    <div>
                        <a href="#" className="text-white me-4">
                            <i className="fab fa-facebook-f"></i>
                        </a>
                        <a href="#" className="text-white me-4">
                            <i className="fab fa-twitter"></i>
                        </a>
                        <a href="#" className="text-white me-4">
                            <i className="fab fa-google"></i>
                        </a>
                        <a href="#" className="text-white me-4">
                            <i className="fab fa-instagram"></i>
                        </a>
                        <a href="#" className="text-white me-4">
                            <i className="fab fa-linkedin"></i>
                        </a>
                        <a href="#" className="text-white me-4">
                            <i className="fab fa-github"></i>
                        </a>
                    </div>
                </section>

                {/* Section: Links */}
                <section className="">
                    <div className="container text-center text-md-start mt-5">
                        <div className="row mt-3">
                            <div className="col-md-3 col-lg-4 col-xl-3 mx-auto mb-4">
                                <h6 className="text-uppercase fw-bold">
                                    Realistic Solutions Pvt. Ltd
                                </h6>
                                <hr
                                    className="mb-4 mt-0 d-inline-block mx-auto"
                                    style={{
                                        width: "160px",
                                        backgroundColor: "#7c4dff",
                                        height: "2px",
                                    }}
                                />
                                <p className="tracking-wide text-justify">
                                    Realistic Solutions Pvt. Ltd. provides innovative and
                                    practical solutions tailored to meet the unique needs of
                                    businesses, delivering quality services with a focus on
                                    efficiency, reliability, and customer satisfaction.
                                </p>
                            </div>

                            <div className="col-md-2 col-lg-2 col-xl-2 mx-auto mb-4">
                                <h6 className="text-uppercase fw-bold">Products</h6>
                                <hr
                                    className="mb-4 mt-0 d-inline-block mx-auto"
                                    style={{
                                        width: "60px",
                                        backgroundColor: "#7c4dff",
                                        height: "2px",
                                    }}
                                />
                                <p>
                                    <a href="#!" className="text-white">
                                        Web Development
                                    </a>
                                </p>
                                <p>
                                    <a href="#!" className="text-white">
                                        Solutions and Guidance
                                    </a>
                                </p>
                                <p>
                                    <a href="#!" className="text-white">
                                        Mobile App Development
                                    </a>
                                </p>
                                <p>
                                    <a href="#!" className="text-white">
                                        Website Design
                                    </a>
                                </p>
                            </div>

                            <div className="col-md-3 col-lg-2 col-xl-2 mx-auto mb-4">
                                <h6 className="text-uppercase fw-bold">Useful links</h6>
                                <hr
                                    className="mb-4 mt-0 d-inline-block mx-auto"
                                    style={{
                                        width: "60px",
                                        backgroundColor: "#7c4dff",
                                        height: "2px",
                                    }}
                                />
                                <p>
                                    <a href="#!" className="text-white">
                                        FAQs
                                    </a>
                                </p>
                                <p>
                                    <a href="#!" className="text-white">
                                        Become an Affiliate
                                    </a>
                                </p>
                                <p>
                                    <a href="#!" className="text-white">
                                        Price
                                    </a>
                                </p>
                                <p>
                                    <a href="#!" className="text-white">
                                        Help
                                    </a>
                                </p>
                            </div>

                            <div className="col-md-4 col-lg-3 col-xl-3 mx-auto mb-md-0 mb-4">
                                <h6 className="text-uppercase fw-bold">Contact</h6>
                                <hr
                                    className="mb-4 mt-0 d-inline-block mx-auto"
                                    style={{
                                        width: "60px",
                                        backgroundColor: "#7c4dff",
                                        height: "2px",
                                    }}
                                />
                                <p>
                                    <i className="fas fa-home mr-3"></i> New Baneshwor, Kathmandu-10 ,Nepal
                                </p>
                                <p>
                                    <i className="fas fa-envelope mr-3"></i>   naazayn111@gmail.com
                                </p>
                                <p>
                                    <i className="fas fa-phone mr-3"></i> + 01 234 567 88
                                </p>
                                <p>
                                    <i className="fas fa-print mr-3"></i> + 01 234 567 89
                                </p>
                            </div>
                        </div>
                    </div>
                </section>

                {/* Copyright */}
                <div
                    className="text-center p-3"
                    style={{ backgroundColor: "rgba(0, 0, 0, 0.2)" }}
                >
                    © 2024 Copyright:
                    <a className="text-white" href="https://realisticSolutions.com/">
                        {" "}
                        www.realisticSolutions.com
                    </a>
                </div>
            </footer>
            {/* </div> */}
        </>
    );
};
