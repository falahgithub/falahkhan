// Calculate total months of experience
function getTotalMonthsExperience() {
  const startDate = new Date('2021-11-01'); // Your career start date
  const currentDate = new Date();
  
  const months = (currentDate.getFullYear() - startDate.getFullYear()) * 12;
  return (months - startDate.getMonth() + currentDate.getMonth());
}

// Update the heading on page load
document.addEventListener('DOMContentLoaded', function() {
  const expElement = document.getElementById('experience-duration');
  if (expElement) {
    expElement.textContent = getTotalMonthsExperience() + ' months';
  }
});