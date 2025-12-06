import { Helmet } from "react-helmet-async";

interface SEOProps {
  title?: string;
  description?: string;
  keywords?: string;
  image?: string;
  url?: string;
  type?: "website" | "article" | "profile";
  author?: string;
  publishedTime?: string;
  modifiedTime?: string;
  schema?: object | object[];
  noindex?: boolean;
  canonical?: string;
}

const defaultTitle = "TrulyCoded - UI/UX Design, Web Development & Mobile App Development Agency | India";
const defaultDescription = "TrulyCoded is a modern tech agency specializing in UI/UX design, web development, mobile app development, and digital solutions for startups and growing businesses. Transform your digital presence with our expert team.";
const defaultKeywords = "trulycoded, truly coded, UI UX design agency, web development agency India, mobile app development, React development, Flutter apps, website design, custom software development, startup tech solutions, digital agency, brand identity, conversion optimization, Next.js development, modern web design";
const baseUrl = "https://trulycoded.agency";
const defaultImage = `${baseUrl}/og-image.jpg`;

export const SEO = ({
  title = defaultTitle,
  description = defaultDescription,
  keywords = defaultKeywords,
  image = defaultImage,
  url = baseUrl,
  type = "website",
  author = "TrulyCoded Agency",
  publishedTime,
  modifiedTime,
  schema,
  noindex = false,
  canonical,
}: SEOProps) => {
  const fullTitle = title === defaultTitle ? title : `${title} | TrulyCoded`;
  const canonicalUrl = canonical || url;
  const robotsContent = noindex ? "noindex, nofollow" : "index, follow, max-snippet:-1, max-image-preview:large, max-video-preview:-1";

  // Default Organization Schema
  const defaultOrganizationSchema = {
    "@context": "https://schema.org",
    "@type": "Organization",
    "name": "TrulyCoded",
    "alternateName": "Truly Coded Agency",
    "url": baseUrl,
    "logo": `${baseUrl}/logo.png`,
    "image": image,
    "description": description,
    "foundingDate": "2024",
    "address": {
      "@type": "PostalAddress",
      "addressCountry": "IN",
      "addressRegion": "India"
    },
    "contactPoint": {
      "@type": "ContactPoint",
      "contactType": "customer service",
      "email": "hi@trulycoded.agency",
      "availableLanguage": ["English"]
    },
    "sameAs": [
      "https://twitter.com/Abhijitam_",
      "https://linkedin.com/company/trulycoded"
    ],
    "aggregateRating": {
      "@type": "AggregateRating",
      "ratingValue": "4.9",
      "reviewCount": "127",
      "bestRating": "5",
      "worstRating": "1"
    }
  };

  // WebSite Schema with SearchAction
  const websiteSchema = {
    "@context": "https://schema.org",
    "@type": "WebSite",
    "name": "TrulyCoded",
    "url": baseUrl,
    "potentialAction": {
      "@type": "SearchAction",
      "target": {
        "@type": "EntryPoint",
        "urlTemplate": `${baseUrl}/?s={search_term_string}`
      },
      "query-input": "required name=search_term_string"
    }
  };

  // Combine schemas
  const schemas = Array.isArray(schema) 
    ? [defaultOrganizationSchema, websiteSchema, ...schema]
    : schema 
    ? [defaultOrganizationSchema, websiteSchema, schema]
    : [defaultOrganizationSchema, websiteSchema];

  return (
    <Helmet>
      {/* Primary Meta Tags */}
      <title>{fullTitle}</title>
      <meta name="title" content={fullTitle} />
      <meta name="description" content={description} />
      <meta name="keywords" content={keywords} />
      <meta name="author" content={author} />
      <meta name="robots" content={robotsContent} />
      <meta name="language" content="en" />
      <meta name="revisit-after" content="3 days" />
      <meta name="googlebot" content={robotsContent} />
      <meta name="bingbot" content={robotsContent} />
      <meta name="rating" content="general" />
      <meta name="geo.region" content="IN" />
      <meta name="geo.placename" content="India" />
      <meta name="geo.position" content="28.6139;77.2090" />
      <meta name="ICBM" content="28.6139, 77.2090" />

      {/* Open Graph / Facebook */}
      <meta property="og:type" content={type} />
      <meta property="og:url" content={url} />
      <meta property="og:title" content={fullTitle} />
      <meta property="og:description" content={description} />
      <meta property="og:image" content={image} />
      <meta property="og:image:width" content="1200" />
      <meta property="og:image:height" content="630" />
      <meta property="og:image:alt" content={fullTitle} />
      <meta property="og:site_name" content="TrulyCoded Agency" />
      <meta property="og:locale" content="en_US" />
      <meta property="og:locale:alternate" content="en_IN" />
      {publishedTime && <meta property="article:published_time" content={publishedTime} />}
      {modifiedTime && <meta property="article:modified_time" content={modifiedTime} />}
      {author && <meta property="article:author" content={author} />}

      {/* Twitter */}
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:url" content={url} />
      <meta name="twitter:title" content={fullTitle} />
      <meta name="twitter:description" content={description} />
      <meta name="twitter:image" content={image} />
      <meta name="twitter:image:alt" content={fullTitle} />
      <meta name="twitter:creator" content="@Abhijitam_" />
      <meta name="twitter:site" content="@Abhijitam_" />

      {/* Additional SEO */}
      <meta name="theme-color" content="#3b82f6" />
      <meta name="msapplication-TileColor" content="#3b82f6" />
      <meta name="apple-mobile-web-app-capable" content="yes" />
      <meta name="apple-mobile-web-app-status-bar-style" content="default" />
      <meta name="apple-mobile-web-app-title" content="Truly Coded" />
      <meta name="application-name" content="Truly Coded" />
      <meta name="format-detection" content="telephone=yes" />

      {/* Canonical URL */}
      <link rel="canonical" href={canonicalUrl} />

      {/* Alternate URLs */}
      <link rel="alternate" hreflang="en" href={url} />
      <link rel="alternate" hreflang="en-IN" href={url} />
      <link rel="alternate" hreflang="x-default" href={url} />

      {/* Preconnect for Performance */}
      <link rel="preconnect" href="https://fonts.googleapis.com" />
      <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
      <link rel="dns-prefetch" href="https://www.google-analytics.com" />
      <link rel="dns-prefetch" href="https://www.googletagmanager.com" />

      {/* Structured Data */}
      {schemas.map((schemaData, index) => (
        <script
          key={index}
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(schemaData) }}
        />
      ))}
    </Helmet>
  );
};

