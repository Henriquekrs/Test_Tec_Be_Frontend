import { useGlobalContext } from '../context/GlobalProvider';
import styles from '../styles/tableDesktopStyle.module.css';
import { Employee } from '../types/contextTypes';
import { formatDate } from '../utils/formatDate';
import { formatPhoneNumber } from '../utils/formatNumber';

export function TableDesktop() {
  const { filteredEmployees } = useGlobalContext();
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
          {filteredEmployees.map((employee: Employee) => (
            <tr key={employee.id}>
              <td>
                <img src={employee.image} alt={employee.name} height={20} />
              </td>
              <td>{employee.name}</td>
              <td>{employee.job}</td>
              <td>{formatDate(employee.admission_date)}</td>
              <td>{formatPhoneNumber(employee.phone)}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
