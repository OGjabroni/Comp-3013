import { Assignment } from '../Assignment';
import { TAssignment } from '../../App';
import React from 'react';
import styles from "./assignments.module.css";

type Props = {
    assignments: TAssignment[] | []
    setAssignments: React.Dispatch<React.SetStateAction<TAssignment[]>>;
}

export function Assignments({ assignments, setAssignments }: Props) {
  
  const deleteAssignment = (id: string) => {
    setAssignments(assignments.filter((assignment) => assignment.id !== id));
  };

  const toggleAssignment = (id: string) => {
    setAssignments(assignments.map((assignment) => 
      assignment.id === id ? { ...assignment, completed: !assignment.completed } : assignment
    ));
  };

  return (
    <div className={styles.assignments}>
      <div className={styles.header} >
        Created assignments: {assignments.length}
      </div>
      <div className={styles.header}>
        Completed assignments: {assignments.filter((assignment) => assignment.completed).length} of {assignments.length}
      </div>

      <div>
        {assignments.map((assignment) => (
          <Assignment
            key={assignment.id}
            id={assignment.id}
            assignment={assignment.task}
            completed={assignment.completed}
            onDelete={() => deleteAssignment(assignment.id)}
            onToggle={() => toggleAssignment(assignment.id)} assignments={[]}          />
        ))}
      </div>
    </div>
  );
}