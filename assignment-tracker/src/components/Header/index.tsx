import React, { useState } from 'react';
import styles from "./header.module.css";
import { AiOutlinePlusCircle } from "react-icons/ai";
import { uppercase } from "../../helpers/stringHelpers";
import { TAssignment } from '../../App';

type Props = {
  assignments: TAssignment[] | []
  setAssignments: React.Dispatch<React.SetStateAction<TAssignment[]>>
}


export function Header({setAssignments}: Props) {
  const [assignment, setAssignment] = useState('');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault(); 
    const assignmentTrimmed = assignment.trim();
    const isEmpty = assignmentTrimmed.length === 0;

    if (!isEmpty) {
      setAssignments((assignments) => {
        return [
          ...assignments, 
          { id: `${crypto.randomUUID()}`, title: assignment, task: assignment, completed: false }
        ]
      });
  
      // Reset the assignment input field
      setAssignment(''); 
    }
  };


  return (
    <header className={`${styles.header} pb-5`}>
      <h1>{uppercase("bcit")} Assignment Tracker</h1>
      <form className={styles.newAssignmentForm} onSubmit={handleSubmit}>
        <input 
          placeholder="Add a new assignment" 
          type="text" 
          value={assignment}
          onChange={(e) => setAssignment(e.target.value)}
        />
        <button  disabled={assignment.trim() === ''}>
          Create <AiOutlinePlusCircle size={20} />
        </button>
      </form>
    </header>
  );
}