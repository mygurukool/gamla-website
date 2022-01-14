import React from 'react';
import classNames from 'classnames';
import { SectionSplitProps } from '../../utils/SectionProps';
import SectionHeader from './partials/SectionHeader';
import Image from '../elements/Image';
import { Link } from 'react-router-dom';

const propTypes = {
  ...SectionSplitProps.types
}

const defaultProps = {
  ...SectionSplitProps.defaults
}

const FeaturesSplit = ({
  className,
  topOuterDivider,
  bottomOuterDivider,
  topDivider,
  bottomDivider,
  hasBgColor,
  invertColor,
  invertMobile,
  invertDesktop,
  alignTop,
  imageFill,
  ...props
}) => {

  const outerClasses = classNames(
    'features-split section',
    topOuterDivider && 'has-top-divider',
    bottomOuterDivider && 'has-bottom-divider',
    hasBgColor && 'has-bg-color',
    invertColor && 'invert-color',
    className
  );

  const innerClasses = classNames(
    'features-split-inner section-inner',
    topDivider && 'has-top-divider',
    bottomDivider && 'has-bottom-divider'
  );

  const splitClasses = classNames(
    'split-wrap',
    invertMobile && 'invert-mobile',
    invertDesktop && 'invert-desktop',
    alignTop && 'align-top'
  );

  const sectionHeader = {
    title: 'What is Gamla.fund',
    paragraph: 'Gamla is a synonym of a pot, a pool, where-in your wealth grows. Gamla.fund is inspired by a community-run household savings and investments plan. Famously known as Chit Funds in the Indian subcontinent, and worldwide as a form of rotating savings and credit association (ROSCA).'
  };

  return (
    <section
      {...props}
      className={outerClasses}
    >
      <div className="container">
        <div className={innerClasses}>
          <SectionHeader data={sectionHeader} className="center-content" />
          <div className="container-xs">
            <div className="center-content reveal-from-bottom" data-reveal-delay="600">

              <Link to="https://app.gamla.fund/" className="connect-wallet-button button button-primary button-wide-mobile button-sm">Connect Wallet</Link>
              {/* <Button color="primary" onClick={connectWallet}>Connect Wallet</Button> */}
            </div>
          </div>
          <div className={splitClasses}>

            <div className="split-item">
              <div className="split-item-content center-content-mobile reveal-from-left" data-reveal-container=".split-item">
                <div className="text-xxs text-color-primary fw-600 tt-u mb-8">
                  Savings, Borrowing, Investments (interest rates, lending)
                </div>
                <h3 className="mt-0 mb-12">
                  Your Earnings
                </h3>
                <p className="m-0">
                  <b>Earnings will start from the very first month!</b>
                  <br></br>
                  <br></br>
                  The collected fund will be withdrawn by one participant every month.
                  The first month's withdrawal will be lower than the fund value and gradually reaches 100% by the end of the duration.
                </p>
                <br></br>
                <p className="m-0">
                  For eg: The recurring monthly fund value is 10000, the first month's withdrawal will be 8000, splitting the left out 2000 among the remaining 9 participants.
                </p>
              </div>
              <div className={
                classNames(
                  'split-item-image center-content-mobile reveal-from-bottom',
                  imageFill && 'split-item-image-fill'
                )}
                data-reveal-container=".split-item">
                <Image
                  src={require('./../../assets/images/earnings.png')}
                  alt="Earnings"
                  width={528}
                  height={396} />
              </div>
            </div>

            <div className="split-item">
              <div className="split-item-content center-content-mobile reveal-from-right" data-reveal-container=".split-item">
                <div className="text-xxs text-color-primary fw-600 tt-u mb-8">
                  Monthly Withdrawal
                </div>
                <h3 className="mt-0 mb-12">
                  Auction
                </h3>
                <p className="m-0">
                  <b>Fair and transparent monthly withdrawal!</b>
                  <br></br>
                  <br></br>
                  With more than one participant willing to withdraw funds in a month,{' '}
                  <b>smart-contract will trigger an auction</b> and awards the lowest withdrawal amount quoter as the winner.
                  <br></br>
                  <br></br>
                  <b>No withdrawal volunteer?</b> The smart contract will select a random participant!
                </p>
              </div>
              <div className={
                classNames(
                  'split-item-image center-content-mobile reveal-from-bottom',
                  imageFill && 'split-item-image-fill'
                )}
                data-reveal-container=".split-item">
                <Image
                  src={require('./../../assets/images/auction.png')}
                  alt="Auction"
                  width={528}
                  height={396} />
              </div>
            </div>

            <div className="split-item">
              <div className="split-item-content center-content-mobile reveal-from-left" data-reveal-container=".split-item">
                <div className="text-xxs text-color-primary fw-600 tt-u mb-8">
                  Success of Fund cycle
                </div>
                <h3 className="mt-0 mb-12">
                  Trust and Security
                </h3>
                <p className="m-0">
                  <b>Pledging crypto collateral is mandatory to participate in a fund.</b>
                  <br />
                  <br />
                  Upon monthly deposit <b>due-date expiry</b>, the <b>smart contract</b> will identify deposit defaulters and <b>sell off the pledge crypto collateral</b> to compensate the remaining fund duration.
                  <br></br>
                  <br></br>
                  With no more defaulters, 100% successful completion of fund duration.
                </p>
              </div>
              <div className={
                classNames(
                  'split-item-image center-content-mobile reveal-from-bottom',
                  imageFill && 'split-item-image-fill'
                )}
                data-reveal-container=".split-item">
                <Image
                  src={require('./../../assets/images/trust.png')}
                  alt="Trust"
                  width={528}
                  height={396} />
              </div>
            </div>

          </div>
        </div>
      </div>
    </section>
  );
}

FeaturesSplit.propTypes = propTypes;
FeaturesSplit.defaultProps = defaultProps;

export default FeaturesSplit;