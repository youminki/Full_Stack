declare module "dotenv" {
  export function config(
    options?: any,
  ): { parsed?: Record<string, string> } | void;
  const _default: { config: typeof config };
  export default _default;
}
