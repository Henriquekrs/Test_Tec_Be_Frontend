export async function fetchEmployees() {
  const response = await fetch('http://localhost:3001/employees');
  if (!response.ok) {
    throw new Error('Error fetching employees');
  }
  return response.json();
}
