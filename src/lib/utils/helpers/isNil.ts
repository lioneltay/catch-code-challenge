export const isNil = <T extends any>(
  val: T | null | undefined,
): val is null | undefined => val === undefined || val == null
