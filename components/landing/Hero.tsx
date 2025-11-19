import { SignUpButton } from "@clerk/nextjs";
import { Button } from "../ui/button";
import { CalendarSearchIcon, MicIcon, StarHalf, StarIcon } from "lucide-react";
import Image from "next/image";

const Hero = () => {
  return (
    <section className="relative h-screen flex items-center overflow-hidden pt-20">
      {/* Grid BG */}
      <div className="absolute inset-0 bg-linear-to-br from-background via-muted/5 to-primary/5">
        <div className="absolute inset-0 bg-[linear-gradient(to_right,#f1f5f9_1px,transparent_1px),linear-gradient(to_bottom,#f1f5f9_1px,transparent_1px)] bg-[size:4rem_4rem] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_0%,#000_70%,transparent_110%)] opacity-20"></div>
      </div>

      {/* Gradient ORBS */}
      <div className="absolute top-20 left-1/4 w-72 h-72 bg-gradient-to-r from-primary/20 to-primary/10 rounded-full blur-3xl" />
      <div className="absolute bottom-20 right-1/4 w-96 h-96 bg-gradient-to-r from-primary/15 to-primary/5 rounded-full blur-3xl" />

      <div className="relative z-10 w-full px-6">
        <div className="max-w-6xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-20 items-center">
            {/* Left Section */}
            <div className="space-y-10">
              <div className="space-y-6">
                {/* Badge */}
                <div className="inline-flex items-center gap-2 px-4 py-2 bg-gradient-to-r from-primary/10 to-primary/5 rounded-full border border-primary/20 backdrop-blur-sm">
                  <div className="w-2 h-2 bg-primary rounded-full animate-pulse"></div>
                  <span className="text-sm font-medium text-primary">
                    AI-Powered Support
                  </span>
                </div>

                {/* Main Heading */}
                <h1 className="text-4xl md:text-5xl lg:text-6xl 2xl:text-7xl font-bold tracking-tight lg:leading-18">
                  <span className="bg-linear-to-br from-foreground via-foreground to-foreground/70 bg-clip-text text-transparent">
                    Your 24/7
                  </span>
                  <br />
                  <span className="bg-gradient-to-r from-primary to-primary/70 bg-clip-text text-transparent">
                    Mental Wellness
                  </span>
                  <br />
                  <span className="bg-linear-to-br from-foreground via-foreground to-foreground/70 bg-clip-text text-transparent">
                    Companion
                  </span>
                </h1>

                {/* SUBTITLE */}
                <p className="text-sm 2xl:text-lg text-muted-foreground leading-relaxed max-w-lg font-medium">
                  Chat with your AI mental wellness assistant for instant
                  support, easy therapy bookings, and personalized care tips.
                </p>

                {/* CTA Buttons */}
                <div className="flex flex-col sm:flex-row gap-4">
                  <SignUpButton mode="modal">
                    <Button size={"lg"}>
                      <MicIcon className="mr-2 size-5" />
                      Try Voice Agent
                    </Button>
                  </SignUpButton>

                  <SignUpButton mode="modal">
                    <Button size={"lg"} variant={"outline"}>
                      <CalendarSearchIcon className="mr-2 size-5" />
                      Book Appointment
                    </Button>
                  </SignUpButton>
                </div>

                {/* User Testimonials */}
                <div className="pt-4">
                  <div className="flex items-center gap-6">
                    {/* User Avatars */}
                    <div className="flex -space-x-3">
                      <Image
                        src="https://images.unsplash.com/photo-1580489944761-15a19d654956?w=100&h=100&fit=crop&crop=face"
                        alt="Anna Lopez"
                        width={45}
                        height={45}
                        className="w-10 h-10 rounded-full object-cover ring-4 ring-background"
                      />
                      <Image
                        src="https://images.unsplash.com/photo-1560250097-0b93528c311a?w=100&h=100&fit=crop&crop=face"
                        alt="Sam Miller"
                        width={45}
                        height={45}
                        className="w-10 h-10 rounded-full object-cover ring-4 ring-background"
                      />

                      <Image
                        src="https://images.unsplash.com/photo-1633332755192-727a05c4013d?w=100&h=100&fit=crop&crop=face"
                        alt="Mike Rodriguez"
                        width={45}
                        height={45}
                        className="w-10 h-10 rounded-full object-cover ring-4 ring-background"
                      />
                      <Image
                        src="https://images.unsplash.com/photo-1598300042247-d088f8ab3a91?w=100&h=100&fit=crop&crop=face"
                        alt="Katie Lee"
                        width={45}
                        height={45}
                        className="w-10 h-10 rounded-full object-cover ring-4 ring-background"
                      />
                      <Image
                        src="https://images.unsplash.com/photo-1544005313-94ddf0286df2?w=100&h=100&fit=crop&crop=face"
                        alt="Jessica Davis"
                        width={45}
                        height={45}
                        className="w-10 h-10 rounded-full object-cover ring-4 ring-background"
                      />
                    </div>

                    {/* Rating And Stats */}
                    <div className="space-y-1">
                      <div className="flex items-center gap-2">
                        <div className="flex items-center gap-1">
                          {[1, 2, 3, 4].map((star) => (
                            <StarIcon
                              key={star}
                              className="h-4 w-4 fill-amber-400 text-amber-400"
                            />
                          ))}
                          <StarHalf className="h-4 w-4 fill-amber-400 text-amber-400" />
                        </div>
                        <span className="text-sm font-bold text-foreground">
                          4.6/5
                        </span>
                      </div>
                      <p className="text-sm text-muted-foreground">
                        Trusted by{" "}
                        <span className="font-semibold text-foreground">
                          1,200+ patients
                        </span>
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Right Section - Hero Image */}
            <div className="relative lg:pl-8 flex content-end">
              {/* Gradient ORBS */}
              <div className="absolute -top-4 -left-4 w-24 h-24 bg-linear-to-br from-primary/20 to-primary/10 rounded-2xl rotate-45 blur-xl"></div>
              <div className="absolute -bottom-6 -right-6 w-32 h-32 bg-linear-to-br from-primary/15 to-primary/5 rounded-full blur-2xl"></div>

              <Image
                src={"/hero.png"}
                alt="TheraLink AI"
                width={600}
                height={600}
                className="w-full h-auto"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
export default Hero;
