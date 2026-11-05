import { useNavigate } from "react-router-dom";

function CourseCard({ course }) {
  const navigate = useNavigate();

  return (
    <button
      type="button"
      className="card"
      onClick={() => navigate(`/courses/${course.slug}`)}
    >
      <span className={`badge badge-${course.category.toLowerCase()}`}>
        {course.category}
      </span>
      <h3 className="card-title">{course.title}</h3>
      <p className="card-duration">{course.duration}</p>
    </button>
  );
}

export default CourseCard;
