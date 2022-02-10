import { Type } from '@sinclair/typebox';

const BaseEventSchema = {
  componentId: Type.String(),
  method: Type.Object({
    name: Type.String(),
    parameters: Type.Optional(Type.Record(Type.String(), Type.Any())),
  }),
  wait: Type.Optional(
    Type.Object({
      type: Type.KeyOf(
        Type.Object({
          debounce: Type.String(),
          throttle: Type.String(),
          delay: Type.String(),
        })
      ),
      time: Type.Number(),
    })
  ),
  disabled: Type.Optional(Type.Boolean()),
};

export const EventHandlerSchema = Type.Object({
  type: Type.String(),
  ...BaseEventSchema,
});

export const EventCallBackHandlerSchema = Type.Object(BaseEventSchema);

export const FetchTraitPropertiesSchema = Type.Object({
  url: Type.String(), // {format:uri}?;
  method: Type.KeyOf(
    Type.Object({
      get: Type.String(),
      post: Type.String(),
      put: Type.String(),
      delete: Type.String(),
      patch: Type.String(),
    })
  ), // {pattern: /^(get|post|put|delete)$/i}
  lazy: Type.Boolean(),
  headers: Type.Record(Type.String(), Type.String()),
  body: Type.Record(Type.String(), Type.String()),
  onComplete: Type.Array(EventCallBackHandlerSchema),
  onError: Type.Array(EventCallBackHandlerSchema),
});