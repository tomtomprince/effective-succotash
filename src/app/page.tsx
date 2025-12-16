const iframeHTML = `
    <iframe
      title="Trip Request Form"
      src="http://localhost:8000/public/trips/embed/trip-request/?access_token=kpJlQjmjr9dE5279M5dPPV-yn7KX600__HPAjb_5VaY"
      style="
        width: 100%;
        height: 100%;
      "
    />`;

export default function Home() {
  return (
    <main>
      <div
        dangerouslySetInnerHTML={{ __html: iframeHTML }}
        style={{ width: "100vw", height: "100vh" }}
      />
    </main>
  );
}
