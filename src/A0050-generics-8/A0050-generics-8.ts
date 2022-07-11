// Record
const objeto1: Record<string, string | number> = {
  nome: 'Samuel',
  sobrenome: 'Monteiro',
  idade: 30,
};
console.log(objeto1);

type PessoaProtocol = {
  nome?: string;
  sobrenome?: string;
  idade?: number;
};

// Required -- Transforma tudo em required
type PessoaRequired = Required<PessoaProtocol>;
// Partial -- Transforma tudo em opcional
type PessoaPartial = Partial<PessoaRequired>;
// Readonly -- Tranforma tudo em readonly
type PessoaReadonly = Readonly<PessoaRequired>;
// Pick -- seleciona o que tu passar no segundo parâmetro
type PessoaPick = Pick<PessoaRequired, 'nome' | 'sobrenome'>;

const objeto2: PessoaRequired = {
  nome: 'Samuel',
  sobrenome: 'Monteiro',
  idade: 30,
};
console.log(objeto2);

// Extract e Exclude
type ABC = 'A' | 'B' | 'C';
type CDE = 'C' | 'D' | 'E';
// Mostra os tipos que estão no primeiro campo, que não estão no segundo
type TipoExclude = Exclude<ABC, CDE>;
// Mostra os tipos que estão no primeiro campo, que estão tambem no segundo
type TipoExtract = Extract<ABC, CDE>;

//
type AccountMongo = {
  _id: string;
  nome: string;
  idade: number;
};

//Pega de Account mongo
type AccountApi = Pick<AccountMongo, Exclude<keyof AccountMongo, '_id'>> & { id: string };

const accountMongo: AccountMongo = {
  _id: 'd4uththsdgfyao85er03g',
  nome: 'Samuel',
  idade: 18,
};

function mapAccount(accountMongo: AccountMongo): AccountApi {
  const { _id, ...accountData } = accountMongo;
  return { ...accountData, id: _id };
}

const accountApi = mapAccount(accountMongo);
console.log('API:');
console.log(accountApi);

//Module mode
export default 1;
