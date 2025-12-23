"use client"

import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"
import { Separator } from "@/components/ui/separator"
import { ExternalLinkIcon, Linkedin, Twitter } from "lucide-react"
import { useRef, useEffect, useState } from "react"

const FarcasterIcon = () => (
  <svg 
    viewBox="0 0 1000 1000" 
    className="size-4"
    fill="currentColor"
  >
    <path d="M257.778 155.556H742.222V844.445H671.111V528.889H670.414C662.554 441.677 589.258 373.333 500 373.333C410.742 373.333 337.446 441.677 329.586 528.889H328.889V844.445H257.778V155.556Z"/>
    <path d="M128.889 253.333L157.778 351.111H182.222V746.667C169.949 746.667 160 756.616 160 768.889V795.556H155.556C143.283 795.556 133.333 805.505 133.333 817.778V844.445H382.222V817.778C382.222 805.505 372.273 795.556 360 795.556H355.556V768.889C355.556 756.616 345.606 746.667 333.333 746.667H306.667V253.333H128.889Z"/>
    <path d="M675.556 746.667C663.283 746.667 653.333 756.616 653.333 768.889V795.556H648.889C636.616 795.556 626.667 805.505 626.667 817.778V844.445H875.556V817.778C875.556 805.505 865.606 795.556 853.333 795.556H848.889V768.889C848.889 756.616 838.94 746.667 826.667 746.667V351.111H851.111L880 253.333H702.222V746.667H675.556Z"/>
  </svg>
)

