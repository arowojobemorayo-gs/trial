import { useParams, useNavigate, Link } from "react-router-dom";
import { courses } from "../data/courses";

function CourseDetail() {
  const { slug } = useParams();
  const navigate = useNavigate();
  const course = courses.find((c) => c.slug === slug);

  if (!course) {
    return (
      <section>
        <button className="back-btn" onClick={() => navigate(-1)}>
          &larr; Back
        </button>
        <h1 className="page-title">Course not found</h1>
        <p className="intro">
          There is no course called "{slug}". <Link to="/">See all courses</Link>
        </p>
      </section>
    );
  }

  return (
    <section>
      <button className="back-btn" onClick={() => navigate(-1)}>
        &larr; Back
      </button>
      <span className={`badge badge-${course.category.toLowerCase()}`}>
        {course.category}
      </span>
      <h1 className="page-title">{course.title}</h1>
      <p className="card-duration">{course.duration}</p>
      <p className="description">{course.description}</p>

      <h2 className="topics-heading">What you will learn</h2>
      <ul className="topics">
        {course.topics.map((topic) => (
          <li key={topic}>{topic}</li>
        ))}
      </ul>
    </section>
  );
}

export default CourseDetail;
