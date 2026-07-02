import Content from "@/components/content";
import TimeLine from "@/components/timeLine";
import { IoBookOutline } from "react-icons/io5";

function Resume() {
  return (
    <Content title="Resume">
      <TimeLine Icon={<IoBookOutline />} lineHeight={22} steps={5} />
    </Content>
  );
}

export default Resume;
