import { useEffect, useRef, useState } from "react";
import { quizAPI } from "../../service/api/quiz";
import toast from "react-hot-toast";
import { socketInstance } from "../../service/socket";

let isSubmitted = false;
export const TestComponent = () => {
  const clientIo = useRef<any>();
  const [answer, setAnswer] = useState("");
  const [time, setTime] = useState(0);
  const [valid, setValid] = useState("");
  const [question, setQuestion] = useState<{
    question: string;
    options: [string];
    time: number;
    _id: string;
  }>();

  useEffect(() => {
    clientIo.current = socketInstance();

    clientIo.current.on("connnection", () => {
      console.log("connected to server");
    });

    clientIo.current.on("question", (data) => {
      console.log("data: ", data);
      setTime(parseInt(data?.time));
      setQuestion(data);
    });

    clientIo.current.on("answer", (data) => {
      console.log("datadsf: ", data);
      console.log("JSON.parse(data.answer): ", JSON.parse(data).answer);
      setTime(0);
      setValid(JSON.parse(data).answer);
      isSubmitted = true;
    });
  }, []);

  function getQuestion() {
    console.log("get-question: ");
    console.log("clientIo: ", clientIo);
    clientIo.current.emit("get-question");
    isSubmitted = true;
  }

  function submitQuestion() {
    console.log({ question: question?._id, answer });
    clientIo.current.emit(
      "submit-answer",
      { question: question?._id, answer },
      (data: unknown) => {
        console.log("Submited data: ", data);
      }
    );
  }

  useEffect(() => {
    const interval =
      question &&
      setInterval(() => {
        setTime((prevTime) => {
          if (prevTime <= 1) {
            clearInterval(interval);
            return 0;
          }
          return prevTime - 1;
        });
      }, 1000);

    return () => clearInterval(interval);
  }, [question]);
  console.log("first");

  function startQuiz() {
    quizAPI
      .generateQuiz()
      .then((data) => {
        clientIo.current.connect();
        toast.success(data.message);
        getQuestion();
        setValid("");
      })
      .catch((err) => {
        toast.error(err.message);
      });
  }
  console.log(
    "daffadfad answer => ",
    answer === valid,
    answer,
    valid,
    " submitted => ",
    isSubmitted
  );

  return (
    <div className="w-full flex justify-center">
      <div className="container pt-10">
        <div className="mt-10 grid grid-cols-3 gap-3">
          <div className="block p-6 mb-6 bg-indigo-50 border border-indigo-400 rounded-lg shadow-md hover:bg-indigo-100">
            <h3 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 ">
              Quickstart
            </h3>
            <p className="font-normal text-gray-700">
              Learn how to get started by downloading and configuring Flowbite
              locally on your machine and start developing.
            </p>
          </div>
          <div className="block p-6 mb-6 bg-indigo-50 border border-indigo-400 rounded-lg shadow-md hover:bg-indigo-100">
            <h3 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 ">
              Quickstart
            </h3>
            <p className="font-normal text-gray-700">
              Learn how to get started by downloading and configuring Flowbite
              locally on your machine and start developing.
            </p>
          </div>
          <div className="block p-6 mb-6 bg-indigo-50 border border-indigo-400 rounded-lg shadow-md hover:bg-indigo-100">
            <h3 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 ">
              Remaining time
            </h3>
            <p className="text-4xl text-gray-700">{time}</p>
          </div>
        </div>

        {question ? (
          <>
            <div className="mt-10">
              <div className="block p-5 mb-6 bg-gray-100 border border-gray-200 rounded-lg drop-shadow-md">
                <p className="font-medium text-sm text-gray-700 my-1">
                  Question
                </p>
                <p className="font-medium text-xl">{question.question}</p>
              </div>
            </div>
            <div className="mt-5">
              <div className="mt-8 grid grid-cols-2 gap-3">
                {question?.options?.map((data, key) => (
                  <button
                    key={key.toString() + "key"}
                    onClick={() => setAnswer(data)}
                    className={`block p-6 mb-1 border border-indigo-400 rounded-lg shadow-md cursor-pointer text-left ${
                      isSubmitted && data === valid && answer === valid
                        ? "bg-green-400 hover:bg-none text-black"
                        : isSubmitted && data === answer && answer !== valid
                        ? "bg-red-400 hover:bg-none text-black"
                        : data === answer
                        ? "bg-indigo-400 hover:bg-none text-black"
                        : "bg-indigo-50 hover:bg-indigo-100 text-gray-700"
                    }`}
                  >
                    <p className="font-normal">
                      {String.fromCharCode(key + 65)}. {data}
                    </p>
                  </button>
                ))}
              </div>
            </div>
          </>
        ) : (
          <div className="w-full mt-10 flex items-center flex-col">
            <div className="w-full h-60 flex justify-center items-center bg-gray-100 border text-4xl border-gray-200 mt-5 rounded-xl drop-shadow-md">
              <p>To suru kiya jaaye? </p>
            </div>
            <button
              className="w-52 h-20 bg-indigo-100 border border-indigo-400 mt-5 rounded-xl text-xl"
              onClick={startQuiz}
            >
              Bilkul ji!!
            </button>
          </div>
        )}

        {question && (
          <div className="w-full flex justify-center mt-10">
            <button
              className="w-52 h-20 bg-indigo-100 border border-indigo-400 mt-5 rounded-xl text-xl"
              onClick={submitQuestion}
            >
              Lock kiya jaaye?
            </button>
          </div>
        )}
        {isSubmitted && (
          <div className="w-full flex justify-center mt-10">
            <button
              className="w-52 h-20 bg-indigo-100 border border-indigo-400 mt-5 rounded-xl text-xl"
              onClick={getQuestion}
            >
              Agla question bataiye computer ji..
            </button>
          </div>
        )}
      </div>
    </div>
  );
};
