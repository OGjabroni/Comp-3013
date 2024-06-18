import styles from "./assignment.module.css";
import { TbTrash } from "react-icons/tb";
import { useState } from 'react';
import { BiCheckCircle, BiCircle } from 'react-icons/bi'; // import the icons
import { TAssignment } from '../../App';

export type Props = {
 id: string;
 assignment: string;
 assignments: TAssignment[] | [];
 completed: boolean;
 onDelete: () => void;
 onToggle: () => void; // new prop for notifying parent of toggle
}

export function Assignment({ assignment, completed: initialCompleted, onDelete, onToggle }: Props) {
  const [completed, setCompleted,] = useState(initialCompleted);

  const toggleCompleted = () => {
    setCompleted(!completed);
    onToggle(); // call onToggle when the assignment is toggled
  };

  return (
    <div className="mt-100">
        <div className={styles.assignment}>
          <button className={styles.checkContainer} onClick={toggleCompleted}>
            {completed ? <BiCheckCircle /> : <BiCircle />}
          </button>

          <p style={{ textDecoration: completed ? 'line-through' : 'none', color: completed ? 'grey' : 'white' }}>
            {assignment}
          </p>

          <button className={styles.deleteButton} onClick={onDelete}> 
            <TbTrash size={20} />
          </button>
        </div>
      </div>
  );
}