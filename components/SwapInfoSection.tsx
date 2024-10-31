import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import Image from "next/image";

export default function GuacSwapSection() {
  return (
    <section className="py-16 bg-green-50">
      <div className="container mx-auto px-4 md:w-[80%]">
        <h2 className="text-4xl font-bold text-center text-green-800 mb-12">
          Guac Swap
        </h2>
        <div className="grid gap-8 md:grid-cols-2 items-center">
          <div>
            <Accordion type="single" collapsible className="w-full">
              <AccordionItem value="item-1">
                <AccordionTrigger className="text-xl font-semibold text-green-700">
                  Secure and User-Friendly
                </AccordionTrigger>
                <AccordionContent className="text-green-800">
                  The primary difference between Kasper Bot and Guac Swap lies
                  in security and transaction management. Kasper Bot, a
                  Telegram-based solution, requires users to manage wallets and
                  private keys directly within the app, exposing their sensitive
                  information. In contrast, Guac Swap is a web app designed to
                  work with browser-based wallets like Kaspian Wallet. This
                  setup allows users to deploy, mint, and trade KRC20 tokens
                  securely by signing transactions without ever sharing private
                  keys, offering a safer, more user-friendly, and efficient
                  approach to KRC20 token management.
                </AccordionContent>
              </AccordionItem>
              <AccordionItem value="item-2">
                <AccordionTrigger className="text-xl font-semibold text-green-700">
                  The Future of KRC20 Tokens
                </AccordionTrigger>
                <AccordionContent className="text-green-800">
                  Guac Swap is set to become the go-to hub for KRC20 tokens on
                  Kaspa. Our platform will go beyond secure minting to offer
                  comprehensive token services, including streamlined trading,
                  liquidity pools, and ultimately, multi-chain capabilities. By
                  building an accessible, community-focused platform that
                  integrates Kaspa's unique strengths, Guac Swap is positioning
                  itself to be as impactful for KRC20 tokens as SushiSwap and
                  Jupiter are in their respective ecosystems. This early entry
                  gives Guac Swap the potential to shape the future of DeFi on
                  Kaspa and be the mainstay of KRC20 token transactions.
                </AccordionContent>
              </AccordionItem>
              <AccordionItem value="item-3">
                <AccordionTrigger className="text-xl font-semibold text-green-700">
                  Community-Driven Development
                </AccordionTrigger>
                <AccordionContent className="text-green-800">
                  At Guac Swap, we believe in the power of community. Our
                  platform is built with the needs and feedback of our users in
                  mind. We actively engage with our community to ensure that
                  Guac Swap evolves in a direction that truly serves the Kaspa
                  ecosystem and its users. By fostering a strong, supportive
                  community, we're not just building a platform; we're
                  cultivating a movement that will drive the adoption and growth
                  of KRC20 tokens.
                </AccordionContent>
              </AccordionItem>
            </Accordion>
          </div>
          <div className="flex justify-center items-center">
            <div className="relative w-full max-w-md aspect-square">
              <Image
                src="/img_04.png"
                alt="Guac Swap Illustration"
                height={400}
                width={400}
                objectFit="contain"
                className="rounded-lg shadow-lg"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
