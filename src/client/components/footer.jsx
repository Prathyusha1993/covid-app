import React from "react";
const Footer = (props) => {
	const url = props.location.pathname;
	const fixedFooter = url.endsWith("clinic") || url.endsWith("patientportal");
	const styles = (fixedFooter) ? {paddingTop: "20px",bottom:"0",left:"0",position:"absolute",width:"100%"} : {paddingTop: "20px"};
	return (
		<footer style= {styles} className="footer">
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
