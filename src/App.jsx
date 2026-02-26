import { lazy, Suspense } from "react";
import "./App.css";
import Navbar from "./components/Navbar.jsx";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Snowfall from "react-snowfall";
import { AppRoutes } from "./consts/Route.jsx";

const Home = lazy(() =>
  import("./components/Content/Home.jsx").then((m) => ({ default: m.Home })),
);
const About = lazy(() =>
  import("./components/Content/About.jsx").then((m) => ({ default: m.About })),
);
const Education = lazy(() =>
  import("./components/Content/Education.jsx").then((m) => ({
    default: m.Education,
  })),
);
const Contact = lazy(() =>
  import("./components/Content/Contact.jsx").then((m) => ({
    default: m.Contact,
  })),
);

const Skills = lazy(() =>
  import("./components/Content/Skills.jsx").then((m) => ({
    default: m.Skills,
  })),
);

function App() {
  return (
    <Router>
      <div className="min-h-screen bg-background relative">
        <div className="fixed inset-0 pointer-events-none z-[1]" aria-hidden>
          <Snowfall
            snowflakeCount={80}
            color="rgba(255, 255, 255, 0.8)"
            radius={[0.5, 2]}
            wind={[0, 0.5]}
          />
        </div>
        <Navbar />
        <main className="pt-16 relative z-10">
          <Suspense
            fallback={
              <div className="min-h-[60vh] flex items-center justify-center">
                <div className="w-8 h-8 border-2 border-indigo-500 border-t-transparent rounded-full animate-spin" />
              </div>
            }
          >
            <Routes>
              <Route path={AppRoutes.HOME} element={<Home />} />
              <Route path={AppRoutes.ABOUT} element={<About />} />
              <Route path={AppRoutes.EDUCATION} element={<Education />} />
              <Route path={AppRoutes.SKILLS} element={<Skills />} />
              <Route path={AppRoutes.CONTACT} element={<Contact />} />
            </Routes>
          </Suspense>
        </main>
      </div>
    </Router>
  );
}

export default App;
