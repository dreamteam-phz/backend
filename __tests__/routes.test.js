const app = require("../index"); // Link to the server file
const supertest = require("supertest");

describe("Surveys", () => {
  describe("get survey route", () => {
    describe("getting surveys", () => {
      it("Verify that we connect successfully to the DB", async () => {
        await supertest(app).get("/api/surveys").expect(200);
      });
    });
    describe("Check if a survey doesn't exists in the DB", () => {
      it("should return error:500", async () => {
        const surveyId = "123456";
        await supertest(app).get(`/api/surveys/${surveyId}`).expect(500);
      });
    });
    describe("Check if an added survey exists in the DB", () => {
      it("should return OK:200", async () => {
        const surveyId = "6271070e8a4158cc57c9124b";
        await supertest(app).get(`/api/surveys/${surveyId}`).expect(200);
      });
    });
  });
});
