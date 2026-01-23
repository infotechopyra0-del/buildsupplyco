import Header from '@/components/Header';
import Footer from '@/components/Footer';

export default function PrivacyPage() {
  return (
    <div className="min-h-screen flex flex-col bg-[#F8F8F8]">
      <Header />
      <main className="flex-1 max-w-3xl mx-auto px-6 py-16">
        <h1 className="text-4xl font-bold mb-6 text-[#2C3E50]">Privacy Policy</h1>
        <p className="mb-4 text-[#333333] text-lg">
          At BuildSupply, we are committed to protecting your privacy. This Privacy Policy explains how we collect, use, disclose, and safeguard your information when you visit our website.
        </p>
        <h2 className="text-2xl font-semibold mt-8 mb-2 text-[#2C3E50]">1. Information We Collect</h2>
        <ul className="list-disc pl-6 mb-4 text-[#333333]">
          <li>Personal Information: Name, email address, phone number, and other contact details you provide via forms.</li>
          <li>Usage Data: Pages visited, time spent, and other analytics data collected automatically.</li>
          <li>Cookies: We use cookies to enhance your experience and analyze site usage.</li>
        </ul>
        <h2 className="text-2xl font-semibold mt-8 mb-2 text-[#2C3E50]">2. How We Use Your Information</h2>
        <ul className="list-disc pl-6 mb-4 text-[#333333]">
          <li>To provide and maintain our services.</li>
          <li>To respond to your inquiries and requests.</li>
          <li>To improve our website and user experience.</li>
          <li>To send you updates, promotions, or other information (with your consent).</li>
        </ul>
        <h2 className="text-2xl font-semibold mt-8 mb-2 text-[#2C3E50]">3. Information Sharing</h2>
        <ul className="list-disc pl-6 mb-4 text-[#333333]">
          <li>We do not sell or rent your personal information to third parties.</li>
          <li>We may share information with trusted service providers who assist us in operating our website and conducting our business.</li>
          <li>We may disclose information if required by law or to protect our rights.</li>
        </ul>
        <h2 className="text-2xl font-semibold mt-8 mb-2 text-[#2C3E50]">4. Data Security</h2>
        <p className="mb-4 text-[#333333]">
          We implement reasonable security measures to protect your information. However, no method of transmission over the Internet is 100% secure.
        </p>
        <h2 className="text-2xl font-semibold mt-8 mb-2 text-[#2C3E50]">5. Your Rights</h2>
        <ul className="list-disc pl-6 mb-4 text-[#333333]">
          <li>You may request access to, correction, or deletion of your personal information.</li>
          <li>You may opt out of receiving marketing communications at any time.</li>
        </ul>
        <h2 className="text-2xl font-semibold mt-8 mb-2 text-[#2C3E50]">6. Changes to This Policy</h2>
        <p className="mb-4 text-[#333333]">
          We may update this Privacy Policy from time to time. Changes will be posted on this page with an updated effective date.
        </p>
        <h2 className="text-2xl font-semibold mt-8 mb-2 text-[#2C3E50]">7. Contact Us</h2>
        <p className="mb-4 text-[#333333]">
          If you have any questions about this Privacy Policy, please contact us at <a href="mailto:info@buildsupply.com" className="text-[#B8A06A] underline">info@buildsupply.com</a>.
        </p>
        <p className="text-sm text-[#888] mt-8">Effective Date: January 23, 2026</p>
      </main>
      <Footer />
    </div>
  );
}
