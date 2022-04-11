import { Button } from "../components/Button";
import { Card } from "../components/Card";
import { Input } from "../components/Input";
import { Title } from "../components/Title";

export function Home() {
  return (
    <div className="flex items-center flex-col">
      <div className={`w-full mt-8 px-6 md:w-[520px] md:px-0`}>
        <form className={`w-full flex flex-col`}>
          <Title>Lista de presença</Title>

          <div className={`w-full flex flex-col gap-2 md:flex-row md:gap-0`}>
            <label htmlFor="name" className="sr-only">
              Dígite o nome
            </label>

            <Input />
            <Button>Adicionar</Button>
          </div>
        </form>

        <div className={`w-full mt-8`}>
          <Card name="Ronald Tomaz" time="10:10:33" />
          <Card name="Tomaz" time="12:10:22" />
        </div>
      </div>
    </div>
  );
}
