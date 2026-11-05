import { useParams } from "react-router-dom";
import { courses } from "../data/courses";
import CourseCard from "../components/CourseCard";

function CategoryPage() {
  const { category } = useParams();
  const filtered = courses.filter(
    (c) => c.category.toLowerCase() === category.toLowerCase()
  );

  return (
    <section>
      <h1 className="page-title">{category} Courses</h1>
      {filtered.length > 0 ? (
        <div className="grid">
          {filtered.map((course) => (
            <CourseCard key={course.id} course={course} />
          ))}
        </div>
      ) : (
        <p className="intro">No courses found in this category.</p>
      )}
    </section>
  );
}

export default CategoryPage;
