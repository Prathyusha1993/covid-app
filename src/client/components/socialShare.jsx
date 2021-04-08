import React from "react";
import {FacebookShareButton,TwitterShareButton,LinkedinShareButton,EmailShareButton} from "react-share";
import {FacebookIcon, TwitterIcon, LinkedinIcon, EmailIcon} from "react-share";

const SocialShare = () => {
    return(
        <div class="container" style={{textAlign:"center", paddingBottom: "20px"}}>
            <FacebookShareButton url="https://www.mycovidnow.com" style={{padding:"5px"}}>
                <FacebookIcon size={32} logoFillColor="White">

                </FacebookIcon>
            </FacebookShareButton>
            <TwitterShareButton url="https://www.mycovidnow.com" style={{padding:"5px"}}>
                <TwitterIcon size={32} logoFillColor="White">

                </TwitterIcon>
            </TwitterShareButton>
            <LinkedinShareButton url="https://www.mycovidnow.com" style={{padding:"5px"}}>
                <LinkedinIcon size={32} logoFillColor="White">

                </LinkedinIcon>
            </LinkedinShareButton>
            <EmailShareButton url="https://www.mycovidnow.com" style={{padding:"5px"}}>
                <EmailIcon size={32} logoFillColor="White">

                </EmailIcon>
            </EmailShareButton>
        </div>
    );
}
export default SocialShare;

