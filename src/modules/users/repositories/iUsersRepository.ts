import User from "../entities/User";
import iCreateUserDTO from "../interfaces/iCreateUserDTO";

export default interface IUsersRepository {
  findById(id: string): Promise<User | undefined>;
  findByEmail(email: string): Promise<User | undefined>;
  create(data: iCreateUserDTO): Promise<User>;
  save(user: User): Promise<User>;
}
