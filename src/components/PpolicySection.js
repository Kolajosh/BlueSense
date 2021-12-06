import React from "react";
import "./PpolicySection.css";

function PpolicySection() {
  return (
    <>
      <div className='p-component'>
        <div className='p-sect-1'>
          <h1>Privacy Policy</h1>
          <p>
            BlueSense takes client privacy seriously. In this stead we have
            provided a guideline for our policies in relation to how we handle
            your information as you use our website. BlueSense keeps everything
            simple; thus we have also used simple terms and avoided legal
            jargons to make it easy to understand.
          </p>
        </div>
        <div className='p-sect-2'>
          <h2>Privacy Policy.</h2>
          <hr />
          <p className='p-heading'>What information do we collect?</p>
          <p>
            BlueSense collects information from you when you register on our
            site or fill out a form. When registering on the BlueSense site you
            may be asked to enter your name or email address. You may however
            visit BlueSense site anonymously.
          </p>
          <br />
          <p className='p-heading'>What do we use your information for?</p>
          <p>
            Any of the information we collect from you may be used in one of the
            following ways:
          </p>
          <ul className='p-sect-2-ul'>
            <li>To improve BlueSense website</li>
            <li>To improve BlueSense customer service</li>
            <li>To send periodic emails to BlueSense clientele</li>
            <li>
              To administer a contest, promotion, survey or other site feature
              on the BlueSense website
            </li>
          </ul>
          <p>
            Note: If at any time you would like to unsubscribe from receiving
            future emails, we include detailed unsubscribe instructions at the
            bottom of each email.
          </p>
          <br />
          <p className='p-heading'>
            Do we disclose any information to outside parties?
          </p>
          <p>
            BlueSense does not sell, trade, or otherwise transfer to outside
            parties your personally identifiable information. This does not
            include trusted third parties who assist us in operating our
            website, conducting our business, or servicing you, so long as those
            parties agree to keep this information confidential. BlueSense may
            also release your information when we believe release is appropriate
            to comply with the law, enforce our site policies, or protect ours
            or others rights, property, or safety.
          </p>
          <br />
          <p className='p-heading'>Third-party links</p>
          <p>
            Occasionally, at our discretion, we may include or offer third-party
            products or services on our website. These third-party sites have
            separate and independent privacy policies. We therefore have no
            responsibility or liability for the content and activities of these
            linked sites. Nonetheless, BlueSense seeks to protect the integrity
            of our site and welcome any feedback about these sites.
          </p>
          <br />
          <p className='p-heading'>Your Consent</p>
          <p>By using the BlueSense site you consent to our privacy policy.</p>
          <br />
          <p className='p-heading'>Changes to our Privacy Policy</p>
          <p>
            If BlueSense decides to change our privacy policy, we will post
            those changes on this page. This policy was last modified on
            <span className='blue'>17.07.2020</span>
          </p>
        </div>
      </div>
    </>
  );
}

export default PpolicySection;
