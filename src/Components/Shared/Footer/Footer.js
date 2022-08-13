import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { ListGroup, ListGroupItem } from 'react-bootstrap';
import { faCopyright, faDownload, faLink, faMailBulk } from '@fortawesome/free-solid-svg-icons';
import { faDev, faFacebook, faInstagram, faLinkedin, faPinterest, faTwitter, faWhatsapp, faYoutube } from '@fortawesome/free-brands-svg-icons';

const Footer = () => {
    return (
        <div>
            <footer style={{ paddingTop: '1em', marginBottom: '0em', borderTop: '1px dashed #FFB53095' }}>
                <h6 style={{ color: '#FFB53095' }}> <FontAwesomeIcon icon={faCopyright} /> 2022- All Rights Reserved - Shabit Ahtasham Songi. </h6>
                <ListGroup className="list-group-flush">
                    <ListGroupItem>
                        <a href="https://www.facebook.com/AhtashamSongi"
                            rel="noopener noreferrer"
                            target="_blank"><FontAwesomeIcon icon={faFacebook} /></a>
                        <a href="https://twitter.com/ahtashamsongi"
                            rel="noopener noreferrer"
                            target="_blank"><FontAwesomeIcon icon={faTwitter} /></a>
                        <a href="https://bd.linkedin.com/in/ahtashamsongi"
                            rel="noopener noreferrer"
                            target="_blank"><FontAwesomeIcon icon={faLinkedin} /></a>
                        <a href="https://www.youtube.com/channel/UCTxV2V1dsSJM_WzUIoMI3nQ/videos"
                            rel="noopener noreferrer"
                            target="_blank"><FontAwesomeIcon icon={faYoutube} /></a>
                        <a href="https://www.pinterest.com/ahtashamsongi/"
                            rel="noopener noreferrer"
                            target="_blank"><FontAwesomeIcon icon={faPinterest} /></a>
                        <a href="https://www.instagram.com/shabitahtashamsongi/"
                            rel="noopener noreferrer"
                            target="_blank"><FontAwesomeIcon icon={faInstagram} /></a>
                        <a href="https://wa.me/+8801703928204"
                            rel="noopener noreferrer"
                            target="_blank"><FontAwesomeIcon icon={faWhatsapp} /></a>
                    </ListGroupItem>
                </ListGroup>
            </footer>
        </div>
    );
};

export default Footer;