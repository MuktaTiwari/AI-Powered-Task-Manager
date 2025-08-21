"use client";

interface Column {
  key: string;
  label: string;
}

interface TableProps {
  columns: Column[];
  data: Record<string, any>[];
}

export default function Table({ columns, data }: TableProps) {
  return (
    <div className="overflow-x-auto shadow rounded-xl">
      <table className="w-full border-collapse border border-gray-200">
        <thead>
          <tr className="bg-gray-100">
            {columns.map((col) => (
              <th
                key={col.key}
                className="border border-gray-200 px-4 py-2 text-left text-black"
              >
                {col.label}
              </th>
            ))}
          </tr>
        </thead>
        <tbody>
          {data.map((row, idx) => (
            <tr key={idx} className="hover:bg-gray-50">
              {columns.map((col) => (
                <td
                  key={col.key}
                  className="border border-gray-200 px-4 py-2 text-black"
                >
                  {row[col.key]}
                </td>
              ))}
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
