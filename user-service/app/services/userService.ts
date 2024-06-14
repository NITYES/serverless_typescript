import { APIGatewayProxyEventV2 } from 'aws-lambda';
import { SucessResponse, ErrorResponse } from '../utility/response';
import { autoInjectable } from 'tsyringe';
import { UserRepository } from '../repository/userRepository';
import { plainToClass } from 'class-transformer';
import { Signup } from '../model/dto/userdto';
import { AppValidator } from '../utility/error';
import { getSalt, hashedPassword } from '../utility/password';

@autoInjectable()
export class UserService {
  repository: UserRepository;
  constructor(repository: UserRepository) {
    this.repository = repository;
  }

  // User Creation, Validation & Login
  async CreateUser(event: APIGatewayProxyEventV2) {
    try {
      const signupInput = plainToClass(Signup, JSON.parse(event.body));
      const error = await AppValidator(signupInput);
      if (error) return ErrorResponse(400, error);
      const salt = await getSalt();
      const hashpass = await hashedPassword(signupInput.password, salt);
      const user = await this.repository.createUser({
        email: signupInput.email,
        password: hashpass,
        phone: signupInput.phone,
        user_type: 'BUYER',
        salt,
      });

      return SucessResponse({ user: event.body }, 'User created successfully');
    } catch (error) {
      return ErrorResponse(500, error);
    }
  }

  async UserLogin(event: APIGatewayProxyEventV2) {
    return SucessResponse({ message: 'response from user login' });
  }

  async GetVerificationToken(event: APIGatewayProxyEventV2) {
    return SucessResponse({ message: 'response from Verify User' });
  }

  async VerifyUser(event: APIGatewayProxyEventV2) {
    return SucessResponse({ message: 'response from Verify User' });
  }

  // User profile
  async CreateProfile(event: APIGatewayProxyEventV2) {
    return SucessResponse({ message: 'response from Create User Profile' });
  }

  async GetProfile(event: APIGatewayProxyEventV2) {
    return SucessResponse({ message: 'response from Get User Profile' });
  }
  async EditProfile(event: APIGatewayProxyEventV2) {
    return SucessResponse({ message: 'response from Edit User Profile' });
  }

  // Cart Section
  async CreateCart(event: APIGatewayProxyEventV2) {
    return SucessResponse({ message: 'response from Create Cart' });
  }

  async GetCart(event: APIGatewayProxyEventV2) {
    return SucessResponse({ message: 'response from Get Cart' });
  }

  async UpdateCart(event: APIGatewayProxyEventV2) {
    return SucessResponse({ message: 'response from Update Cart' });
  }

  // Payment Section
  async CreatePaymentMethod(event: APIGatewayProxyEventV2) {
    return SucessResponse({ message: 'response from Create Payment Method' });
  }

  async GetPaymentMethod(event: APIGatewayProxyEventV2) {
    return SucessResponse({ message: 'response from Get Payment Method' });
  }

  async UpdatePaymentMethod(event: APIGatewayProxyEventV2) {
    return SucessResponse({ message: 'response from Update Payment Method' });
  }
}
