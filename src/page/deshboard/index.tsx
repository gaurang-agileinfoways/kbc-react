import { Link } from "react-router-dom";
import DefaultLayout from "../../components/common/layout/DefaultLayout";
import { ROUTES } from "../../utils/constants/routes";
import { TodayTopPlayer } from "./todayTopPlayer";

export const Deshboard = () => {
  return (
    <DefaultLayout>
      <div className="grid lg:grid-cols-2 place-items-center pt-16 pb-8 md:pt-12 md:pb-24">
        <div className="py-6 md:order-1 hidden md:block">
          <picture>
            <img
              src="https://astrolus-premium.netlify.app/images/hero.webp"
              alt="Astronaut in the air"
              width={600}
              height={460}
              decoding="async"
            />
          </picture>
        </div>
        <div>
          <h1 className="text-5xl lg:text-6xl xl:text-7xl font-bold lg:tracking-tight xl:tracking-tighter">
            Let's start test and upgrade
            <span className="bg-clip-text text-transparent bg-gradient-to-r from-indigo-800 to-cyan-400">
              {" "}
              Yourself
            </span>
          </h1>
          <p className="text-lg mt-4 text-slate-600 max-w-xl">
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Illo
            dolores totam esse aut repudiandae ex quam optio dolor! Sunt alias
            dolore, pariatur fugit nam ipsam nostrum maiores soluta molestiae
            veritatis.
          </p>
          <div className="mt-6 flex flex-col sm:flex-row gap-3">
            <Link
              to={ROUTES.quiz}
              className="rounded-full text-center transition px-5 py-2.5 bg-indigo-700 text-white hover:bg-indigo-500 flex gap-1 items-center justify-center"
            >
              <svg
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={1.5}
                stroke="currentColor"
                className="text-white w-5 h-5 mr-2"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M9 12h3.75M9 15h3.75M9 18h3.75m3 .75H18a2.25 2.25 0 0 0 2.25-2.25V6.108c0-1.135-.845-2.098-1.976-2.192a48.424 48.424 0 0 0-1.123-.08m-5.801 0c-.065.21-.1.433-.1.664 0 .414.336.75.75.75h4.5a.75.75 0 0 0 .75-.75 2.25 2.25 0 0 0-.1-.664m-5.8 0A2.251 2.251 0 0 1 13.5 2.25H15c1.012 0 1.867.668 2.15 1.586m-5.8 0c-.376.023-.75.05-1.124.08C9.095 4.01 8.25 4.973 8.25 6.108V8.25m0 0H4.875c-.621 0-1.125.504-1.125 1.125v11.25c0 .621.504 1.125 1.125 1.125h9.75c.621 0 1.125-.504 1.125-1.125V9.375c0-.621-.504-1.125-1.125-1.125H8.25ZM6.75 12h.008v.008H6.75V12Zm0 3h.008v.008H6.75V15Zm0 3h.008v.008H6.75V18Z"
                />
              </svg>
              Start The Test
            </Link>
            <a
              href="sdfd"
              rel="noopener"
              target="_blank"
              className="rounded-full text-center transition px-5 py-2.5 bg-white border-2 border-indigo-700 hover:bg-indigo-50 text-indigo-800 flex gap-1 items-center justify-center"
            >
              <svg
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={2}
                className="text-indigo-700 w-5 h-5 mr-2"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M15.75 6a3.75 3.75 0 1 1-7.5 0 3.75 3.75 0 0 1 7.5 0ZM4.501 20.118a7.5 7.5 0 0 1 14.998 0A17.933 17.933 0 0 1 12 21.75c-2.676 0-5.216-.584-7.499-1.632Z"
                />
              </svg>
              Top palyers
            </a>
          </div>
        </div>
      </div>
      <TodayTopPlayer />
    </DefaultLayout>
  );
};
