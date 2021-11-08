const app = require("../../app");
const request = require("supertest");

describe("API testing", () => {
  test("POST new event is added correctly", (done) => {
    const testEvent = {
      firstName: "test",
      lastName: "test",
      email: "testtest@test.tes",
      eventDate: "2021-10-10",
    };

    request(app)
      .post("/api/addEvent")
      .send(testEvent)
      .expect("Content-Type", /json/)
      .expect(201)
      .expect((res) => {
        expect(res.body.id).toBeDefined();
      })
      .end((err, res) => {
        if (err) return done(err);
        done();
      });
  });
  test("Validation should fail", (done) => {
    const testEvent = {
      firstName: "test",
      lastName: "test",
      email: "testttest.tes",
      eventDate: "2021-10-10",
    };

    request(app)
      .post("/api/addEvent")
      .send(testEvent)
      .expect("Content-Type", /json/)
      .expect(400)
      .expect((res) => {
        expect(res.text).toContain("Validation error");
      })
      .end((err, res) => {
        if (err) return done(err);
        done();
      });
  });
});
