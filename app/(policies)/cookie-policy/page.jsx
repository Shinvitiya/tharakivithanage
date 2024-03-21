import React from 'react'
import { siteInfo } from '@/utilities'

export const metadata = {
    title: "Cookie Policy"
  }

const page = () => {
  return (
    <section>
        <h1>Cookie Policy and Consent</h1>
        <p className='date'>Last updated: 13/03/2024</p>

        <div>
            <h2>Introduction</h2>
            <p>This Cookie Policy and Consent ("Policy") explains how {siteInfo.name} ("we", "us", or "our") collects, uses, and manages cookies and similar tracking technologies when you visit our website. By continuing to use our website, you consent to the use of cookies as described in this Policy.</p>
        </div>

        <div>
            <h3>What are cookies?</h3>
            <p>Cookies are small text files that are stored on your device when you visit a website. They are widely used to make websites work more efficiently, as well as to provide information to the website owners.</p>
        </div>

        <div>
            <h4>Types of cookies we use</h4>
            <p>We use the following types of cookies on our website:</p>

            <ol>
                <li>Essential cookies: These cookies are necessary for the operation of our website and cannot be disabled in our systems. They are usually set in response to actions made by you, such as setting your privacy preferences, logging in, or filling in forms. You can set your browser to block or alert you about these cookies, but some parts of the site may not work then.</li>

                <li>Analytical/performance cookies: These cookies allow us to recognize and count the number of visitors and to see how visitors move around our website when they are using it. This helps us to improve the way our website works, for example, by ensuring that users are finding what they are looking for easily.</li>

                <li>Advertising/targeting cookies: These cookies are used to make advertising messages more relevant to you. They perform functions like preventing the same ad from continuously reappearing, ensuring that ads are properly displayed for advertisers, and in some cases selecting advertisements that are based on your interests.</li>
            </ol>
        </div>

        <div>
            <h4>Managing cookies and consent</h4>
            <p>You can control and manage your consent to cookies in various ways. We obtain your consent through a cookie consent banner or pop-up displayed when you visit our website for the first time. By continuing to use our website, you consent to the use of cookies as described in this Policy. You can usually manage cookies through your browser settings or by using the cookie consent banner provided on our website. If you choose to disable or reject cookies, some features of our website may not function properly.</p>
        </div>

        <div>
            <h5>Third-party cookies</h5>
            <p>In addition to the cookies we use, third-party services may also use cookies when you visit our website. These third-party cookies are subject to the respective privacy policies of their providers. We recommend that you review the privacy policies of these providers for more information about their cookie practices.</p>
        </div>

        <div>
            <h5>Updates to this policy</h5>
            <p>We may update this Policy from time to time to reflect changes in our use of cookies or legal requirements. We will notify you of any significant changes by posting the updated policy on this page.</p>
        </div>

        <div>
            <h5>Contact Us</h5>
            <p>If you have any questions about this Policy, please contact us at {siteInfo.email}.</p>
        </div>
    </section>
  )
}

export default page