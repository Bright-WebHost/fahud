import Script from "next/script";
import "./globals.css";

const isGitHubPages = process.env.GITHUB_PAGES === "true";
const assetPrefix = isGitHubPages ? "/Fahud" : "";

export const metadata = {
  title: "Fahud - Safety & Technocal trading",
  description: "A Life Full Of Design Secrets.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        {/* CSS Assets */}
        <link rel="stylesheet" href={`${assetPrefix}/css/bootstrap.min.css`} />
        <link rel="stylesheet" href={`${assetPrefix}/css/font-awesome.min.css`} />
        <link rel="stylesheet" href={`${assetPrefix}/css/owl.carousel.min.css`} />
        <link rel="stylesheet" href={`${assetPrefix}/css/magnific-popup.min.css`} />
        <link rel="stylesheet" href={`${assetPrefix}/css/swiper-bundle.min.css`} />
        <link rel="stylesheet" href={`${assetPrefix}/css/style.css`} />
        <link rel="stylesheet" href={`${assetPrefix}/css/bootstrap-icons.css`} />
        <link rel="stylesheet" href={`${assetPrefix}/css/lc_lightbox.css`} />
        <link rel="stylesheet" href={`${assetPrefix}/css/bootstrap-slider.min.css`} />

        {/* Fonts */}
        <link href="https://fonts.googleapis.com/css2?family=Marcellus&display=swap" rel="stylesheet" />
        <link href="https://fonts.googleapis.com/css2?family=Urbanist:ital,wght@0,100..900;1,100..900&display=swap" rel="stylesheet" />
      </head>
      <body suppressHydrationWarning>
        <div className="page-wraper">
          {children}
        </div>

        {/* JS Assets */}
        <Script src={`${assetPrefix}/js/jquery-3.7.1.min.js`} strategy="beforeInteractive" />
        <Script src={`${assetPrefix}/js/popper.min.js`} strategy="afterInteractive" />
        <Script src={`${assetPrefix}/js/bootstrap.min.js`} strategy="afterInteractive" />
        <Script src={`${assetPrefix}/js/magnific-popup.min.js`} strategy="afterInteractive" />
        <Script src={`${assetPrefix}/js/waypoints.min.js`} strategy="afterInteractive" />
        <Script src={`${assetPrefix}/js/counterup.min.js`} strategy="afterInteractive" />
        <Script src={`${assetPrefix}/js/isotope.pkgd.min.js`} strategy="afterInteractive" />
        <Script src={`${assetPrefix}/js/imagesloaded.pkgd.min.js`} strategy="afterInteractive" />
        <Script src={`${assetPrefix}/js/owl.carousel.min.js`} strategy="afterInteractive" />
        <Script src={`${assetPrefix}/js/theia-sticky-sidebar.js`} strategy="afterInteractive" />
        <Script src={`${assetPrefix}/js/jquery.bootstrap-touchspin.js`} strategy="afterInteractive" />
        <Script src={`${assetPrefix}/js/lc_lightbox.lite.js`} strategy="afterInteractive" />
        <Script src={`${assetPrefix}/js/bootstrap-slider.min.js`} strategy="afterInteractive" />
        <Script src={`${assetPrefix}/js/swiper-bundle.min.js`} strategy="afterInteractive" />
        <Script src={`${assetPrefix}/js/img-parallax.js`} strategy="afterInteractive" />
        <Script src={`${assetPrefix}/js/wow.min.js`} strategy="afterInteractive" />
        <Script src={`${assetPrefix}/js/gsap.min.js`} strategy="afterInteractive" />
        <Script src={`${assetPrefix}/js/custom.js`} strategy="afterInteractive" />

        <div className="cursor"></div>
        <div className="cursor2"></div>
      </body>
    </html>
  );
}
