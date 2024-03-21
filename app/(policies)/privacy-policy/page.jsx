import { siteInfo } from '@/utilities';
import React from 'react'

export const metadata = {
  title: "Privacy Policy"
}

const page = () => {
  return (
    <section className=''>
      <h1>Privacy Policy</h1>
      <p className='date'>Last Updated: 13/03/2024</p>

      <div>
        <h2>Introduction</h2>
        <p>This Privacy Policy explains how {siteInfo.name} ("we", "us", or "our") collects, uses, and discloses personal information when you visit our website.</p>
      </div>

      <div>
        <h2>Information we collect</h2>
        <p>When you visit our website, we may collect certain information automatically, including:</p>
        <ul>
          <li>
          Log data: We may collect information that your browser sends whenever you visit our website. This may include your computer's Internet Protocol (IP) address, browser type and version, the pages of our website that you visit, the time and date of your visit, the time spent on those pages, and other statistics.
          </li>

          <li>
          Cookies: We may use cookies and similar tracking technologies to track the activity on our website and hold certain information. You can control and manage cookies through your browser settings.
          </li>

          <li>
          Third-party services: We may use third-party services, such as Google Analytics, to analyze website traffic and user behavior. These services may collect information about your use of our website.
          </li>
        </ul>
      </div>

      <div>
        <h3>Use of information</h3>
        <p>We may use the information we collect for various purposes, including:</p>
        <ul>
          <li>
          To analyze and improve the performance and usability of our website.
          </li>
          <li>
          To personalize your experience and deliver tailored content and advertisements.
          </li>
          <li>
          To communicate with you, respond to your inquiries, and provide customer support.
          </li>
        </ul>
      </div>
      <div>
        <h4>Disclosure of Information</h4>
        <p>We may disclose personal information in the following circumstances:</p>
        <ul>
          <li>With your consent</li>
          <li>To comply with legal obligations.</li>
          <li>To protect and defend our rights or property.</li>
          <li>To prevent or investigate possible wrongdoing in connection with our website.</li>
        </ul>
      </div>

      <div>
        <h5>Third-party links</h5>
        <p>Our website may contain links to third-party websites or services that are not owned or controlled by us. We have no control over, and assume no responsibility for, the content, privacy policies, or practices of any third-party websites or services.</p>
      </div>

      <div>
        <h5>Security</h5>
        <p>We take reasonable precautions to protect the security of your personal information. However, no method of transmission over the Internet or method of electronic storage is completely secure.</p>
      </div>

      <div>
        <h5>Changes to this policy</h5>
        <p>We may update this Privacy Policy from time to time to reflect changes in our privacy practices or legal requirements. We will notify you of any significant changes by posting the updated policy on this page.</p>
      </div>

      <div>
        <h5>Contact us</h5>
        <p>If you have any questions about this Privacy Policy, please contact us at {siteInfo.email}.</p>
      </div>

    </section>
  )
};

export default page