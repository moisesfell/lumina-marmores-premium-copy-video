/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { Navbar, Hero, Features, Materials, Projects, B2BSection, Process, Testimonials, FAQ, Location, CTA, Footer, WhatsAppButton } from './components';

export default function App() {
  return (
    <div className="bg-stone-light min-h-screen text-stone-600 font-sans smooth-scroll">
      <Navbar />
      <Hero />
      <Features />
      <Materials />
      <Projects />
      <B2BSection />
      <Process />
      <Testimonials />
      <CTA />
      <FAQ />
      <Location />
      <Footer />
      <WhatsAppButton />
    </div>
  );
}
