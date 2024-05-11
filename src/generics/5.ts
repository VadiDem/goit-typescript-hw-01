export enum UserRole {
  admin = 'admin',
  editor = 'editor',
  guest = 'guest',
}

type RolesDescription = Record<UserRole, string>;


const RoleDescription: RolesDescription= {
  [UserRole.admin]: 'Admin User',
  [UserRole.editor]: 'Editor User',
  [UserRole.guest]: 'Guest User',
};