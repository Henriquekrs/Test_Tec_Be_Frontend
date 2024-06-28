import { useGlobalContext } from '../context/GlobalProvider';
import styles from '../styles/tableStyle.module.css';

export function Table() {
  const { employees } = useGlobalContext();
  return (
    <div className={styles.container}>
      <table>
        <thead>
          <tr>
            <th>Foto</th>
            <th>Nome</th>
            <th>Cargo</th>
            <th>Data de Admissão</th>
            <th>Telefone</th>
          </tr>
        </thead>
        <tbody>
          {employees.map((employee) => (
            <tr key={employee.id}>
              <td>
                <img src={employee.image} alt={employee.name} height={20} />
              </td>
              <td>{employee.name}</td>
              <td>{employee.job}</td>
              <td>{employee.admission_date}</td>
              <td>{employee.phone}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
