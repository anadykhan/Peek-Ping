import MockDiscordUi from "@/components/MockDiscordUi"
import GlassyButton from "../../components/GlassyButton"
import Heading from "../../components/Heading"
import MaxWidthWrapper from "../../components/MaxWidthWrapper"
import { Check } from "lucide-react"
import { AnimatedList } from "@/components/ui/animated-list"
import DiscordMessage from "@/components/DiscordMessage"

const page = () => {
  return (
    <>
      <section className="relative py-24 sm:py-32 bg-brand-25">
        <MaxWidthWrapper className="text-center">
          <div className="relative mx-auto text-center flex flex-col items-center gap-10">
            <div>
              <Heading>
                <span>Real-time SaaS insights!</span>
                <br />
                <span className="relative bg-gradient-to-r from-brand-700 to-brand-800 text-transparent bg-clip-text">
                  Deliver to your discord
                </span>
              </Heading>
            </div>
            <p className="text-base/7 text-gray-600 max-w-prose text-center text-pretty">
              PeekPing is the easiest way to monitor your SaaS. Get instant
              nonifications for{" "}
              <span className="font-semibold text-gray-700">
                sales, new users, or any other event
              </span>{" "}
              sent directly to your Discord.
            </p>
            <ul className="sapce-y-2 text-base/7 text-gray-600 text-left flex flex-col items-center sm:items-start">
              {[
                "Real time discord alerts for critical events",
                "Buy onece use forever",
                "Track slaes, new users, or any other event!",
              ].map((item, index) => {
                return (
                  <li
                    key={index}
                    className="flex gap-1.5 items-center text-left"
                  >
                    <Check className="size-5 shrink-0 text-brand-700" />
                    {item}
                  </li>
                )
              })}
            </ul>

            <div className="w-full max-w-80">
              <GlassyButton
                href="/sign-up"
                className="relative z-10 h-14 w-full text-base shadow-lg transition-shadow duration-300 hover:shadow-xl"
              >
                Stat For Free Today!
              </GlassyButton>
            </div>
          </div>
        </MaxWidthWrapper>
      </section>
      <section className="relative bg-brand-25 pb-4">
        <div className="absolute inset-x-0 bottom-24 top-24 bg-brand-700"></div>
        <div className="relative mx-auto">
          <MaxWidthWrapper>
            <div className="-m-2 rounded-xl bg-gray-900/5 p-2 ring-1 ring-inset ring-gray-900/10 lg:-m-4 lg:rounded-2xl lg:p-4">
              <MockDiscordUi>
                <AnimatedList>
                  <DiscordMessage
                    avatarSrc="/brand-asset-profile-picture.png"
                    avatarAlt="Peek Ping Avatar"
                    username="PeekPing"
                    timeStamp="Today at 12:33PM"
                    badgeText="Sign Up"
                    badgeColor="#43b581"
                    title="👤 New user signed up"
                    content={{
                      name: "Hello Kitty",
                      email: "hello.kitty@gmail.com",
                    }}
                  ></DiscordMessage>
                  <DiscordMessage
                    avatarSrc="/brand-asset-profile-picture.png"
                    avatarAlt="Peek Ping Avatar"
                    username="PeekPing"
                    timeStamp="Today at 12:33PM"
                    badgeText="Revenue"
                    badgeColor="#faa61a"
                    title="💰 Payment Received"
                    content={{
                      amount: "$50.45",
                      email: "kitty.hello@gmail.com",
                      plan: "PRO",
                    }}
                  ></DiscordMessage>
                  <DiscordMessage
                    avatarSrc="/brand-asset-profile-picture.png"
                    avatarAlt="Peek Ping Avatar"
                    username="PeekPing"
                    timeStamp="Today at 12:33PM"
                    badgeText="Milestone"
                    badgeColor="#5865f2"
                    title="🚀 Revenue Milestone Achieved"
                    content={{
                      recurringRevenue: "$5000 USD",
                      growth: "+8.2%",
                    }}
                  ></DiscordMessage>
                </AnimatedList>
              </MockDiscordUi>
            </div>
          </MaxWidthWrapper>
        </div>
      </section>
      <section></section>
      <section></section>
      <section></section>
    </>
  )
}
export default page
