function generateDLL() {

  let subject = document.getElementById("subject").value;
  let grade = document.getElementById("grade").value;
  let datetime = document.getElementById("datetime").value;
  let content = document.getElementById("content").value;
  let performance = document.getElementById("performance").value;
  let objectives = document.getElementById("objectives").value;
  let references = document.getElementById("references").value;
  let sources = document.getElementById("sources").value;

  document.getElementById("output").innerHTML = `
  <h2>DAILY LESSON LOG</h2>

  <b>Subject:</b> ${subject}<br>
  <b>Grade Level:</b> ${grade}<br>
  <b>Date & Time:</b> ${datetime}<br>

  <h3>I. Content Standards</h3>
  ${content}

  <h3>II. Performance Standards</h3>
  ${performance}

  <h3>III. Learning Competencies</h3>
  ${objectives}

  <h3>IV. Procedures (PPST-Aligned)</h3>

  <ol>
    <li>Review of previous lesson through questioning</li>
    <li>Establishing the purpose of the lesson</li>
    <li>Presentation of examples and instances</li>
    <li>Guided practice with teacher assistance</li>
    <li>Group activity with performance rubric</li>
    <li>Individual mastery task</li>
    <li>Application to daily life situations</li>
    <li>Generalization of lesson concepts</li>
    <li>Evaluation through quiz or output</li>
    <li>Remedial or enrichment activity</li>
  </ol>

  <h3>V. References</h3>
  ${references}

  <h3>VI. Other Sources</h3>
  ${sources}
  `;
}
