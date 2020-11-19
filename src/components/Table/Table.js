/* eslint-disable jsx-a11y/label-has-for */
import React from 'react';
import './Table.scss';
// import PropTypes from 'prop-types';

// const [state, setState] = useState([]);

export const M = 7;
export const N = 4;

export const matrixCreate = () => {
  const matrix = [];

  for (let i = 1; i <= M; i += 1) {
    const matrixRow = [];

    for (let j = 1; j <= N; j += 1) {
      const randomNum = Math.ceil(Math.random() * 1000);

      matrixRow.push({
        id: [i, j],
        // id: i * 10 + j,
        amount: randomNum > 100 ? randomNum : randomNum + 100,
      });
    }

    matrix.push(matrixRow);
  }

  // setState(matrix);

  // eslint-disable-next-line no-console
  console.log(matrix);

  return matrix;
};

export const Table = () => {
  const matrix = matrixCreate();
  const rowSum = [];
  const columnAverage = [];

  for (let i = 0; i < M; i += 1) {
    rowSum
      .push({
        sum: matrix[i].reduce((acc, el) => acc + el.amount, 0),
        id: i + 1,
      });
  }

  for (let j = 0; j < N; j += 1) {
    let temp = 0;

    for (let i = 0; i < M; i += 1) {
      if (matrix[i][j].id[1] === j + 1) {
        temp += matrix[i][j].amount;
      }
    }

    columnAverage.push({
      average: Math.round(temp / N),
      id: j + 1,
    });
  }

  // eslint-disable-next-line no-console
  console.log(columnAverage);

  return (
    <>
      <div className="table-major">
        <table className="table">
          <tbody>
            { matrix.map(row => (
              <tr key={row[0].id}>
                {row.map(el => (
                  <td key={el.id} className="table__cell">
                    {el.amount}
                  </td>
                ))}
              </tr>
            ))}
          </tbody>
        </table>

        <table className="table">
          <tbody>
            { rowSum.map(row => (
              <tr key={row.id}>
                <td className="table__cell">
                  {row.sum}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      <table className="table">
        <tbody>
          <tr>
            { columnAverage.map(number => (
              <td key={number.id} className="table__cell">
                {number.average}
              </td>
            ))}
          </tr>
        </tbody>
      </table>
    </>
  );
};

// Table.propTypes = {};
