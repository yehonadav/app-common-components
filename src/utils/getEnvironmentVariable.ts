export const getEnvironmentVariable = <T extends string=string>(name:string): T => {
  if (!process.env[name])
    throw `missing required environment variable process.env.${name}`;

  return process.env[name]! as T;
}

export const getEnv = <T extends string=string>(key: string, required: boolean = false): T =>
    required ? getEnvironmentVariable(key) : process.env[key]! as T;
