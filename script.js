const form = document.getElementById('katz-form');
const scoreElement = document.getElementById('score');
const interpretationElement = document.getElementById('interpretation');
const descriptionElement = document.getElementById('description');

const interpretations = [
  {
    min: 6,
    max: 6,
    label: 'Independiente',
    description: 'La persona puede realizar todas las actividades sin ayuda.'
  },
  {
    min: 4,
    max: 5,
    label: 'Dependencia leve',
    description: 'La persona necesita ayuda en algunas actividades, pero conserva buena autonomía.'
  },
  {
    min: 2,
    max: 3,
    label: 'Dependencia moderada',
    description: 'La persona requiere ayuda en varias actividades básicas de la vida diaria.'
  },
  {
    min: 0,
    max: 1,
    label: 'Dependencia severa',
    description: 'La persona necesita ayuda casi constante para realizar sus actividades cotidianas.'
  }
];

function updateResult() {
  const formData = new FormData(form);
  let total = 0;

  for (const value of formData.values()) {
    total += Number(value);
  }

  const currentInterpretation = interpretations.find(
    (item) => total >= item.min && total <= item.max
  ) || interpretations[3];

  scoreElement.textContent = total;
  interpretationElement.textContent = currentInterpretation.label;
  descriptionElement.textContent = currentInterpretation.description;

  interpretationElement.style.color =
    total >= 4 ? '#0f9d58' : total >= 2 ? '#eea417' : '#d94c4c';
}

form.addEventListener('change', updateResult);
updateResult();
