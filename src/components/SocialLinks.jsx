import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGithub, faLinkedin, faTwitter } from '@fortawesome/free-brands-svg-icons';

const SocialLinks = () => {
  return (
    <footer className="bg-black py-6 border-gray-400 border-t-2">
      <div className="container mx-auto text-center">

        <div className="flex justify-center space-x-6">
        
          <a 
            href="https://github.com/sinclare210" 
            target="_blank" 
            
            className="text-gray-400 hover:text-yellow-400 transition-colors duration-300"
          >
            <FontAwesomeIcon icon={faGithub} size="2x" />
          </a>

       
          <a 
            href="https://www.linkedin.com/in/olajuwon-sinclair-71273828a/" 
            target="_blank" 
           
            className="text-gray-400 hover:text-yellow-400 transition-colors duration-300"
          >
            <FontAwesomeIcon icon={faLinkedin} size="2x" />
          </a>

         
          <a 
            href="https://x.com/Sincla1Olajuwon?t=9Rl_pnqS5YlDRBy-PVlhWQ&s=09" 
            target="_blank" 
           
            className="text-gray-400 hover:text-yellow-400 transition-colors duration-300"
          >
            <FontAwesomeIcon icon={faTwitter} size="2x" />
          </a>
        </div>
        <p className="text-gray-500 mt-4">&copy; {new Date().getFullYear()} Sinclair Daemon. All rights reserved.</p>
      </div>
    </footer>
  );
};

export default SocialLinks;
