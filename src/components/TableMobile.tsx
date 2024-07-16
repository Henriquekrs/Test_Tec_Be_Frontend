import React, { useState } from 'react';
import { useGlobalContext } from '../context/GlobalProvider';
import { formatDate } from '../utils/formatDate';
import { formatPhoneNumber } from '../utils/formatNumber';
import styles from '../styles/tableMobile.module.css';
import { Employee } from '../types/contextTypes';
import { ArrowUp } from '../assets/up';
import { ArrowDown } from '../assets/down';

export function TableMobile() {
  const { employees } = useGlobalContext();
  const [expandedRows, setExpandedRows] = useState<{ [key: string]: boolean }>(
    {}
  );

  const handleToggle = (id: number) => {
    setExpandedRows((prev) => ({
      ...prev,
      [id]: !prev[id],
    }));
  };

  return (
    <div className={styles.container}>
      <table>
        <thead>
          <tr>
            <th>Foto</th>
            <th>Nome</th>
            <th>
              <div></div>
            </th>
          </tr>
        </thead>
        <tbody>
          {employees.map((employee: Employee) => (
            <React.Fragment key={employee.id}>
              <tr>
                <td>
                  <img src={employee.image} alt={employee.name} height={20} />
                </td>
                <td>{employee.name}</td>
                <td>
                  <div
                    className={styles.toggleIcon}
                    onClick={() => handleToggle(employee.id)}
                  >
                    {expandedRows[employee.id] ? <ArrowUp /> : <ArrowDown />}
                  </div>
                </td>
              </tr>
              {expandedRows[employee.id] && (
                <tr>
                  <td colSpan={3}>
                    <div className={styles.additionalInfo}>
                      <div>
                        <p>Cargo</p>
                        {employee.job}
                      </div>
                      <div>
                        <p>Data de admissão</p>
                        {formatDate(employee.admission_date)}
                      </div>
                      <div>
                        <p>Telefone</p>
                        {formatPhoneNumber(employee.phone)}
                      </div>
                    </div>
                  </td>
                </tr>
              )}
            </React.Fragment>
          ))}
        </tbody>
      </table>
    </div>
  );
}
