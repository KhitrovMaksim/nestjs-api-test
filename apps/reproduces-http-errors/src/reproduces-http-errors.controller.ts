import {
  Controller,
  Get,
  HttpCode,
  HttpStatus,
  BadRequestException,
  NotFoundException,
  UnauthorizedException,
  ForbiddenException,
  NotAcceptableException,
  RequestTimeoutException,
  ConflictException,
  GoneException,
  HttpVersionNotSupportedException,
  PayloadTooLargeException,
  UnsupportedMediaTypeException,
  UnprocessableEntityException,
  InternalServerErrorException,
  NotImplementedException,
  ImATeapotException,
  MethodNotAllowedException,
  BadGatewayException,
  ServiceUnavailableException,
  GatewayTimeoutException,
  PreconditionFailedException,
} from '@nestjs/common';

@Controller('http-errors')
export class ReproducesHttpErrorsController {
  constructor(
  ) {}

  @Get('200')
  @HttpCode(HttpStatus.OK)
  ok(): string {
    return 'Ok';
  }

  @Get('400')
  badRequestException(): void {
    throw new BadRequestException();
  }

  @Get('401')
  unauthorizedException(): void {
    throw new UnauthorizedException();
  }

  @Get('403')
  forbiddenException(): void {
    throw new ForbiddenException();
  }

  @Get('404')
  notFound(): void {
    throw new NotFoundException();
  }

  @Get('405')
  async methodNotAllowedException(): Promise<string> {
    throw new MethodNotAllowedException();
  }

  @Get('406')
  notAcceptableException(): void {
    throw new NotAcceptableException();
  }

  @Get('408')
  requestTimeoutException(): void {
    throw new RequestTimeoutException();
  }

  @Get('409')
  conflictException(): void {
    throw new ConflictException();
  }

  @Get('410')
  goneException(): void {
    throw new GoneException();
  }

  @Get('412')
  async preconditionFailedException(): Promise<string> {
    throw new PreconditionFailedException();
  }

  @Get('413')
  payloadTooLargeException(): void {
    throw new PayloadTooLargeException();
  }

  @Get('415')
  unsupportedMediaTypeException(): void {
    throw new UnsupportedMediaTypeException();
  }

  @Get('418')
  async imATeapotException(): Promise<string> {
    throw new ImATeapotException();
  }

  @Get('422')
  unprocessableEntityException(): void {
    throw new UnprocessableEntityException();
  }

  @Get('500')
  async internalServerErrorException(): Promise<string> {
    throw new InternalServerErrorException();
  }

  @Get('501')
  async notImplementedException(): Promise<string> {
    throw new NotImplementedException();
  }

  @Get('502')
  async badGatewayException(): Promise<string> {
    throw new BadGatewayException();
  }

  @Get('503')
  async serviceUnavailableException(): Promise<string> {
    throw new ServiceUnavailableException();
  }

  @Get('504')
  async gatewayTimeoutException(): Promise<string> {
    throw new GatewayTimeoutException();
  }

  @Get('505')
  httpVersionNotSupportedException(): void {
    throw new HttpVersionNotSupportedException();
  }
}
