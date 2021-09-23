import "./App.css";
import { useEffect, useMemo, useState } from "react";
import Start from "./components/Start";
import Timer from "./components/Timer";
import Trivia from "./components/Trivia";

function App() {
  const [username, setUsername] = useState(null);
  const [timeOut, setTimeOut] = useState(false);
  const [questionNumber, setQuestionNumber] = useState(1);
  const [earned, setEarned] = useState("$ 0");

  const data = [
    {
      id: 1,
      question: "Đội tuyển futsal Việt Nam mấy lần tham dự World cup?",
      answers: [
        {
          text: "Không tham gia",
          correct: false,
        },
        {
          text: "Một lần",
          correct: false,
        },
        {
          text: "Hai lần",
          correct: true,
        },
        {
          text: "Ba lần",
          correct: false,
        },
      ],
    },
    {
      id: 2,
      question: "Ronaldo đang khoác áo cho đội bóng nào mùa giải 2021-2022?",
      answers: [
        {
          text: "Manchester united",
          correct: true,
        },
        {
          text: "Juventus",
          correct: false,
        },
        {
          text: "Chelsea",
          correct: false,
        },
        {
          text: "Manchester city",
          correct: false,
        },
      ],
    },
    {
      id: 3,
      question: "Đâu là tên một loại bánh đặc sản?",
      answers: [
        {
          text: "Bánh thiếu",
          correct: false,
        },
        {
          text: "Bánh thừa",
          correct: false,
        },
        {
          text: "Bánh đủ",
          correct: false,
        },
        {
          text: "Bánh ít",
          correct: true,
        },

      ],
    },
    {
      id: 4,
      question: "Bạn làm phép tính gì khi phải tách một số thành các phần bằng nhau?",
      answers: [
        {
          text: "Phép cộng",
          correct: false,
        },
        {
          text: "Phép nhân",
          correct: false,
        },
        {
          text: "Phép chia",
          correct: true,
        },
        {
          text: "Phép trừ",
          correct: false,
        },
      ],
    },
    {
      id: 5,
      question: "Đồ vật nào sau đây khiến ta liên tưởng đến các bà tiên?",
      answers: [
        {
          text: "Cây chổi",
          correct: false,
        },
        {
          text: "Phép thuật",
          correct: false,
        },
        {
          text: "Đũa thần",
          correct: true,
        },
        {
          text: "gậy",
          correct: false,
        },
      ],
    },
    {
      id: 6,
      question: "Tháng chín dương lịch có bao nhiêu ngày?",
      answers: [
        {
          text: "30",
          correct: true,
        },
        {
          text: "29",
          correct: false,
        },
        {
          text: "28",
          correct: false,
        },
        {
          text: "31",
          correct: false,
        },
      ],
    },
    {
      id: 7,
      question: "Loại thuyền được đục từ một thân cây lớn gỗ lớn nguyên vẹn được gọi là gì?",
      answers: [
        {
          text: "Thuyền buồm",
          correct: false,
        },
        {
          text: "Thuyền cánh",
          correct: false,
        },
        {
          text: "Thuyền nan",
          correct: false,
        },
        {
          text: "Thuyền độc mộc",
          correct: true,
        },
      ],
    },
    {
      id: 8,
      question: "Thành phố nào của nước Pháp được biết đến như là thủ đô của ngành công nghiệp rượu vang thế giới?",
      answers: [
        {
          text: "Lyon",
          correct: false,
        },
        {
          text: "Bordeaux",
          correct: true,
        },
        {
          text: "Nice",
          correct: false,
        },
        {
          text: "Marseille",
          correct: false,
        },
      ],
    },
    {
      id: 9,
      question: "Thuật ngữ “Fashionista” được dùng phổ biến trong lĩnh vực nào?",
      answers: [
        {
          text: "Thời trang",
          correct: true,
        },
        {
          text: "Điện ảnh",
          correct: false,
        },
        {
          text: "Phim",
          correct: false,
        },
        {
          text: "Dụng cụ",
          correct: false,
        },
      ],
    },
    {
      id: 10,
      question: "Đâu là tên của một loại máy bay?",
      answers: [
        {
          text: "Thủy kích",
          correct: false,
        },
        {
          text: "Phục kích",
          correct: false,
        },
        {
          text: "Tiêm kích",
          correct: true,
        },
        {
          text: "Xuất kích",
          correct: false,
        },
      ],
    },
    {
      id: 11,
      question: "Vitamin nào dưới đây giúp đôi mắt sáng khỏe?",
      answers: [
        {
          text: "Vitamin D",
          correct: false,
        },
        {
          text: "Vitamin B",
          correct: false,
        },
        {
          text: "Vitamin A",
          correct: true,
        },
        {
          text: "Vitamin C",
          correct: false,
        },
      ],
    },
    {
      id: 12,
      question: "Giải thưởng nào được trao trong lĩnh vực ẩm thực?",
      answers: [
        {
          text: "Oscar",
          correct: false,
        },
        {
          text: "Michelin Stars",
          correct: true,
        },
        {
          text: "BAFTA",
          correct: false,
        },
        {
          text: "Abel",
          correct: false,
        },
      ],
    },
    {
      id: 13,
      question: "Bánh Macaron là loại bánh ngọt nổi tiếng của nước nào?",
      answers: [
        {
          text: "Anh",
          correct: false,
        },
        {
          text: "Bỉ",
          correct: false,
        },
        {
          text: "Áo",
          correct: false,
        },
        {
          text: "Pháp",
          correct: true,
        },
      ],
    },
    {
      id: 14,
      question: "Đâu là một game thủ nổi tiếng của game LOL (Liên minh huyền thoại)?",
      answers: [
        {
          text: "Niko",
          correct: false,
        },
        {
          text: "Kennys",
          correct: false,
        },
        {
          text: "Faker",
          correct: true,
        },
        {
          text: "Dendi",
          correct: false,
        },
      ],
    },
    {
      id: 15,
      question: "Trong bộ môn bóng ném, trên sân thi đấu, mỗi đội có mấy người?",
      answers: [
        {
          text: "5",
          correct: false,
        },
        {
          text: "6",
          correct: false,
        },
        {
          text: "7",
          correct: true,
        },
        {
          text: "8",
          correct: false,
        },
      ],
    },
  ];

  const moneyPyramid = useMemo(
    () =>
      [
        { id: 1, amount: "$ 100" },
        { id: 2, amount: "$ 200" },
        { id: 3, amount: "$ 300" },
        { id: 4, amount: "$ 500" },
        { id: 5, amount: "$ 1.000" },
        { id: 6, amount: "$ 2.000" },
        { id: 7, amount: "$ 4.000" },
        { id: 8, amount: "$ 8.000" },
        { id: 9, amount: "$ 16.000" },
        { id: 10, amount: "$ 32.000" },
        { id: 11, amount: "$ 64.000" },
        { id: 12, amount: "$ 125.000" },
        { id: 13, amount: "$ 250.000" },
        { id: 14, amount: "$ 500.000" },
        { id: 15, amount: "$ 1.000.000" },
      ].reverse(),
    []
  );

  useEffect(() => {
    questionNumber > 1 &&
      setEarned(moneyPyramid.find((m) => m.id === questionNumber - 1).amount);
  }, [questionNumber, moneyPyramid]);

  return (
    <div className="app">
      {!username ? (
        <Start setUsername={setUsername} />
      ) : (
        <>
          <div className="main">
            {timeOut ? (
              <h1 className="endText">Giải thưởng: {earned}</h1>
            ) : (
              <>
                <div className="top">
                  <div className="timer">
                    <Timer
                      setTimeOut={setTimeOut}
                      questionNumber={questionNumber}
                    />
                  </div>
                </div>
                <div className="bottom">
                  <Trivia
                    data={data}
                    questionNumber={questionNumber}
                    setQuestionNumber={setQuestionNumber}
                    setTimeOut={setTimeOut}
                  />
                </div>
              </>
            )}
          </div>
          <div className="pyramid">
            <ul className="moneyList">
              {moneyPyramid.map((m) => (
                <li
                  className={
                    questionNumber === m.id
                      ? "moneyListItem active"
                      : "moneyListItem"
                  }
                >
                  <span className="moneyListItemNumber">{m.id}</span>
                  <span className="moneyListItemAmount">{m.amount}</span>
                </li>
              ))}
            </ul>
          </div>
        </>
      )}
    </div>
  );
}

export default App;