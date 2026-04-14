import React from 'react'
import { Link } from 'react-router-dom'
import '../styles/pages/legal.css'

export default function Terms() {
  return (
    <div className="legal-page terms-page">
      <div className="legal-container">
        <div className="legal-header">
          <h1>Terms & Conditions</h1>
          <p className="last-updated">Last Updated: April 14, 2026</p>
        </div>

        <div className="legal-content">
          <section>
            <h2>1. Acceptance of Terms</h2>
            <p>
              By accessing and using this website ("The Legend Prabhas"), you accept and agree to be bound by the terms and provision of this agreement. If you do not agree to abide by the above, please do not use this service.
            </p>
          </section>

          <section>
            <h2>2. Use License</h2>
            <p>
              Permission is granted to temporarily download one copy of the materials (information or software) on The Legend Prabhas website for personal, non-commercial transitory viewing only. This is the grant of a license, not a transfer of title, and under this license you may not:
            </p>
            <ul>
              <li>Modifying or copying the materials</li>
              <li>Using the materials for any commercial purpose or for any public display</li>
              <li>Attempting to decompile or reverse engineer any software contained on the website</li>
              <li>Removing any copyright or other proprietary notations from the materials</li>
              <li>Transferring the materials to another person or "mirroring" the materials on any other server</li>
            </ul>
          </section>

          <section>
            <h2>3. Disclaimer</h2>
            <p>
              The materials on The Legend Prabhas website are provided for informational purposes only. We do not warrant the accuracy, completeness, or usefulness of this information. Any reliance you place on such material is strictly at your own risk.
            </p>
          </section>

          <section>
            <h2>4. Limitations</h2>
            <p>
              In no event shall The Legend Prabhas or its suppliers be liable for any damages (including, without limitation, damages for loss of data or profit, or due to business interruption) arising out of the use or inability to use the materials on the website, even if we or our authorized representative has been notified orally or in writing of the possibility of such damage.
            </p>
          </section>

          <section>
            <h2>5. Accuracy of Materials</h2>
            <p>
              The materials appearing on The Legend Prabhas website could include technical, typographical, or photographic errors. We do not warrant that any of the materials on the website are accurate, complete, or current. We may make changes to the materials contained on the website at any time without notice.
            </p>
          </section>

          <section>
            <h2>6. Materials Copyright</h2>
            <p>
              The materials on The Legend Prabhas website are copyrighted and any unauthorized use of them is prohibited without prior written consent from us. Movie posters, images, and content related to Prabhas are used for fan purposes and remain the property of their respective copyright holders.
            </p>
          </section>

          <section>
            <h2>7. Links</h2>
            <p>
              We have not reviewed all of the sites linked to our website and are not responsible for the contents of any such linked site. The inclusion of any link does not imply endorsement by us of the site. Use of any such linked website is at the user's own risk.
            </p>
          </section>

          <section>
            <h2>8. Modifications</h2>
            <p>
              We may revise these terms of service for our website at any time without notice. By using this website, you are agreeing to be bound by the then current version of these terms of service.
            </p>
          </section>

          <section>
            <h2>9. Governing Law</h2>
            <p>
              These terms and conditions are governed by and construed in accordance with the laws of India, and you irrevocably submit to the exclusive jurisdiction of the courts located in India.
            </p>
          </section>

          <section>
            <h2>10. Contact Information</h2>
            <p>
              If you have any questions about these Terms & Conditions, please contact us at:
            </p>
            <p className="contact-info">
              Email: support@thelegendprabhas.com<br />
              Website: The Legend Prabhas
            </p>
          </section>

          <section>
            <h2>11. Premium Subscription Terms</h2>
            <p>
              Premium subscriptions allow access to exclusive content and features. Subscription charges will be applied to your account on a recurring basis as selected during signup. You may cancel your subscription at any time through your account dashboard.
            </p>
          </section>

          <section>
            <h2>12. User Accounts</h2>
            <p>
              You are responsible for maintaining the confidentiality of your account information and password. You agree to accept responsibility for all activities that occur under your account. You must notify us immediately if you suspect unauthorized use of your account.
            </p>
          </section>

          <section>
            <h2>13. Prohibited Activities</h2>
            <p>
              You agree not to:
            </p>
            <ul>
              <li>Engage in any form of harassment or abuse</li>
              <li>Upload viruses or malicious code</li>
              <li>Collect or track personal information of others</li>
              <li>Spam or send unsolicited messages</li>
              <li>Violate any applicable laws or regulations</li>
              <li>Infringe on intellectual property rights</li>
            </ul>
          </section>

          <div className="legal-footer-links">
            <Link to="/privacy" className="legal-link">Privacy Policy</Link>
            <span className="separator">•</span>
            <Link to="/" className="legal-link">Back to Home</Link>
          </div>
        </div>
      </div>
    </div>
  )
}
