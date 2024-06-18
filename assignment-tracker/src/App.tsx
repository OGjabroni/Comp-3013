import { useState } from 'react';
import { Header } from "./components/Header";
import { Assignments } from "./components/Assignments";

export type TAssignment = {
  id: string;
  title: string;
  completed: boolean;
  task: string;
}

function App() {

 
  const [assignments, setAssignments] = useState<TAssignment[]>([]);

  return (
    <>
      <Header assignments = {assignments} setAssignments={ setAssignments} />
      <Assignments assignments={assignments} setAssignments={setAssignments} />
    </>
  );
}

export default App;