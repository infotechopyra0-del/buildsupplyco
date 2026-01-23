import Header from '@/components/Header';
import Footer from '@/components/Footer';

export default function TermsPage() {
  return (
    <>
      <Header />
      <main className="flex flex-col items-center justify-center min-h-[60vh] py-12 px-4">
        <h1 className="text-3xl font-bold mb-4">Terms of Service</h1>
        <div className="max-w-2xl text-left text-base text-gray-700 space-y-4">
          <p>
            Welcome to BuildSupplyCo. By accessing or using our website, you agree to be bound by these Terms of Service. Please read them carefully.
          </p>
          <h2 className="text-xl font-semibold mt-6 mb-2">1. Use of Site</h2>
          <p>
            You may use this site for lawful purposes only. You agree not to use the site in any way that may damage, disable, or impair the site or interfere with any other party's use.
          </p>
          <h2 className="text-xl font-semibold mt-6 mb-2">2. Intellectual Property</h2>
          <p>
            All content on this site, including text, graphics, logos, and images, is the property of BuildSupplyCo or its content suppliers and is protected by copyright laws.
          </p>
          <h2 className="text-xl font-semibold mt-6 mb-2">3. Limitation of Liability</h2>
          <p>
            BuildSupplyCo is not liable for any damages arising from the use or inability to use this site.
          </p>
          <h2 className="text-xl font-semibold mt-6 mb-2">4. Changes to Terms</h2>
          <p>
            We reserve the right to modify these Terms at any time. Changes will be effective immediately upon posting.
          </p>
          <h2 className="text-xl font-semibold mt-6 mb-2">5. Contact</h2>
          <p>
            For questions about these Terms, contact us at <a href="mailto:info@buildsupply.com" className="text-[#B8A06A] underline">info@buildsupply.com</a>.
          </p>
        </div>
      </main>
      <Footer />
    </>
  );
}
