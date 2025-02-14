const courses = [
  {
    id: 1,
    title:
      "Modules 1 and 2: Scientific Foundation and Advanced Practice Skills",
    price: "$109.99",
    duration: "5.5-hours class",
    keyConcepts: [
      "Test taking strategies",
      "Advanced pathophysiology",
      "Advanced pharmacology",
      "Pharmacokinetics",
      "Pharmacodynamics",
      "Extrapyramidal side effects",
      "Neuroleptic malignant syndrome",
      "Dopamine pathways",
      "Neuroanatomy",
      "Neurodevelopment",
      "Neurocognitive",
      "Health promotion and disease prevention",
      "Mental health screening tools",
      "Mental status exam",
      "Use of healthcare data to change, motivational interviewing",
    ],
  },
  {
    id: 2,
    title: "Module 3: Diagnosis and Treatment",
    price: "$64.99",
    duration: "3.5-hours class",
    keyConcepts: [
      "Master the essentials of diagnosis and treatment as a Psychiatric Mental Health Nurse Practitioner (PMHNP)",
      "Designed exclusively for PMHNPs preparing for the certification exam",
      "Essential aspects of psychiatric disorders",
      "Evidence-based treatment strategies",
    ],
  },
  {
    id: 3,
    title: "Module 4: Psychotherapy and Related Theories",
    price: "$64.99",
    duration: "3-hours class",
    keyConcepts: [
      "Individual therapies including cognitive therapy, behavioral therapy, and interpersonal therapy",
      "Family therapies including structural family therapy, strategic family systems therapy, and solution-focused therapy",
      "Erik Erikson’s stages of human development",
      "Piaget’s stages of cognitive development",
      "Freud’s Psychosexual Stages of Development",
      "Defense Mechanisms",
      "Recovery Model",
      "Assertive Community Treatment",
    ],
  },
  {
    id: 4,
    title: "Module 5: Ethical, Legal Principles, and Cultural Care",
    price: "$64.99",
    duration: "3-hours class",
    keyConcepts: [
      "Scope of practice",
      "Standard of practice",
      "Informed consents",
      "Confidentiality",
      "Ethical principles such as Justice, Autonomy, Beneficence, veracity, and nonmaleficence",
      "Patient advocacy",
      "Culturally competency",
      "Case management",
      "Existentialism",
      "Social Determinants of Mental Health",
      "Health policy",
      "Just culture",
      "Quality improvement",
      "Research",
    ],
  },
  {
    id: 6,
    title: "Last Minute Review (LMR)",
    price: "$249.99",
    duration: "6.5 hours",
    keyConcepts: [
      "Accelerate your PMHNP exam preparation",
      "Designed specifically for aspiring Psychiatric Mental Health Nurse Practitioners",
      "Condensed review of essential ('high-yield') topics",
      "Test-taking strategies",
      "Expert guidance to boost confidence",
      "Tailored for busy students",
      "Provides a flexible yet comprehensive approach",
      "Students can self-reschedule the Last Minute Review (LMR) class up to six times",
      "If you plan on rescheduling last-minute reviews, plan on rescheduling the class not less than 48 hours to the class time",
      "The modules 1-5 review classes cannot be rescheduled once scheduled",
    ],
  },
];

function generateCourses() {
  const coursesContainer = document.getElementById("courses-container");
  const template = document.getElementById("course-template");

  courses.forEach((course) => {
    const courseElement = template.content.cloneNode(true);

    courseElement.querySelector(".course-title").textContent = course.title;
    courseElement.querySelector(".course-price").textContent = course.price;
    courseElement.querySelector(".course-duration").textContent =
      course.duration;
    courseElement.querySelector(".short-description").textContent =
      course.keyConcepts.slice(0, 2).join(", ") + "...";

    const fullDescription = courseElement.querySelector(".full-description");
    course.keyConcepts.forEach((concept) => {
      const listItem = document.createElement("li");
      listItem.textContent = concept;
      fullDescription.appendChild(listItem);
    });

    const seeMoreBtn = courseElement.querySelector(".see-more");
    const seeLessBtn = courseElement.querySelector(".see-less");

    seeMoreBtn.addEventListener("click", () => {
      fullDescription.style.display = "block";
      seeMoreBtn.style.display = "none";
      seeLessBtn.style.display = "inline-block";
    });

    seeLessBtn.addEventListener("click", () => {
      fullDescription.style.display = "none";
      seeLessBtn.style.display = "none";
      seeMoreBtn.style.display = "inline-block";
    });

    const signInBtn = courseElement.querySelector(".sign-in-button");
    signInBtn.href =
      "https://app.acuityscheduling.com/schedule/9d3caaf4/?appointmentTypeIds[]=17573641";

    coursesContainer.appendChild(courseElement);
  });
}

document.addEventListener("DOMContentLoaded", generateCourses);
