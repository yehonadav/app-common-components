export const getEnvironmentVariable = (name:string):string => {
  if (!process.env[name])
    throw `missing required environment variable process.env.${name}`;

  return process.env[name]!;
}

export const getEnv = (key: string, required: boolean = false): string =>
    required ? getEnvironmentVariable(key) : process.env[key]!;
