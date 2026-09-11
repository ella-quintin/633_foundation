import { site, SITE_URL } from "@/lib/site";
import { programs } from "@/lib/programs";

export function StructuredData() {
  const data = {
    "@context": "https://schema.org",
    "@type": "ReligiousOrganization",
    name: site.name,
    url: SITE_URL,
    description: site.description,
    sameAs: programs.map((program) => program.spotifyUrl),
    subOrganization: programs.map((program) => ({
      "@type": "CreativeWorkSeries",
      name: program.name,
      description: program.description,
      url: program.spotifyUrl,
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
