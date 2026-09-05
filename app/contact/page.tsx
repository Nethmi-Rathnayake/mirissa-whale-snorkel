import type { Metadata } from "next";
import Image from "next/image";
import Header from "../components/Header";
import Footer from "../components/Footer";
import ContactHero from "../components/ContactHero";
import ContactForm from "../components/ContactForm";
import ContactInfo from "../components/ContactInfo";
import { CameraIcon, PlayIcon, ShareIcon } from "../components/icons";

export const metadata: Metadata = {
  title: "Contact | Mirissa Whale Snorkel",
  description:
    "Get in touch with Mirissa Whale Snorkel to plan your whale watching, whale snorkeling or dolphin watching trip in Mirissa, Sri Lanka.",
};

const SOCIAL_LINKS = [
  { icon: CameraIcon, label: "Instagram" },
  { icon: ShareIcon, label: "Facebook" },
  { icon: PlayIcon, label: "YouTube" },
];

export default function ContactPage() {
  return (
    <>
      <Header />
      <main className="flex-1">
        <ContactHero />

        <section className="-mt-12 bg-ivory pb-24 pt-10 sm:pb-28 lg:-mt-16">
          <div className="grid items-start gap-10 px-6 lg:grid-cols-[1.4fr_1fr] lg:px-16">
            <ContactForm />

            <div className="flex flex-col gap-6">
              <ContactInfo />

              <div className="relative aspect-[4/3] w-full overflow-hidden rounded-3xl">
                <Image
                  src="/images/contact-diver-camera.png"
                  alt="A diver photographing marine life beside a coral reef"
                  fill
                  sizes="(min-width: 1024px) 30vw, 90vw"
                  className="object-cover"
                />
              </div>

              <div>
                <p className="text-xs font-semibold uppercase tracking-[0.14em] text-body">
                  Follow Our Journey
                </p>
                <div className="mt-4 flex gap-3">
                  {SOCIAL_LINKS.map((social) => (
                    <a
                      key={social.label}
                      href="#"
                      aria-label={social.label}
                      className="flex h-11 w-11 items-center justify-center rounded-full bg-cream text-ink transition-colors hover:bg-border"
                    >
                      <social.icon />
                    </a>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