export default function Page() {
  const videoRef = useRef<HTMLVideoElement>(null)
  const [scrollY, setScrollY] = useState(0)

  useEffect(() => {
    const video = videoRef.current
    if (!video) return

    const handleTimeUpdate = () => {
      const fadeStartTime = video.duration - 1 // Start fade 1 second before end
      if (video.currentTime >= fadeStartTime) {
        const fadeProgress = (video.currentTime - fadeStartTime) / 1
        video.style.opacity = String(1 - (fadeProgress * 0.2)) // Fade from 1 to 0.8
      }
    }

    video.addEventListener('timeupdate', handleTimeUpdate)
    return () => video.removeEventListener('timeupdate', handleTimeUpdate)
  }, [])

  useEffect(() => {
    const handleScroll = () => {
      setScrollY(window.scrollY)
    }

    window.addEventListener('scroll', handleScroll, { passive: true })
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])
  const skills = [
    "Communication",
    "Organization Design",
    "Mentoring",
    "Facilitating",
    "Process Design",
    "Problem Solving",
    "Leading the Leaders",
    "Establishing Vision",
    "Strategy Execution"
  ]

  const experiences = [
    {
      company: "Meiro",
      period: "2024-Present",
      title: "CTO",
      description: [
        "Helping customers understand their customers through innovative data solutions.",
        "Building a privacy-friendly Customer Data Platform (CDP) that can run on any infrastructure.",
        "Leading technology strategy and platform architecture decisions.",
        "Mentoring and advising other startups on technical leadership and product development."
      ],
      link: "https://meiro.io",
      image: "/meiro.jpg"
    },
    {
      company: "Smartsupp",
      period: "May 2023 - 2024",
      title: "CTO",
      description: [
        "Working with the rest of the leadership on strategic planning and translating the strategy into technology improvements.",
        "Helping align self-organized teams with company objectives while fostering cross-team collaboration.",
        "Mentoring developers in various areas to enhance their skills and contributions.",
        "Facilitating essential meetings to ensure effective communication and decision-making.",
        "Driving innovation through the introduction of new methodologies and creative problem-solving approaches."
      ],
      link: "https://smartsupp.com",
      image: "/smartsupp.jpg"
    },
    {
      company: "Developer DAO",
      period: "March 2022-Present",
      title: "Mentoring, OKRs Initiative.",
      description: [
        "Helped initiative to establish OKRs.",
        "Mentoring management practices.",
        "Mentoring fullstack web3 development."
      ],
      link: "https://developerdao.com",
    },
    {
      company: "Blockenberg",
      period: "February 2023-Present",
      title: "Founder/CTO",
      description: [
        "Decentralized CMS",
        "Built the whole system that allow content creation with a friendly UI.",
        "This CMS publish all the content to the user owned IPFS decentralized network."
      ],
      link: "https://blockenberg.xyz",
    },
    {
      company: "Emplifi",
      period: "June 2021 - April 2022",
      title: "Director of Engineering",
      description: [
        "Spearheaded the successful merger of engineering departments from four different companies.",
        "Pioneered the establishment of core engineering processes to streamline operations and boost efficiency.",
        "Took personal leadership in critical integration initiatives to ensure seamless transitions and optimal outcomes."
      ],
      link: "https://emplifi.com",
      image: "/emplify.jpg"
    },
    {
      company: "Socialbakers",
      period: "October 2019 - June 2022",
      title: "Director of Engineering",
      description: [
        "Designed and implemented a comprehensive career development plan to nurture talent within the organization.",
        "Developed and refined the planning process, optimizing it for better efficiency and outcomes.",
        "Successfully restructured the engineering department using the value stream model to enhance productivity and alignment with business goals.",
        "Improved the process for developers to contribute effectively to product discovery, resulting in more innovative and valuable solutions.",
        "Established a horizontal (tech-stack oriented) guild system, fostering collaboration and knowledge sharing among teams."
      ],
      link: "https://socialbakers.com",
      image: "/socialbakers.jpg"
    },
    {
      company: "2Fresh",
      period: "April 2017 - March 2018",
      title: "Delivery Lead",
      description: [
        "Designed and executed a comprehensive operations management strategy to optimize organizational efficiency.",
        "Played a key role as part of the Innovation Team, contributing to innovative solutions and initiatives.",
        "Developed and successfully implemented an Agile budgeting system, enhancing financial planning and resource allocation."
      ],
      link: "https://2fresh.cz",
      image: "/2fresh.jpg"
    }
  ]

  return (
    <div className="min-h-screen bg-background">
      <main className="mx-auto max-w-5xl px-6 py-12 sm:px-8 lg:px-12">
        {/* Hero Section */}
        <header className="mb-16">
          <div className="relative w-full aspect-21/9 overflow-hidden mb-8">
            <video 
              ref={videoRef}
              autoPlay 
              muted 
              playsInline
              className="w-full h-full object-cover transition-opacity duration-1000"
            >
              <source src="/seagull.mp4" type="video/mp4" />
              Your browser does not support the video tag.
            </video>
          </div>
          <h1 className="text-5xl font-bold tracking-tight sm:text-6xl mb-3 text-foreground">
            ADAM SOBOTKA
          </h1>
     
          <p className="text-sm text-muted-foreground leading-relaxed mb-8 max-w-3xl">
            I&apos;m a seasoned leader dedicated to enhancing and scaling product development organizations. 
            With three decades of experience in technology and two decades in management, I&apos;ve cultivated a startup 
            mindset while streamlining processes for larger enterprises. Currently, I serve as the CTO at Meiro, 
            building privacy-friendly data solutions and helping customers understand their customers.
          </p>
          <div className="flex gap-3 flex-wrap items-center">
           
            <Button 
              size="default"
              className="cursor-pointer"
              onClick={() => window.open('https://www.linkedin.com/in/adamsobotka/', '_blank')}
            >
              <Linkedin data-icon="inline-start" />
              LinkedIn
            </Button>
            <Button 
              size="default"
              className="cursor-pointer"
              onClick={() => window.open('https://x.com/vorcigernix', '_blank')}
            >
              <Twitter data-icon="inline-start" />
              Twitter
            </Button>
            <Button 
              size="default"
              className="cursor-pointer"
              onClick={() => window.open('https://farcaster.xyz/vorcigernix', '_blank')}
            >
              <FarcasterIcon />
              Farcaster
            </Button>
          </div>
        </header>

        <Separator className="my-10" />

        {/* Skills Section */}
        <section className="mb-16">
          <h2 className="text-2xl font-semibold mb-6 text-foreground">Skills</h2>
          <div className="flex flex-wrap gap-2">
            {skills.map((skill) => (
              <Badge key={skill} variant="secondary" className="px-3 py-1.5">
                {skill}
              </Badge>
            ))}
          </div>
        </section>

        <Separator className="my-10" />

        {/* Experience Section */}
        <section className="mb-16">
          <h2 className="text-2xl font-semibold mb-8 text-foreground">Experience</h2>
          <div className="space-y-6">
            {experiences.map((experience, index) => {
              const cardRef = useRef<HTMLDivElement>(null)
              const [parallaxOffset, setParallaxOffset] = useState(0)

              useEffect(() => {
                const updateParallax = () => {
                  if (cardRef.current) {
                    const rect = cardRef.current.getBoundingClientRect()
                    const scrollProgress = (window.innerHeight - rect.top) / (window.innerHeight + rect.height)
                    const offset = (scrollProgress - 0.5) * 60 // Adjust multiplier for parallax intensity
                    setParallaxOffset(offset)
                  }
                }

                updateParallax()
                window.addEventListener('scroll', updateParallax, { passive: true })
                return () => window.removeEventListener('scroll', updateParallax)
              }, [])

              return (
                <Card key={index} ref={cardRef} className="border border-border hover:border-primary/20 transition-colors overflow-hidden">
                  {experience.image && (
                    <div className="relative w-full h-48 overflow-hidden">
                      <img 
                        src={experience.image} 
                        alt={`${experience.company} photo`}
                        className="w-full h-full object-cover will-change-transform"
                        style={{ transform: `translateY(${parallaxOffset}px)` }}
                      />
                    </div>
                  )}
                  <CardHeader>
                    <div className="flex items-start justify-between gap-4">
                      <div className="flex-1">
                        <CardTitle className="text-foreground">{experience.company}</CardTitle>
                        <CardDescription className="mt-1.5">
                          {experience.period}
                        </CardDescription>
                      </div>
                    </div>
                    <h3 className="text-sm font-semibold mt-3 text-foreground/90">
                      {experience.title}
                    </h3>
                  </CardHeader>
                  <CardContent className="space-y-3">
                    {experience.description.map((item, idx) => (
                      <p key={idx} className="text-sm text-muted-foreground leading-relaxed">
                        {item}
                      </p>
                    ))}
                    <Button 
                      size="sm"
                      className="mt-3 cursor-pointer"
                      onClick={() => window.open(experience.link, '_blank')}
                    >
                      Learn More
                      <ExternalLinkIcon data-icon="inline-end" />
                    </Button>
                  </CardContent>
                </Card>
              )
            })}
          </div>
        </section>
      </main>
    </div>
  )
}