import { rest } from "msw";

const fetchBooksList = rest.get(`volumes`, async (req, res, ctx) => {
  return res(
    ctx.status(200),
    ctx.json({
      data: {
        totalItems: 1401,
        items: [
          {
            id: "S2FkAAAAMAAJ",
            volumeInfo: {
              title: "All These",
              authors: ["Paul Revere Frothingham"],
              categories: ["Biography"],
              imageLinks: {
                thumbnail:
                  "http://books.google.com/books/content?id=S2FkAAAAMAAJ&printsec=frontcover&img=1&zoom=1&source=gbs_api",
              },
            },
          },
        ],
      },
    })
  );
});

export const handlers = [fetchBooksList];
