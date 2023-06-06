import useActions from "../hooks/useActions";
import styles from "./CourseinfoCard.module.css";

function CourseinfoCard({ course }) {
  // const { toggleCourse } = useActions();
  // const handleCourseBar = (course) => {
  //   toggleCourse(course);

  const { setCoursebar, setCourse } = useActions();
  const handleCourseBar = () => {
    setCoursebar(true);
    setCourse(course);
  };

  return (
    <>
      <div>
        {!course ? (
          <h1>Loading</h1>
        ) : (
          <div>
            <div className={styles.card_item} onClick={handleCourseBar}>
              <div className={styles.course} key={course.id}>
                <div className={styles.course__title}>
                  <h2 className={styles.title}>{course.date}</h2>
                </div>
              </div>
              <p className={styles.course__location}>
                폰번호 : {course.phonenumber}
              </p>
              <p className={styles.course__hours}>시간 : {course.hours}</p>
            </div>
          </div>
        )}
      </div>
    </>
  );
}

export default CourseinfoCard;
