import { useState } from "react";
import { toast } from "react-toastify";
import { Button } from "../components/Button";
import { Card } from "../components/Card";
import { Input } from "../components/Input";
import { Title } from "../components/Title";

export function Home() {
  const [studentName, setStudentName] = useState("");
  const [students, setStudents] = useState([]);

  function handleAddStudent() {
    const newStudent = {
      name: studentName,
      time: new Date().toLocaleTimeString("pt-br", {
        hour: "2-digit",
        minute: "2-digit",
        second: "2-digit"
      })
    };

    setStudents(previousState => [...previousState, newStudent]);
    toast.success("Estudante adicionado!", { theme: "colored" });
    setStudentName("");
  }

  async function handleSubmitForm(event) {
    event.preventDefault();

    if (!studentName.trim()) {
      toast.error("Preencha o campo!", {
        theme: "colored"
      });

      return;
    }

    handleAddStudent();
  }

  return (
    <div className="flex items-center flex-col">
      <div className={`w-full mt-8 px-6 md:w-[520px] md:px-0`}>
        <form className={`w-full flex flex-col`} onSubmit={handleSubmitForm}>
          <Title>Lista de presença</Title>

          <div className={`w-full flex flex-col gap-2 md:flex-row md:gap-0`}>
            <label htmlFor="name" className="sr-only">
              Dígite o nome
            </label>

            <Input setStudentName={setStudentName} studentName={studentName} />
            <Button>Adicionar</Button>
          </div>
        </form>

        <div className={`w-full mt-8`}>
          {students.map(student => (
            <Card key={student.time} name={student.name} time={student.time} />
          ))}
        </div>
      </div>
    </div>
  );
}
