import { courses } from "../data/courses";
import CourseCard from "../components/CourseCard";

function Home() {
  return (
    <section>
      <h1 className="page-title">Learn to build for the web</h1>
      <p className="intro">
        Pick a course, see what it covers, and start where you are. Use the
        links above to see only Beginner or Intermediate courses.
      </p>
      <div className="grid">
        {courses.map((course) => (
          <CourseCard key={course.id} course={course} />
        ))}
      </div>
    </section>
  );
}

export default Home;
