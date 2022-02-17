import React from "react";
// generador de filas
export const TaskRow = props => (
  <tr key={props.task.name}>
    <td>{props.task.name}</td>
    <td>
      <input
        type="checkbox"
        checked={props.task.done}
        onChange={() => props.toggleTask(props.task)}
      />
    </td>
  </tr>
);
