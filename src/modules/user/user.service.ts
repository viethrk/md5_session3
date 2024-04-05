import { Injectable } from '@nestjs/common';
import { UserRepository } from './user.repository';
import { UserRequestDto } from 'src/core/dto/user/user.request.dto';

@Injectable()
export class UserService {
  constructor(private readonly userRepo: UserRepository) {}

  findUsers(userQuery: UserRequestDto) {
    return this.userRepo.findUsers(userQuery);
  }
}
