import React from "react";
import Head from "next/head";

interface EventSEOProps {
  heading: string;
  subtitle: string;
  description?: string;
  imageUrl?: string;
  url?: string;
}

const EventSEO: React.FC<EventSEOProps> = ({
  heading,
  subtitle,
  description,
  imageUrl,
  url,
}) => {
  return (
    <Head>
      <title>{heading}</title>
      <meta name="description" content={description || subtitle} />

      {/* Open Graph */}
      <meta property="og:title" content={heading} />
      <meta property="og:description" content={description || subtitle} />
      {imageUrl && <meta property="og:image" content={imageUrl} />}
      {url && <meta property="og:url" content={url} />}
      <meta property="og:type" content="website" />

      {/* Twitter Cards */}
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content={heading} />
      <meta
        name="twitter:description"
        content={description || subtitle}
      />
      {imageUrl && <meta name="twitter:image" content={imageUrl} />}
    </Head>
  );
};

export default EventSEO;
