import {IsVerified} from "./types";
import {
  AcceptTerms,
  Active,
  Avatar,
  AvatarHd,
  Blocked,
  Created,
  Email,
  FirstName,
  GoogleId,
  LastName,
  LastSeen,
  Newsletter,
  PasswordHash,
  PasswordReset,
  Phone,
  Role,
  Updated,
  VerificationToken,
  Verified
} from "./fields";

export type ResetToken = {
  token: string;
  expires: Date;
}

export type CreateAccountDTO = {
  // required
  email: Email;
  role: Role;

  username?:string;
  phone?: Phone;
  passwordHash?: PasswordHash;
  googleId?: GoogleId;
  verificationToken?: VerificationToken;
  verified?: Verified;
  resetToken?: ResetToken;
  passwordReset?: PasswordReset;
  firstName?: FirstName;
  lastName?: LastName;
  avatar?: Avatar;
  avatarHd?: AvatarHd;
  newsletter?: Newsletter;
  acceptTerms?: AcceptTerms;
  blocked?: Blocked | Date;
  active?: Active | Date;
  created?: Created;
  updated?: Updated;
  lastSeen?: LastSeen;
}

export type AccountDTO = {
  // internal login
  email: Email;
  phone: Phone;
  passwordHash?: PasswordHash;
  username?:string;

  // external logins
  googleId?: GoogleId;

  role: Role;
  verificationToken?: VerificationToken;
  verified?: Verified;
  resetToken?: ResetToken;
  passwordReset?: PasswordReset;

  firstName: FirstName;
  lastName: LastName;
  avatar: Avatar;
  avatarHd: AvatarHd;
  newsletter: Newsletter;

  acceptTerms?: AcceptTerms;

  blocked: Blocked;
  active: Active;
  created: Created;
  updated: Updated;
  lastSeen: LastSeen;

  // virtuals
  isVerified: IsVerified;
}