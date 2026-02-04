import { Header } from "@/components/Header";

// For Staging Stagers org
const iframeHTML = `
    <iframe
      title="Trip Request Form"
      src="https://staging.api.hibambi.com/public/trips/embed/trip-request/?access_token=VTVajMSMD2xCphaMzUyZ8qYdlYda_Y2RpyE63j97JIw"
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
