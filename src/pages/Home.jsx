import { Button } from "../components/Button";
import { Input } from "../components/Input";
import { Title } from "../components/Title";

export function Home() {
  return (
    <div className="flex items-center flex-col">
      <form className={`w-full flex flex-col p-8 md:w-[520px]`}>
        <Title>Lista de presença</Title>

        <div className={`w-full flex flex-col gap-2 md:flex-row md:gap-0`}>
          <label htmlFor="name" className="sr-only">
            Dígite o nome
          </label>

          <Input />
          <Button>Adicionar</Button>
        </div>
      </form>
    </div>
  );
}
