import {getEnvironmentVariable} from "./getEnvironmentVariable";

export const getEnvironmentVariables = <T extends string=string>(...names:string[]): T[] =>
  names.map(name => getEnvironmentVariable(name));
