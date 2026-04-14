import React from 'react'
import { Link } from 'react-router-dom'
import '../styles/pages/legal.css'

export default function Privacy() {
  return (
    <div className="legal-page privacy-page">
      <div className="legal-container">
        <div className="legal-header">
          <h1>Privacy Policy</h1>
          <p className="last-updated">Last Updated: April 14, 2026</p>
        </div>

        <div className="legal-content">
          <section>
            <h2>1. Introduction</h2>
            <p>
              The Legend Prabhas ("we," "us," "our," or "Company") is committed to protecting your privacy. This Privacy Policy explains how we collect, use, disclose, and otherwise process personal information in connection with our website and services.
            </p>
          </section>

          <section>
            <h2>2. Information We Collect</h2>
            <h3>2.1 Information You Provide</h3>
            <ul>
              <li><strong>Account Information:</strong> Name, email address, password when you create an account</li>
              <li><strong>Subscription Information:</strong> Payment details for premium subscriptions</li>
              <li><strong>Content:</strong> Reviews, comments, and other user-generated content</li>
              <li><strong>Communications:</strong> Messages, feedback, and support inquiries</li>
            </ul>

            <h3>2.2 Information Collected Automatically</h3>
            <ul>
              <li>Browser type and IP address</li>
              <li>Pages viewed and time spent</li>
              <li>Device type and operating system</li>
              <li>Cookies and tracking pixels</li>
              <li>Usage patterns and preferences</li>
            </ul>
          </section>

          <section>
            <h2>3. How We Use Your Information</h2>
            <p>We use collected information for:</p>
            <ul>
              <li>Creating and managing your account</li>
              <li>Processing subscription payments</li>
              <li>Providing customer support</li>
              <li>Improving website functionality</li>
              <li>Personalizing your experience</li>
              <li>Analytics and website optimization</li>
              <li>Sending marketing communications (with consent)</li>
              <li>Complying with legal obligations</li>
            </ul>
          </section>

          <section>
            <h2>4. Data Security</h2>
            <p>
              We implement appropriate technical and organizational measures to protect your personal information against unauthorized access, alteration, disclosure, or destruction. However, no method of transmission over the internet is 100% secure. We cannot guarantee absolute security of your information.
            </p>
          </section>

          <section>
            <h2>5. Cookies and Tracking Technologies</h2>
            <p>
              We use cookies and similar tracking technologies to enhance your browsing experience, remember preferences, and collect usage data. You can control cookie settings through your browser. Note that disabling cookies may affect website functionality.
            </p>
          </section>

          <section>
            <h2>6. Third-Party Services</h2>
            <p>
              Our website may contain links to third-party websites and integrate services such as:
            </p>
            <ul>
              <li>Razorpay (payment processing)</li>
              <li>Google Analytics (website analytics)</li>
              <li>YouTube (video content)</li>
              <li>Third-party streaming platforms</li>
            </ul>
            <p>
              We are not responsible for the privacy practices of these third parties. Please review their privacy policies before providing information.
            </p>
          </section>

          <section>
            <h2>7. Data Retention</h2>
            <p>
              We retain personal information for as long as necessary to provide services and fulfill the purposes outlined in this policy. You may request deletion of your account and associated data at any time, subject to legal retention obligations.
            </p>
          </section>

          <section>
            <h2>8. Your Rights (GDPR & Privacy Laws)</h2>
            <p>Depending on your location, you may have rights including:</p>
            <ul>
              <li><strong>Right to Access:</strong> Request copies of your personal data</li>
              <li><strong>Right to Rectification:</strong> Correct inaccurate information</li>
              <li><strong>Right to Erasure:</strong> Request deletion of your data</li>
              <li><strong>Right to Restrict Processing:</strong> Limit how data is used</li>
              <li><strong>Right to Data Portability:</strong> Export your data</li>
              <li><strong>Right to Object:</strong> Opt-out of certain processing</li>
            </ul>
          </section>

          <section>
            <h2>9. Children's Privacy</h2>
            <p>
              The Legend Prabhas is not intended for children under 13 years of age. We do not knowingly collect personal information from children under 13. If we become aware that we have collected such information, we will take appropriate steps to delete it.
            </p>
          </section>

          <section>
            <h2>10. international Data Transfers</h2>
            <p>
              Your information may be transferred to and processed in countries other than your country of residence. These countries may have data protection laws different from your home country. By using our website, you consent to such transfers.
            </p>
          </section>

          <section>
            <h2>11. Payment Information</h2>
            <p>
              Payment processing is handled by Razorpay, a PCI-DSS compliant payment processor. We do not store full credit card details on our servers. All payment information is encrypted and securely transmitted.
            </p>
          </section>

          <section>
            <h2>12. Changes to This Policy</h2>
            <p>
              We may update this Privacy Policy as needed to reflect changes in our practices or applicable laws. We will notify you of material changes via email or prominent posting on our website.
            </p>
          </section>

          <section>
            <h2>13. Contact Us</h2>
            <p>
              If you have questions about this Privacy Policy or our privacy practices, please contact us:
            </p>
            <p className="contact-info">
              Email: privacy@thelegendprabhas.com<br />
              Website: The Legend Prabhas<br />
              Address: India
            </p>
          </section>

          <section>
            <h2>14. California Privacy Rights (CCPA)</h2>
            <p>
              California residents have specific rights under the California Consumer Privacy Act. To exercise these rights or for more information, please contact us at privacy@thelegendprabhas.com.
            </p>
          </section>

          <div className="legal-footer-links">
            <Link to="/terms" className="legal-link">Terms & Conditions</Link>
            <span className="separator">•</span>
            <Link to="/" className="legal-link">Back to Home</Link>
          </div>
        </div>
      </div>
    </div>
  )
}
