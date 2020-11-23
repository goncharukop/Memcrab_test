/* eslint-disable no-param-reassign */
/* eslint-disable no-restricted-syntax */
/* eslint-disable no-loop-func */
import React, { useState } from 'react';
import './Table.scss';

let showPercent = false;
let showTable = false;

export const Table = () => {
  const [M, setM] = useState(15);
  const [N, setN] = useState(15);
  const [X, setX] = useState(5);
  const [error, setError] = useState('');

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

  const [newMatrix, setNewMatrix] = useState(matrixCreate());

  const addOne = ({ el }) => {
    newMatrix
      .forEach(row => row
        .forEach((cell) => {
          if (cell.id === el.id) {
            el.amount += 1;
          }
        }));

    setNewMatrix([...newMatrix]);
  };

  const handleCreate = (event) => {
    event.preventDefault();

    if (M < 1 || N < 1) {
      setError('Fill "M" and "N" fields in diapason 1 - 15, please');

      return;
    }

    if (X < 1) {
      setError('"X" field must be > 0');

      return;
    }

    if (X >= M * N) {
      setError('"X" field must be < M * N');

      return;
    }

    setNewMatrix(matrixCreate);
    showTable = true;
    setError('');
  };

  const handleChange = (event) => {
    const { name, value } = event.target;

    switch (name) {
      case 'X':
        setX(value);
        break;
      case 'N':
        setN(value);
        break;
      case 'M':
        setM(value);
        break;
      default:
        break;
    }
  };

  const getColumnAverage = () => {
    const columnAverage = [];

    for (let j = 0; j < N; j += 1) {
      let temp = 0;

      for (let i = 0; i < M; i += 1) {
        if (newMatrix[i][j].id[1] === j) {
          temp += newMatrix[i][j].amount;
        }
      }

      columnAverage.push({
        average: M ? Math.round(temp / M) : 0,
        id: j,
      });
    }

    return columnAverage;
  };

  const columnAverage = getColumnAverage();

  const getRowSum = () => {
    const rowSum = [];

    for (let i = 0; i < M; i += 1) {
      rowSum
        .push({
          sum: newMatrix[i].reduce((acc, el) => acc + el.amount, 0),
          id: newMatrix[i][0].id[0],
        });
    }

    return rowSum;
  };

  const rowSum = getRowSum(newMatrix);

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

      newMatrix.push(newMatrixRow);
    }

    setM(M + 1);
    setNewMatrix([...newMatrix]);

    return M;
  };

  const deleteRow = ({ row }) => {
    for (const newRow of newMatrix) {
      if (newRow[0].id[0] === row.id) {
        setNewMatrix(newMatrix.filter(el => el !== newRow));
        setM(M - 1);
      }
    }
  };

  const getNeighborValue = ({ el }) => {
    let counter = 0;
    let temp = 0;

    while (counter < X) {
      newMatrix.forEach((row) => {
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

    setNewMatrix([...newMatrix]);
  };

  const getInitialColor = () => {
    newMatrix.forEach((row) => {
      row.forEach((cell) => {
        cell.className = 'table__cell ui button';
      });
    });

    setNewMatrix([...newMatrix]);
  };

  const getPercent = ({ row }) => {
    newMatrix.forEach((newRow) => {
      newRow.forEach((cell) => {
        if (row.id === cell.id[0]) {
          cell.percent = `${(cell.amount / row.sum * 100).toFixed(2)}%`;
        } else {
          cell.percent = cell.amount;
        }
      });
    });

    showPercent = true;
    setNewMatrix([...newMatrix]);
  };

  const getAmount = () => {
    showPercent = false;

    setNewMatrix([...newMatrix]);
  };

  return (
    <>
      <form
        className="ui form initial-form"
        onSubmit={handleCreate}
      >
        <label>
          {`M : `}
          <input
            type="number"
            value={M}
            name="M"
            placeholder="Enter columns"
            onChange={handleChange}
          />
        </label>
        <label>
          {`N : `}
          <input
            type="number"
            value={N}
            name="N"
            placeholder="Enter rows"
            onChange={handleChange}
          />
        </label>
        <label>
          {`X : `}
          <input
            type="number"
            value={X}
            name="X"
            onChange={handleChange}
          />
        </label>

        <button
          type="submit"
          className="ui button green"
        >
          Create table
        </button>
        <p>{error}</p>
      </form>

      {
        !showTable
          ? <h2 className="create-text">Click button, please</h2>
          : (
            <>
              <div className="table-major">
                <table className="table">
                  <tbody>
                    <th>
                      Table with random values
                      { newMatrix.map(row => (
                        <tr key={row[0].id[0]}>
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
                                  style={{
                                    height: showPercent
                                      ? `${el.percent}`
                                      : ``,
                                  }}
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
          )
      }
    </>
  );
};
