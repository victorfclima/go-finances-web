const formatDate = (value: string): string => {
  return new Date(value).toLocaleDateString('pt-BR');
};

export default formatDate;
