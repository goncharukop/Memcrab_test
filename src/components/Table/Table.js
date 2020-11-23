/* eslint-disable no-param-reassign */
/* eslint-disable no-restricted-syntax */
/* eslint-disable no-loop-func */
import React, { useState } from 'react';
import './Table.scss';

let M = 5;
const N = 6;
const X = 3;

const matrixCreate = () => {
  const matrix = [];

  for (let i = 0; i < M; i += 1) {
    const matrixRow = [];

    for (let j = 0; j < N; j += 1) {
      const randomNum = Math.floor(Math.random() * 1000);

      matrixRow.push({
        id: [i, j],
        amount: randomNum > 100 ? randomNum : randomNum + 100,
        className: 'table__cell ui button',
      });
    }

    matrix.push(matrixRow);
  }

  return matrix;
};

const getColumnAverage = (newMatrix) => {
  const columnAverage = [];

  for (let j = 0; j < N; j += 1) {
    let temp = 0;

    for (let i = 0; i < M; i += 1) {
      if (newMatrix[i][j].id[1] === j) {
        temp += matrix[i][j].amount;
      }
    }

    columnAverage.push({
      average: M ? Math.round(temp / M) : 0,
      id: j,
    });
  }

  return columnAverage;
};

const getRowSum = (newMatrix) => {
  const rowSum = [];

  for (let i = 0; i < M; i += 1) {
    rowSum
      .push({
        sum: newMatrix[i].reduce((acc, el) => acc + el.amount, 0),
        id: i,
      });
  }

  return rowSum;
};

let matrix = matrixCreate();
let showPercent = false;

export const Table = () => {
  const [newMatrix, setNewMatrix] = useState(matrix);

  const rowSum = getRowSum(newMatrix);
  const columnAverage = getColumnAverage(newMatrix);

  const addOne = ({ el }) => {
    el.amount += 1;

    setNewMatrix([...matrix, el.amount + 1]);
  };

  const addRow = () => {
    for (let i = M; i <= M; i += 1) {
      const newMatrixRow = [];

      for (let j = 0; j < N; j += 1) {
        const randomNum = Math.floor(Math.random() * 1000);

        newMatrixRow.push({
          id: [i, j],
          amount: randomNum > 100 ? randomNum : randomNum + 100,
          className: 'table__cell ui button',
        });
      }

      matrix.push(newMatrixRow);
    }

    M += 1;
    setNewMatrix([...matrix]);

    return M;
  };

  const deleteRow = ({ row }) => {
    for (const newRow of matrix) {
      if (newRow[0].id[0] === row.id) {
        matrix = [...matrix].filter(rowM => rowM !== newRow);
      }
    }

    M -= 1;
    setNewMatrix(matrix);

    return M;
  };

  const getNeighborValue = ({ el }) => {
    let counter = 0;
    let temp = 0;

    while (counter < X) {
      matrix.forEach((row) => {
        row.forEach((cell) => {
          if (el.amount + temp >= cell.amount
          && el.amount - temp <= cell.amount
          && el.id !== cell.id) {
            if (cell.className !== 'table__cell ui button blue'
              && counter < X) {
              cell.className = 'table__cell ui button blue';
              counter += 1;
            }
          } else {
            cell.className = 'table__cell ui button';
          }

          if (counter < X) {
            temp += 1;
          }
        });
      });
    }

    setNewMatrix([...matrix]);

    return matrix;
  };

  const getInitialColor = () => {
    matrix.forEach((row) => {
      row.forEach((cell) => {
        cell.className = 'table__cell ui button';
      });
    });

    setNewMatrix([...matrix]);

    return matrix;
  };

  const getPercent = ({ row }) => {
    matrix.forEach((newRow) => {
      newRow.forEach((cell) => {
        if (row.id === cell.id[0]) {
          // eslint-disable-next-line no-restricted-properties
          cell.percent = `${(cell.amount / row.sum * 100).toFixed(2)}%`;
        } else {
          cell.percent = cell.amount;
        }
      });
    });

    showPercent = true;

    setNewMatrix([...matrix]);

    return matrix;
  };

  const getAmount = () => {
    showPercent = false;

    setNewMatrix([...matrix]);

    return matrix;
  };

  return (
    <>
      <div className="table-major">
        <table className="table">
          <tbody>
            <th>
              Table with random values
              { matrix.map(row => (
                <tr key={row[0].id}>
                  {row.map(el => (
                    <td key={el.id}>
                      <button
                        type="button"
                        className={el.className}
                        onClick={() => addOne({ el })}
                        onMouseOver={() => {
                          getInitialColor();
                          getNeighborValue({ el });
                        }}
                        onFocus={() => getInitialColor()}
                      >
                        {
                          showPercent
                            ? `${el.percent}`
                            : `${el.amount}`
                        }
                        <span
                          className="table__cell-percent"
                          style={{ height: showPercent ? `${el.percent}` : `` }}
                        />
                      </button>
                    </td>
                  ))}
                </tr>
              ))}
            </th>
          </tbody>
        </table>

        <table className="table">
          <tbody>
            <th>Sum</th>
            { rowSum.map(row => (
              <tr key={row.id}>
                <td>
                  <button
                    type="button"
                    className="table__cell ui button yellow"
                    onMouseOver={() => {
                      getInitialColor();
                      getPercent({ row });
                    }}
                    onMouseOut={() => getAmount()}
                    onFocus={() => getInitialColor()}
                    onBlur={() => getAmount()}
                  >
                    {row.sum}
                  </button>
                </td>
                <button
                  type="button"
                  className="ui button red"
                  onClick={() => deleteRow({ row })}
                >
                  Delete row
                </button>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      <table className="table">
        <tbody>
          <th>
            Average value in column
            <tr>
              { columnAverage.map(number => (
                <td key={number.id}>
                  <button
                    type="button"
                    className="table__cell ui button orange"
                  >
                    {Math.round(number.average)}
                  </button>
                </td>
              ))}
            </tr>
          </th>
        </tbody>
      </table>

      <button
        type="button"
        className="table__cell ui button green add-btn"
        onClick={() => addRow()}
      >
        Add row
      </button>
    </>
  );
};
