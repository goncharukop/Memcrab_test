/* eslint-disable no-loop-func */
/* eslint-disable no-param-reassign */
import React, { useState } from 'react';
import './Table.scss';
// import PropTypes from 'prop-types';

let M = 5;
const N = 6;
const X = 3;

const matrixCreate = () => {
  const matrix = [];

  for (let i = 1; i <= M; i += 1) {
    const matrixRow = [];

    for (let j = 1; j <= N; j += 1) {
      const randomNum = Math.ceil(Math.random() * 1000);

      matrixRow.push({
        id: [i, j],
        amount: randomNum > 100 ? randomNum : randomNum + 100,
        className: 'table__cell ui button',
      });
    }

    matrix.push(matrixRow);
  }

  // eslint-disable-next-line no-console
  console.log(matrix);

  return matrix;
};

const getColumnAverage = (newMatrix) => {
  const columnAverage = [];

  for (let j = 0; j < N; j += 1) {
    let temp = 0;

    for (let i = 0; i < M; i += 1) {
      if (newMatrix[i][j].id[1] === j + 1) {
        temp += matrix[i][j].amount;
      }
    }

    columnAverage.push({
      average: Math.round(temp / M),
      id: j + 1,
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
        id: i + 1,
      });
  }

  return rowSum;
};

let matrix = matrixCreate();

export const Table = () => {
  const [newMatrix, setNewMatrix] = useState(matrix);

  const rowSum = getRowSum(newMatrix);
  const columnAverage = getColumnAverage(newMatrix);

  const addOne = ({ el }) => {
    el.amount += 1;

    setNewMatrix([...matrix, el.amount + 1]);
  };

  const addRow = () => {
    M += 1;
    matrix = matrixCreate();
    setNewMatrix(matrix);
  };

  const deleteRow = ({ row }) => {
    let mat = [];

    // eslint-disable-next-line no-restricted-syntax
    for (const newRow of matrix) {
      if (newRow[0].id[0] === row.id) {
        mat = matrix.filter(rowM => rowM !== newRow);
      }
    }

    M -= 1;
    setNewMatrix(mat);
  };

  const getNeighborValue = ({ el }) => {
    let counter = 0;
    let x = 0;

    while (counter < X) {
      matrix.forEach((row) => {
        row.forEach((cell) => {
          if (el.amount + x >= cell.amount
          && el.amount - x <= cell.amount
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
            x += 1;
          }

          return cell;
        });

        return row;
      });
    }

    setNewMatrix([...matrix]);

    // return matrix;
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
                        onMouseOver={() => getNeighborValue({ el })}
                        onFocus
                      >
                        {el.amount}
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
                    className="table__cell ui button green"
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
        className="table__cell ui button black"
        onClick={() => addRow()}
      >
        Add row
      </button>
    </>
  );
};

// Table.propTypes = {};
