import React, {useEffect} from 'react';
import Container from 'react-bootstrap/Container';
import {Col, Row} from "react-bootstrap";
import styles from "./Layout.module.css"
import svgangle from "../assets/Union 464.svg"
import {CgMenuLeft} from "react-icons/cg";
import {RiHome2Line} from "react-icons/ri";
import {GoBell} from "react-icons/go";
import svgChat from "../assets/icons8_communication.svg"
import {CiUser} from "react-icons/ci";
import {Link} from "react-router-dom";

const Layout = ({children, name }) => {

    return (
        <Container>
            <Row>
                <header>
                    <Col className={styles.header} xs={12}>
                        <div className={styles.pages}>
                            <div className={styles.iconsMenu}>
                                <CgMenuLeft/>
                            </div>

                            <div className={styles.text}>
                                <span>{name}</span>
                            </div>

                            <div className={styles.icons}>
                                <Link to="/">
                                <img src={svgangle} alt="icon"/>
                                </Link>
                            </div>
                        </div>

                    </Col>
                </header>


                {children}


                <footer>
                    <Col className={styles.footer} xs={12}>
                        <div className={styles.pageFooter}>
                            <div className={styles.IconFooter}>
                                <CiUser/>
                                <span>پروفایل</span>
                            </div>
                            <div className={styles.IconFooter}>
                                <img src={svgChat} alt="iconchat"/>
                                <span>پشتیبانی</span>
                            </div>
                            <div className={styles.IconFooter}>
                                <GoBell/>
                                <span>اعلان ها</span>
                            </div>
                            <div className={styles.IconFooter}>
                                <RiHome2Line/>
                                <span>منوی اصلی</span>
                            </div>
                        </div>
                    </Col>
                </footer>

            </Row>
        </Container>
    );
};



export default Layout;
