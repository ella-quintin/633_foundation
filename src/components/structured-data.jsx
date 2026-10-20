import { site, SITE_URL } from "@/lib/site";
import { meetings } from "@/lib/meetings";

export function StructuredData() {
  const data = {
    "@context": "https://schema.org",
    "@type": "ReligiousOrganization",
    name: site.name,
    url: SITE_URL,
    description: site.description,
    sameAs: meetings.map((meeting) => meeting.spotifyUrl),
    subOrganization: meetings.map((meeting) => ({
      "@type": "CreativeWorkSeries",
      name: meeting.name,
      description: meeting.description,
      url: meeting.spotifyUrl,
    })),
  };

  return (
    <script
      type="application/ld+json"
      // Safe: `data` is built entirely from static, developer-controlled content above, never user input.
      dangerouslySetInnerHTML={{ __html: JSON.stringify(data) }}
    />
  );
}
