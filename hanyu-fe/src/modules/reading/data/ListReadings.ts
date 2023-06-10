import { Reading } from "../models";
import ListTopics from "./ListTopics";

import readingImg1 from "~/assets/images/modules/reading/reading-1.jpeg";

const ListReadings: Reading[] = [
  {
    id: 1,
    title: "波音 787 客机存在新缺陷 或推迟交付",
    description: "",
    content: `<p class="editor-paragraph" dir="ltr" style="text-align: justify;">
    <span>波音公司发表声明称，正在对库存的波音787客机进行检查，因其水平稳定器上的一个配件存在不符合要求的情况。波音公司将会在交付前对存在问题的飞机进行修复。</span>
  </p>
  <p class="editor-paragraph" dir="ltr" style="text-align: justify;">
    <span>据媒体报道称，这是波音公司在787客机上发现的新缺陷，而这可能会延迟787客机的交付速度。</span>
  </p>
  <p class="editor-paragraph" dir="ltr" style="text-align: justify;">
    <span>787系列为波音旗下最新一代双通道客机，被冠以“梦想客机”之名，以体现其在制造材料、工艺及设计上采用更先进技术以实现“高效能、低油耗”目标。首架787客机于2011年交付使用，但从2020年夏末开始，因制造缺陷等问题，波音多次暂停交付。</span>
  </p>`,
    image: readingImg1,
    createdAt: "2023-06-09 07:00",
    readMinutes: 3,
    topic: ListTopics[0],
    level: "Dễ",
  },
];

export default ListReadings;
