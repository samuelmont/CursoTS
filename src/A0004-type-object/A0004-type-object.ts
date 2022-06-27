const objectA: {
  readonly keyA: string; // só pode ser lida
  keyB: string;
  keyC?: string;
  [key: string]: unknown; // index signature
} = {
  keyA: 'Value A',
  keyB: 'Value B',
};

objectA.keyB = 'Other value';
objectA.keyC = 'New key';
objectA.keyD = 'New key';
