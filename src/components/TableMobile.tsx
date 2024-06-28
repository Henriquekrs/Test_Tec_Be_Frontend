import { useGlobalContext } from '../context/GlobalProvider';
import { formatDate } from '../utils/formatDate';
import { formatPhoneNumber } from '../utils/formatNumber';
import up from '../assets/up.svg';

export function TableMobile() {
  const { employees } = useGlobalContext();
  return (
    <div>
      <table>
        <thead>
          <tr>
            <th>Foto</th>
            <th>Nome</th>
          </tr>
        </thead>
        <tbody>
          {employees.map((employee) => (
            <tr key={employee.id}>
              <td>
                <img src={employee.image} alt={employee.name} height={20} />
              </td>
              <td>{employee.name}</td>
              <img src={up} alt='Mais informações' height={20} />
              <div>
                <td>{employee.job}</td>
                <td>{formatDate(employee.admission_date)}</td>
                <td>{formatPhoneNumber(employee.phone)}</td>
              </div>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
