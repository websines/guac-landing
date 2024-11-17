"use client"

import React, { useState } from "react"
import { ArrowUpDown, ArrowRightLeft } from 'lucide-react'
import { FaTwitter, FaTelegramPlane, FaDiscord } from "react-icons/fa"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"

const socialLinks = [
  { name: "Twitter", icon: FaTwitter, href: "https://x.com/GuacSwapKRC20", color: "bg-blue-400" },
  { name: "Telegram", icon: FaTelegramPlane, href: "https://t.me/guac_token", color: "bg-blue-500" },
  { name: "Discord", icon: FaDiscord, href: "https://discord.gg/d2QzKP5r8j", color: "bg-indigo-600" },
  { name: "GUAC Swap", icon: ArrowRightLeft, href: "https://swap.guac.fyi/", color: "bg-green-500" },
]

const tokens = [
  { symbol: "KAS", logo: "/KAS.png" },
  { symbol: "GUAC", logo: "/img_04.png" },
  { symbol: "ALIEN", logo: "/placeholder.svg" },
]

export default function Component() {
  const [topToken, setTopToken] = useState(tokens[0])
  const [bottomToken, setBottomToken] = useState(tokens[1])
  const [topAmount, setTopAmount] = useState("120")
  const [bottomAmount, setBottomAmount] = useState("3500")

  const handleSwapDirection = () => {
    setTopToken(bottomToken)
    setBottomToken(topToken)
    setTopAmount(bottomAmount)
    setBottomAmount(topAmount)
  }

  return (
    <div className="min-h-screen bg-white text-gray-900 flex flex-col">
      <header className="bg-green-50 py-4">
        <div className="container mx-auto px-4 flex items-center">
          <img src="/img_04.png" alt="GUAC Token Logo" className="w-16 h-16 mr-4" />
          <div>
            <h1 className="text-3xl font-bold text-green-600">GUAC Token</h1>
            <p className="text-lg text-green-700">The tastiest token on Kaspa</p>
          </div>
        </div>
      </header>

      <main className="flex-grow container mx-auto px-4 py-8">
        <div className="flex flex-col lg:flex-row gap-8">
          <div className="lg:w-1/2 bg-white p-6 rounded-lg shadow-md cursor-pointer" onClick={() => window.open('https://swap.guac.fyi', '_blank')}>
            <h2 className="text-2xl font-bold mb-4 text-center text-green-600">Try GuacSwap Today!</h2>
            <div className="space-y-4">
              {[
                { label: "You send", value: topAmount, setValue: setTopAmount, token: topToken, setToken: setTopToken },
                { label: "You receive", value: bottomAmount, setValue: setBottomAmount, token: bottomToken, setToken: setBottomToken }
              ].map((item, index) => (
                <React.Fragment key={index}>
                  <div className="bg-green-50 p-4 rounded-lg">
                    <Label className="mb-2 block">{item.label}</Label>
                    <div className="flex items-center">
                      <Input
                        type="text"
                        value={item.value}
                        onChange={(e) => item.setValue(e.target.value)}
                        className="flex-grow mr-2"
                        placeholder={item.value}
                      />
                      <div className="relative">
                        <select
                          value={item.token.symbol}
                          onChange={(e) => item.setToken(tokens.find(t => t.symbol === e.target.value) || tokens[0])}
                          className="appearance-none bg-white border border-gray-300 rounded-md pl-10 pr-4 py-2 focus:outline-none focus:ring-2 focus:ring-green-500"
                        >
                          {tokens.map((token) => (
                            <option key={token.symbol} value={token.symbol}>{token.symbol}</option>
                          ))}
                        </select>
                        <img src={item.token.logo} alt={item.token.symbol} className="absolute left-2 top-1/2 transform -translate-y-1/2 w-6 h-6" />
                      </div>
                    </div>
                  </div>
                  {index === 0 && (
                    <div className="flex justify-center">
                      <Button
                        variant="outline"
                        size="icon"
                        onClick={handleSwapDirection}
                        className="rounded-full bg-white shadow-md hover:shadow-lg transform transition-transform hover:-translate-y-1"
                      >
                        <ArrowUpDown className="h-4 w-4" />
                      </Button>
                    </div>
                  )}
                </React.Fragment>
              ))}
            </div>
            <Button className="w-full mt-6 bg-green-600 hover:bg-green-700 text-white">Swap Tokens</Button>
          </div>

          <div className="lg:w-1/2 space-y-8">
            <div className="bg-green-50 p-6 rounded-lg shadow-md">
              <h3 className="text-xl font-semibold mb-4">Why Choose GuacSwap?</h3>
              <ul className="list-disc list-inside space-y-2 text-sm">
                <li>Enhanced user security</li>
                <li>No exposure of private keys</li>
                <li>Minimalistic and stylish interface</li>
                <li>Fast and efficient token swaps</li>
              </ul>
            </div>

            <div className="bg-green-50 p-6 rounded-lg shadow-md">
              <h3 className="text-xl font-semibold mb-4">How to Buy GUAC</h3>
              <div className="space-y-4">
                <Button className="w-full bg-green-600 hover:bg-green-700 text-white" asChild>
                  <a href="https://swap.guac.fyi/" target="_blank" rel="noopener noreferrer">Buy on GuacSwap</a>
                </Button>
                <Button className="w-full bg-blue-500 hover:bg-blue-600 text-white" asChild>
                  <a href="https://t.me/kspr_home_bot" target="_blank" rel="noopener noreferrer">Buy via KSPR Telegram Bot</a>
                </Button>
              </div>
            </div>
          </div>
        </div>

        <section className="mt-24">
          <h2 className="text-2xl font-semibold mb-4 text-center mt-24">Join Our Community</h2>
          <div className="flex flex-wrap gap-4 justify-center">
            {socialLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                target="_blank"
                rel="noopener noreferrer"
                className={`flex items-center gap-2 px-4 py-2 rounded-full text-white ${link.color} hover:opacity-90 transition-opacity`}
              >
                <link.icon className="w-5 h-5" />
                {link.name}
              </a>
            ))}
          </div>
        </section>
      </main>

      <footer className="bg-green-100 py-4 mt-5">
        <div className="container mx-auto px-4 text-center text-sm">
          <p>&copy; 2024 GUAC Token. All rights reserved.</p>
        </div>
      </footer>
    </div>
  )
}
