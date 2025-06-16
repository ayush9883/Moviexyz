import React from 'react';

const DMCA = () => {
  return (
    <div style={{color: 'white', padding: '20px', fontFamily: 'Arial, sans-serif', lineHeight: '1.6' }}>
      <h1 style={{ textAlign: 'center', marginBottom: '20px' }}>DMCA Policy</h1>
      <p>
        At <strong>MovieXYZ</strong>, we respect the intellectual property rights of others and comply with the Digital Millennium Copyright Act (DMCA). 
        If you believe that your copyrighted work has been copied in a way that constitutes copyright infringement and is accessible on this website, 
        you may notify us by providing the following information:
      </p>
      <ol>
        <li>
          Identify yourself as either:
          <ul>
            <li>The owner of a copyrighted work(s), or</li>
            <li>A person authorized to act on behalf of the owner of an exclusive right that is allegedly infringed.</li>
          </ul>
        </li>
        <li>Identify the copyrighted work claimed to have been infringed.</li>
        <li>
          Identify the material that is claimed to be infringing or the subject of infringing activity. Provide the exact location (URL) of the 
          material on our website to enable us to locate it.
        </li>
        <li>Provide the web address where the link has been published.</li>
        <li>
          Provide your contact information, including your full name, address, and telephone number.
        </li>
      </ol>
      <p>
        Please ensure that your notification complies with the requirements outlined in 
        <a style={{color: 'red'}} href="https://www.copyright.gov/title17/92chap5.html#512" target="_blank" rel="noopener noreferrer"> 17 U.S.C. § 512(c)(3)</a>.
      </p>
      <p>
        <strong>Important:</strong> Claimants who knowingly misrepresent copyright infringement may be held liable for damages, 
        including court costs and attorney fees.
      </p>
      <p>
        Please send your notifications to: <a style={{color: 'red'}} href="mailto:okjanu91027@gmail.com">okjanu91027@gmail.com</a>. Allow up to 3 business days for a response.
      </p>
      <p>Thank you for your understanding and cooperation.</p>
    </div>
  );
};

export default DMCA;