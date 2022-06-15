import React from 'react';
import ContactForm from './components/ContactForm';
import Logo from './components/Logo';
import Mouse from './components/Mouse';
import Navigation from './components/Navigation';
import CopyToClipboard from 'react-copy-to-clipboard';
import SocialNetwork from './components/SocialNetwork';
import Buttons from './components/Buttons';
import { motion } from 'framer-motion';


const Contact = () => {
    const pageTransition = {
        in : {
            opacity : 1,
            x:0,
        },
        out:{
            opacity: 0,
            x:200,
        },
    }
    return (
        <main>
            <Mouse/>
            <motion.div className="contact" initial="out" animate="in" exit="out" variants={pageTransition} transition={{duration:0.5}}>
                <Navigation/>
                <Logo/>
                <ContactForm/>
                <div className="contact-infos">
                    <div className="address">
                        <div className="content">
                            <h4>adresse</h4>
                            <p>11 allée du grand chariot</p>
                            <p>95490 Vauréal</p>
                        </div>
                    </div>
                    <div className="phone">
                        <div className="content">
                            <h4>téléphone</h4>
                            <CopyToClipboard text='0751298868' className="hover">
                                <p style={{cursor: "pointer"}} className="clipboard" onClick={()=>alert("Téléphone copié !")}>07 51 29 88 68</p>
                            </CopyToClipboard>
                        </div>
                    </div>
                    <div className="email">
                        <div className="content">
                            <h4>email</h4>
                            <CopyToClipboard text='shanaentreprise@gmail.com' className="hover">
                                <p style={{cursor: "pointer"}} className="clipboard" onClick={()=>alert("Email copié !")}>shanaentreprise@gmail.com</p>
                            </CopyToClipboard>
                        </div>
                    </div>
                    <SocialNetwork/>
                    <div className="credits">
                        <p>From Abdoulaye SALIHOU - 2022</p>
                    </div>
                </div>
                <Buttons left={"/projet-4"}/>
            </motion.div>
        </main>
    );
};

export default Contact;