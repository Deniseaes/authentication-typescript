import {
  Table,
  Column,
  Model,
  DataType,
  HasOne,
  PrimaryKey,
  AutoIncrement,
  AllowNull,
  Default,
} from "sequelize-typescript";
// import Pay from "./pay.model";

export enum RoleType {
  ADMIN = "admin",
  USER = "user",
}

@Table({ tableName: "users", timestamps: false })
class Users extends Model {
  @PrimaryKey
  @AutoIncrement
  @Column(DataType.BIGINT)
  id!: number;

  @Column({
    type: DataType.STRING,
    allowNull: false,
  })
  name!: string;
  @Column({
    type: DataType.STRING,
    allowNull: false,
  })
  lastname!: string;

  @Column({
    type: DataType.STRING,
    allowNull: false,
  })
  email!: string;

  @Column({
    type: DataType.STRING,
    allowNull: false,
  })
  password!: string;

  @Column({
    type: DataType.ENUM,
    values: Object.values(RoleType),
    allowNull: true,
    defaultValue: RoleType.USER,
  })
  role!: RoleType | null;

  @AllowNull(false)
  @Default(false)
  @Column(DataType.BOOLEAN)
  verified_email!: boolean;

  @AllowNull(false)
  @Default(true)
  @Column(DataType.BOOLEAN)
  status!: boolean;
}

export default Users;
