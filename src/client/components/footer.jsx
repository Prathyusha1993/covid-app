import React from "react";
const Footer = (props) => {
	
	return (
		<footer style={{ paddingTop: "20px" }} className="footer">
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
									<ul className="policy-menu">
										<li>
											<a href="#scroll-top">
												<i class="fas fa-arrow-up"></i>
											</a>
										</li>
									</ul>
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
