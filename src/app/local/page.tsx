import { Header } from "@/components/Header";

// Replace with an embed you create locally
const iframeHTML = `
    <iframe
      title="Trip Request Form"
      src="http://localhost:8000/public/trips/embed/trip-request/?access_token=EnZIAQ70v9psc82KHz2d9NMnbULmYeZS7KS2sEA8qdw"
      style="
        width: 100%;
        height: 100%;
      "
    />`;

export default function Home() {
  return (
    <main>
      <Header />
      <div
        dangerouslySetInnerHTML={{ __html: iframeHTML }}
        style={{ width: "100vw", height: "100vh" }}
      />
    </main>
  );
}
