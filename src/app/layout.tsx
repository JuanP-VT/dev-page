import type { Metadata } from "next";
import "./globals.css";
import { ThemeProvider } from "next-themes";
import localFont from "next/font/local";
import { Toaster } from "sonner";

const sfMono = localFont({
	src: "/../../public/fonts/SFMono-Regular.otf",
});
export const metadata: Metadata = {
  title: "Juan Pablo Valdez Torres | Full-Stack Engineer | .NET & Next.js",
  description: 
    "Full-Stack Software Engineer specialized in .NET 10, C#, and modern Next.js architectures. " + 
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
  openGraph: {
    title: "Juan Pablo Valdez Torres | Software Engineer",
    description: "Full-Stack Engineer building scalable .NET & Next.js solutions.",
    url: "https://www.jpablo.dev", 
    siteName: "Juan Pablo Portfolio",
    images: [
      {
        url: "/og-image.png", // Make sure to add an OG image in your public folder
        width: 1200,
        height: 630,
      },
    ],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Juan Pablo | Software Engineer",
    description: "Full-Stack Engineer building scalable .NET & Next.js solutions.",
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
