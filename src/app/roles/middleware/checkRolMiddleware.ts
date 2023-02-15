import { ForbiddenException } from '@nestjs/common/exceptions';
import { FieldMiddleware, MiddlewareContext, NextFn } from '@nestjs/graphql';

export const checkRolMiddleware: FieldMiddleware = async (
  ctx: MiddlewareContext,
  next: NextFn,
) => {
  const { info } = ctx;
  const { extensions } = info.parentType.getFields()[info.fieldName];

  const userRole = 'admin';
  if (userRole === extensions.role) {
    throw new ForbiddenException(
      `User does not have sufficient permissions to access "${info.fieldName}" field.`,
    );
  }
  return next();
};
