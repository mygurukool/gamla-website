import React, { useState } from 'react';
import classNames from 'classnames';
import { SectionProps } from '../../utils/SectionProps';
import ButtonGroup from '../elements/ButtonGroup';
import Button from '../elements/Button';
import Image from '../elements/Image';
import Modal from '../elements/Modal';

const propTypes = {
  ...SectionProps.types
}

const defaultProps = {
  ...SectionProps.defaults
}

const Hero = ({
  className,
  topOuterDivider,
  bottomOuterDivider,
  topDivider,
  bottomDivider,
  hasBgColor,
  invertColor,
  ...props
}) => {

  const [videoModalActive, setVideomodalactive] = useState(false);

  const openModal = (e) => {
    e.preventDefault();
    setVideomodalactive(true);
  }

  const closeModal = (e) => {
    e.preventDefault();
    setVideomodalactive(false);
  }   

  const outerClasses = classNames(
    'hero section center-content',
    topOuterDivider && 'has-top-divider',
    bottomOuterDivider && 'has-bottom-divider',
    hasBgColor && 'has-bg-color',
    invertColor && 'invert-color',
    className
  );

  const innerClasses = classNames(
    'hero-inner section-inner',
    topDivider && 'has-top-divider',
    bottomDivider && 'has-bottom-divider'
  );

  return (
    <section
      {...props}
      className={outerClasses}
    >
      <div className="container-sm">
        <div className={innerClasses}>
          <div className="hero-content">
            <h1 className="mt-0 mb-16 reveal-from-bottom" data-reveal-delay="200">
              DeFi Saving funds by <span className="text-color-primary">Community</span>
            </h1>
            <div className="container-xs">
              <p className="m-0 mb-32 reveal-from-bottom" data-reveal-delay="400">
              Community-saving funds, empowering the community to perform peer-to-peer saving, borrowing, lending at their own comfort, feasibility, and needs. 
              <br/>
              <br/>
                Where trust and security are integrated with integrity.
                </p>
              <div className="reveal-from-bottom" data-reveal-delay="600">
                <ButtonGroup>
                {/*   <Button tag="a" color="primary" wideMobile href="https://cruip.com/">
                    Get started
                    </Button> */}
                  <Button tag="a" color="dark" wideMobile href="https://rinkeby.etherscan.io/address/0x25E91137704Ec1BE997158A97a01c3adc50eCe6d#code">
                    View on Etherscan
                    </Button>
                    <Button tag="a" color="dark" wideMobile href="https://github.com/mygurukool/gamlaBE">
                    View on Github
                    </Button>
                </ButtonGroup>
              </div>
            </div>
          </div>
          <div className="hero-figure reveal-from-bottom illustration-element-01" data-reveal-value="20px" data-reveal-delay="800">
            <a
              data-video="https://www.youtube.com/embed/MDVg3_Nbfos"
              href="#0"
              aria-controls="video-modal"
              onClick={openModal}
            >
              <Image
                className="has-shadow"
                src={require('./../../assets/images/video-placeholder.jpg')}
                alt="Hero"
                width={896}
                height={504} />
            </a>
          </div>
          <Modal
            id="video-modal"
            show={videoModalActive}
            handleClose={closeModal}
            video="https://youtu.be/MDVg3_Nbfos"
            videoTag="iframe" />
        </div>
      </div>
    </section>
  );
}

Hero.propTypes = propTypes;
Hero.defaultProps = defaultProps;

export default Hero;