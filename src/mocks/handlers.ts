import { rest } from "msw";

const mockExample = rest.get(`/example`, async (req, res, ctx) => {
  return res(
    ctx.status(200),
    ctx.json({
      result: "value",
    })
  );
});

export const handlers = [mockExample];
