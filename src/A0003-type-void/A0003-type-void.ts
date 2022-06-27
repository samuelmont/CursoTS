function withoutReturn(...args: string[]): void {
  console.log(args.join(' '));
}

const person = {
  name: 'Samuel',
  lastName: 'Monteiro',

  showName(): void {
    console.log(`${this.name} ${this.lastName}`);
  },
};

withoutReturn('Samuel', 'Tamires');
person.showName();

export { person };
