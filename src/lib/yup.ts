import * as yup from 'yup';

yup.setLocale({
  mixed: {
    default: 'Campo é inválido',
    required: 'Campo obrigatório',
    oneOf: 'Campo deve ser um dos seguintes valores: ${values}',
    notOneOf: 'Campo não pode ser um dos seguintes valores: ${values}',
  },
  string: {
    length: 'Campo deve ter exatamente ${length} caracteres',
    min: 'Campo deve ter pelo menos ${min} caracteres',
    max: 'Campo deve ter no máximo ${max} caracteres',
    email: 'Campo e-mail tem o formato inválido',
    url: 'Campo deve ter um formato de URL válida',
    trim: 'Campo não deve conter espaços no início ou no fim.',
    lowercase: 'Campo deve estar em maiúsculo',
    uppercase: 'Campo deve estar em minúsculo',
  },
  number: {
    min: 'Campo deve ser no mínimo ${min}',
    max: 'Campo deve ser no máximo ${max}',
    lessThan: 'Campo deve ser menor que ${less}',
    moreThan: 'Campo deve ser maior que ${more}',
    positive: 'Campo deve ser um número posítivo',
    negative: 'Campo deve ser um número negativo',
    integer: 'Campo deve ser um número inteiro',
  },
  date: {
    min: 'Campo deve ser maior que a data ${min}',
    max: 'Campo deve ser menor que a data ${max}',
  },
  array: {
    min: 'Campo deve ter no mínimo ${min} itens',
    max: 'Campo deve ter no máximo ${max} itens',
  },
  boolean: {
    isValue: 'Campo deve ser verdadeiro ou falso',
  },
});

export default yup;
