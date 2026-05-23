import Frame from "../ui/Frame"
import FrameHeader from "../ui/FrameHeader"
import TopPerformerList from "./TopPerformerList"

export default function TopPerformer() {
  return (
    <Frame>
      <FrameHeader title="Top Performer" />
      <TopPerformerList />
    </Frame>
  )
}
