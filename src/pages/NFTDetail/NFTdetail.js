import React from "react";
import { Link } from "react-router-dom";
import Header from "../../components/Header";
import NFTimg from "../../assets/img/nftimg.png";
import coinIcon from "../../assets/img/coinicon.png";
import Icon from "../../assets/img/icon_stat.png";
import SwordIcon from "../../assets/img/sword.png";
import "./nftdetail.css";
const NFTdetail = ({ setShowModal }) => {
	return (
		<>
			<Header setShowModal={setShowModal} />
			<section className="nft">
				<div className="container">
					<div className="home-btn">
						<Link to="/">Back to home</Link>
					</div>
					<div className="nft-detail-container">
						<div className="nft-img">
							<img src={NFTimg} alt="nft_image" />
						</div>
						<div className="nft-detail">
							<div className="nft-titles">
								<div className="title">
									<h2>Lorem ipsum </h2>
									<h1>Lorem ipsum </h1>
								</div>
								<div className="title-right">
									<div className="head">
										<p>HERD</p>
										<span>Epic</span>
									</div>
									<div className="head">
										<p>SKIN</p>
										<span>Normal</span>
									</div>
								</div>
							</div>
							<div className="select-fields">
								<select>
									<option selected="" value="0">
										View Owner
									</option>
									<option value="1">No Wrapper</option>
									<option value="2">No JS</option>
									<option value="3">Nice!</option>
								</select>
							</div>
							<div className="nft-data">
								<ul className="tags">
									<li>
										<a href="/" className="active-tag">
											P2E Info
										</a>
									</li>
									<li>
										<a href="/">Stats</a>
									</li>
									<li>
										<a href="/">Fury</a>
									</li>
									<li>
										<a href="/">Passive</a>
									</li>
								</ul>

								<div className="nft-reward">
									<div className="icon">
										<img src={coinIcon} alt="coinIcon" />
									</div>
									<div className="rewards">
										<p>Basic Battle Rewards:</p>
										<div className="reward-data">
											<div className="reward">
												<span>Win:</span>
												<span>+6</span>
											</div>
											<div className="reward">
												<span>Draw:</span>
												<span>+2</span>
											</div>
											<div className="reward">
												<span>Lose:</span>
												<span>+1</span>
											</div>
										</div>
									</div>
								</div>
								<div className="nft-stats">
									<div className="stat">
										<img src={Icon} alt="icon" />
										<p>Win Bonus</p>
									</div>
									<p>6.695</p>
								</div>
								<div className="nft-stats">
									<div className="stat">
										<img src={SwordIcon} alt="icon" />
										<p>gTHC Battles</p>
									</div>
									<p>70/394</p>
								</div>
								<div className="nft-stats">
									<div className="stat">
										<img src={SwordIcon} alt="icon" />
										<p>Daily gTHC Battles</p>
									</div>
									<p>10</p>
								</div>
							</div>
							<div className="nft-price">
								<h1>1,800 THC</h1>
								<p>35.87 USD</p>
							</div>
							<div className="buy-btn">
								<a href="/">BUY NOW</a>
							</div>
						</div>
					</div>
				</div>
			</section>
		</>
	);
};

export default NFTdetail;
