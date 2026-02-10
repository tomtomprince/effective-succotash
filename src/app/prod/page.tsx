import { Header } from "@/components/Header";

// For Bambi Internal Testing org
const iframeHTML = `
    <iframe
      title="Trip Request Form"
      src="https://api.hibambi.com/public/trips/embed/trip-request/?access_token=E9OePifaS9nMhwrx0_MLbtUJrHaRGTexiOVvh1QPgts"
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
