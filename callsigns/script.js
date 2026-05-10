function generateCallsign() {
  const officerName = document.getElementById('officerName').value || 'Unnamed Officer';
  const department = document.getElementById('department').value;

  let randomNumbers = '';

  for (let i = 0; i < 4; i++) {
    randomNumbers += Math.floor(Math.random() * 10);
  }

  const finalCallsign = `Y-${randomNumbers}`;

  document.getElementById('callsign').innerText = finalCallsign;
  document.getElementById('officerDisplay').innerText = officerName;
  document.getElementById('departmentDisplay').innerText = department;
}