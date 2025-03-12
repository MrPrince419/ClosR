import Head from "next/head"

interface SEOProps {
  title: string
  description: string
  keywords?: string
  ogImage?: string
}

export default function SEO({ title, description, keywords, ogImage }: SEOProps) {
  const siteUrl = "https://closr.com" // Replace with your actual domain
  const defaultOgImage = `${siteUrl}/og-image.jpg` // Default OG image

  return (
    <Head>
      <title>{title}</title>
      <meta name="description" content={description} />
      {keywords && <meta name="keywords" content={keywords} />}

      {/* Open Graph / Facebook */}
      <meta property="og:type" content="website" />
      <meta property="og:url" content={siteUrl} />
      <meta property="og:title" content={title} />
      <meta property="og:description" content={description} />
      <meta property="og:image" content={ogImage || defaultOgImage} />

      {/* Twitter */}
      <meta property="twitter:card" content="summary_large_image" />
      <meta property="twitter:url" content={siteUrl} />
      <meta property="twitter:title" content={title} />
      <meta property="twitter:description" content={description} />
      <meta property="twitter:image" content={ogImage || defaultOgImage} />
    </Head>
  )
}

