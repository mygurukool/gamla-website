import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import { SectionProps } from '../../utils/SectionProps';
import SectionHeader from './partials/SectionHeader';
import Image from '../elements/Image';
import WinnerImg from './../../assets/images/winner.jpg';
import Button from '../elements/Button';

const propTypes = {
  children: PropTypes.node,
  ...SectionProps.types
}

const defaultProps = {
  children: null,
  ...SectionProps.defaults
}

const WinnerBadge = ({
  className,
  children,
  topOuterDivider,
  bottomOuterDivider,
  topDivider,
  bottomDivider,
  hasBgColor,
  invertColor,
  ...props
}) => {

  const outerClasses = classNames(
    'section',
    topOuterDivider && 'has-top-divider',
    bottomOuterDivider && 'has-bottom-divider',
    hasBgColor && 'has-bg-color',
    invertColor && 'invert-color',
    className
  );

  const innerClasses = classNames(
    'section-inner',
    topDivider && 'has-top-divider',
    bottomDivider && 'has-bottom-divider'
  );

  const sectionHeader = {
    title: '',
    paragraph: 'Gamla.fund won 1st Prize at Polygon BUDIL IT Hackathon.'
  };

  return (
    <section
      {...props}
      className={outerClasses}
    >
      <div className="container">
        <div className={innerClasses}>
          {/* {children} */}
          <h1 className="center-content mt-0 mb-16 reveal-from-bottom" data-reveal-delay="200">
              DeFi Track <span className="text-color-primary">1st Prize</span>
            </h1>    
            <SectionHeader data={sectionHeader} className="center-content" /> 
                        <div className="center-content reveal-from-bottom" data-reveal-delay="600">
                  <Button tag="a" color="dark" target="_blank" wideMobile href="https://devfolio.co/submissions/gamlafund-5970">
                    Know more
                  </Button>
              </div>    
              <br/>
          <div 
                data-reveal-container=".split-item">
                <Image
                  src={WinnerImg}
                  alt="Winner at Polygon BUIDL IT Hackathon"
                  width={1100}
                  height={600} />
              </div>
              </div>
      </div>
    </section>
  );
}

WinnerBadge.propTypes = propTypes;
WinnerBadge.defaultProps = defaultProps;

export default WinnerBadge;