/* PTE 52 分练习题库
 * 所有题目按官方题型自编，非真题原文。
 * type 取值：ra rs di rts asq swt we fib-rw ro mcq-s mcq-m sst wfd hiw fib-l
 */
window.QUESTIONS = [
  /* ---------------- Read Aloud ---------------- */
  {
    id: "ra-01", type: "ra", section: "speaking", level: 1, time: 70,
    title: "城市绿化屋顶",
    instruction: "先用 30 秒准备，再用 40 秒朗读。录音后对照示范自评。",
    content: "Urban planners are increasingly turning to green roofs as a way of reducing heat in dense cities. These roofs, which are covered with grass or small plants, absorb rainwater and lower the temperature of the buildings beneath them. However, the cost of installation remains a barrier for many developers.",
    model: "Urban planners / are increasingly turning to green roofs / as a way of reducing heat in dense cities. / These roofs, / which are covered with grass or small plants, / absorb rainwater / and lower the temperature of the buildings beneath them. / However, / the cost of installation remains a barrier for many developers.",
    checklist: ["每 5–8 个词停一次，全段停顿不超过 3 次", "读错没有回头重读", "句末降调，声音清楚"],
    explanation: "RA 同时给口语和阅读供分。内容看读对多少词，流利度看停顿和回读，发音只看清晰度，不看口音。",
    tip: "52 分目标：把斜线处读顺，比追求“好听”重要得多。"
  },
  {
    id: "ra-02", type: "ra", section: "speaking", level: 1, time: 70,
    title: "睡眠与记忆",
    instruction: "30 秒准备，40 秒朗读。先划意群，再开口。",
    content: "Sleep is not just rest. During deep sleep, the brain replays what you learned during the day and moves it into long-term memory. Students who sleep for seven to eight hours before an exam remember more than those who stay up late.",
    model: "Sleep / is not just rest. / During deep sleep, / the brain replays what you learned during the day / and moves it into long-term memory. / Students who sleep for seven to eight hours / before an exam / remember more than those who stay up late.",
    checklist: ["四句话之间各停 0.2 秒", "没有因为生词停住", "最后一句没有越读越快"],
    explanation: "这段只有 48 词，40 秒很充裕。慢一点、清楚一点，流利度反而更高。",
    tip: "遇到生词（replays、memory）读个大概就过，不要停下来想意思。"
  },

  /* ---------------- Repeat Sentence ---------------- */
  {
    id: "rs-01", type: "rs", section: "speaking", level: 1, time: 90,
    title: "校园句子 ×5",
    instruction: "点“播放”，每句只播一遍。听完立刻复述，然后展开原文自评。",
    audio: "The library will extend its opening hours during exams.||Students must submit their assignments before the end of the week.||The lecture will focus on the causes of climate change.||Please collect your results from the student office.||The museum is closed on public holidays.",
    model: "按意群记：The library / will extend / its opening hours / during exams.",
    checklist: ["每句至少复述出一半", "没有加 um、没有改口", "长句只保前半句也算达标"],
    explanation: "RS 内容分：整句 3 分，复述一半以上 2 分，不到一半 1 分。说一半也有分，不要因为没听全就放弃。",
    tip: "用首字母记 3–4 块，2 秒写完；写完整单词一定来不及。"
  },
  {
    id: "rs-02", type: "rs", section: "speaking", level: 2, time: 90,
    title: "校园句子 ×5（更快）",
    instruction: "语速略快。每句听完立刻复述，不要等。",
    audio: "The new café opens next to the library on Monday.||Most students prefer to study in the morning.||The professor asked us to read two chapters.||Applications close at five o'clock on Friday.||The campus bus runs every fifteen minutes.",
    model: "The new café / opens next to the library / on Monday.",
    checklist: ["5 句里至少 3 句复述出一半", "没有回头重说", "句末没有拖长音"],
    explanation: "这几句都在 8–10 词，是 RS 的典型长度。先抓“谁 + 做什么 + 什么时候”。",
    tip: "复述时不要追求语法完美，词序对、不停顿就有分。"
  },

  /* ---------------- Answer Short Question ---------------- */
  {
    id: "asq-01", type: "asq", section: "speaking", level: 1, time: 20,
    title: "常识快答",
    instruction: "点播放听问题，10 秒内输入答案（一个词或数字）。",
    audio: "How many months are there in a year?",
    answers: ["twelve", "12", "twelve months"],
    explanation: "ASQ 只判对错，答对 1 分，答错 0 分，不扣分。一个词就够。",
    tip: "不会也要猜一个最可能的词，沉默一定是 0 分。"
  },
  {
    id: "asq-02", type: "asq", section: "speaking", level: 1, time: 20,
    title: "学术定义",
    instruction: "听问题，输入一个词。",
    audio: "What do we call the scientific study of plants?",
    answers: ["botany", "plant biology"],
    explanation: "常考学科名：botany 植物学、astronomy 天文学、economics 经济学。",
    tip: "听到 study of plants，直接对应 botany；不要解释。"
  },
  {
    id: "asq-03", type: "asq", section: "speaking", level: 1, time: 20,
    title: "反义词",
    instruction: "听问题，输入一个词。",
    audio: "What is the opposite of north?",
    answers: ["south"],
    explanation: "方向、数字、单位是 ASQ 的高频三类。",
    tip: "这类题 2 秒内必须出声，练的是反应，不是知识。"
  },

  /* ---------------- Describe Image ---------------- */
  {
    id: "di-01", type: "di", section: "speaking", level: 1, time: 65,
    title: "家庭网络接入率",
    instruction: "25 秒准备，40 秒作答。用三句模板：开头 / 趋势 / 结论。",
    chart: {
      type: "bar", title: "Households with internet access (%)",
      labels: ["2015", "2017", "2019", "2021", "2023"],
      values: [55, 62, 70, 78, 85], unit: "%"
    },
    model: "The chart shows the percentage of households with internet access from 2015 to 2023. Overall, the figure increased significantly, from 55 percent to 85 percent. In conclusion, internet access is likely to keep rising in the future.",
    checklist: ["三句都说了", "说满 30 秒", "中间没有长时间停顿"],
    explanation: "DI 内容分看“关键元素 + 趋势 + 结论”，不要求描述每个数字。三句结构完整就能拿到 52 分需要的分。",
    tip: "只挑最高、最低两个数字，其余用 increased / remained stable 带过。"
  },
  {
    id: "di-02", type: "di", section: "speaking", level: 2, time: 65,
    title: "博物馆访客数",
    instruction: "25 秒准备，40 秒作答。注意 2020 年的下降。",
    chart: {
      type: "line", title: "Museum visitors (thousands)",
      labels: ["2018", "2019", "2020", "2021", "2022"],
      values: [20, 25, 12, 22, 38], unit: "k"
    },
    model: "The line graph shows the number of museum visitors from 2018 to 2022. Overall, the figure rose, although it dropped sharply in 2020. In conclusion, visitor numbers recovered and are likely to grow.",
    checklist: ["提到上升趋势", "提到 2020 的下降", "用 in conclusion 收尾"],
    explanation: "线图有波动时，用 although 把“总体上升 + 一次下降”连起来，比逐点描述更稳。",
    tip: "不要念 5 个数字，挑起点、低点、终点三个就够。"
  },

  /* ---------------- Respond to a Situation ---------------- */
  {
    id: "rts-01", type: "rts", section: "speaking", level: 1, time: 55,
    title: "同学借笔记",
    instruction: "读情景，10 秒准备，40 秒作答。用“回应—建议—理由—收尾”。",
    content: "Your classmate asks to borrow your notes the night before the exam. Respond to your classmate.",
    model: "Sure, I can share my notes. I'd suggest we review them together for an hour, because they only make sense with the lecture context. Let's meet at the library at seven. Let me know if that works for you.",
    checklist: ["先回应了对方", "给出了具体建议", "说满 30 秒"],
    explanation: "RTS 考“合不合适”，不是考观点深度。四步框架能覆盖内容分，理由要具体。",
    tip: "不要背 DI 模板；这题一开口就要像在跟人说话。"
  },
  {
    id: "rts-02", type: "rts", section: "speaking", level: 2, time: 55,
    title: "朋友找自习室",
    instruction: "10 秒准备，40 秒作答。给一个具体地点 + 两个理由。",
    content: "A friend is visiting your city and asks where to study for a few hours. Respond to your friend.",
    model: "I'd recommend the city library. It's quiet, free, and right next to the metro. If you need a coffee, there's a cafe downstairs. I can show you the way on Saturday.",
    checklist: ["给了明确地点", "给了两个理由", "有收尾句"],
    explanation: "理由用 it's + 形容词 就够了：quiet、free、close to transport。",
    tip: "卡住时用 Let me put it another way 争取 2 秒，不要沉默。"
  },

  /* ---------------- Summarize Written Text ---------------- */
  {
    id: "swt-01", type: "swt", section: "writing", level: 1, time: 600,
    title: "空置办公室改公寓",
    instruction: "10 分钟内用一句话概括（5–75 词），只能有一个句号。",
    content: "Many cities are turning empty offices into apartments. Housing is scarce and remote work has left downtown buildings half empty. However, conversion is expensive and not every building can be adapted. Some developers argue that the costs are still lower than building new housing on the edge of the city.",
    model: "Although converting empty offices into apartments is expensive and not every building can be adapted, many cities are doing so because housing is scarce and remote work has left downtown buildings half empty.",
    checklist: ["只有一个句号", "字数在 30–60 之间", "覆盖了“原因 + 转折”两个要点"],
    explanation: "SWT 评分：内容 2 分、形式 1 分、语法 2 分、词汇 2 分。写成两句，形式 0 分且内容大幅扣分，几乎必挂。",
    tip: "公式：Although + 让步, 主句 + because + 原因。"
  },
  {
    id: "swt-02", type: "swt", section: "writing", level: 1, time: 600,
    title: "远程办公",
    instruction: "用一句话概括，5–75 词，一个句号。",
    content: "Some companies allow employees to work from home. Studies show that productivity often rises, but teamwork can suffer. Many firms now use a hybrid model, with two or three days in the office.",
    model: "Although remote work can raise productivity, some companies worry that teamwork suffers, so many now use a hybrid model with two or three days in the office.",
    checklist: ["用 although 或 while 开头", "包含 productivity 和 teamwork", "结尾只有一个句号"],
    explanation: "三个信息点：远程办公、效率上升、团队受影响、混合模式。用 although + so 串起来最省事。",
    tip: "先写主干，再补 although 从句；不要一边想一边写。"
  },

  /* ---------------- Write Essay ---------------- */
  {
    id: "we-01", type: "we", section: "writing", level: 1, time: 1200,
    title: "大学教育免费",
    instruction: "20 分钟写 200–300 词，四段：观点 / 理由 1 / 理由 2 / 结论。",
    content: "Some people think university education should be free for everyone. To what extent do you agree or disagree?",
    outline: ["引言：背景 + 明确立场（支持）", "主体 1：减少家庭经济压力 + 例子", "主体 2：对社会长期有利（更多毕业生）", "结论：重申 + 一句收尾"],
    model: "It is often argued that university education should be free for all students. While this would be expensive, I believe it is a good idea because it gives everyone a fair chance.\n\nThe main reason is that free education reduces financial pressure on families. For example, in countries where tuition is free, more students from low-income backgrounds go to university.\n\nAnother consideration is that society benefits from a more educated workforce. Graduates pay more tax over their lifetime, which can cover part of the cost.\n\nIn conclusion, free university education is expensive but fair, and it is likely to benefit both individuals and society.",
    checklist: ["四段清楚", "字数 200+", "每段都有例子或解释"],
    explanation: "WE 评分：内容 3、形式 2、展开 2、语法/词汇/拼写各 2。52 分不需要复杂论证，需要结构完整、字数够、不跑题。",
    tip: "三个万能理由：save time / save money / more convenient。"
  },
  {
    id: "we-02", type: "we", section: "writing", level: 2, time: 1200,
    title: "实用技能 vs 学术科目",
    instruction: "20 分钟，200–300 词。两边都讨论，最后给自己的观点。",
    content: "Some people think schools should teach practical skills, such as cooking and managing money, instead of academic subjects. Discuss both views and give your own opinion.",
    outline: ["引言：两种观点 + 我的立场", "主体 1：实用技能的价值（生活自理、就业）", "主体 2：学术科目的价值（思维、深造）", "结论：两者都需要，学校应平衡"],
    model: "It is often argued that schools should focus on practical skills rather than academic subjects. In my view, both are important, and schools should teach them together.\n\nOn the one hand, practical skills help students in daily life. For example, managing money and cooking can prevent debt and improve health.\n\nOn the other hand, academic subjects develop thinking and open the door to university. Without them, students may lose the chance to become doctors or engineers.\n\nIn conclusion, practical skills and academic subjects serve different purposes, so a balanced curriculum is the best choice.",
    checklist: ["两边都讨论了", "有自己的明确观点", "字数 200+"],
    explanation: "discuss both views 题型必须两边都写，最后一段明确站队，否则内容分会掉。",
    tip: "主体两段用 On the one hand / On the other hand，结构最清楚。"
  },

  /* ---------------- Reading: Fill in the Blanks ---------------- */
  {
    id: "fib-rw-01", type: "fib-rw", section: "reading", level: 1, time: 120,
    title: "创造力可以学吗",
    instruction: "每空选一个词。先判词性，再看搭配和逻辑。",
    content: "Many people believe that creativity is a gift that only a few people possess. In fact, research [[1]] that creativity can be learned. Psychologists argue that [[2]] environments, where mistakes are accepted, are more likely to produce new ideas. [[3]], companies that encourage experimentation tend to be more innovative.",
    blanks: [
      { options: ["suggests", "suggest", "suggestion", "suggesting"], answer: 0 },
      { options: ["support", "supportive", "supporting", "supported"], answer: 1 },
      { options: ["However", "Therefore", "Although", "Despite"], answer: 1 }
    ],
    explanation: "① research 是不可数名词，谓语用单三 suggests；② 空后是名词 environments，需要形容词 supportive；③ 前句说“支持试错”，后句说“鼓励实验的公司更创新”，是因果，用 Therefore。",
    tip: "先判词性，四个选项里通常能排除两个；再看逻辑，最后才看意思。"
  },
  {
    id: "fib-rw-02", type: "fib-rw", section: "reading", level: 1, time: 120,
    title: "睡眠与学习",
    instruction: "每空选一个词。注意词性和固定搭配。",
    content: "Sleep plays an important [[1]] in learning. During deep sleep, the brain [[2]] information into long-term memory. Students who sleep well tend to [[3]] better in exams.",
    blanks: [
      { options: ["role", "rule", "place", "rate"], answer: 0 },
      { options: ["moves", "moving", "movement", "moved"], answer: 0 },
      { options: ["perform", "performance", "performing", "performed"], answer: 0 }
    ],
    explanation: "① play an important role in 是固定搭配；② the brain 是单数主语，谓语用 moves；③ tend to 后接动词原形 perform。",
    tip: "固定搭配是 FIB 最快的得分点，平时按短语记，不要按单词记。"
  },
  {
    id: "fib-rw-03", type: "fib-rw", section: "reading", level: 2, time: 120,
    title: "城市绿地",
    instruction: "每空选一个词。注意转折与因果。",
    content: "Green spaces are important for cities. They [[1]] air quality and give residents a place to relax. [[2]], land is expensive, so some cities build parks on rooftops. These spaces are smaller, [[3]] they still improve life in dense areas.",
    blanks: [
      { options: ["improve", "improves", "improving", "improved"], answer: 0 },
      { options: ["However", "Therefore", "Moreover", "For example"], answer: 0 },
      { options: ["but", "because", "so", "unless"], answer: 0 }
    ],
    explanation: "① They 是复数，谓语用 improve；② 前句说绿地重要，后句说地贵，是转折，用 However；③ smaller 与 improve 是让步转折，用 but。",
    tip: "逻辑词先判断关系：转折 however/but，因果 therefore/because，并列 moreover。"
  },

  /* ---------------- Reading: Re-order ---------------- */
  {
    id: "ro-01", type: "ro", section: "reading", level: 1, time: 150,
    title: "公共图书馆的历史",
    instruction: "按正确顺序点击句子。按相邻对给分，先连确定的。",
    sentences: [
      "As a result, literacy rates began to rise.",
      "The first public libraries appeared in the 19th century.",
      "Today, libraries also offer digital services.",
      "This idea spread quickly across Europe and North America.",
      "They were funded by local taxpayers and open to everyone."
    ],
    answer: [1, 4, 3, 0, 2],
    explanation: "首句 B 交代背景，没有指代；E 的 They 指 libraries；D 的 This idea 指“公共图书馆”这件事；A 的 As a result 接在传播之后；C 的 Today 是时间收尾。",
    tip: "先找“没有 this / these / they”的首句，再顺着指代链往下排。"
  },
  {
    id: "ro-02", type: "ro", section: "reading", level: 1, time: 150,
    title: "城市热岛",
    instruction: "按正确顺序点击句子。注意 This 指代什么。",
    sentences: [
      "As a result, the city centre can be several degrees warmer than the countryside.",
      "Concrete and asphalt absorb heat during the day.",
      "At night, they release the heat slowly.",
      "This is known as the urban heat island effect.",
      "Planting trees can help reduce it."
    ],
    answer: [1, 2, 0, 3, 4],
    explanation: "B 先讲白天吸热，C 的 they 指 concrete and asphalt；A 的 As a result 接结果；D 的 This 指前面整件事；E 的 it 指热岛效应。",
    tip: "每连对一对就有 1 分，不需要全排对；先连最有把握的两对。"
  },

  /* ---------------- Reading: Multiple Choice ---------------- */
  {
    id: "mcq-s-01", type: "mcq-s", section: "reading", level: 1, time: 100,
    title: "远程办公的影响",
    instruction: "读短文，选一个正确答案。",
    content: "Remote work has changed how companies hire. Employers can now recruit from a wider pool of candidates, and staff save time on commuting. However, remote employees often report feeling isolated, and some managers find it harder to build team spirit.",
    question: "What is the main idea of the passage?",
    options: [
      "Remote work has both benefits and drawbacks.",
      "Remote work is always better for companies.",
      "Employees no longer need to commute.",
      "Managers prefer remote work."
    ],
    answer: 0,
    explanation: "文中有 However 转折：前面讲好处（招聘范围、通勤），后面讲问题（孤立、团队精神），所以是“有利有弊”。B、D 与原文矛盾，C 只是细节。",
    tip: "出现 However 的段落，主旨通常在转折后；选项太绝对的（always）先排除。"
  },
  {
    id: "mcq-s-02", type: "mcq-s", section: "reading", level: 1, time: 100,
    title: "为什么睡眠有助学习",
    instruction: "读短文，选一个正确答案。",
    content: "During deep sleep, the brain replays what you learned during the day and moves it into long-term memory. Students who sleep for seven to eight hours before an exam remember more than those who stay up late.",
    question: "According to the passage, why is sleep important for learning?",
    options: [
      "It helps the brain store information in long-term memory.",
      "It reduces the amount of time needed to study.",
      "It makes students feel less stressed.",
      "It replaces the need for revision."
    ],
    answer: 0,
    explanation: "原文直接说 moves it into long-term memory。B、C、D 都是常见常识，但文中没有依据——PTE 阅读只按原文选。",
    tip: "不要用常识答题；每个选项都要能在原文找到对应句。"
  },
  {
    id: "mcq-m-01", type: "mcq-m", section: "reading", level: 2, time: 110,
    title: "远程办公（多选）",
    instruction: "选 2 个正确选项。注意：错选倒扣 1 分，只选有依据的。",
    content: "Remote work has changed how companies hire. Employers can now recruit from a wider pool of candidates, and staff save time on commuting. However, remote employees often report feeling isolated, and some managers find it harder to build team spirit.",
    question: "Which two statements are true according to the passage?",
    options: [
      "Companies can hire from more places.",
      "Remote workers spend more time commuting.",
      "Some staff feel lonely when working remotely.",
      "Managers find it easier to build teams."
    ],
    answer: [0, 2],
    explanation: "A 对应 a wider pool of candidates；C 对应 feeling isolated。B 与 save time on commuting 相反；D 与 harder to build team spirit 相反。",
    tip: "多选是阅读里唯一倒扣的题：写不出“原文哪一句支持”，就不要选。"
  },
  {
    id: "mcq-m-02", type: "mcq-m", section: "reading", level: 2, time: 110,
    title: "图书馆的变化（多选）",
    instruction: "选 2 个正确选项。错选倒扣。",
    content: "Public libraries have changed a lot in the last twenty years. They still lend books, but they also offer free internet access, quiet study spaces and workshops on digital skills. As a result, visits have increased in many cities, even though fewer people borrow printed books.",
    question: "Which two statements are true according to the passage?",
    options: [
      "Libraries now offer more than books.",
      "Fewer people visit libraries than before.",
      "Some libraries run digital skills workshops.",
      "Printed books are no longer available."
    ],
    answer: [0, 2],
    explanation: "A 概括 internet / study spaces / workshops；C 对应 workshops on digital skills。B 与 visits have increased 相反；D 与 still lend books 相反。",
    tip: "先读题干，再回文定位；每个选项找一个对应句。"
  },

  /* ---------------- Listening: Write from Dictation ---------------- */
  {
    id: "wfd-01", type: "wfd", section: "listening", level: 1, time: 90,
    title: "听写 ×3（校园）",
    instruction: "点播放，每句只播一遍。整句听完再打字，写完检查单复数。",
    audio: "The tutorial will be held in the main library on Thursday.||Students should check the website for updated information.||Please submit your application before the end of March.",
    answers: [
      "The tutorial will be held in the main library on Thursday.",
      "Students should check the website for updated information.",
      "Please submit your application before the end of March."
    ],
    explanation: "WFD 每个正确单词 1 分（拼写错误算错）。常见失分：tutorial 拼写、will be held 被动、Thursday 的拼写、information 不可数。",
    tip: "写半句也有分；不会的词用拼音占位，先把句子结构打出来。"
  },
  {
    id: "wfd-02", type: "wfd", section: "listening", level: 2, time: 90,
    title: "听写 ×3（学术）",
    instruction: "整句听完再打，检查时态和介词。",
    audio: "The research project requires a large amount of data.||Climate change affects the availability of fresh water.||The lecture will discuss the causes of urban growth.",
    answers: [
      "The research project requires a large amount of data.",
      "Climate change affects the availability of fresh water.",
      "The lecture will discuss the causes of urban growth."
    ],
    explanation: "注意：amount of 而不是 number of（data 不可数）；affects 单三；availability 拼写。",
    tip: "WFD 是听力和写作双供分，是整场考试性价比最高的题。"
  },
  {
    id: "wfd-03", type: "wfd", section: "listening", level: 1, time: 90,
    title: "听写 ×3（校园通知）",
    instruction: "先听完整句，再打字。",
    audio: "The campus bus runs every fifteen minutes.||Please turn off your phone during the exam.||The student centre is open until nine o'clock.",
    answers: [
      "The campus bus runs every fifteen minutes.",
      "Please turn off your phone during the exam.",
      "The student centre is open until nine o'clock."
    ],
    explanation: "fifteen 与 fifty 易混；turn off 是分开的短语；nine o'clock 的撇号不影响单词计分，但拼写要完整。",
    tip: "数字和时间为单位，听到就写数字，别写单词，省时间。"
  },

  /* ---------------- Listening: SST ---------------- */
  {
    id: "sst-01", type: "sst", section: "listening", level: 1, time: 600,
    title: "睡眠与学习（讲座）",
    instruction: "听讲座，10 分钟内写 50–70 词摘要。",
    audio: "Today I want to talk about sleep and learning. Research shows that sleep is not just rest. During deep sleep, the brain replays what you learned during the day and moves it into long-term memory. Students who sleep seven to eight hours before an exam remember more than those who stay up late. So if you want to learn efficiently, the most effective revision plan may include a good night's sleep.",
    model: "The lecture discusses the link between sleep and learning. First, the speaker explains that deep sleep helps the brain move information into long-term memory. In conclusion, students who sleep seven to eight hours remember more, so a good night's sleep is part of effective revision.",
    checklist: ["字数 50–70", "包含主题 + 两个细节", "没有整句照抄"],
    explanation: "SST 评分：内容 2、形式 2（50–70 词，少于 40 或多于 100 直接 0）、语法/词汇/拼写各 2。",
    tip: "模板：The lecture discusses … First … In conclusion …，只填关键词。"
  },
  {
    id: "sst-02", type: "sst", section: "listening", level: 2, time: 600,
    title: "城市热岛（讲座）",
    instruction: "听讲座，写 50–70 词摘要。",
    audio: "Today we'll look at why some cities are warmer than the countryside. This is called the urban heat island effect. There are three main causes. First, concrete and asphalt absorb heat during the day. Second, there are fewer trees, so less water evaporates. Third, cars and air conditioners add heat directly. The good news is that simple measures, such as planting trees and painting roofs white, can reduce the effect.",
    model: "The lecture is mainly about the urban heat island effect. First, the speaker explains that concrete, fewer trees and cars make cities warmer. In conclusion, planting trees and painting roofs white can reduce the effect.",
    checklist: ["写出 3 个原因中的 2 个", "有 conclusion", "字数 50–70"],
    explanation: "讲座结构很清楚：定义 → 三个原因 → 解决办法。摘要按这个顺序写，内容分最稳。",
    tip: "听到 first / second / third 就记数字 + 名词，不要记整句。"
  },

  /* ---------------- Listening: Highlight Incorrect Words ---------------- */
  {
    id: "hiw-01", type: "hiw", section: "listening", level: 1, time: 70,
    title: "博物馆通知（点错词）",
    instruction: "点播放听音频，然后点出文中与音频不一致的词。错点倒扣。",
    audio: "The museum is open every day except Monday. Visitors can buy tickets online or at the entrance. Guided tours start at ten in the morning.",
    content: "The museum is opens every day except Monday. Visitors can buy tickets online and at the entrance. Guided tours start at ten in the morning.",
    wrong: [3, 13],
    explanation: "音频是 is open，文中是 is opens；音频是 or，文中是 and。只点这两处，其他词不要动。",
    tip: "HIW 只点 100% 确定的；不确定的点下去，对了 +1，错了 −1。"
  },
  {
    id: "hiw-02", type: "hiw", section: "listening", level: 1, time: 70,
    title: "图书馆工作坊（点错词）",
    instruction: "听音频，点出被改掉的词。",
    audio: "The library offers free workshops on academic writing. Students can book a place online or ask at the front desk. The workshops run every Tuesday afternoon.",
    content: "The library offers free workshops on academic writing. Students can book a place online and ask at the front desk. The workshops run every Tuesday morning.",
    wrong: [14, 24],
    explanation: "音频是 or，文中是 and；音频是 afternoon，文中是 morning。",
    tip: "先扫一遍文本，听的时候只盯“和原文不一样”的地方。"
  },

  /* ---------------- Listening: Fill in the Blanks ---------------- */
  {
    id: "fib-l-01", type: "fib-l", section: "listening", level: 1, time: 90,
    title: "讲座开场（听写填空）",
    instruction: "点播放听讲座，补全 3 个空。拼写必须正确。",
    audio: "Good morning everyone. Today's lecture is about communication in the workplace. We will discuss three factors that affect productivity, and then look at some practical solutions.",
    content: "Good morning everyone. Today's lecture is about [[1]] in the workplace. We will discuss three [[2]] that affect productivity, and then look at some [[3]] solutions.",
    answers: [["communication"], ["factors"], ["practical"]],
    explanation: "三个词都是学术高频词：communication（不可数）、factors（复数）、practical（形容词）。听写填空每空 1 分，拼错就是 0。",
    tip: "先看空格前后判断词性，听的时候只等那个词，不要整句翻译。"
  },
  {
    id: "fib-l-02", type: "fib-l", section: "listening", level: 2, time: 90,
    title: "气候变化（听写填空）",
    instruction: "听音频，补全 3 个空。",
    audio: "Climate change is affecting the availability of fresh water. In many regions, rainfall has become less predictable, and farmers must adapt their methods.",
    content: "Climate change is affecting the [[1]] of fresh water. In many regions, rainfall has become less [[2]], and farmers must [[3]] their methods.",
    answers: [["availability"], ["predictable"], ["adapt"]],
    explanation: "availability 拼写较长，注意 -ability；predictable 是“可预测的”；adapt 是“调整、适应”。",
    tip: "长词先记开头和结尾，中间用音节补；写完后检查词性。"
  }
];
