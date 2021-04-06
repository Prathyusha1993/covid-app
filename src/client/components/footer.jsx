import React from "react";
import { NonceProvider } from "react-select";
import AGT_LOGO from "../assets/images/results/agt-logo.png";

const Footer = (props) => {
	//const url = props.location.pathname;
	return (
		<footer className="footer footer-changes">
			<div className="footer-bottom">
				<div className="container-fluid">
					<div className="copyright">
						<div className="row">
							<div className="col-md-6 col-lg-6">
								<div className="copyright-text">
									<p className="mb-0">Copyright &copy; 2021 MyCovidNow.</p>
								</div>
							</div>
							<div className="col-md-6 col-lg-6">
								<div className="copyright-menu">
									<div className="policy-menu">
										<div>
											<h3 className="footer-h3">Provided By: </h3>
											<img
											className="footer-img"
												src={AGT_LOGO}
												alt=""
											/>
											<a href="#scroll-top" className="footer-a">
											<i class="fas fa-chevron-up"></i>
											</a>
										</div>
									</div>
								</div>
							</div>
						</div>
					</div>
				</div>
			</div>
		</footer>
	);
};

export default Footer;
