"use client";
import img from "../../public/img.webp";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";
import { useTheme } from "next-themes";
import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/navigation";

export const HeroSection = () => {
  useTheme(); // Removed unused destructuring to avoid errors
  const router = useRouter();

  return (
    <section className="container w-full h-full  px-6 lg:px-12">
      <div className="grid place-items-center gap-12 mx-auto py-20 md:py-32">
        <div className="text-center space-y-6">
          <Badge variant="outline" className="text-sm py-2 px-4 rounded-full bg-primary/10 text-primary">
            Empower Your Vision!
          </Badge>

          <h1 className="text-4xl md:text-6xl font-extrabold leading-tight tracking-tight">
            Transform{" "}
            <span className="text-transparent bg-gradient-to-r from-blue-500 to-green-500 bg-clip-text">
              Ideas Into Reality
            </span>{" "}
            with ApeiroCraft
          </h1>

          <p className="max-w-2xl mx-auto text-lg md:text-xl text-muted-foreground leading-relaxed">
            Join the revolution in digital innovation. ApeiroCraft crafts cutting-edge solutions to elevate your business, attract investors, and drive unparalleled growth. Let’s shape the future together!
          </p>

          <div className="flex flex-col md:flex-row items-center justify-center gap-4 mt-6">
            <Button
              onClick={() => router.push("#contact")}
              className="w-full md:w-auto px-6 py-3 font-bold text-lg group"
            >
              Contact Us
              <ArrowRight className="ml-2 transition-transform group-hover:translate-x-1" />
            </Button>

            <Button
              asChild
              variant="secondary"
              className="w-full md:w-auto px-6 py-3 font-bold text-lg"
            >
              <Link href="#benefits">Discover More</Link>
            </Button>
          </div>
        </div>

        <div className="relative mt-14">
          <div className="absolute inset-0 top-8 lg:top-16 left-1/2 transform -translate-x-1/2 w-[80%] h-40 lg:h-72 bg-gradient-to-r from-blue-300 to-green-300 rounded-full blur-3xl"></div>
          <Image
            width={1200}
            height={800}
            className="w-full md:w-[1000px] mx-auto rounded-lg shadow-xl border border-secondary/20 object-cover"
            src={img}
            alt="Innovative Solutions"
          />
          <div className="absolute bottom-0 left-0 w-full h-20 md:h-28 bg-gradient-to-b from-transparent via-background/50 to-background rounded-lg"></div>
        </div>
      </div>
    </section>
  );
};
