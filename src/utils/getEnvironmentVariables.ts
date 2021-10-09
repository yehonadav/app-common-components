import {getEnvironmentVariable} from "./getEnvironmentVariable";

export const getEnvironmentVariables = (...names:string[]):string[] =>
  names.map(name => getEnvironmentVariable(name));
