const iframeHTML = `
    <iframe
      title="Trip Request Form"
      src="https://staging.api.hibambi.com/public/trips/embed/trip-request/?access_token=8J8aMfV7pOKY3npHwNQdXBMeoiYIm8X5WSIfb0PP_IQ"
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
