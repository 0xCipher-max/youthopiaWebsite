import { Link } from "react-router-dom";
import ditLogo from "../../images/ditLogo.png";
import hands from "../../images/hands.png";
import googlePlay from "../../images/googlePlay.png";
import scrollDownIcon from "../../images/scrollDownIcon.png";
import "./LandingContainer.css";
import { useEffect } from "react";
import { Fade, Zoom } from "react-reveal";
import ScrollReveal from "scrollreveal";

const sr = ScrollReveal({
	distance: "60px",
	reset: false,
	duration: 1200,
	delay: 200,
});

const LandingContainer = () => {
	useEffect(() => {
		let vh = window.innerHeight;
		document.documentElement.style.setProperty("--vh", `${vh - 64}px`); //-64 because status bar is not positioned fiex and taking its own space
		sr.reveal(".landingPageDitLogo", {
			origin: "top",
			duration: 2000,
		});
		sr.reveal(".youthopiaDetails", {
			origin: "bottom",
			duration: 1500,
			delay: 1000,
			distance: "50px",
		});
		sr.reveal(".registerButton", {
			origin: "bottom",
			duration: 1500,
			delay: 1200,
			distance: "50px",
		});
		sr.reveal(".googlePlay, .scrollDownButton", {
			origin: "bottom",
			duration: 1500,
			delay: 1400,
			distance: "50px",
		});
	}, []);

	return (
		<div className="LandingContainer">
			<a
				href="https://www.dituniversity.edu.in/"
				target="_blank"
				rel="noopener noreferrer"
				className="ditLogo"
			>
				<img src={ditLogo} className="landingPageDitLogo" alt="" />
			</a>

			<div className="youthopiaLogo">
				<Fade>
					<Zoom>
						<img src={hands} alt="" />
					</Zoom>
				</Fade>

				<div className="youthopiaDetails">
					<p>17th-19th</p>
					<p>November</p>
				</div>
				<Link to="/" style={{ zIndex: 1 }}>
					<div className="registerButton mb-5 z-10">
						Registrations Starting Soon
					</div>
				</Link>
			</div>

			<img
				src={scrollDownIcon}
				className="scrollDownButton absolute bottom-[1rem] w-[3rem] h-[3rem]"
				alt=""
			/>
			<div className="googlePlay absolute bottom-[1rem] right-[1rem]">
				<img src={googlePlay} alt="" />
			</div>
		</div>
	);
};

export default LandingContainer;
