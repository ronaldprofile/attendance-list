import { FormEvent, useEffect, useState } from "react";
import { toast } from "react-toastify";
import { Button } from "../components/Button";
import { Card } from "../components/Card";
import { Input } from "../components/Input";
import { Title } from "../components/Title";

type Student = {
  name: string;
  time: string;
};

type UserGithub = {
  name: string;
  avatar_url: string;
};

export function Home() {
  const [studentName, setStudentName] = useState("");
  const [students, setStudents] = useState<Student[]>([]);
  const [userGithub, setUserGithub] = useState<UserGithub | null>(null);
  const usernameGithub = "ronaldprofile";

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

  async function handleSubmitForm(event: FormEvent) {
    event.preventDefault();

    if (!studentName.trim()) {
      toast.error("Preencha o campo!", {
        theme: "colored"
      });

      return;
    }

    handleAddStudent();
  }

  useEffect(() => {
    async function fetchUserGithub() {
      const url = `https://api.github.com/users/${usernameGithub}`;

      try {
        const response = await fetch(url);
        const data: UserGithub = await response.json();

        setUserGithub({
          name: data.name,
          avatar_url: data.avatar_url
        });
      } catch (error) {
        console.log(error);
      }
    }

    fetchUserGithub();
  }, []);

  return (
    <div className="flex items-center flex-col">
      <div className={`w-full mt-8 px-6 md:w-[650px] md:px-0`}>
        <header className={`mb-8 flex items-center justify-between`}>
          <Title>Lista de presença</Title>

          <div className={`flex items-center gap-2`}>
            <strong>{userGithub?.name}</strong>

            <div className={`p-[2px] border-2 border-purple-500 rounded-full`}>
              <img
                src={userGithub?.avatar_url}
                alt={`Foto do ${userGithub?.name}`}
                className={`w-16 h-16 rounded-full cursor-pointer`}
              />
            </div>
          </div>
        </header>

        <form className={`w-full flex flex-col`} onSubmit={handleSubmitForm}>
          <div className={`w-full flex flex-col gap-2 md:flex-row md:gap-0`}>
            <label htmlFor="name" className="sr-only">
              Dígite o nome
            </label>

            <Input
              name="name"
              id="name"
              placeholder="Digite o nome"
              value={studentName}
              onChange={e => setStudentName(e.target.value)}
              className={`bg-gray-800 focus:border-purple-500`}
            />

            <Button
              type="submit"
              className={`bg-purple-600 hover:bg-purple-700 text-white`}
            >
              Adicionar
            </Button>
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
