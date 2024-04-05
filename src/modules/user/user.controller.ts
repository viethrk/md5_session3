import { Controller, Get, Query } from '@nestjs/common';
import { UserService } from './user.service';
import { UserRequestDto } from 'src/core/dto/user/user.request.dto';

@Controller('/api/v1/users')
export class UserController {
  constructor(private readonly userService: UserService) {}

  @Get()
  findUsers(@Query() userQuery: UserRequestDto) {
    return this.userService.findUsers(userQuery);
  }
}
