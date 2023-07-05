import WebShareApi from "@/components/WebShareApi";


export default function Home() {
  return (
    <main
      className={`bg-gray-200 h-screen flex items-center justify-center`}
    >
      <WebShareApi>
        Share Now ...
      </WebShareApi>
    </main>
  )
}
