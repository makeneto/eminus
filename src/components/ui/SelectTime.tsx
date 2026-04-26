import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "./select"

export default function SelectTime({ group }: { group: string[] }) {
  return (
    <Select>
      <SelectTrigger className="w-44">
        <SelectValue placeholder={group[0]} />
      </SelectTrigger>
      <SelectContent>
        <SelectGroup>
          {group.map((item) => (
            <SelectItem key={item} value={item}>
              {item}
            </SelectItem>
          ))}
        </SelectGroup>
      </SelectContent>
    </Select>
  )
}
