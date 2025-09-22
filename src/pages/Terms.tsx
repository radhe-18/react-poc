
const Terms = () => {
  return (
    <div className="min-h-screen bg-gray-50">
      <div className="container mx-auto px-6 py-16">
        <div className="max-w-4xl mx-auto">
          {/* Header Section */}
          <div className="text-center mb-12">
            <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
              Terms and Conditions
            </h1>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Please read these terms carefully before using our services
            </p>
            <div className="w-24 h-1 bg-blue-600 mx-auto mt-6"></div>
          </div>

          {/* Last Updated */}
          <div className="bg-white rounded-lg shadow-sm border border-gray-200 p-6 mb-8">
            <p className="text-sm text-gray-500">
              <strong>Last Updated:</strong> {new Date().toLocaleDateString('en-US', {
                year: 'numeric',
                month: 'long',
                day: 'numeric'
              })}
            </p>
          </div>

          {/* Introduction */}
          <div className="bg-white rounded-lg shadow-sm border border-gray-200 p-8 mb-8">
            <h2 className="text-2xl font-bold text-gray-900 mb-4">Agreement to Terms</h2>
            <p className="text-gray-700 leading-relaxed mb-4">
              Welcome to AIForge. By accessing or using our website and services, you agree to be bound by these Terms and Conditions ("Terms"). If you disagree with any part of these terms, then you may not access the service.
            </p>
            <p className="text-gray-700 leading-relaxed">
              These Terms apply to all visitors, users, and others who access or use our services. By using our services, you represent that you are at least 18 years old and have the legal capacity to enter into these Terms.
            </p>
          </div>

          {/* Terms Sections */}
          <div className="space-y-8">

            {/* 1. Use of Website */}
            <section className="bg-white rounded-lg shadow-sm border border-gray-200 p-8">
              <h2 className="text-2xl font-bold text-gray-900 mb-4 flex items-center">
                <span className="flex-shrink-0 w-8 h-8 bg-blue-600 text-white rounded-full flex items-center justify-center text-sm font-bold mr-3">1</span>
                Use of Website
              </h2>
              <p className="text-gray-700 leading-relaxed mb-2">
                You agree to use the website only for lawful purposes and in a way that does not infringe the rights of others or restrict anyone else's use and enjoyment of the website.
              </p>
              <ul className="list-disc pl-6 text-gray-700 mb-4">
                <li>Do not harass, abuse, or harm others.</li>
                <li>Do not transmit offensive or harmful content.</li>
                <li>Do not attempt to disrupt the website’s operation or security.</li>
                <li>Comply with all applicable laws and regulations.</li>
              </ul>
            </section>

            {/* 2. Intellectual Property */}
            <section className="bg-white rounded-lg shadow-sm border border-gray-200 p-8">
              <h2 className="text-2xl font-bold text-gray-900 mb-4 flex items-center">
                <span className="flex-shrink-0 w-8 h-8 bg-blue-600 text-white rounded-full flex items-center justify-center text-sm font-bold mr-3">2</span>
                Intellectual Property
              </h2>
              <p className="text-gray-700 leading-relaxed mb-2">
                All content on the website, including text, graphics, logos, images, and software, is the property of AIForge or its licensors. It is protected by copyright, trademark, and other laws.
              </p>
              <p className="text-gray-700 leading-relaxed">
                You may not reproduce, copy, or reuse any part of the content without explicit written permission from AIForge.
              </p>
            </section>

            {/* 3. Limitation of Liability */}
            <section className="bg-white rounded-lg shadow-sm border border-gray-200 p-8">
              <h2 className="text-2xl font-bold text-gray-900 mb-4 flex items-center">
                <span className="flex-shrink-0 w-8 h-8 bg-blue-600 text-white rounded-full flex items-center justify-center text-sm font-bold mr-3">3</span>
                Limitation of Liability
              </h2>
              <p className="text-gray-700 leading-relaxed mb-2">
                AIForge, its directors, employees, partners, agents, suppliers, or affiliates shall not be liable for any indirect, incidental, special, or consequential damages, including loss of profits, data, or goodwill.
              </p>
              <p className="text-gray-700 leading-relaxed">
                This applies even if AIForge was advised of the possibility of such damages and if remedies here fail their essential purpose.
              </p>
            </section>

            {/* 4. Privacy */}
            <section className="bg-white rounded-lg shadow-sm border border-gray-200 p-8">
              <h2 className="text-2xl font-bold text-gray-900 mb-4 flex items-center">
                <span className="flex-shrink-0 w-8 h-8 bg-blue-600 text-white rounded-full flex items-center justify-center text-sm font-bold mr-3">4</span>
                Privacy
              </h2>
              <p className="text-gray-700 leading-relaxed mb-2">
                Your use of the website is also governed by our Privacy Policy, which explains how we collect, use, and store your information.
              </p>
              <p className="text-gray-700 leading-relaxed">
                By using the website, you consent to the practices described in our Privacy Policy.
              </p>
            </section>

            {/* 5. Account Responsibility */}
            <section className="bg-white rounded-lg shadow-sm border border-gray-200 p-8">
              <h2 className="text-2xl font-bold text-gray-900 mb-4 flex items-center">
                <span className="flex-shrink-0 w-8 h-8 bg-blue-600 text-white rounded-full flex items-center justify-center text-sm font-bold mr-3">5</span>
                Account Responsibility
              </h2>
              <p className="text-gray-700 leading-relaxed mb-2">
                If you create an account on AIForge, you are responsible for maintaining the confidentiality of your login credentials and for all activities that occur under your account.
              </p>
              <p className="text-gray-700 leading-relaxed">
                Notify us immediately if you suspect unauthorized use of your account.
              </p>
            </section>

            {/* 6. Termination */}
            <section className="bg-white rounded-lg shadow-sm border border-gray-200 p-8">
              <h2 className="text-2xl font-bold text-gray-900 mb-4 flex items-center">
                <span className="flex-shrink-0 w-8 h-8 bg-blue-600 text-white rounded-full flex items-center justify-center text-sm font-bold mr-3">6</span>
                Termination
              </h2>
              <p className="text-gray-700 leading-relaxed mb-2">
                We may terminate or suspend your access to the website at any time, without prior notice or liability, for any reason, including breach of Terms.
              </p>
              <p className="text-gray-700 leading-relaxed">
                Upon termination, your right to use the services will immediately cease.
              </p>
            </section>

            {/* 7. Governing Law */}
            <section className="bg-white rounded-lg shadow-sm border border-gray-200 p-8">
              <h2 className="text-2xl font-bold text-gray-900 mb-4 flex items-center">
                <span className="flex-shrink-0 w-8 h-8 bg-blue-600 text-white rounded-full flex items-center justify-center text-sm font-bold mr-3">7</span>
                Governing Law
              </h2>
              <p className="text-gray-700 leading-relaxed mb-2">
                These Terms shall be governed by and construed in accordance with the laws of [Your Country/State], without regard to conflict of law principles.
              </p>
              <p className="text-gray-700 leading-relaxed">
                Any disputes arising under or in connection with these Terms shall be subject to the exclusive jurisdiction of the courts located in [Your City].
              </p>
            </section>

            {/* 8. Changes to Terms */}
            <section className="bg-white rounded-lg shadow-sm border border-gray-200 p-8">
              <h2 className="text-2xl font-bold text-gray-900 mb-4 flex items-center">
                <span className="flex-shrink-0 w-8 h-8 bg-blue-600 text-white rounded-full flex items-center justify-center text-sm font-bold mr-3">8</span>
                Changes to Terms
              </h2>
              <p className="text-gray-700 leading-relaxed mb-2">
                We reserve the right to modify these Terms at any time. Material changes will be notified at least 30 days in advance whenever possible.
              </p>
              <p className="text-gray-700 leading-relaxed">
                Your continued use of the website after changes constitutes acceptance of the updated Terms.
              </p>
            </section>

            {/* 9. Contact Information */}
            <section className="bg-white rounded-lg shadow-sm border border-gray-200 p-8">
              <h2 className="text-2xl font-bold text-gray-900 mb-4 flex items-center">
                <span className="flex-shrink-0 w-8 h-8 bg-blue-600 text-white rounded-full flex items-center justify-center text-sm font-bold mr-3">9</span>
                Contact Information
              </h2>
              <p className="text-gray-700 leading-relaxed mb-2">
                If you have any questions about these Terms and Conditions, please contact us:
              </p>
              <div className="bg-gray-50 rounded-lg p-4">
                <p className="text-gray-700">
                  <strong>Email:</strong> legal@aiforge.com<br />
                  <strong>Address:</strong> 123 AI Street, Tech City, TC 12345<br />
                  <strong>Phone:</strong> +1 (555) 123-4567
                </p>
              </div>
            </section>

          </div>

          {/* Footer Note */}
          <div className="mt-12 text-center">
            <p className="text-sm text-gray-500">
              These terms were last updated on {new Date().toLocaleDateString('en-US', {
                year: 'numeric',
                month: 'long',
                day: 'numeric'
              })}. By using AIForge, you acknowledge that you have read and understood these terms.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Terms;
