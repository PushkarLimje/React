import React from 'react'

function Terms() {
    return (
        <div className="p-6 max-w-4xl mx-auto bg-white rounded-xl shadow-md">
      <h1 className="text-3xl font-bold mb-4">Terms and Conditions</h1>

      <p className="mb-4">
        Welcome to our application. By using our services, you agree to the following
        terms and conditions. Please read them carefully.
      </p>

      <h2 className="text-xl font-semibold mt-6 mb-2">1. Acceptance of Terms</h2>
      <p className="mb-4">
        By accessing and using this app, you accept and agree to be bound by the terms
        and provisions of this agreement.
      </p>

      <h2 className="text-xl font-semibold mt-6 mb-2">2. Changes to Terms</h2>
      <p className="mb-4">
        We reserve the right to modify these terms at any time. Any changes will be
        effective immediately upon posting.
      </p>

      <h2 className="text-xl font-semibold mt-6 mb-2">3. User Responsibilities</h2>
      <ul className="list-disc list-inside mb-4">
        <li>Provide accurate information.</li>
        <li>Respect other users and our community guidelines.</li>
        <li>Do not misuse or exploit the services offered.</li>
      </ul>

      <h2 className="text-xl font-semibold mt-6 mb-2">4. Limitation of Liability</h2>
      <p className="mb-4">
        We are not liable for any damages that may occur from using the app or
        services.
      </p>

      <h2 className="text-xl font-semibold mt-6 mb-2">5. Contact Information</h2>
      <p className="mb-4">
        If you have any questions about these Terms, please contact us at
        support@example.com.
      </p>
    </div>
    )
}

export default Terms
