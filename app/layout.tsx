import "./globals.css";
import ThreeBackground from "@/components/ThreeBackground";
import { structuredData } from "@/lib/seo";

export const metadata = {
  title: "Rajana Durga Pavan Kumar | AI/ML Engineer",
  description:
    "AI/ML Engineer specializing in intelligent systems and scalable web applications."
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>
        <ThreeBackground />
        {children}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(structuredData)
          }}
        />
      </body>
    </html>
  );
}
