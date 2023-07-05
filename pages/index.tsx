import WebShareApi from "@/components/WebShareApi";


export default function Home() {
  const shareData = {
    title: "Share",
    text: "Share message",
    url: "https://www.share.com"
  }
  return (
    <main
      className={`bg-gray-200 h-screen flex items-center justify-center`}
    >
      <WebShareApi
        shareData={shareData}
      >
        Share Now ...
      </WebShareApi>
    </main>
  )
}

