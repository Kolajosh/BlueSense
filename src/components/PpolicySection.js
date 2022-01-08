import React from "react";
import "./PpolicySection.css";

function PpolicySection() {
  return (
    <>
      <div className='p-component'>
        <div className='p-sect-1'>
          <h1>Privacy Policy</h1>
          <p>
            <span className='blue'>BlueSense</span> takes client privacy
            seriously. In this stead we have provided a guideline for our
            policies in relation to how we handle your information as you use
            our website. <span className='blue'>BlueSense</span> keeps
            everything simple; thus we have also used simple terms and avoided
            legal jargons to make it easy to understand.
          </p>
        </div>
        <div className='p-sect-2'>
          <h2>Privacy Policy.</h2>
          <hr />
          <h3>What information do we collect?</h3>
          <p>
            <span className='blue'>BlueSense</span> collects information from
            you when you register on our site or fill out a form. When
            registering on the BlueSense site you may be asked to enter your
            name or email address. You may however visit{" "}
            <span className='blue'>BlueSense</span> site anonymously.
          </p>
          <br />
          <h3>What do we use your information for?</h3>
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
              on the <span className='blue'>BlueSense</span> website
            </li>
          </ul>
          <p>
            <span className='blue'>Note:</span> If at any time you would like to
            unsubscribe from receiving future emails, we include detailed
            unsubscribe instructions at the bottom of each email.
          </p>
          <br />
          <h3>Do we disclose any information to outside parties?</h3>
          <p>
            <span className='blue'>BlueSense</span> does not sell, trade, or
            otherwise transfer to outside parties your personally identifiable
            information. This does not include trusted third parties who assist
            us in operating our website, conducting our business, or servicing
            you, so long as those parties agree to keep this information
            confidential. <span className='blue'>BlueSense</span> may also
            release your information when we believe release is appropriate to
            comply with the law, enforce our site policies, or protect ours or
            others rights, property, or safety.
          </p>
          <br />
          <h3>Third-party links</h3>
          <p>
            Occasionally, at our discretion, we may include or offer third-party
            products or services on our website. These third-party sites have
            separate and independent privacy policies. We therefore have no
            responsibility or liability for the content and activities of these
            linked sites. Nonetheless, <span className='blue'>BlueSense</span>{" "}
            seeks to protect the integrity of our site and welcome any feedback
            about these sites.
          </p>
          <br />
          <h3>Your Consent</h3>
          <p>
            By using the <span className='blue'>BlueSense</span> site you
            consent to our privacy policy.
          </p>
          <br />
          <h3>Changes to our Privacy Policy</h3>
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
