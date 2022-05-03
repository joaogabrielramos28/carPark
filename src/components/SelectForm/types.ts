export interface IStatesProps {
  id: number;
  nome: string;
  sigla: string;
  regiao: {
    id: number;
    sigla: string;
    nome: string;
  };
}

export interface ISelectFormProps {
  label: string;
  states: IStatesProps[];
}
