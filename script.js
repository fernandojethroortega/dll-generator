function generateLesson() {
  let subject = document.getElementById("subject").value;
  let grade = document.getElementById("grade").value;
  let datetime = document.getElementById("datetime").value;
  let objectives = document.getElementById("objectives").value;
  let keywords = document.getElementById("keywords").value;

  // Simple AI-like generation using templates
  let content = `The lesson on ${subject} for grade ${grade} will cover the following content standards based on ${objectives}.`;
  let performance = `By the end of this lesson, learners should be able to demonstrate their learning through activities aligned with PPST standards.`;

  let procedures = `
  1. Reviewing Previous Lesson: Quick recall questions.
  2. Establishing Purpose: Discuss real-life relevance of ${subject}.
  3. Presenting Examples: Show examples related to ${keywords || "lesson topic"}.
  4. Practicing Skills #1: Guided activity using worksheets or demonstrations.
  5. Practicing Skills #2: Pair/group activity to reinforce learning.
  6. Developing Mastery: Individual task with rubric.
  7. Finding Practical Applications: Students relate lesson to daily life.
  8. Generalization: "What did we learn today?" discussion.
  9. Evaluating Learning: Short quiz or performance task.
  10. Additional Activities: Remediation or enrichment exercises.
  `;

  let references = `References: To be added by teacher`;
  let sources = `Other Sources: To be added by teacher`;

  document.getElementById("output").innerHTML = `
    <h2>AI-Generated DLL</h2>
    <b>Subject:</b> ${subject}<br>
    <b>Grade Level:</b> ${grade}<br>
    <b>Date & Time:</b> ${datetime}<br><br>
    <h3>Content Standards</h3>${content}
    <h3>Performance Standards</h3>${performance}
    <h3>Learning Objectives</h3>${objectives}
    <h3>Procedures (PPST-Aligned)</h3>${procedures}
    <h3>References</h3>${references}
    <h3>Other Sources</h3>${sources}
  `;
}
