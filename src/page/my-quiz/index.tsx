import { useEffect, useState } from "react";
import DefaultLayout from "../../components/common/layout/DefaultLayout";
import { quizAPI } from "../../service/api/quiz";
import { IQuizLisData } from "../../service/api/quiz/types";
import { IPaginationList } from "../../utils/constants";
import { Pagination } from "./pagination";

let dateFlag: string = "";
export const MyQuiz = () => {
  function setDateFlag(d: string) {
    console.log("d: ", d);
    dateFlag = d.toString().substring(0, 10);
    return "";
  }

  const [pagination, setPagination] = useState<IPaginationList>({
    limit: 10,
    page: 1,
    search: "",
    skip: 0,
  });
  const [quiz, setQuiz] = useState<Array<IQuizLisData> | null>(null);
  const [totalRecord, setTotalRecord] = useState<number>(0);
  useEffect(() => {
    quizAPI
      .getMyQuiz(pagination)
      .then((data) => {
        console.log("pagination: ", pagination);
        console.log("data: ", data);
        setTotalRecord(data.data.total_records);
        const len: number = data.data.quiz.length - 1;
        dateFlag = data.data.quiz[len].createdAt.toString().substring(0, 10);
        setQuiz(data.data.quiz as never);
      })
      .catch(console.error);
  }, [pagination]);
  return (
    <DefaultLayout>
      <div className="relative overflow-x-auto border-gray-200/50 border sm:rounded-lg">
        <table className="w-full text-sm text-left rtl:text-right text-gray-500">
          <caption className="p-5 my-5 text-2xl font-semibold text-left rtl:text-right text-gray-900 bg-white">
            My Quiz
            <p className="mt-1 text-sm font-normal text-gray-500">
              This is the list of quiz which given by you.
            </p>
          </caption>
          <thead className="text-xs text-gray-700 uppercase bg-gray-200">
            <tr>
              <th scope="col" className="px-6 py-3">
                Sr No.
              </th>
              <th scope="col" className="px-6 py-3">
                Win Price
              </th>
              <th scope="col" className="px-6 py-3">
                Passed question
              </th>
              <th scope="col" className="px-6 py-3">
                Status
              </th>
            </tr>
          </thead>
          <tbody>
            {quiz ? (
              quiz?.map((data, index: number) => (
                <>
                  {dateFlag !== data.createdAt.toString().substring(0, 10) && (
                    <tr
                      className="bg-white border-y my-1"
                      key={data._id + "date"}
                    >
                      <td colSpan={5} className="bg-gray-100">
                        <p className="my-2 mx-4">
                          {data.createdAt.toString().substring(0, 10)}
                          {setDateFlag(data.createdAt)}
                        </p>
                      </td>
                    </tr>
                  )}

                  <tr className="bg-white border-b" key={data._id}>
                    <td className="px-6 py-4">{index + 1}</td>
                    <th
                      scope="row"
                      className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap"
                    >
                      {data.winAmount}
                    </th>
                    <td className="px-6 py-4">{data.currentLevel}</td>
                    <td className="px-6 py-4">{data.status}</td>
                  </tr>
                </>
              ))
            ) : (
              <div className="m-5 text-center w-full">Loading...</div>
            )}
          </tbody>
        </table>

        {quiz && totalRecord !== 0 && (
          <Pagination
            limit={pagination.limit}
            totalRecords={totalRecord}
            pagination={pagination}
            paginationFunc={setPagination}
          />
        )}
      </div>
    </DefaultLayout>
  );
};
