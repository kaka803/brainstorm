"use client";

import { useEffect } from "react";
import { usePathname } from "next/navigation";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

export default function GsapAnimation() {
  const pathname = usePathname();

  useEffect(() => {
    if (typeof window === "undefined") return;

    gsap.registerPlugin(ScrollTrigger);

    // Give the browser a micro-tick to settle DOM layout
    const ctx = gsap.context(() => {
      // 1. General Fade-Up elements (Headings, subtitles, text blocks)
      const fadeUpElements = gsap.utils.toArray(
        ".gsap-fade-up, section h2, section h3, .section-heading"
      );

      fadeUpElements.forEach((el) => {
        gsap.fromTo(
          el,
          {
            opacity: 0,
            y: 35,
          },
          {
            opacity: 1,
            y: 0,
            duration: 0.85,
            ease: "power2.out",
            scrollTrigger: {
              trigger: el,
              start: "top 88%",
              toggleActions: "play none none none",
              once: true,
            },
          }
        );
      });

      // 2. Fade Left
      const fadeLeftElements = gsap.utils.toArray(".gsap-fade-left");
      fadeLeftElements.forEach((el) => {
        gsap.fromTo(
          el,
          {
            opacity: 0,
            x: -40,
          },
          {
            opacity: 1,
            x: 0,
            duration: 0.85,
            ease: "power2.out",
            scrollTrigger: {
              trigger: el,
              start: "top 88%",
              toggleActions: "play none none none",
              once: true,
            },
          }
        );
      });

      // 3. Fade Right
      const fadeRightElements = gsap.utils.toArray(".gsap-fade-right");
      fadeRightElements.forEach((el) => {
        gsap.fromTo(
          el,
          {
            opacity: 0,
            x: 40,
          },
          {
            opacity: 1,
            x: 0,
            duration: 0.85,
            ease: "power2.out",
            scrollTrigger: {
              trigger: el,
              start: "top 88%",
              toggleActions: "play none none none",
              once: true,
            },
          }
        );
      });

      // 4. Staggered Grid Cards (Services, Bento, FAQs, Features)
      const cardGrids = gsap.utils.toArray(
        ".gsap-card-grid, .grid:not(.no-gsap)"
      );

      cardGrids.forEach((grid) => {
        const cards = grid.querySelectorAll(
          ".card-lift, .card-lift-dark, .sample-card, [class*='rounded-3xl'], [class*='rounded-2xl']"
        );

        if (cards.length > 0) {
          gsap.fromTo(
            cards,
            {
              opacity: 0,
              y: 30,
            },
            {
              opacity: 1,
              y: 0,
              duration: 0.75,
              stagger: 0.1,
              ease: "power2.out",
              scrollTrigger: {
                trigger: grid,
                start: "top 85%",
                toggleActions: "play none none none",
                once: true,
              },
            }
          );
        }
      });

      // 5. Scale In
      const scaleElements = gsap.utils.toArray(".gsap-scale");
      scaleElements.forEach((el) => {
        gsap.fromTo(
          el,
          {
            opacity: 0,
            scale: 0.94,
          },
          {
            opacity: 1,
            scale: 1,
            duration: 0.85,
            ease: "power2.out",
            scrollTrigger: {
              trigger: el,
              start: "top 88%",
              toggleActions: "play none none none",
              once: true,
            },
          }
        );
      });

      ScrollTrigger.refresh();
    });

    return () => {
      ctx.revert();
    };
  }, [pathname]);

  return null;
}

