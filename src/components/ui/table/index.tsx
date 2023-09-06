import { ReactNode } from "react";
import "./styles.css";
type TableData = {
  [key: string]: string | number | boolean;
};

interface TableProps {
  data: TableData[];
  columns: Array<{ label: string; field: string }>;
  actions?: (row: TableData) => ReactNode; // Optional actions function
}

const Table: React.FC<TableProps> = ({ data, columns, actions }) => {
  return (
    <table>
      <thead>
        <tr>
          {columns.map((column, index) => (
            <th key={index}>{column.label}</th>
          ))}
          {actions && <th>Actions</th>} {/* Optional "Actions" column */}
        </tr>
      </thead>
      <tbody>
        {data.map((row, rowIndex) => {
          return (
            <tr key={rowIndex}>
              {columns.map((column, columnIndex) => (
                <td key={columnIndex}>{row[column.field]}</td>
              ))}
              {actions && <td>{actions(row)}</td>}
              {/* Render actions if provided */}
            </tr>
          );
        })}
      </tbody>
    </table>
  );
};

export default Table;
