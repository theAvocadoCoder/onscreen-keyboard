type Keys = KeyProps[];
export interface KeyProps {
  char?: string;
  name: string;
  isMod: boolean;
  isIcon: boolean;
}

const first_row: Keys = [
  {
    char: "q",
    name: "q",
    isMod: false,
    isIcon: false
  },
  {
    char: "w",
    name: "w",
    isMod: false,
    isIcon: false
  },
  {
    char: "e",
    name: "e",
    isMod: false,
    isIcon: false
  },
  {
    char: "r",
    name: "r",
    isMod: false,
    isIcon: false
  },
  {
    char: "t",
    name: "t",
    isMod: false,
    isIcon: false
  },
  {
    char: "y",
    name: "y",
    isMod: false,
    isIcon: false
  },
  {
    char: "u",
    name: "u",
    isMod: false,
    isIcon: false
  },
  {
    char: "i",
    name: "i",
    isMod: false,
    isIcon: false
  },
  {
    char: "o",
    name: "o",
    isMod: false,
    isIcon: false
  },
  {
    char: "p",
    name: "p",
    isMod: false,
    isIcon: false
  }
];

const second_row: Keys = [
  {
    char: "a",
    name: "a",
    isMod: false,
    isIcon: false
  },
  {
    char: "s",
    name: "s",
    isMod: false,
    isIcon: false
  },
  {
    char: "d",
    name: "d",
    isMod: false,
    isIcon: false
  },
  {
    char: "f",
    name: "f",
    isMod: false,
    isIcon: false
  },
  {
    char: "g",
    name: "g",
    isMod: false,
    isIcon: false
  },
  {
    char: "h",
    name: "h",
    isMod: false,
    isIcon: false
  },
  {
    char: "j",
    name: "j",
    isMod: false,
    isIcon: false
  },
  {
    char: "k",
    name: "k",
    isMod: false,
    isIcon: false
  },
  {
    char: "l",
    name: "l",
    isMod: false,
    isIcon: false
  },
  {
    char: ";",
    name: ";",
    isMod: false,
    isIcon: false
  },
  {
    char: "'",
    name: "'",
    isMod: false,
    isIcon: false
  }
];

const third_row: Keys = [
  {
    name: "A",
    isMod: true,
    isIcon: true
  },
  {
    char: "z",
    name: "z",
    isMod: false,
    isIcon: false
  },
  {
    char: "x",
    name: "x",
    isMod: false,
    isIcon: false
  },
  {
    char: "c",
    name: "c",
    isMod: false,
    isIcon: false
  },
  {
    char: "v",
    name: "v",
    isMod: false,
    isIcon: false
  },
  {
    char: "b",
    name: "b",
    isMod: false,
    isIcon: false
  },
  {
    char: "n",
    name: "n",
    isMod: false,
    isIcon: false
  },
  {
    char: "m",
    name: "m",
    isMod: false,
    isIcon: false
  },
  {
    char: ",",
    name: ",",
    isMod: false,
    isIcon: false
  },
  {
    char: ".",
    name: ".",
    isMod: false,
    isIcon: false
  }
];

const num_row: Keys = [
  {
    char: "tab",
    name: "tab",
    isMod: true,
    isIcon: false
  },
  {
    char: "1",
    name: "1",
    isMod: false,
    isIcon: false
  },
  {
    char: "2",
    name: "2",
    isMod: false,
    isIcon: false
  },
  {
    char: "3",
    name: "3",
    isMod: false,
    isIcon: false
  },
  {
    char: "4",
    name: "4",
    isMod: false,
    isIcon: false
  },
  {
    char: "5",
    name: "5",
    isMod: false,
    isIcon: false
  },
  {
    char: "6",
    name: "6",
    isMod: false,
    isIcon: false
  },
  {
    char: "7",
    name: "7",
    isMod: false,
    isIcon: false
  },
  {
    char: "8",
    name: "8",
    isMod: false,
    isIcon: false
  },
  {
    char: "9",
    name: "9",
    isMod: false,
    isIcon: false
  },
  {
    char: "0",
    name: "0",
    isMod: false,
    isIcon: false
  }
];

export {
  first_row,
  second_row,
  third_row,
  num_row
};
