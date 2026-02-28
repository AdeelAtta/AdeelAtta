import type React from "react"
import type { Metadata } from "next"
import Script from "next/script"

import "./globals.css"

import { Onest, Geist_Mono as V0_Font_Geist_Mono } from "next/font/google"

// Initialize fonts
const _geistMono = V0_Font_Geist_Mono({
  subsets: ["latin"],
  weight: ["100", "200", "300", "400", "500", "600", "700", "800", "900"],
})

// Initialize Onest font with weights 500 and 700
const onest = Onest({
  subsets: ["latin"],
  weight: ["500", "700"],
  variable: "--font-onest",
})

export const metadata: Metadata = {
  title: "Adeel Atta - Software Engineering & Frontend Developer | React Next.js | Scalable Applications | AI Hackathon Winner | Silver Medalist | Serving 30,000+ Users",
  description:
    "Software engineering and frontend developer expertise. React Next.js specialist, scalable applications builder, AI hackathon winner, silver medalist, serving 30,000+ users. Experienced in modern web development, TypeScript, and production platforms.",
  keywords: "software engineering, frontend developer, react nextjs, scalable applications, ai hackathon winner, silver medalist, serving 30000 users, software developer, web applications, users, building, ai engineer, next.js, typescript, web development, ai, full stack, machine learning, artificial intelligence",
  viewport: "width=device-width, initial-scale=1",
  metadataBase: new URL("https://adeelatta.dev"),
  authors: [{ name: "Adeel Atta", url: "https://adeelatta.dev" }],
  creator: "Adeel Atta",
  icons: {
    icon: [
      { url: "/favicon-16x16.png", sizes: "16x16", type: "image/png" },
      { url: "/favicon-32x32.png", sizes: "32x32", type: "image/png" },
      { url: "/favicon.ico", sizes: "any" },
    ],
    apple: "/apple-touch-icon.png",
    other: [
      {
        rel: "android-chrome-192x192",
        url: "/android-chrome-192x192.png",
        sizes: "192x192",
        type: "image/png",
      },
      {
        rel: "android-chrome-512x512",
        url: "/android-chrome-512x512.png",
        sizes: "512x512",
        type: "image/png",
      },
    ],
  },
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://adeelatta.dev",
    title: "Adeel Atta - Software engineer with AI expertise",
    description: "Software engineer with AI expertise building scalable, AI-powered web applications. Expert in React, Next.js, TypeScript, and modern software engineering practices with production experience serving 30,000+ users.",
    siteName: "Adeel Atta Portfolio",
    images: [
      {
        url: "https://adeelatta.dev/images/og-image.png",
        width: 1200,
        height: 630,
        alt: "Adeel Atta - Software engineer with AI expertise",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Adeel Atta - Software engineer with AI expertise | React, Next.js, AI",
    description:
      "Software engineer with AI expertise building scalable, AI-powered web applications and dashboards using React, Next.js, TypeScript, and modern software engineering practices.",
    images: ["https://adeelatta.dev/images/og-image.png"],
    creator: "@adeelatta",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-snippet": -1,
      "max-image-preview": "large",
      "max-video-preview": -1,
    },
  },
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  const personSchema = {
    "@context": "https://schema.org",
    "@type": "Person",
    "@id": "https://adeelatta.dev#person",
    name: "Adeel Atta",
    url: "https://adeelatta.dev",
    image: "https://adeelatta.dev/images/design-mode/Gemini_Generated_Image_wrhwklwrhwklwrhw.png",
    description: "Software engineer with AI expertise from Pakistan building scalable, AI-powered web applications. Expert in React, Next.js, TypeScript, and modern software engineering practices with production experience serving 30,000+ users.",
    jobTitle: "Software engineer with AI expertise",
    email: "adeelatta2000@gmail.com",
    sameAs: [
      "https://github.com/AdeelAtta",
      "https://www.linkedin.com/in/adeel-atta/",
    ],
    knowsAbout: [
      "React",
      "Next.js",
      "TypeScript",
      "TailwindCSS",
      "Web Development",
      "Frontend Engineering",
      "Design Systems",
      "API Integration",
    ],
    worksFor: {
      "@type": "Organization",
      name: "Adeel Atta",
      url: "https://adeelatta.dev",
      logo: "https://adeelatta.dev/images/design-mode/Gemini_Generated_Image_wrhwklwrhwklwrhw.png",
    },
    contactPoint: {
      "@type": "ContactPoint",
      contactType: "Business Development",
      email: "adeelatta2000@gmail.com",
      telephone: "+92-303-2727095",
    },
  }

  const organizationSchema = {
    "@context": "https://schema.org",
    "@type": "Organization",
    "@id": "https://adeelatta.dev#organization",
    name: "Adeel Atta",
    url: "https://adeelatta.dev",
    logo: "https://adeelatta.dev/images/design-mode/Gemini_Generated_Image_wrhwklwrhwklwrhw.png",
    description: "Software engineer with AI expertise and Web Developer from Pakistan",
    sameAs: [
      "https://github.com/AdeelAtta",
      "https://www.linkedin.com/in/adeel-atta/",
    ],
    contactPoint: {
      "@type": "ContactPoint",
      contactType: "Business Development",
      email: "adeelatta2000@gmail.com",
      telephone: "+92-303-2727095",
    },
  }

  const breadcrumbSchema = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [
      {
        "@type": "ListItem",
        position: 1,
        name: "Home",
        item: "https://adeelatta.dev",
      },
      {
        "@type": "ListItem",
        position: 2,
        name: "Portfolio",
        item: "https://adeelatta.dev/#portfolio",
      },
      {
        "@type": "ListItem",
        position: 3,
        name: "About",
        item: "https://adeelatta.dev/#about",
      },
    ],
  }

  const websiteSchema = {
    "@context": "https://schema.org",
    "@type": "WebSite",
    name: "Adeel Atta Portfolio",
    url: "https://adeelatta.dev",
    inLanguage: "en",
    description:
      "Portfolio of Adeel Atta, a software engineer with AI expertise specializing in React, Next.js, TypeScript, and AI-powered web applications.",
  }

  const webpageSchema = {
    "@context": "https://schema.org",
    "@type": "WebPage",
    name: "Adeel Atta - Software engineer with AI expertise | React, Next.js, AI",
    url: "https://adeelatta.dev",
    inLanguage: "en",
    description:
      "Software engineer with AI expertise based in Pakistan building scalable, AI-powered web applications and dashboards with React, Next.js, TypeScript, and modern software engineering practices.",
    isPartOf: {
      "@type": "WebSite",
      url: "https://adeelatta.dev",
      name: "Adeel Atta Portfolio",
    },
    about: {
      "@id": "https://adeelatta.dev#person",
    },
  }

      const localBusinessSchema = {
        "@context": "https://schema.org",
        "@type": "LocalBusiness",
        "name": "Adeel Atta",
        "url": "https://adeelatta.dev",
        "description": "Remote software engineer with AI expertise, available for global projects.",
        "telephone": "+92-303-2727095",
        "email": "adeelatta2000@gmail.com",
        "image": "https://adeelatta.dev/images/design-mode/Gemini_Generated_Image_wrhwklwrhwklwrhw.png",
        "contactPoint": {
          "@type": "ContactPoint",
          "contactType": "Business Development",
          "telephone": "+92-303-2727095",
          "email": "adeelatta2000@gmail.com"
        },
        // No address field as user works remotely
      }

  return (
    <html lang="en">
      <head>
        <meta name="msvalidate.01" content="F263C1A14AD1A34C4F0D1BA10E0D156F" />
        <link rel="canonical" href="https://adeelatta.dev" />
        <Script
          id="person-schema"
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(personSchema) }}
          strategy="afterInteractive"
        />
        <Script
          id="organization-schema"
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(organizationSchema) }}
          strategy="afterInteractive"
        />
        <Script
          id="local-business-schema"
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(localBusinessSchema) }}
          strategy="afterInteractive"
        />
        <Script
          id="breadcrumb-schema"
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }}
          strategy="afterInteractive"
        />
        <Script
          id="website-schema"
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(websiteSchema) }}
          strategy="afterInteractive"
        />
        <Script
          id="webpage-schema"
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(webpageSchema) }}
          strategy="afterInteractive"
        />
      </head>
      <body className={`${onest.variable} font-sans antialiased overflow-x-hidden`}>
        {children}
      </body>
    </html>
  )
}

