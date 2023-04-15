import React from "react";
import styled from "styled-components";

const PrivacyPolicy = () => {
  return (
    <Wrapper>
      <div className="privacy-policy">
        <h1 className="intro-data">Privacy Policy</h1>
        <p>
          At [Website Name], we respect your privacy and are committed to
          protecting your personal information. This privacy policy explains how
          we collect, use, and protect your personal information when you use
          our website.
        </p>
        <h2>Information We Collect</h2>
        <p>
          When you use our website, we may collect the following types of
          personal information:
        </p>
        <ul>
          <li>
            Name and contact information, such as your name, email address,
            phone number, and mailing address.
          </li>
          <li>
            Payment information, such as your credit card number, billing
            address, and other payment details.
          </li>
          <li>
            Order information, such as the products you purchase, the amount you
            spend, and the shipping address.
          </li>
          <li>
            Information you provide in customer surveys, reviews, or other
            feedback forms.
          </li>
          <li>
            Information you provide when you create an account on our website.
          </li>
          <li>
            Information about your device and how you use our website, such as
            your IP address, browser type, and operating system.
          </li>
        </ul>
        <h2>How We Use Your Information</h2>
        <p>We use your personal information to:</p>
        <ul>
          <li>Process your orders and payments.</li>
          <li>
            Communicate with you about your orders, payments, and any other
            issues related to your use of our website.
          </li>
          <li>Improve our website and our products and services.</li>
          <li>
            Personalize your experience on our website, such as by showing you
            products or offers that may be of interest to you.
          </li>
          <li>
            Conduct research and analysis to better understand our customers and
            their needs.
          </li>
          <li>Comply with legal requirements and protect our legal rights.</li>
        </ul>
        <h2>Disclosure of Your Information</h2>
        <p>
          We do not sell, rent, or disclose your personal information to third
          parties except as described in this policy or with your consent.
        </p>
        <h2>Cookies and Other Technologies</h2>
        <p>
          We may use cookies and other technologies to collect information about
          how you use our website and to improve your experience. A cookie is a
          small text file that is stored on your device when you visit our
          website. You can control cookies through your browser settings, but
          disabling cookies may limit your ability to use certain features of
          our website.
        </p>
        <h2>Data Security</h2>
        <p>
          We take reasonable measures to protect your personal information from
          unauthorized access, use, or disclosure. However, no transmission of
          data over the internet is completely secure, so we cannot guarantee
          the absolute security of your information.
        </p>
        <h2>Third-Party Websites and Services</h2>
        <p>
          Our website may contain links to third-party websites or services. We
          are not responsible for the privacy practices of these third parties,
          and we encourage you to review their privacy policies before providing
          them with any personal information.
        </p>
        <h2>Changes to this Privacy Policy</h2>
        <p>
          We may update this privacy policy from time to time. We will notify
          you of any material changes by posting the new policy on our website.
        </p>
      </div>
    </Wrapper>
  );
};

const Wrapper = styled.div`
  .privacy-policy {
    max-width: 800px;
    margin: 0 auto;
    padding: 50px;
    font-size: 16px;
    /* font-family: "Work Sans", sans-serif; */
  }

  h1 {
    font-size: 36px;
    margin-bottom: 30px;
    text-align: center;
  }

  h2 {
    font-size: 28px;
    margin-top: 50px;
    margin-bottom: 20px;
  }

  ul {
    margin-left: 30px;
    margin-bottom: 30px;
    font-size: 16px;
  }

  p {
    margin-bottom: 30px;
    line-height: 1.5;
  }
`;

export default PrivacyPolicy;
