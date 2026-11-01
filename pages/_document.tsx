import { Html, Head, Main, NextScript } from "next/document";
import FloatingWhatsApp from "../components/FloatingWhatsApp";

export default function Document() {
  return (
    <Html lang="en">
      <Head />
      <body className={`antialiased`}>
        <Main />
        <NextScript />
        <FloatingWhatsApp />
      </body>
    </Html>
  );
}
