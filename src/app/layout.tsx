import type { Metadata } from "next";
import "./globals.css";
import { ThemeProvider } from "next-themes";
import localFont from "next/font/local";
import { Toaster } from "sonner";

const sfMono = localFont({
	src: "/../../public/fonts/SFMono-Regular.otf",
});

const baseUrl = "https://www.jpablo.dev";

export const metadata: Metadata = {
  metadataBase: new URL(baseUrl), 
  title: {
    default: "Juan Pablo Valdez Torres | Software Engineer | .NET & Next.js",
    template: "%s | Juan Pablo Valdez Torres", 
  },
  description: 
    "Software Engineer specialized in .NET 10, C#, and modern frontend architectures. " + 
    "Expert in migrating complex legacy systems to scalable, performant, and maintainable solutions. " + 
    "Building clean, user-centric logistics platforms.",
  authors: [{ name: "Juan Pablo Valdez Torres" }],
  keywords: [
    "Software Engineer", 
    ".NET Developer", 
    "Next.js", 
    "Full-Stack", 
    "Legacy Migration", 
    "Clean Architecture", 
    "TypeScript", 
    "Mexico"
  ],
  alternates: {
    canonical: baseUrl, 
  },
  openGraph: {
    title: "Juan Pablo Valdez Torres | Software Engineer",
    description: "Software Engineer building scalable .NET & Next.js solutions.",
    url: baseUrl, 
    siteName: "Juan Pablo Portfolio",
    images: [
      {
        url: "/og-image.png",
        width: 1200,
        height: 630,
        alt: "Juan Pablo Valdez Torres Portfolio",
      },
    ],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Juan Pablo | Software Engineer",
    description: "Software Engineer building scalable .NET & Next.js solutions.",
    images: ["/og-image.png"],
  },
};
export default async function LocaleLayout({
	children,
}: {
	children: React.ReactNode;	
}) {
	return (
		<html lang={"en"} suppressHydrationWarning>
			<body
				className={`${sfMono.className} bg-zinc-100 antialiased dark:bg-[#1a202c]`}
			>
					<ThemeProvider attribute="class" defaultTheme="dark">
						{children}
						<Toaster />
					</ThemeProvider>
			</body>
		</html>
	);
}
