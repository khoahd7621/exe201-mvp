import { Reading } from "../models";
import ListTopics from "./ListTopics";

import readingImg1 from "~/assets/images/modules/reading/reading-1.jpeg";
import readingImg2 from "~/assets/images/modules/reading/reading-2.jpg";
import readingImg3 from "~/assets/images/modules/reading/reading-3.jpg";
import readingImg4 from "~/assets/images/modules/reading/reading-4.jpg";
import readingImg5 from "~/assets/images/modules/reading/reading-5.jpg";
import readingImg6 from "~/assets/images/modules/reading/reading-6.jpg";

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
    relatedReadingIds: [2, 3],
  },
  {
    id: 2,
    title: "第四代海外日裔将成日“永久居民”，日本网民争议",
    description: "",
    content: `<p class="editor-paragraph" dir="ltr" style="text-align: justify;">
    <span>日本时事通讯社6日援引日本政府消息人士的话称，日本出入境管理厅决定引入一项新制度，即居住在海外的第四代日裔将被给予“永久居民”的身份。</span>
  </p>
  <p class="editor-paragraph" dir="ltr" style="text-align: justify;">
    <span>日本现行有关海外日裔的制度于2018年推出，以便接纳生活在巴西、秘鲁等国家的第四代日裔融入日本社会。其中，18-30岁的第四代日裔在日本居留期限最长为5年，且家庭成员不能陪伴左右。居留日本期间，第四代海外日裔必须接受亲戚、寄宿家庭或雇主等“支持者”的日常生活支持。</span>
  </p>
  <p class="editor-paragraph" dir="ltr" style="text-align: justify;">
    <span>拟议的新制度将允许那些在日本居留满5年的第四代日裔获得“永久居留权”，只要他们掌握一定的日语能力等，新规定也允许其带着家庭成员一起生活。</span>
  </p>
  <p class="editor-paragraph" dir="ltr" style="text-align: justify;">
    <span>该制度获得不少日本网友的支持，但也不乏质疑声，“日裔巴西人就是巴西人，日本政府为何要给这些外国人永久居住在日本的权利？这项制度难以获得民众的接纳和许可。</span>
  </p>`,
    image: readingImg2,
    createdAt: "2023-06-10 07:00",
    readMinutes: 6,
    topic: ListTopics[1],
    level: "Trung Bình",
    relatedReadingIds: [1, 6],
  },
  {
    id: 3,
    title: "德媒：德国 82 岁贩毒被抓，称养老金不够用",
    description: "",
    content: `<p class="editor-paragraph" dir="ltr" style="text-align: justify;">
    <span>据德国《明镜》周刊5日报道，德国北部的奥里希地区法院当天宣判，一名来自埃姆登市的82岁老人因非法贩卖毒品被判缓刑两年。据称，这名退休老人因晚年养老金不够用，入不敷出，想通过大麻交易来补贴生活。</span>
  </p>
  <p class="editor-paragraph" dir="ltr" style="text-align: justify;">
    <span>检察官称，海关调查人员在检查一个杂货店是否存在黑工时，无意中发现这名老人的犯罪行为。老人事后对其罪行供认不讳，承认在去年和今年早些时候交易了数十克大麻。对自己的犯罪动机，他解释称，他在海上工作了35年，还担任过船长，但他无法靠每月约800欧元（约合6090元人民币）的养老金过活。</span>
  </p>
  <p class="editor-paragraph" dir="ltr" style="text-align: justify;">
    <span>报道称，鉴于被告人有24项犯罪前科，并在另一案件中被判处缓刑，检方要求判处其2年10个月的监禁。主审法官表示，这是一个“特殊案件”，尽管这名退休老人档案上有许多定罪和缓刑记录，但情节都较轻，且他晚年确实有贫困和健康问题。</span>
  </p>
  <p class="editor-paragraph" dir="ltr" style="text-align: justify;">
    <span>法官最终宣布该男子因犯有贩毒罪被判缓刑两年。不过，她也表示：“这是最后一次警告。”按照规定，缓刑期间警方需要对他进行定期探访。</span>
  </p>`,
    image: readingImg3,
    createdAt: "2023-06-10 07:00",
    readMinutes: 12,
    topic: ListTopics[2],
    level: "Khó",
    relatedReadingIds: [1, 2, 6],
  },
  {
    id: 4,
    title: "印媒：明年起，印度每个地区将选两名小学生赴莫迪母校接受“启发”",
    description: "",
    content: `<p class="editor-paragraph" dir="ltr" style="text-align: justify;">
    <span>从2024年起，印度每个地区都将选送两名小学生到总理莫迪位于古吉拉特邦沃德讷格尔的母校，接受为期一周的“启发”学习之旅。</span>
  </p>
  <p class="editor-paragraph" dir="ltr" style="text-align: justify;">
    <span>据《印度快报》7日报道，印度政府表示，学生们将在莫迪母校接受“如何适应快速进化的生活”训练。印度当局还表示，这也是该国首个类似的学校重建项目，旨在鼓励小学生成为“（国家）变革的催化剂”。</span>
  </p>
  <p class="editor-paragraph" dir="ltr" style="text-align: justify;">
    <span>印度政府表示，学校每批大概将接收30名学生，但尚未公布选拔标准。沃德讷格尔小学始建于1888年，一直运转到2018年。目前，印度考古局正在修复这所学校，并将此作为恢复该地区发展计划的一部分。沃德讷格尔是印度历史最悠久的要塞之一，也是重要佛教学习中心。</span>
  </p>`,
    image: readingImg4,
    createdAt: "2023-06-10 07:00",
    readMinutes: 8,
    topic: ListTopics[3],
    level: "Trung Bình",
    relatedReadingIds: [1, 3, 6],
  },
  {
    id: 5,
    title: "俄罗斯多地发生酒精中毒事件 已致30人死亡",
    description: "",
    content: `<p class="editor-paragraph" dir="ltr" style="text-align: justify;">
    <span>俄新社当地时间7日援引俄罗斯卫生部消息报道称，俄罗斯乌里扬诺夫斯克州、萨马拉州、下诺夫哥罗德州、奔萨州、库尔干州和乌德穆尔特共和国等地酒精饮料中毒人数已达96人，其中30人死亡。</span>
  </p>
  <p class="editor-paragraph" dir="ltr" style="text-align: justify;">
    <span>据俄罗斯内务部乌里扬诺夫斯克州内务分局调查，各地近日的酒精中毒事件均与萨马拉州生产的一款酒精饮料相关。检查发现该饮料中含有甲醇等危险物质。</span>
  </p>`,
    image: readingImg5,
    createdAt: "2023-06-10 07:00",
    readMinutes: 3,
    topic: ListTopics[4],
    level: "Dễ",
    relatedReadingIds: [1, 2, 3],
  },
  {
    id: 6,
    title: "美国夏威夷基拉韦厄火山喷发",
    description: "",
    content: `<p class="editor-paragraph" dir="ltr" style="text-align: justify;">
    <span>美国地质调查局当地时间6月7日发布消息称，美国夏威夷基拉韦厄火山从当天凌晨4时45分左右开始喷发。</span>
  </p>
  <p class="editor-paragraph" dir="ltr" style="text-align: justify;">
    <span>当地政府已向附近居民发出避险预警。目前，尚无关于火山喷发持续情况和影响的报告。</span>
  </p>`,
    image: readingImg6,
    createdAt: "2023-06-10 07:00",
    readMinutes: 2,
    topic: ListTopics[5],
    level: "Dễ",
    relatedReadingIds: [],
  },
];

export default ListReadings;
