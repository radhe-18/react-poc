import React from "react";

const PrivacyPolicy = () => {
  return (
    <div className="min-h-screen bg-gray-50">
      <div className="container mx-auto px-6 py-16">
        <div className="max-w-4xl mx-auto">
          {/* Header Section */}
          <div className="text-center mb-12">
            <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
              Privacy Policy
            </h1>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Your privacy is important to us. Please read this policy carefully to understand how we collect, use, and protect your information.
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

          {/* Privacy Sections */}
          <div className="space-y-8">
            {/* 1. Information We Collect */}
            <section className="bg-white rounded-lg shadow-sm border border-gray-200 p-8">
              <h2 className="text-2xl font-bold text-gray-900 mb-4 flex items-center">
                <span className="flex-shrink-0 w-8 h-8 bg-blue-600 text-white rounded-full flex items-center justify-center text-sm font-bold mr-3">1</span>
                Information We Collect
              </h2>
              <p className="text-gray-700 leading-relaxed mb-2">
                We collect both personal and non-personal information to provide better services and improve your experience. This includes:
              </p>
              <ul className="list-disc pl-6 text-gray-700 mb-4">
                <li><strong>Personal Information:</strong> Name, email, phone number, address, and payment information you provide directly.</li>
                <li><strong>Non-Personal Information:</strong> IP address, browser type, device information, usage patterns, and analytics data.</li>
                <li><strong>Cookies and Tracking:</strong> We use cookies and similar technologies to analyze usage, remember preferences, and enhance website performance.</li>
              </ul>
            </section>

            {/* 2. How We Use Your Information */}
            <section className="bg-white rounded-lg shadow-sm border border-gray-200 p-8">
              <h2 className="text-2xl font-bold text-gray-900 mb-4 flex items-center">
                <span className="flex-shrink-0 w-8 h-8 bg-blue-600 text-white rounded-full flex items-center justify-center text-sm font-bold mr-3">2</span>
                How We Use Your Information
              </h2>
              <p className="text-gray-700 leading-relaxed mb-2">
                Your information is used responsibly to provide you with the best service. We may use it to:
              </p>
              <ul className="list-disc pl-6 text-gray-700 mb-4">
                <li>Provide, maintain, and improve our services.</li>
                <li>Respond to inquiries, feedback, or customer support requests.</li>
                <li>Send important updates, newsletters, and marketing communications (if you opt-in).</li>
                <li>Understand user behavior to enhance website functionality and content.</li>
                <li>Prevent fraud, security issues, and comply with legal obligations.</li>
              </ul>
            </section>

            {/* 3. Information Sharing */}
            <section className="bg-white rounded-lg shadow-sm border border-gray-200 p-8">
              <h2 className="text-2xl font-bold text-gray-900 mb-4 flex items-center">
                <span className="flex-shrink-0 w-8 h-8 bg-blue-600 text-white rounded-full flex items-center justify-center text-sm font-bold mr-3">3</span>
                Information Sharing
              </h2>
              <p className="text-gray-700 leading-relaxed mb-4">
                We respect your privacy and do not sell your personal information. We may share information in limited circumstances:
              </p>
              <ul className="list-disc pl-6 text-gray-700 mb-4">
                <li>With trusted service providers who help us operate our website or services.</li>
                <li>To comply with legal obligations or protect our rights, property, or safety.</li>
                <li>During business transfers such as mergers, acquisitions, or asset sales.</li>
              </ul>
            </section>

            {/* 4. Data Security */}
            <section className="bg-white rounded-lg shadow-sm border border-gray-200 p-8">
              <h2 className="text-2xl font-bold text-gray-900 mb-4 flex items-center">
                <span className="flex-shrink-0 w-8 h-8 bg-blue-600 text-white rounded-full flex items-center justify-center text-sm font-bold mr-3">4</span>
                Data Security
              </h2>
              <p className="text-gray-700 leading-relaxed mb-2">
                We take reasonable measures to protect your information, including encryption, secure storage, and access controls. 
              </p>
              <p className="text-gray-700 leading-relaxed">
                While we strive to protect your data, no internet transmission is 100% secure, and we cannot guarantee absolute security.
              </p>
            </section>

            {/* 5. Your Rights */}
            <section className="bg-white rounded-lg shadow-sm border border-gray-200 p-8">
              <h2 className="text-2xl font-bold text-gray-900 mb-4 flex items-center">
                <span className="flex-shrink-0 w-8 h-8 bg-blue-600 text-white rounded-full flex items-center justify-center text-sm font-bold mr-3">5</span>
                Your Rights
              </h2>
              <p className="text-gray-700 leading-relaxed mb-2">
                Depending on your location, you may have rights regarding your personal data:
              </p>
              <ul className="list-disc pl-6 text-gray-700 mb-4">
                <li>Access your data and correct inaccuracies.</li>
                <li>Request deletion of your personal information.</li>
                <li>Opt-out of marketing communications at any time.</li>
                <li>Request a copy of your data in a portable format.</li>
              </ul>
            </section>

            {/* 6. Changes to This Policy */}
            <section className="bg-white rounded-lg shadow-sm border border-gray-200 p-8">
              <h2 className="text-2xl font-bold text-gray-900 mb-4 flex items-center">
                <span className="flex-shrink-0 w-8 h-8 bg-blue-600 text-white rounded-full flex items-center justify-center text-sm font-bold mr-3">6</span>
                Changes to This Policy
              </h2>
              <p className="text-gray-700 leading-relaxed mb-2">
                We may update this Privacy Policy periodically to reflect changes in our practices or legal requirements.
              </p>
              <p className="text-gray-700 leading-relaxed">
                Updates will be posted on this page, and the “Last Updated” date will be revised accordingly.
              </p>
            </section>

            {/* 7. Contact Us */}
            <section className="bg-white rounded-lg shadow-sm border border-gray-200 p-8">
              <h2 className="text-2xl font-bold text-gray-900 mb-4 flex items-center">
                <span className="flex-shrink-0 w-8 h-8 bg-blue-600 text-white rounded-full flex items-center justify-center text-sm font-bold mr-3">7</span>
                Contact Us
              </h2>
              <p className="text-gray-700 leading-relaxed">
                If you have any questions, concerns, or requests regarding your personal information, please contact us:
              </p>
              <ul className="list-disc pl-6 text-gray-700 mt-2">
                <li>Email: <a href="mailto:privacy@aiforge.com" className="text-blue-600 underline">privacy@aiforge.com</a></li>
                <li>Phone: +91-XXXXXXXXXX</li>
                <li>Address: AIForge Technologies, [Street Address], [City], [State], [Country]</li>
              </ul>
            </section>
          </div>

          {/* Footer Note */}
          <div className="mt-12 text-center">
            <p className="text-sm text-gray-500">
              This policy was last updated on {new Date().toLocaleDateString('en-US', {
                year: 'numeric',
                month: 'long',
                day: 'numeric'
              })}. By using AIForge, you acknowledge that you have read, understood, and agreed to this policy.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PrivacyPolicy;
