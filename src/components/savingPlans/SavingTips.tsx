import Frame from "../ui/Frame"
import FrameHeader from "../ui/FrameHeader"

export default function SavingTips() {
  return (
    <Frame className="plans__feats--tips">
      <FrameHeader title="Saving Tips" />
      <ul className="list-disc grid gap-2 pl-5 text-[.97rem]">
        <li> Define amount and deadline</li>
        <li>Control fixed expenses</li>
        <li>Eliminate unnecessary expenses</li>
        <li>Set clear priorities</li>
        <li>Separate personal accounts and goals</li>
        <li>Track progress</li>
        <li className="font-bold">Create only strategic plans. </li>
      </ul>

      <img
        src="/eminus-tips-logo.svg"
        alt="Makenedev Logo"
        className="w-40 m-auto "
      />
    </Frame>
  )
}
