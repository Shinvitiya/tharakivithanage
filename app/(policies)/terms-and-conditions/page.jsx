import React from 'react'
import { siteInfo } from '@/utilities'

export const metadata = {
  title: "Terms & Conditions"
}

const page = () => {
  return (
    <section className=''>
      <div>
        <h1 className=''>Terms & Conditions</h1>
        <p className='date'>Last Updated: 13/03/2024</p>
        <p className=''>
        Please read these Terms and Conditions ("Terms", "Terms and Conditions") carefully before using "{siteInfo.url}" (the "Service") operated by {siteInfo.name} ("us", "we", or "our").
        </p>
      </div>

      <div>
        <h2 className=''>Agreement to terms</h2>
        <p>By accessing or using the Service, you agree to be bound by these Terms. If you disagree with any part of the terms, then you may not access the Service.</p>
      </div>

      <div>
        <h3 className="">Intellectual property</h3>
        <p>The Service and its original content, features, and functionality are owned by {siteInfo.name} and are protected by international copyright, trademark, patent, trade secret, and other intellectual property or proprietary rights laws.</p>
      </div>

      <div>
        <h4>User Contributions</h4>
        <p>Our Service may allow you to post, link, store, share, and otherwise make available certain information, text, graphics, videos, or other material ("User Content"). You are responsible for the User Content that you post on or through the Service, including its legality, reliability, and appropriateness.</p>
      </div>

      <div>
        <h4>Links to other websites</h4>
        <p>Our Service may contain links to third-party websites or services that are not owned or controlled by {siteInfo.name}. We have no control over, and assume no responsibility for, the content, privacy policies, or practices of any third-party websites or services. You further acknowledge and agree that {siteInfo.name}shall not be responsible or liable, directly or indirectly, for any damage or loss caused or alleged to be caused by or in connection with the use of or reliance on any such content, goods, or services available on or through any such websites or services.
        </p>
      </div>

      <div>
        <h5>Termination</h5>
        <p>We may terminate or suspend access to our Service immediately, without prior notice or liability, for any reason whatsoever, including without limitation if you breach the Terms.</p>
      </div>
      <div>
        <h5>Disclaimer</h5>
        <p>Your use of the Service is at your sole risk. The Service is provided on an "AS IS" and "AS AVAILABLE" basis. The Service is provided without warranties of any kind, whether express or implied, including, but not limited to, implied warranties of merchantability, fitness for a particular purpose, non-infringement, or course of performance.</p>
      </div>

      <div>
        <h5>Contact Us</h5>
        <p>If you have any questions about these Terms, please contact us at {siteInfo.email}.</p>
      </div>
    </section>

  )
}

export default page