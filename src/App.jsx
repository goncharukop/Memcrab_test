/* eslint-disable no-unused-vars */
import React, { useState } from 'react';
import './App.scss';
// import { Switch, Link, Route } from 'react-router-dom';

export const App = () => {
  const M = 5;
  const N = 4;
  const [state, setState] = useState([]);

  const matrixCreate = () => {
    const matrix = [];

    for (let i = 0; i < M * N; i += 1) {
      const ramdomNum = (Math.random() * 1000);

      matrix.push({
        id: i + 1,
        Amount: Math.ceil(ramdomNum > 100 ? ramdomNum : ramdomNum + 100),
      });
    }

    // eslint-disable-next-line no-console
    console.log(matrix);

    return matrix;
  };

  return (
    <div>
      <table>
        <tr>
          <td className="table_field">The table body</td>
          <td>with two columns</td>
        </tr>
      </table>

      <button type="button" onClick={() => matrixCreate()}>CLIIIIIK</button>
      {/* <nav className="nav">
        <Link to="/">Home</Link>
        <Link to="/users">Users</Link>
      </nav>

      <Switch>
        <Route path="/users">
          <div>Users page</div>
        </Route>
        <Route path="/">
          <div>Home page</div>
        </Route>
      </Switch>
    </div> */}
    </div>
  );
};
