import { Injectable } from '@nestjs/common';
import { readFileSync } from 'fs';
import { UserRequestDto } from 'src/core/dto/user/user.request.dto';

@Injectable()
export class UserRepository {
  private path_file = './src/data/users.json';

  findUsers(userQuery: UserRequestDto) {
    const dataStr = readFileSync(this.path_file, { encoding: 'utf-8' });
    let users = JSON.parse(dataStr);
    const { interests, page, limit } = userQuery;
    if (interests?.length > 0) {
      users = users.filter((user) => {
        return user.interests.some((interet) => interests.includes(interet));
      });
    }

    if (page > 0 && limit > 0) {
      const start = +page * limit - limit;
      users = users.splice(start, +limit);
    }
    return users;
  }
}
