export class accountRoles {
  public static readonly admin = 'admin';
  public static readonly user = 'user';
}

export const accountRoleList = Object.values(accountRoles);

export const accountRoleDbScheme = { type: String, required: true, enum: accountRoleList };
